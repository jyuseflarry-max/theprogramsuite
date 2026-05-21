# Handoff — Marketing Site Redesign

The new editorial sports-magazine design has been ported to your existing Next.js / TypeScript / Tailwind 4 codebase. All files are in `src/` under their original paths so you can drop them straight into your repo.

## What changed

### New files
| Path | What it is |
|---|---|
| `src/components/SiteNav.tsx` | Shared top nav with logo + links + login + start CTA |
| `src/components/SiteFooter.tsx` | Shared footer with logo + columns + meta row |
| `src/components/primitives.tsx` | `ArrowBtn`, `Eyebrow`, `SectionHead` helpers used across pages |
| `public/images/product-receive.png` | Product screenshot for the hero showcase |

### Rewritten files
| Path | Notes |
|---|---|
| `src/app/page.tsx` | Full editorial redesign. **Adds a working founder-access form** wired to your existing `/api/founder-access` POST route (uses the exact field names your API already expects: `name`, `email`, `school`, `role`, `sports`, `plan`, `message`). |
| `src/app/layout.tsx` | Swaps Inter for **Big Shoulders Display** (headlines) + **Instrument Serif** (italic accents) via `next/font/google`, plus **Geist** body via Google Fonts CDN. Keeps your existing metadata, OG, Twitter card. |
| `src/app/globals.css` | New design tokens (`--color-ink`, `--color-paper`, `--color-accent`, etc.) plus utility classes (`.display`, `.headline-italic`, `.eyebrow`, `.btn-*`, `.prose-doc`, `.field-*`). |
| `src/app/privacy/page.tsx` | Same legal content, new title band + nav + footer + editorial typography via `.prose-doc`. |
| `src/app/terms/page.tsx` | Same — all legal content preserved, new shell. |
| `src/app/founder-access/thanks/page.tsx` | Restyled to match. |
| `src/app/founder-access/error/page.tsx` | Restyled to match. |
| `src/components/FaqSection.tsx` | Restyled with editorial heads + accent toggle. |

### Untouched
- `src/app/api/founder-access/route.ts` — your Resend email flow. No changes needed; the new form posts the same fields.
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `package.json` — no new dependencies required.
- `public/logo.png` — still used.
- `public/images/texas-football-inventory-hero.png` & `schedule-dashboard-hero.png` — **no longer referenced**. You can delete them or keep them around for the Instagram OG card.

## How to integrate

```bash
# In your local clone of jyuseflarry-max/theprogramsuite:
git checkout -b redesign
```

Then copy each of these files from this project into your repo at the matching paths:

```
src/app/page.tsx
src/app/layout.tsx
src/app/globals.css
src/app/privacy/page.tsx
src/app/terms/page.tsx
src/app/founder-access/thanks/page.tsx
src/app/founder-access/error/page.tsx
src/components/SiteNav.tsx
src/components/SiteFooter.tsx
src/components/primitives.tsx
src/components/FaqSection.tsx
public/images/product-receive.png
```

Then:
```bash
npm install     # nothing new, but refresh lockfile
npm run dev     # http://localhost:3000
npm run build   # production build
```

Commit and open a PR.

## Environment variables (unchanged)

Your `/api/founder-access` route already uses these — no changes needed, just make sure they're set in Vercel:

- `RESEND_API_KEY` (required to send leads)
- `FOUNDER_LEADS_TO_EMAIL` (default: `founders@theprogramsuite.com`)
- `FOUNDER_LEADS_FROM_EMAIL` (default: `The Program Suite <founders@theprogramsuite.com>`)
- `NEXT_PUBLIC_SITE_URL` (optional — used for redirects)

## Things to consider before launch

1. **Real product screenshots.** Right now the hero uses one screenshot (the Receive Shipment view). Add 3–4 more — Catalog, Athlete assignments, Kit builder, Risk dashboard — and we can swap them into the pillars as scroll-anchored vignettes.
2. **Real photo for the photo band.** It currently uses a synthetic CSS texture. A real photo of an inventory room / locker room / handout day would land much harder.
3. **Real testimonial.** The pull-quote in the photo band is a placeholder. Replace with a real founding program coach when you have one.
4. **OG image refresh.** Your existing `/og-image.png` was built for the old design — consider regenerating to match the new brass/navy editorial look.
5. **Cleanup.** Delete `public/images/texas-football-inventory-hero.png` and `public/images/schedule-dashboard-hero.png` once you've shipped the new design.

## Design tokens at a glance

```css
--color-ink: #0e1e2e;       /* deep slate navy (from your logo) */
--color-paper: #f4ede0;     /* warm chalk-cream */
--color-accent: #b8923f;    /* brass / warm gold (from your logo) */

--font-display: "Big Shoulders Display";  /* athletic editorial headlines */
--font-body: "Geist";                     /* modern SaaS body */
--font-serif: "Instrument Serif";         /* italic accent */
```

All defined in `src/app/globals.css` under `@theme`. Change them once, they update everywhere.
