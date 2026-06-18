# Handoff: The Program Suite — Marketing Site

## Overview
This is the marketing / landing page for **The Program Suite**, "the operating system for school sports." It's a single long-scroll page whose job is to convert coaches, athletic directors, and districts into **founder-access** leads (lock a 33%-off-for-life founding rate). The page tells the problem→solution story, shows real product screenshots, lays out the pricing model, and captures leads through a form that posts to an existing `/api/founder-access` endpoint.

---

## ⭐ Going live on theprogramsuite.com (read this first)

**Target repo:** `jyuseflarry-max/theprogramsuite` (default branch `master`) — this is the live marketing site at www.theprogramsuite.com. (The separate `The-Program-Suite` repo is the product app at app.theprogramsuite.com — do **not** touch it for this.)

**Stack in that repo:** Next.js 16 (App Router) · React 19 · Tailwind 4 (`@import "tailwindcss"` + `@theme` tokens in `globals.css`) · `lucide-react` for icons · `resend` for the lead email. No Tweaks panel, no in-browser Babel — this prototype's `tweaks-panel.jsx` and CDN `<script>` tags do not get ported.

**Files to change (map prototype → repo):**
| Prototype file | Becomes (in repo) |
|---|---|
| `app.jsx` (composition) | `src/app/page.tsx` — compose the sections |
| `sections.jsx`, `capability.jsx`, `pricing.jsx`, `footer.jsx` | Section components under `src/components/` |
| `ui.jsx` (`Frame`, `ShotPlaceholder`, `Lightbox`, icons, `useReveal`) | `src/components/` helpers |
| `styles.css` | `src/app/globals.css` — **keep the `@import "tailwindcss";` line and the existing `.prose-doc` + `.field-*` blocks** (the privacy/terms/thanks/error pages depend on them); replace the rest with this design's tokens + component CSS |
| `Marketing Page.html` `<head>` (fonts) | `src/app/layout.tsx` — see fonts below |
| `assets/**` (logo-mark, founder.png, screens/*, content-studio.png) | `public/` (reference with leading-slash paths) |

**Existing repo bits to reuse as-is:**
- `src/app/api/founder-access/route.ts` — the Resend lead handler. **Do not change it.**
- Existing pages `src/app/privacy/page.tsx`, `terms/page.tsx`, `founder-access/thanks/page.tsx`, `founder-access/error/page.tsx` — keep them working (hence keeping `.prose-doc`/`.field-*` in `globals.css`).

**Lead form — match the real API (important):** The route **requires** `name, email, school, role, sports, plan` and redirects to `/founder-access/thanks` on success or `/founder-access/error` on failure. So in production:
- Make `sports` a **required** field (the prototype has it optional — change that, or the API bounces to the error page).
- Use a **plain server-rendered `<form action="/api/founder-access" method="POST">`** and let the route's redirect handle success — drop the prototype's `fetch()` + inline success-message logic (it exists only so the offline prototype is usable).

**Fonts (`layout.tsx`):** This design uses **Geist + Geist Mono only**. Remove `Big_Shoulders` and `Instrument_Serif` from `layout.tsx`. Keep the existing Geist + Geist Mono `<link>` to Google Fonts (already present), or switch to `next/font/google`'s `Geist`/`Geist_Mono`. Update the `@theme` font tokens in `globals.css` so `--font-display`/`--font-body` resolve to Geist.

**Then ship it:**
```bash
git checkout -b marketing-redesign
# (make the changes above)
npm install && npm run build   # must pass clean
git add -A && git commit -m "New marketing homepage design"
git push -u origin marketing-redesign
```
Open a PR → review the Vercel preview URL → merge to `master`. Vercel auto-deploys to production. Confirm env vars are set in Vercel: `RESEND_API_KEY`, `FOUNDER_LEADS_TO_EMAIL`, `FOUNDER_LEADS_FROM_EMAIL`, optional `NEXT_PUBLIC_SITE_URL`.

**Fastest way to do the port:** open `jyuseflarry-max/theprogramsuite` in **Claude Code** with this whole `design_handoff_marketing_site/` folder available, and paste:
> "Replace my marketing homepage with the design in `design_handoff_marketing_site/`. Follow `README.md` — especially the 'Going live' section. Port `styles.css` into `globals.css` (keep the Tailwind import and `.prose-doc`/`.field-*` blocks), rebuild the sections as Next.js components in `src/`, swap fonts to Geist only in `layout.tsx`, copy the assets into `public/`, and make the founder-access form a plain POST with `sports` required. Run `npm run build` and fix anything until it passes, then commit on a branch `marketing-redesign`."

---

## About the Design Files
The files in `design/` are a **design reference built in HTML + React (via in-browser Babel)** — a prototype showing intended look, content, and behavior. **They are not production code to ship as-is.** The JSX is transpiled in the browser at runtime, fonts come from a CDN, and there's a "Tweaks" panel that exists only for design iteration.

Your task is to **recreate this design in the target codebase's environment**, using its established patterns and libraries. The intended target is the existing **Next.js + TypeScript + Tailwind 4** app at `theprogramsuite` (App Router; the lead form posts to `src/app/api/founder-access/route.ts`). If you're building somewhere else, port it to whatever framework that project uses. Either way, lift the exact tokens, copy, and layout from these files — don't reinvent them.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions are all settled here. Recreate the UI pixel-faithfully. The one exception is **imagery**: real product screenshots are wired in for the inventory module; everything else uses labeled striped placeholders (`ShotPlaceholder`, the founder portrait) that the team will replace with real assets.

---

## Page structure (top → bottom)
The whole page is composed in `design/app.jsx` (`<App>`), in this order:

1. **Nav** (sticky)
2. **Hero** — headline, lead, CTAs, hero screenshot, "Replaces" strip
3. **Before / After** (`#why`) — two-card problem/solution contrast
4. **Founder** (`#story`) — coach origin story *(toggleable; on by default)*
5. **Product proof** (`#product`) — 3 alternating screenshot rows + 6-up "more of the system" grid
6. **Capabilities** (`#capabilities`) — navy band, 7-module grid + "always on" cell
7. **Content Studio** (`#content-studio`) — revenue spotlight, Instagram-style social card
8. **Audiences** (`#audiences`) — 3 cards: coaches / ADs (featured) / districts
9. **Pricing** (`#pricing`) — 3 tier cards, whole-department band table, founding-spots counters
10. **Lead form** (`#access`) — founder-access capture, navy band
11. **FAQ** (`#faq`) — 7 `<details>` accordion items
12. **Final CTA** — accent-blue band
13. **Footer** — logo, 3 link columns, meta row
14. **Mobile sticky bar** — fixed bottom CTA (≤720px only)

---

## Design Tokens
All defined as CSS custom properties in `design/styles.css` (`:root`, with a `.dark` override block). Port these into your token system (Tailwind `@theme`, CSS vars, etc.). The prototype lets accent/density/text-size be tweaked at runtime, but the **production defaults are below**.

### Colors — light (default)
| Token | Value | Use |
|---|---|---|
| `--ink` | `#000000` | Foreground, headings, dark bands |
| `--ink-2` | `#1c1c1e` | Lifted black for hovers |
| `--ink-soft` | `#3c3c43` | Body text on light |
| `--muted` | `#8e8e93` | Secondary text |
| `--faint` | `#aeaeb2` | Tertiary / strikethrough |
| `--paper` | `#f2f2f7` | Page background canvas |
| `--cream` | `#e1efff` | Tinted band (accent-soft bg for Founder + Content Studio) |
| `--surface` | `#ffffff` | Cards, screenshot frames |
| `--surface-2` | `#efeff4` | Inset surfaces, inputs |
| `--line` | `#e5e5ea` | Hairline border |
| `--line-2` | `#d8d8df` | Stronger border |
| `--line-on-ink` | `rgba(255,255,255,.16)` | Borders on navy bands |
| `--accent` | `#007aff` | **Program Blue** — primary action |
| `--accent-2` | `#0062cc` | Accent text / hover on light |
| `--accent-active` | `#0b4fa8` | Pressed |
| `--accent-ink` | `#ffffff` | Text on accent |
| `--accent-soft` | `#e1efff` | Accent tint (focus rings, founding note) |
| `--good` | `#34c759` | Success (form confirmation) |
| `--good-soft` | `#d8f3df` | — |
| `--warn` | `#ff9500` | — |
| `--bad` | `#ff3b30` | "Before" / negative markers |

### Colors — dark (`.dark` on `<html>`)
iOS-dark variant. Key overrides: `--ink #fff`, `--paper #000`, `--cream #0a1f3a`, `--surface #1c1c1e`, `--surface-2 #2c2c2e`, `--line #38383a`, `--line-2 #48484a`, `--accent #0a84ff`, `--accent-2 #409cff`, `--accent-soft rgba(10,132,255,.18)`. Full list in `styles.css`. *(Dark mode is a prototype tweak — ship it only if the project wants a dark theme.)*

### Typography
Two Google fonts. Body is **Geist**; mono labels are **Geist Mono**. (`--font-display` is also Geist.) Load weights 400/500/600/700 (Geist) and 400/500 (Geist Mono).
```css
--font-sans:    "Geist", ui-sans-serif, system-ui, -apple-system, "SF Pro Text", "Segoe UI", sans-serif;
--font-mono:    "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace;
--font-display: "Geist", ui-sans-serif, system-ui, -apple-system, sans-serif;
```
Base: `font-size: 17px`, `line-height: 1.6`, antialiased.

**Type scale (utility classes in `styles.css`):**
| Class | Size | Weight / tracking |
|---|---|---|
| `.h-display` | — | 700, `letter-spacing -0.028em`, `line-height 1.04`, `text-wrap: balance` |
| `.h1` | `clamp(38px, 5.4vw, 64px)` | with `.h-display` |
| `.h2` | `clamp(30px, 3.8vw, 46px)` | with `.h-display` |
| `.h3` | `clamp(22px, 2.2vw, 28px)` | with `.h-display` |
| `.lead` | `clamp(18px, 1.5vw, 21px)` | `line-height 1.55`, color `--ink-soft`, `text-wrap: pretty` |
| `.eyebrow` | `12px` mono | 500, `letter-spacing 0.14em`, uppercase, color `--accent-2`; has a 6px round `.dot` |
| `.mono-label` | `11.5px` mono | 500, `0.1em`, uppercase, `--muted` |
| `.scoreboard` / big numerals | `--font-display` | 700, `font-feature-settings: "tnum"` |

### Spacing / radius / shadow
| Token | Value |
|---|---|
| `--container` | `1200px` (`.container`); `.container-wide` = `1340px`; both `padding: 0 28px` |
| Section vertical pad | `104px` default (`.section`); `--section-pad` tweakable: compact 80 / regular 104 / comfy 128; `.section--tight` = `72px` |
| `--radius` | `18px` (cards, frames, bands) |
| `--radius-sm` | `12px` (inputs, small chips) |
| Button radius | `10px` (`.btn`), `11px` (`.btn-lg`) |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,.05)` |
| `--shadow-card` | `0 1px 2px rgba(0,0,0,.04), 0 10px 26px -16px rgba(0,0,0,.16)` |
| `--shadow-lift` | `0 1px 2px rgba(0,0,0,.05), 0 22px 50px -24px rgba(0,0,0,.22)` |
| `--shadow-product` | `0 2px 8px rgba(0,0,0,.05), 0 44px 92px -42px rgba(0,0,0,.30)` |

---

## Components

### Buttons (`.btn`)
Base: inline-flex, `gap 9px`, `padding 13px 20px`, `font-weight 600`, `font-size 15px`, `border-radius 10px`, `min-height 46px`, `transition` on transform/bg/color/shadow/border; `:active { translateY(1px) }`. Icons inside are 16×16. `.btn-lg` = `padding 16px 26px`, `font-size 16px`, `min-height 54px`, `radius 11px`.

Variants:
- `.btn-primary` — bg `--accent`, text `--accent-ink`, `--shadow-sm`; hover bg `--accent-2`
- `.btn-ink` — bg `--ink`, text `--paper`; hover `--ink-2`
- `.btn-ghost` — bg `--surface`, text `--ink`, border `--line-2`, `--shadow-sm`; hover border `--ink`
- `.btn-quiet` — transparent, text `--ink`; hover text `--accent-2`
- `.btn-block` — full width
- `.btn-on-ink.btn-ghost` — transparent ghost for use on navy/accent bands (border `--line-on-ink`)

### Nav (`.nav`)
Sticky, `z-index 60`, height `72px`. Translucent: `background: color-mix(in srgb, var(--paper) 82%, transparent)` + `backdrop-filter: blur(18px) saturate(150%)`, bottom border `--line`. Left = logo + links (`Product, Capabilities, Who it's for, Pricing, Story`, 14.5px/500, `--ink-soft`→`--ink` on hover, `gap 26px`). Right = "Log in" text link + `.btn-primary` "Start one program" (sized down: `min-height 42, padding 10px 18px, font-size 14.5`). Links + login hide below 920px.

### Logo (`Logo` in `ui.jsx`)
`assets/logo-mark.png` (34×34, `object-fit: contain`) + wordmark "The Program Suite" (Geist 600, 19px, `-0.02em`). Links to `#top`.

### Browser frame (`Frame` in `ui.jsx`)
Wraps every product screenshot. `border-radius --radius`, `--shadow-product`, border `--line-2`. Header bar (`.frame-bar`): 3 grey dots + a pill-shaped mono URL field (`--muted`, e.g. `app.theprogramsuite.com/...`). Image is `width:100%`, `loading="lazy"`. `frame--flush` hides the bar.

### Screenshot placeholder (`ShotPlaceholder`, `.shot-ph`)
For modules without a real shot. Same frame chrome, body is a 16/10 box with a diagonal repeating-stripe texture and a centered mono tag: bold title + note line. Use this pattern for any imagery you don't yet have.

### Icons (`Ico` in `ui.jsx`)
Inline SVGs, stroke-based, `stroke-width 1.6–1.9`, `currentColor`: `arrow, check, play, bolt, cash, handshake, heart, comment, send`. Capability module glyphs come from `ModIcon` (geometric, 34×34): `athlete, season, practice, training, inventory, district, mobile`. Reproduce with your icon library if you have equivalents; otherwise keep these SVGs.

### Cards & sections — key specs
- **Before/After** (`.ba-grid`): 2-col, `gap 24px`. Before card bg `--surface-2`; After card bg `--ink` (text `--paper`). Kicker mono uppercase `0.12em` — before in `--bad`, after in `--accent`. List items use ✕ (`--bad`) vs check icon (`--accent`).
- **Capabilities** (`.cap-band`): full navy band. `.cap-grid` is a 3-col grid built from 1px gaps over `--line-on-ink` to draw hairlines; each `.cap-cell` bg `--ink` (hover `--ink-2`), icon `--accent`, title 19px/600, body `rgba(255,255,255,.66)`, mono tag chips at bottom. Collapses 3→2 (≤1080px) →1 (≤720px).
- **Content Studio** (`.studio`): bg `--cream`, 2-col (`1.05fr .95fr`, `gap 64px`). Left: eyebrow, h2 "Turn game day into revenue.", 3 icon points, primary CTA, tag chip. Right: an Instagram-style `.social-card` (max 350px, radius 22px, red avatar "M", `assets/content-studio.png`, like/comment/send row, caption).
- **Audiences** (`.aud-grid`): 3-col, `gap 22px`. Middle "For athletic directors" card is `.feature` (navy, `--paper` text). Each: mono role label (`--accent-2`), title, blurb, check-bulleted list, mono footer line.
- **Pricing** (`.plans`): 3-col tier cards. "Director" is `.popular` (accent border, `--shadow-lift`, "Most popular" badge top-left). Price uses `--font-display` 700 50px with `tnum`. Each shows founding price + struck list price, feature list, CTA. Below: `.dept` department band table (4 program-count bands, last is "Let's talk"), then `.spots` founding-spot counters (navy cards with accent numerals + progress bar). Founding-spots block is toggleable.
- **Lead form** (`.lead-band`): navy band, 2-col (`0.85fr 1.15fr`). Left intro + 3 check-assurances. Right `.lead-form` white card, 2-col `.form-grid`. Fields: bg `--surface-2`, border `--line-2`, radius `--radius-sm`; focus → border `--accent` + `0 0 0 3px var(--accent-soft)`. Custom SVG chevron on `<select>`.
- **FAQ** (`.faq-list`): max 860px, native `<details>`/`<summary>`. Question 17–20px/600; `+` icon (`--accent`) rotates 45° when open. Hidden default marker.
- **Final CTA** (`.final`): full `--accent` band, centered, white headline `clamp(34px,5vw,60px)`, `.btn-ink` + on-accent ghost.
- **Footer** (`.footer`): navy, 4-col grid (`2fr 1fr 1fr 1fr`) — about+logo, then Product / Who it's for / Company columns; meta row with top hairline.
- **Mobile bar** (`.mobile-bar`): `display:none` until ≤720px, then `position:fixed` bottom, translucent blurred bg, info + primary CTA; body gets `padding-bottom: 76px`.

---

## Interactions & Behavior
- **Scroll reveal** (`useReveal` in `ui.jsx`): elements with `.reveal` start hidden (`opacity 0; translateY(16px)`) and animate in via IntersectionObserver when ~8% visible. **Critical safety pattern:** the hidden state only applies when `<html>` has `.anim-on` AND `prefers-reduced-motion: no-preference`; multiple fallbacks (rAF first-paint pass, scroll/resize handler, 1.2s timeout) guarantee content is **never stranded hidden** if observers don't fire. Respects reduced-motion (shows everything immediately). Transition: `opacity .6s ease, transform .6s ease`. Reimplement with your animation approach but **keep the never-stranded guarantee** (e.g. animate-from-hidden gated behind a JS-added class).
- **Anchor nav**: all CTAs are in-page `#hash` links; `html { scroll-behavior: smooth; scroll-padding-top: 84px }` accounts for the sticky nav.
- **FAQ**: native `<details>` toggle, `+` rotates to ×.
- **Hover states**: defined per component above (buttons, nav links, cap cells, footer links → `--accent`).
- **Lead form submit** (`LeadForm` in `pricing.jsx`): `preventDefault`, `fetch("/api/founder-access", { method:"POST", body: FormData })` (fire-and-forget — catches errors so the prototype works offline), then sets `sent=true` which reveals the success message (`.lead-form.sent .form-ok { display:block }`). **In production, wire this to the real endpoint and handle success/error/redirect properly** (the existing route uses Resend; see below).

### Lead form contract (must match existing API)
POST `multipart/form-data` to `/api/founder-access` with these exact field names:
`name` (req), `email` (req), `school` (req), `role` (req), `sports` (opt), `plan` (select), `message` (opt, textarea).
The `plan` select options: `Coach (one program)`, `Director (one program)`, `Full Suite (one program)`, `Entire school`, `District coverage`, `Not sure yet`.

## State Management
Minimal:
- `LeadForm`: local `sent` boolean (form submitted) + form ref.
- Reveal: DOM class toggling via observer, no React state.
- Prototype-only tweaks (`useTweaks` in `app.jsx`): accent color, dark mode, density, font scale, show/hide Founder + Founding-spots. **These are design-exploration controls — not production state.** Pick the defaults (accent `#007aff`, light, regular density, scale 1, both sections shown) as your shipped design, or expose any you want as real theme options.

## Responsive behavior
Breakpoints in `styles.css`:
- **≤1080px**: capability grid 3→2, dept table 4→2, footer reflows.
- **≤920px**: nav links + login hide; lead/founder/studio/proof grids → 1 col; audiences → 1 col; plans → 1 col (max 460px); spots → 1 col.
- **≤720px**: section pad → 72px; before/after, capability, proof, form grids → 1 col; footer 2-col; **mobile sticky CTA bar appears**.
- **≤480px**: tighter container padding (18px); hero CTAs stack full-width; "Replaces" strip stacks; footer 1-col; frame URL hidden.

Note: a mobile hamburger menu is **not** implemented — nav links simply hide ≤920px and rely on the sticky bottom bar + footer. Add a real mobile menu if the project wants one.

---

## Assets
All in `design/assets/`:
| File | Where used | Status |
|---|---|---|
| `logo-mark.png` | Nav + footer logo (34×34) | Real |
| `logo.png` | (full logo, available) | Real |
| `screens/inventory-home.png` | Hero shot + Product proof row 1 | Real product screenshot |
| `screens/receive-shipment.png` | Product proof row 2 | Real |
| `screens/purchase-order.png` | Product proof row 3 | Real |
| `screens/item-detail.png` | "More of the system" mini grid | Real |
| `screens/buying-needs.png` | Mini grid | Real |
| `content-studio.png` | Content Studio social card | Real |
| `product-receive.png` | (alternate receive shot, available) | Real |

**Still needed (currently `ShotPlaceholder` / text placeholders):** Coach home, Athlete profiles, Practice planner, Game day screenshots (mini grid), and a real **founder portrait** photo (Founder section currently shows `[ founder photo — coach on the sideline ]`).

## Files (in `design/`)
| File | Contents |
|---|---|
| `Marketing Page.html` | Entry point — fonts, root, script tags. Open this to view the design. |
| `styles.css` | **All styles + design tokens.** The source of truth for every value above. |
| `app.jsx` | `<App>` composition, tweak wiring, section order. |
| `ui.jsx` | Shared primitives: `Ico`, `ModIcon`, `Logo`, `Frame`, `ShotPlaceholder`, `useReveal`. |
| `sections.jsx` | `Nav`, `Hero`, `BeforeAfter`, `Founder`, `ProductProof`. |
| `capability.jsx` | `Capabilities`, `Audiences`, `ContentStudio`. |
| `pricing.jsx` | `Pricing`, `FoundingSpots`, `LeadForm`. |
| `footer.jsx` | `FAQ`, `FinalCTA`, `Footer`, `MobileBar`. |
| `tweaks-panel.jsx` | **Prototype-only** tweak panel scaffold. Do not ship — it's a design tool. |

To preview: open `design/Marketing Page.html` in a browser (it loads React + Babel + Geist from CDNs).

---

## Implementation checklist
1. Add Geist + Geist Mono to the project's font setup (`next/font/google` or CDN).
2. Port the tokens from `styles.css` into the project's token layer; keep the light defaults.
3. Rebuild each section as a component using the project's conventions (server components where possible; the lead form is the only client component).
4. Wire the lead form to `/api/founder-access` with the exact field names and proper success/error UX.
5. Reimplement scroll-reveal with the never-stranded-hidden guarantee, respecting reduced-motion.
6. Drop in real screenshots/photo where placeholders remain.
7. Skip `tweaks-panel.jsx` and the tweak controls; ship the chosen defaults.
