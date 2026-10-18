# CLAUDE.md — ludea-ai.github.io (the Ludea brand site at ludea.ai)

> Shared memory across sessions. If you pick up this project: read this, then continue.

## 1. What this is
The public site of **Ludea** at https://ludea.ai/ — 100% static, no framework. It presents the
2D game engine (principle, how to use it, game modes, features, skills, install as an app) and
the **catalogue of the games made with it**. English by default (`/`), French at `/fr/`, the
design system at `/design/`.

**Brand: « Ludea »** (ludus + idea; owner's choice, Oct 2026 — the owner's marel.ai is for another
project, never use it). The owner bought **ludea.ai** and wants the brand to **keep a games
atmosphere** (playful, game-like, not corporate). Never use a game's art (Nebula…) as Ludea branding.

## 2. Files
- `src/index.html` — THE source of the landing, both languages: bilingual text written
  `[[English||Français]]`, `{{H}}` = path to the site root. `node build.cjs` writes `index.html`
  (EN) + `fr/index.html` (FR) and runs `design.cjs` → `design/index.html`. **Never edit the
  generated pages by hand.**
- Other pages, same system: `src/contact.html`, `src/legal.html` (legal notice), `src/privacy.html`
  (privacy policy) → `/contact/`, `/legal/`, `/privacy/` (+ `/fr/…`); shared bits in `src/partials/`
  (`{{> name}}`; `doc-nav`, `doc-footer`, `legal-links` = the footer links on every page). Publisher:
  NORRECRAFT (same company and details as manufacture.dev), contact **hello@ludea.ai** (Google
  Workspace). The privacy policy states that the site and games collect nothing (no cookie, tracker,
  form; game saves stay on the device) — keep it true: any change that adds data collection, a
  third-party call or a cookie must update `privacy.html` first (and is refused in kids' games).
- `landing.css` — design tokens + styles (paper/ink + tangerine→coral brand gradient, Bricolage
  Grotesque + DM Sans self-hosted in `fonts/`).
- `tools/art/brand.cjs` — ALL brand art as parametric SVG: `mark()` (speech bubble + play + spark),
  `guide(pose)` = « Lu », the mark with a face (hello / point / idea; at most once per screen; never
  in games), the brand icon set (icon-kit in the Ludea palette + own icons, incl. flagGb/flagFr).
  Render: `node tools/kit/render-svg.cjs tools/art/brand.cjs [--only key]` → `brand/`.
  `tools/kit/` = copies of the engine's `svg-kit.cjs`, `icon-kit.cjs`, `render-svg.cjs`
  (from `.claude/skills/_shared/` in any engine repo — refresh them from there if they change).
- Catalogue assets: `shots/<game>-*.webp` (390×844 in-game screenshots, taken with the engine's
  playtest harness), `icons/<game>.webp` (the games' app icons), `qr/<game>.svg`
  (`pip install qrcode && python3 tools/qr.py` — URLs listed in the script).
- `.github/workflows/deploy.yml` — publishes the built site on every push to `main` (sources and
  tooling are left out of the published artifact).

## 3. The catalogue — keep it in sync
When a game is added or gains a mode: update its card in `src/index.html` (tags, modes, Play →
`https://ludea.ai/<repo>/`, Source code → `https://github.com/ludea-ai/<repo>`), its screenshots,
icon and QR code (add it to `tools/qr.py`), the "Install it like an app" mockup if it is a new game,
then `node build.cjs`. Every game in the catalogue is available in English and French.

### Publication requests (games made by others)
A creator asks to join the catalogue with `/publish` in their game → a `[publish] …` issue
here. The skill **review-submission** (`.claude/skills/review-submission/`) reviews the exact
submitted commit — readiness, bugs and above all **child safety** (independent reviewer agent,
`references/child-safety.md`; no request may leave the game) — and posts a verdict. **The owner
accepts** (`/accept` comment); then the game is **forked into `ludea-ai`** at the reviewed commit,
served at `https://ludea.ai/<slug>/`, and its card is added. `catalogue.json` = the registry of
published games (repo served, original source, reviewed commit); the engine propagation
(triage-upstream in Nebula) updates every game listed there.

## 4. Verify before pushing
Serve the folder (`python3 -m http.server 8104`), screenshot `/`, `/fr/` and `/design/` at
390×844 and at desktop width with Playwright (Chromium is installed), check there is no 404 on
any asset (listen to `response` events), then push to `main` and confirm the deploy run is green.

## 5. Owner expectations (from the engine repos' quality bar)
- Professional, studio-quality result; look at screenshots before claiming anything.
- No emoji: illustrated icons only (`brand/icons/`).
- **Communication**: answer the owner in French, no jargon; explain cause → fix → what was tested
  and what was NOT (honestly).

## 6. Ludea organisation (https://github.com/ludea-ai)
- `game-engine` — the GitHub template: engine layer + a small starter game. Publishes nothing.
- `nebula` — the showcase game (https://ludea.ai/nebula/); engine work is developed there, then
  synced to the template and the games.
- `ludea-ai.github.io` — this site (the org site repo). Ludea's games: `dr-smile`, `gta7`, `my-little-stable` (https://ludea.ai/<repo>/).
  Poulpy now lives in its creator's repo `jlrigau/poulpy` (the first external creator; publication requested 2026-10-18, #1).
- Ludea loop: games report engine bugs/improvements and creators' ideas as issues on `ludea-ai/game-engine`
  (skills report-upstream, idea); Nebula's triage-upstream qualifies them, opens one PR the owner
  approves, then propagates. Publication requests land here (above). Two separate nightly agents
  (scheduled tasks): « agent moteur » 03:55 Paris (engine inbox, triage-upstream) and « agent catalogue »
  05:55 (publication requests, review-submission). Each sends the owner its own French summary and
  acts only after the owner's OK (« OK » / « publie <jeu> »).
- Domain state (2026-10-11): org site repo `ludea-ai.github.io` carries the custom domain ludea.ai
  (set there ONLY, never per repo); DNS: 4 GitHub A records + `www` CNAME → ludea-ai.github.io;
  HTTPS certificate issued — every repo is live at https://ludea.ai/<repo>/ (github.io redirects
  there). The template's address (ludea.ai/game-engine/) only redirects to https://ludea.ai/.
