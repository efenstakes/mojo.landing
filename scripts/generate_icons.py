"""Generates the website's favicon and icons from the MOJO mark (same design as the app icon).

    python3 scripts/generate_icons.py        (needs Pillow and numpy)

Writes to public/:
  favicon.ico           16, 32 and 48 px, each drawn separately with a bolder spark so it reads in a tab
  icon.svg              sharp at any size (modern browsers prefer it)
  icon-192.png, icon-512.png    rounded, for the web app manifest ("any")
  icon-maskable-512.png full bleed, spark inside the safe zone, for Android ("maskable")
  apple-touch-icon.png  180 px, full bleed and opaque (iOS rounds it)
"""
import math
import pathlib

import numpy as np
from PIL import Image, ImageDraw

PUBLIC = pathlib.Path(__file__).resolve().parent.parent / "public"
SS = 4
VIOLET = (0x7A, 0x63, 0xD6)
TEAL = (0x4A, 0xAF, 0x94)
SPARK = [(12, 2.5), (14.2, 8.8), (20.5, 11), (14.2, 13.2), (12, 19.5), (9.8, 13.2), (3.5, 11), (9.8, 8.8)]


def gradient(s):
    a = math.radians(135)
    dx, dy = math.sin(a), -math.cos(a)
    ys, xs = np.mgrid[0:s, 0:s].astype(np.float32)
    c = (s - 1) / 2
    half = (abs(dx) + abs(dy)) * s / 2
    t = (((xs - c) * dx + (ys - c) * dy) / (2 * half) + .5).clip(0, 1)[..., None]
    rgb = np.array(VIOLET) * (1 - t) + np.array(TEAL) * t
    return Image.fromarray(rgb.round().astype(np.uint8), "RGB").convert("RGBA")


def icon(size, spark=.27, corner=None, opaque=False):
    s = size * SS
    img = gradient(s)
    k = spark * s / 8.5
    ImageDraw.Draw(img).polygon([((x - 12) * k + s / 2, (y - 11) * k + s / 2) for x, y in SPARK], fill=(255, 255, 255, 255))
    if corner is not None:
        m = Image.new("L", (s, s), 0)
        ImageDraw.Draw(m).rounded_rectangle((0, 0, s - 1, s - 1), radius=int(s * corner), fill=255)
        img.putalpha(m)
    img = img.resize((size, size), Image.LANCZOS)
    return img.convert("RGB") if opaque else img


SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7A63D6"/><stop offset="1" stop-color="#4AAF94"/></linearGradient></defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <path fill="#fff" transform="translate(32 32) scale({k}) translate(-12 -11)" d="M12 2.5l2.2 6.3 6.3 2.2-6.3 2.2L12 19.5l-2.2-6.3L3.5 11l6.3-2.2z"/>
</svg>
"""

if __name__ == "__main__":
    # tab icons: bigger spark, small corner radius, each size drawn on its own
    tab = [icon(n, spark=.36, corner=.2) for n in (16, 32, 48)]
    tab[2].save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)], append_images=tab[:2])
    (PUBLIC / "icon.svg").write_text(SVG.replace("{k}", f"{.32 * 64 / 8.5:.3f}"))
    icon(192, corner=.225).save(PUBLIC / "icon-192.png", optimize=True)
    icon(512, corner=.225).save(PUBLIC / "icon-512.png", optimize=True)
    icon(512, spark=.2, opaque=True).save(PUBLIC / "icon-maskable-512.png", optimize=True)
    icon(180, opaque=True).save(PUBLIC / "apple-touch-icon.png", optimize=True)
    print("Website icons generated in public/")
