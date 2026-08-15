#!/usr/bin/env python3
"""Composite real product screenshots onto the blank screens of the AI hero photos.

    ⚠️  SUPERSEDED (Aug 2026): the four LIVE heroes (hero-{run,game,fund,family}.jpg)
    are now AI-composited via an image model, not perspective-warped by this script.
    Running this WILL OVERWRITE those hand-made heroes with the older composite look.
    Kept for reference / fallback only — regenerate heroes through the image model,
    or restore from git after running this.


The four rotating-hero images (public/marketing/redesign/hero-{run,game,fund,family}.jpg)
are built from "-blank" originals (same folder) whose device screens are empty white.
This script perspective-warps real captures onto those screens, so heroes can be
regenerated any time a screenshot changes:

    python3 scripts/compose-hero-screens.py            # all four
    python3 scripts/compose-hero-screens.py run game   # just some

Screens are auto-detected as the brightest cool-white quads (blank screens are
bluish-white; sunlit paper/whiteboards are warm and get filtered out). The fund
image's phone is hand-measured because the sky defeats auto-detection there.
Pure Pillow — no numpy/ImageMagick needed.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
import os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RD = os.path.join(ROOT, "public/marketing/redesign")
CA = os.path.join(ROOT, "public/images/current-app")
SC = os.path.join(ROOT, "public/marketing/screens")

DS = 4  # downsample factor for blob detection


def detect_screens(im):
    w, h = im.size
    sm = im.resize((w // DS, h // DS)).convert("RGB")
    sw, sh = sm.size
    px = sm.load()
    mask = [[False] * sw for _ in range(sh)]
    for y in range(sh):
        for x in range(sw):
            r, g, b = px[x, y]
            mn, mx = min(r, g, b), max(r, g, b)
            if mn > 195 and b >= r and (mx - mn) < 45:
                mask[y][x] = True
    seen = [[False] * sw for _ in range(sh)]
    blobs = []
    for y in range(sh):
        for x in range(sw):
            if mask[y][x] and not seen[y][x]:
                stack, pts = [(x, y)], []
                seen[y][x] = True
                while stack:
                    cx, cy = stack.pop()
                    pts.append((cx, cy))
                    for nx, ny in ((cx+1,cy),(cx-1,cy),(cx,cy+1),(cx,cy-1),
                                   (cx+1,cy+1),(cx-1,cy-1),(cx+1,cy-1),(cx-1,cy+1)):
                        if 0 <= nx < sw and 0 <= ny < sh and mask[ny][nx] and not seen[ny][nx]:
                            seen[ny][nx] = True
                            stack.append((nx, ny))
                frac = len(pts) / (sw * sh)
                if frac < 0.0015 or frac > 0.30:
                    continue
                tl = min(pts, key=lambda p: p[0] + p[1])
                tr = max(pts, key=lambda p: p[0] - p[1])
                br = max(pts, key=lambda p: p[0] + p[1])
                bl = min(pts, key=lambda p: p[0] - p[1])
                q = [tl, tr, br, bl]
                qa = 0.5 * abs(sum(q[i][0]*q[(i+1)%4][1] - q[(i+1)%4][0]*q[i][1] for i in range(4)))
                if qa == 0 or len(pts) / qa < 0.75:
                    continue
                blobs.append({"area": len(pts) * DS * DS,
                              "quad": [(p[0]*DS + DS/2, p[1]*DS + DS/2) for p in (tl, tr, br, bl)]})
    blobs.sort(key=lambda b: -b["area"])
    return blobs


def expand_quad(quad, f=0.012):
    cx = sum(p[0] for p in quad) / 4
    cy = sum(p[1] for p in quad) / 4
    return [(cx + (p[0]-cx)*(1+f), cy + (p[1]-cy)*(1+f)) for p in quad]


def quad_aspect(quad):
    tl, tr, br, bl = quad
    w = (((tr[0]-tl[0])**2+(tr[1]-tl[1])**2)**.5 + ((br[0]-bl[0])**2+(br[1]-bl[1])**2)**.5) / 2
    h = (((bl[0]-tl[0])**2+(bl[1]-tl[1])**2)**.5 + ((br[0]-tr[0])**2+(br[1]-tr[1])**2)**.5) / 2
    return w / h


def solve8(A, bvec):
    M = [row[:] + [bvec[i]] for i, row in enumerate(A)]
    for c in range(8):
        piv = max(range(c, 8), key=lambda r: abs(M[r][c]))
        M[c], M[piv] = M[piv], M[c]
        d = M[c][c]
        M[c] = [v / d for v in M[c]]
        for r in range(8):
            if r != c and M[r][c]:
                f = M[r][c]
                M[r] = [rv - f*cv for rv, cv in zip(M[r], M[c])]
    return [M[i][8] for i in range(8)]


def persp_coeffs(dst_quad, src_size):
    w, h = src_size
    src = [(0, 0), (w, 0), (w, h), (0, h)]
    A, bv = [], []
    for (dx, dy), (sx, sy) in zip(dst_quad, src):
        A.append([dx, dy, 1, 0, 0, 0, -sx*dx, -sx*dy]); bv.append(sx)
        A.append([0, 0, 0, dx, dy, 1, -sy*dx, -sy*dy]); bv.append(sy)
    return solve8(A, bv)


def aspect_fill(img, aspect, anchor="center"):
    w, h = img.size
    if w / h > aspect:
        nw = int(h * aspect)
        x = {"left": 0, "center": (w-nw)//2, "leftish": min((w-nw)//2, int(w*0.06))}[anchor]
        return img.crop((x, 0, x+nw, h))
    return img.crop((0, 0, w, int(w / aspect)))


def letterbox(img, aspect, bg=(13, 15, 18)):
    w, h = img.size
    cw = int(h * aspect)
    canvas = Image.new("RGB", (cw, h), bg)
    canvas.paste(img, ((cw - w) // 2, 0))
    return canvas


def grade(src, dim=0.93, warm=0.955):
    """Dim the pure-white UI and warm it so it reads as glass in a warm-lit
    scene instead of a bright rectangle pasted on top."""
    src = ImageEnhance.Brightness(src).enhance(dim)
    r, g, b = src.split()
    g = g.point(lambda v: int(v * (warm + (1 - warm) * 0.5)))
    b = b.point(lambda v: int(v * warm))
    return Image.merge("RGB", (r, g, b))


def paste_screen(im, quad, src_path, mode="fill", anchor="center", dim=0.93, warm=0.955):
    quad = expand_quad(quad)
    asp = quad_aspect(quad)
    src = Image.open(src_path).convert("RGB")
    src = letterbox(src, asp) if mode == "letterbox" else aspect_fill(src, asp, anchor)
    src = grade(src, dim, warm)
    layer = src.transform(im.size, Image.PERSPECTIVE, persp_coeffs(quad, src.size), Image.BICUBIC)
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).polygon([tuple(p) for p in quad], fill=255)
    im.paste(layer, (0, 0), mask.filter(ImageFilter.GaussianBlur(1.0)))


def build(name):
    # Every screen quad is hand-measured against the -blank photo (grid overlay)
    # so real screenshots sit exactly in the glass with correct perspective —
    # auto-detection was loose and made the screens read as "pasted on".
    im = Image.open(f"{RD}/hero-{name}-blank.jpg").convert("RGB")
    if name == "run":
        imac  = [(662, 120), (1344, 105), (1340, 476), (660, 470)]
        phone = [(1053, 549), (1147, 542), (1152, 674), (1058, 681)]
        paste_screen(im, imac,  f"{CA}/coach-home.png")                      # iMac
        paste_screen(im, phone, f"{CA}/mobile-home.png")                     # iPhone on stand
    elif name == "game":
        laptop = [(1024, 375), (1402, 378), (1404, 607), (1014, 587)]
        ipad   = [(586, 430), (876, 408), (916, 772), (612, 808)]
        paste_screen(im, laptop, f"{SC}/practice-planner.png")              # laptop
        paste_screen(im, ipad,   f"{SC}/game-day.png", anchor="leftish")    # iPad (portrait)
    elif name == "fund":
        # sky defeats blob detection here; keep the Content Studio graphic
        quad = [(690, 337), (1005, 331), (1003, 474), (692, 477)]
        paste_screen(im, quad, f"{RD}/hero-fund-graphic.png", mode="letterbox")
    elif name == "family":
        phone = [(462, 460), (631, 453), (646, 665), (472, 688)]
        paste_screen(im, phone, f"{CA}/mobile-home.png")
    im.save(f"{RD}/hero-{name}.jpg", quality=90)
    print(f"built {RD}/hero-{name}.jpg")


if __name__ == "__main__":
    names = sys.argv[1:] or ["run", "game", "fund", "family"]
    for n in names:
        build(n)
