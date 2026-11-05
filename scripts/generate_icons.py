"""Generates the website's favicon and icons from the MOJO brand SVGs in public/brand/.

    pip install playwright pillow
    CHROME_PATH=/path/to/chrome python3 scripts/generate_icons.py   (CHROME_PATH optional)

Source artwork (edit these, then re-run):
  public/brand/o-talker.svg   the talker O (used alone for the browser tab icon)
  public/brand/mojo-icon.svg  the app icon: talker on a soft lavender-to-mint background

Writes to public/:
  icon.svg                    the talker O (browser tabs, sharp at any size)
  favicon.ico                 16 px (o-talker-small.svg), 32 and 48 px of the talker O
  icon-192.png, icon-512.png  app icon with rounded corners (web app manifest, "any")
  icon-maskable-512.png       full bleed, character inside the safe zone ("maskable")
  apple-touch-icon.png        180 px, full bleed and opaque (iOS rounds it)
"""
import io
import os
import pathlib
import shutil

from PIL import Image
from playwright.sync_api import sync_playwright

PUBLIC = pathlib.Path(__file__).resolve().parent.parent / "public"
TALKER = (PUBLIC / "brand" / "o-talker.svg").read_text()
TALKER_SMALL = (PUBLIC / "brand" / "o-talker-small.svg").read_text()  # simplified for 16 px
ICON = (PUBLIC / "brand" / "mojo-icon.svg").read_text()


def render(page, svg, size, *, radius=0.0, inset=0.0, background=None):
    """Renders an SVG at size x size. inset shrinks the art (for maskable safe zones)."""
    pad = size * inset
    html = f"""<html><body style="margin:0;background:transparent">
<div style="width:{size}px;height:{size}px;border-radius:{size * radius}px;overflow:hidden;background:{background or 'transparent'};display:flex;align-items:center;justify-content:center">
<div style="width:{size - 2 * pad}px;height:{size - 2 * pad}px">{svg.replace('<svg ', '<svg width="100%" height="100%" ', 1)}</div></div></body></html>"""
    page.set_viewport_size({"width": size, "height": size})
    page.set_content(html)
    return Image.open(io.BytesIO(page.screenshot(omit_background=True))).convert("RGBA")


if __name__ == "__main__":
    shutil.copyfile(PUBLIC / "brand" / "o-talker.svg", PUBLIC / "icon.svg")
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=os.environ.get("CHROME_PATH") or None)
        page = browser.new_page(device_scale_factor=1)
        tab = [render(page, TALKER_SMALL, 16), render(page, TALKER, 32), render(page, TALKER, 48)]
        tab[2].save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)], append_images=tab[:2])
        render(page, ICON, 192, radius=.225).save(PUBLIC / "icon-192.png", optimize=True)
        render(page, ICON, 512, radius=.225).save(PUBLIC / "icon-512.png", optimize=True)
        # maskable: background fills the square, character shrunk into the central safe zone
        bg = "linear-gradient(135deg,#EFEAFF,#DDF3EA)"
        render(page, TALKER, 512, inset=.22, background=bg).convert("RGB").save(PUBLIC / "icon-maskable-512.png", optimize=True)
        render(page, ICON, 180).convert("RGB").save(PUBLIC / "apple-touch-icon.png", optimize=True)
        browser.close()
    print("Website icons generated in public/")
