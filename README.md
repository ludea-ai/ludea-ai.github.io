# ludea.ai

The site of **Ludea** — describe a game, an agent builds it. A 2D game engine driven by its
config and by Claude Code, and the catalogue of the games made with it.

▶ **[ludea.ai](https://ludea.ai/)** · [version française](https://ludea.ai/fr/) · [design system](https://ludea.ai/design/)

- Make your own game: **[ludea-ai/game-engine](https://github.com/ludea-ai/game-engine)** (GitHub template).
- The showcase: **[Nebula Nursery](https://ludea.ai/nebula/)** ([source](https://github.com/ludea-ai/nebula)).

## Editing the site

```bash
node build.cjs                      # src/index.html → index.html (EN) + fr/index.html (FR) + design/
node tools/kit/render-svg.cjs tools/art/brand.cjs   # brand art → brand/
python3 tools/qr.py                 # catalogue QR codes → qr/ (pip install qrcode)
python3 -m http.server 8104         # preview at http://localhost:8104/
```

Pushing to `main` publishes the site with GitHub Pages (`.github/workflows/deploy.yml`).
Fonts: Bricolage Grotesque and DM Sans (OFL), self-hosted in `fonts/`.
