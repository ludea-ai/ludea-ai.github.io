#!/usr/bin/env node
/*
 * Builds the ludea.ai pages in both languages, one source per page (src/*.html, list in PAGES):
 *   index.html     English (default)  → https://ludea.ai/
 *   fr/index.html  French             → https://ludea.ai/fr/
 * Bilingual text in the source is written [[English||Français]] (may span lines).
 *   node build.cjs
 */
const fs = require("node:fs"), path = require("node:path");
const dir = __dirname;
// Pages: src/<file> → <slug> (EN) and fr/<slug> (FR). {{H}} = path to the site root, {{P}} = the
// page's slug (for the EN/FR switch and hreflang), {{HOME}} = this language's home.
// {{> name}} includes src/partials/name.html (before the language split).
const PAGES = [
  { file: "index.html", slug: "" },
  { file: "contact.html", slug: "contact/" },
  { file: "legal.html", slug: "legal/" },
  { file: "privacy.html", slug: "privacy/" },
  { gen: "design.cjs", slug: "design/" }, // generated source (icon grid, swatches from the brand art)
];
const LANGS = ["en", "fr"];
for (const P of PAGES) {
  let src = P.gen ? require("./" + P.gen)() : fs.readFileSync(path.join(dir, "src", P.file), "utf8");
  for (let i = 0; i < 5 && /\{\{>/.test(src); i++) // partials may include partials
    src = src.replace(/\{\{>\s*([\w-]+)\s*\}\}/g, (_, n) => fs.readFileSync(path.join(dir, "src/partials", n + ".html"), "utf8").trimEnd());
  for (const lang of LANGS) {
    const out = (lang === "fr" ? "fr/" : "") + P.slug + "index.html";
    const H = "../".repeat(out.split("/").length - 1);
    let html = src.replace(/<!--\s*SOURCE[\s\S]*?-->\n?/, `<!-- Generated from ${P.gen || "src/" + P.file} by build.cjs — do not edit. -->\n`);
    html = html.replace(/\[\[([\s\S]*?)\|\|([\s\S]*?)\]\]/g, (_, en, fr) => (lang === "en" ? en : fr));
    if (/\[\[|\]\]|\|\|/.test(html.replace(/<pre>[\s\S]*?<\/pre>/g, ""))) throw new Error(`unbalanced [[…||…]] marker left in ${out}`);
    html = html.replace(/\{\{LANG\}\}/g, lang).replace(/\{\{H\}\}/g, H).replace(/\{\{P\}\}/g, P.slug)
      .replace(/\{\{HOME\}\}/g, H + (lang === "fr" ? "fr/" : ""))
      .replace(/\{\{ON_EN\}\}/g, lang === "en" ? "on" : "").replace(/\{\{ON_FR\}\}/g, lang === "fr" ? "on" : "");
    // the footer links show the page you are on
    if (P.slug) html = html.replace(/<p class="legal-links">[\s\S]*?<\/p>/, (p) => p.replace(`<a href="${H + (lang === "fr" ? "fr/" : "") + P.slug}">`, (a) => a.replace(">", ' aria-current="page">')));
    if (/\{\{[>\w]/.test(html)) throw new Error(`unknown {{placeholder}} left in ${out}`);
    const f = path.join(dir, out);
    fs.mkdirSync(path.dirname(f), { recursive: true });
    fs.writeFileSync(f, html);
    console.log("✓", path.relative(process.cwd(), f));
  }
}
