/*
 * The SOURCE of the Ludea design system page (/design/ and /fr/design/), both languages
 * ([[English||Français]]), like src/*.html — generated here because the icon grid and the colour
 * swatches come from tools/art/brand.cjs. build.cjs builds it with the other pages (same header,
 * footer, partials and placeholders).
 */
const B = require("./tools/art/brand.cjs");

const SW = [
  ["paper", "#fffaf3", "[[Page background||Fond de page]]"], ["sand", "#f6efe5", "[[Alternate sections||Sections alternées]]"], ["surface", "#ffffff", "[[Cards||Cartes]]"],
  ["ink", "#1d1b3a", "[[Text, dark bands, outlines||Texte, bandeaux sombres, contours]]"], ["muted", "#5d5b7a", "[[Secondary text||Texte secondaire]]"], ["coral", "#ff5b4f", "[[Brand, primary actions||Marque, actions principales]]"],
  ["tangerine", "#ff8a3d", "[[Brand gradient start||Début du dégradé de marque]]"], ["sun", "#ffbe2e", "[[Spark, highlights||Étincelle, mises en avant]]"], ["mint", "#19c39a", "[[Success, nature||Réussite, nature]]"],
  ["sky", "#3c8dff", "[[Info, tech||Info, technique]]"], ["lilac", "#8a6cff", "[[Magic, help||Magie, aide]]"], ["rose", "#ff7aa8", "[[Care, warmth||Soin, chaleur]]"],
];
const icons = B.ICON_NAMES.map((n) => `<figure><img src="{{H}}brand/icons/${n}.webp" alt=""><figcaption>${n}</figcaption></figure>`).join("");
const swatches = SW.map((s) => `<div><i style="background:${s[1]}"></i><p><b>--${s[0]}</b>${s[1]} · ${s[2]}</p></div>`).join("");

module.exports = () => `<!doctype html>
<!-- SOURCE: design.cjs -->
<html lang="{{LANG}}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>[[Ludea design system||Design system de Ludea]]</title>
<meta name="description" content="[[Logo, colours, type, components, icons and Lu, the guide, for Ludea.||Logo, couleurs, typographie, composants, icônes et Lu, le guide, pour Ludea.]]">
<link rel="alternate" hreflang="en" href="https://ludea.ai/{{P}}">
<link rel="alternate" hreflang="fr" href="https://ludea.ai/fr/{{P}}">
<link rel="icon" href="{{H}}brand/favicon.png">
<link rel="stylesheet" href="{{H}}landing.css">
<style>
.ds section { padding: 60px 0; border-top: 1px solid var(--line); }
.ds section h2 { font-size: 34px; margin-bottom: 8px; }
.ds .note { color: var(--muted); max-width: 720px; margin-bottom: 26px; }
.row { display: flex; flex-wrap: wrap; gap: 18px; align-items: center; }
.tile { background: var(--surface); border: 1px solid var(--line); border-radius: var(--r); padding: 26px; box-shadow: var(--shadow); }
.tile.dark { background: var(--night); }
.lock { display: flex; align-items: center; gap: 12px; font-family: var(--display); font-weight: 800; letter-spacing: -.03em; color: var(--ink); }
.lock img { width: 64px; } .lock span { font-size: 56px; line-height: 1; }
.tile.dark .lock { color: #fff; }
.apps img { width: 96px; border-radius: 22px; box-shadow: var(--shadow); }
.sw { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 14px; }
.sw div { background: var(--surface); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; box-shadow: var(--shadow); }
.sw i { display: block; height: 70px; border-bottom: 1px solid var(--line); }
.sw p { padding: 8px 12px 10px; font-size: 13px; color: var(--muted); } .sw b { display: block; color: var(--ink); font-size: 14px; }
.type .d1 { font-family: var(--display); font-weight: 800; font-size: clamp(40px, 7vw, 64px); letter-spacing: -.03em; line-height: 1; }
.type .d2 { font-family: var(--display); font-weight: 800; font-size: 40px; letter-spacing: -.02em; line-height: 1.1; }
.type .d3 { font-family: var(--display); font-weight: 800; font-size: 22px; }
.type p { color: var(--muted); }
.icons { display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 12px; }
.icons figure { margin: 0; background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 12px 8px 8px; text-align: center; }
.icons img { width: 56px; height: 56px; margin: 0 auto 6px; }
.icons figcaption { font: 12px var(--mono); color: var(--muted); }
.lus { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.lus figure { margin: 0; background: var(--surface); border: 1px solid var(--line); border-radius: var(--r); padding: 18px; text-align: center; box-shadow: var(--shadow); }
.lus img { width: 200px; margin: 0 auto; } .lus figcaption { color: var(--muted); font-size: 14px; margin-top: 6px; }
.rules { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; } .rules ul { margin: 0; padding-left: 18px; color: var(--muted); display: grid; gap: 6px; }
.rules h3 { margin-bottom: 10px; }
@media (max-width: 760px) { .lus, .rules { grid-template-columns: 1fr; } .lock span { font-size: 40px; } .lock img { width: 46px; } }
.ds-toc { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
.ds-toc a { padding: 6px 14px; border-radius: 999px; background: var(--surface); box-shadow: inset 0 0 0 1.5px var(--line2); color: var(--ink); font-weight: 600; font-size: 14px; text-decoration: none; }
.ds-toc a:hover { box-shadow: inset 0 0 0 1.5px var(--ink); }
</style>
</head>
<body class="ds">
{{> site-nav}}

<header class="hero" style="padding:70px 0 50px"><div class="wrap" style="display:block">
  <div class="eyebrow"><img src="{{H}}brand/icons/palette.webp" alt="">Design system</div>
  <h1>[[Ludea, <em>by the book.</em>||Ludea, <em>dans les règles.</em>]]</h1>
  <p class="lead">[[What the Ludea brand is made of — for the landing page, the docs and anything that speaks for the engine. The games keep their own worlds; this is the look of the engine that makes them.||Ce qui fait la marque Ludea — pour la page d'accueil, la documentation et tout ce qui parle au nom du moteur. Les jeux gardent leurs propres univers ; ceci est l'allure du moteur qui les fabrique.]] [[Art:||Art :]] <code>tools/art/brand.cjs</code> · [[tokens:||variables :]] <code>landing.css</code>.</p>
  <div class="ds-toc"><a href="#logo">Logo</a><a href="#colour">[[Colour||Couleurs]]</a><a href="#type">[[Type||Typographie]]</a><a href="#components">[[Components||Composants]]</a><a href="#icons">[[Icons||Icônes]]</a><a href="#lu">Lu</a></div>
</div></header>

<section id="logo"><div class="wrap">
  <h2>Logo</h2>
  <p class="note">[[The mark is a speech bubble (you describe a game) holding a play button (it becomes playable) with a spark (the idea). The wordmark is <b>ludea</b>, lower-case, Bricolage Grotesque 800. Keep a clear space of half the mark around it; never recolour, stretch, outline or add effects.||Le symbole est une bulle de dialogue (vous décrivez un jeu) qui contient un bouton lecture (il devient jouable) et une étincelle (l'idée). Le nom s'écrit <b>ludea</b>, en minuscules, Bricolage Grotesque 800. Gardez autour un espace libre d'une demi-largeur du symbole ; ne jamais le recolorer, l'étirer, le détourer ni lui ajouter d'effet.]]</p>
  <div class="row">
    <div class="tile"><div class="lock"><img src="{{H}}brand/mark.webp" alt=""><span>ludea</span></div></div>
    <div class="tile dark"><div class="lock"><img src="{{H}}brand/mark.webp" alt=""><span>ludea</span></div></div>
    <div class="tile apps row"><img src="{{H}}brand/icon-512.png" alt="[[App icon||Icône d'application]]"><img src="{{H}}brand/apple-touch-icon.png" alt="" style="width:64px;border-radius:15px"><img src="{{H}}brand/favicon.png" alt="" style="width:32px;border-radius:0;box-shadow:none"></div>
  </div>
</div></section>

<section id="colour"><div class="wrap">
  <h2>[[Colour||Couleurs]]</h2>
  <p class="note">[[Warm paper, deep ink, and a tangerine-to-coral brand gradient. Accents are used sparingly, one per element. Dark ink bands give rhythm (code, skills). Text is ink or muted on light, white or #c9c8e6 on ink.||Papier chaud, encre profonde et un dégradé de marque mandarine → corail. Les couleurs d'accent sont utilisées avec parcimonie, une par élément. Des bandeaux sombres donnent le rythme (code, skills). Le texte est encre ou atténué sur fond clair, blanc ou #c9c8e6 sur fond encre.]]</p>
  <div class="sw">${swatches}<div><i style="background:var(--brand)"></i><p><b>--brand</b>[[tangerine → coral · logo, primary buttons, emphasis||mandarine → corail · logo, boutons principaux, mise en valeur]]</p></div></div>
</div></section>

<section id="type" class="type"><div class="wrap">
  <h2>[[Type||Typographie]]</h2>
  <p class="note">[[Bricolage Grotesque (600–800) for display and headings, with tight tracking; DM Sans (400–700) for text; the system monospace for code and skill names. Both fonts are self-hosted (SIL Open Font License).||Bricolage Grotesque (600–800) pour les grands titres et les intertitres, avec un approche serré ; DM Sans (400–700) pour le texte ; la police à chasse fixe du système pour le code et les noms de skills. Les deux polices sont hébergées par le site (licence SIL Open Font License).]]</p>
  <div class="tile">
    <div class="d1">[[You describe it.||Vous le décrivez.]]</div>
    <div class="d2" style="margin-top:18px">[[Four games, one engine||Quatre jeux, un moteur]]</div>
    <div class="d3" style="margin-top:14px">[[Start from the template||Partez du modèle]]</div>
    <p style="margin-top:12px;font-size:19px">[[Lead — DM Sans 19/1.6, muted. Body — DM Sans 17/1.6.||Chapeau — DM Sans 19/1,6, atténué. Texte — DM Sans 17/1,6.]]</p>
    <p style="margin-top:6px"><code>new-game · feedback-session</code> — [[monospace, coral.||chasse fixe, corail.]]</p>
  </div>
</div></section>

<section id="components"><div class="wrap">
  <h2>[[Components||Composants]]</h2>
  <p class="note">[[Rounded, tactile, friendly: pill buttons with a pressed edge, white cards with a soft shadow, 22 px radius (12 small, 30 large). Buttons are 44–50 px high, with icons that fill them.||Arrondi, tactile, accueillant : boutons en pilule avec un rebord « enfoncé », cartes blanches à ombre douce, arrondi de 22 px (12 petit, 30 grand). Les boutons font 44 à 50 px de haut, avec des icônes qui les remplissent.]]</p>
  <div class="tile">
    <div class="row"><a class="btn" href="#components"><img src="{{H}}brand/icons/play.webp" alt="">[[Primary||Principal]]</a><a class="btn ghost" href="#components"><img src="{{H}}brand/icons/help.webp" alt="">[[Secondary||Secondaire]]</a><a class="btn small" href="#components"><img src="{{H}}brand/icons/play.webp" alt="">[[Small||Petit]]</a><a class="btn small ghost" href="#components">[[Small ghost||Petit contour]]</a></div>
    <div class="row" style="margin-top:20px"><span class="tag" style="background:var(--sun);color:var(--ink)">[[Ages 6–7||6–7 ans]]</span><span class="tag">[[French||Français]]</span><span class="tag">Arcade</span><span class="lang"><a class="on" href="#components">EN</a><a href="#components">FR</a></span></div>
    <div class="chat" style="margin-top:22px">
      <div class="bubbles"><div class="b u">[[Add a shop where you can buy decorations||Ajoute une boutique pour acheter des décorations]]</div><div class="b a">[[It's live!<small>Supporting detail, muted.</small>||C'est en ligne !<small>Détail complémentaire, atténué.</small>]]</div></div>
      <div class="step"><img class="ico" src="{{H}}brand/icons/seed.webp" alt=""><h3>[[Step card||Carte d'étape]]</h3><p>[[Numbered with a brand badge.||Numérotée avec une pastille de marque.]]</p><div class="say" data-who="[[You: ||Vous : ]]">/new-game</div></div>
    </div>
  </div>
</div></section>

<section id="icons"><div class="wrap">
  <h2>[[Icons||Icônes]]</h2>
  <p class="note">[[Illustrated, never emoji: thick ink outline, two-tone gradient, glossy highlight — the same family as the games' UI, in the Ludea palette. Drawn in a 128 box, rendered at 256 px (WebP).||Illustrées, jamais d'emoji : contour épais couleur encre, dégradé bicolore, reflet brillant — la même famille que l'interface des jeux, dans la palette Ludea. Dessinées dans un carré de 128, exportées en 256 px (WebP).]]</p>
  <div class="icons">${icons}</div>
</div></section>

<section id="lu"><div class="wrap">
  <h2>[[Lu, the guide||Lu, le guide]]</h2>
  <p class="note">[[Lu is the logo with a face: the bubble that listens to your idea. Lu explains things on the site — at most once per screen, never inside the games. Drawn by the same function family as the mark (<code>guide()</code> in brand.cjs), so they never drift apart.||Lu, c'est le logo avec un visage : la bulle qui écoute votre idée. Lu explique les choses sur le site — une fois par écran au plus, jamais dans les jeux. Dessiné par la même famille de fonctions que le symbole (<code>guide()</code> dans brand.cjs), pour que les deux ne divergent jamais.]]</p>
  <div class="lus">
    <figure><img src="{{H}}brand/guide-hello.webp" alt=""><figcaption><b>hello</b> — [[welcomes (hero)||accueille (haut de page)]]</figcaption></figure>
    <figure><img src="{{H}}brand/guide-point.webp" alt=""><figcaption><b>point</b> — [[shows something (install)||montre quelque chose (installation)]]</figcaption></figure>
    <figure><img src="{{H}}brand/guide-idea.webp" alt=""><figcaption><b>idea</b> — [[invites you to create (footer)||invite à créer (pied de page)]]</figcaption></figure>
  </div>
</div></section>

<section><div class="wrap rules">
  <div class="tile"><h3>[[Voice||Ton]]</h3><ul>[[<li>Plain words, no jargon: “describe”, “play”, “say what you think”.</li><li>Short sentences, active voice, warm but not childish.</li><li>English by default, French as a full translation — never mixed.</li><li>Show, don't claim: real screenshots, honest limits.</li>||<li>Des mots simples, sans jargon : « décrire », « jouer », « dire ce qu'on en pense ».</li><li>Phrases courtes, voix active, chaleureux sans être enfantin.</li><li>Anglais par défaut, le français en traduction complète — jamais de mélange.</li><li>Montrer plutôt qu'affirmer : de vraies captures, des limites dites honnêtement.</li>]]</ul></div>
  <div class="tile"><h3>[[Don't||À éviter]]</h3><ul>[[<li>No emoji anywhere — use the icon set.</li><li>Don't use a game's art (Nebula, Dr Smile…) as Ludea branding.</li><li>Don't put Lu inside a game, or more than once per screen.</li><li>Don't recolour the mark or the gradient.</li>||<li>Aucun emoji, nulle part — utilisez le jeu d'icônes.</li><li>Ne pas utiliser l'art d'un jeu (Nebula, Dr Smile…) comme image de Ludea.</li><li>Ne pas mettre Lu dans un jeu, ni plus d'une fois par écran.</li><li>Ne pas recolorer le symbole ni le dégradé.</li>]]</ul></div>
</div></section>
{{> site-footer}}
{{> nav-script}}
</body></html>
`;
