#!/usr/bin/env python3
"""QR codes of the catalogue cards (qr/<id>.svg, shown on computers only).
   pip install qrcode && python3 tools/qr.py
Add a line to GAMES when a game joins the catalogue."""
import os, qrcode
GAMES = {
    "drsmile": "https://ludea.ai/dr-smile/",
    "stable": "https://ludea.ai/my-little-stable/",
    "gta7": "https://ludea.ai/gta7/",
    "nebula": "https://ludea.ai/nebula/",
}
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "qr")
for gid, url in GAMES.items():
    q = qrcode.QRCode(border=1, error_correction=qrcode.constants.ERROR_CORRECT_M)
    q.add_data(url); q.make(fit=True)
    m = q.get_matrix(); n = len(m)
    cells = "".join(f"M{x},{y}h1v1h-1z" for y, row in enumerate(m) for x, on in enumerate(row) if on)
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" shape-rendering="crispEdges">'
           f'<rect width="{n}" height="{n}" fill="#fff"/><path d="{cells}" fill="#10133a"/></svg>')
    open(os.path.join(root, gid + ".svg"), "w").write(svg)
    print("✓ qr/%s.svg  %s  (%d×%d)" % (gid, url, n, n))
