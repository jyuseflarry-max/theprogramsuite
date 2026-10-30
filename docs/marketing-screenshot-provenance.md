# Marketing screenshot provenance

Capture date: **2026-10-29**. Source: the authenticated **Riverside fictional
demo account**, captured through the application's browser UI with the owner's
approval to prepare example data. These are application captures, not mockups,
generated illustrations, customer testimonials, or real school records.

Published assets belong in `public/marketing/screens/current/`. The shared map
in `src/lib/marketing-screenshots.ts` owns their paths, alt text, and dimensions.
All eight JPEG files were copied directly from the completed browser captures.
Their individual dimensions are recorded below and in the shared image map.

| File | View shown | Dimensions |
| --- | --- | --- |
| `core-roster.jpg` | Shared athlete roster in Core | 1309 × 818 |
| `core-schedule.jpg` | Shared team schedule in Core | 1309 × 818 |
| `inventory-stock.jpg` | Inventory equipment stock | 1309 × 818 |
| `performance-exercises.jpg` | Performance exercise library | 1309 × 818 |
| `practice-plan.jpg` | Riverside Skills Session practice plan | 1309 × 818 |
| `strategy-playbook.jpg` | Basketball playbook and starter diagram | 1440 × 900 |
| `basketball-capture.jpg` | Full-screen basketball court entry | 1309 × 818 |
| `basketball-analytics.jpg` | Analytics from the same demo basketball events | 1309 × 818 |

## Demo preparation

- Installed the exercise starter pack: **164 exercises, 12 primary**.
- Added a **Basketball Skills** drill library with three ten-minute drills.
- Populated the existing **July 28 Riverside Skills Session** with those drills,
  totaling **30 minutes**. The session date is demo content, not the capture date.
- Created an independent **5-Out Give & Go** play from the built-in starter. It
  remains private and unshared.
- Created a one-off **Riverside Demo vs Lakeside** game dated October 29 and
  recorded four fictional actions: Ellison three-pointer, Lakeside team two,
  Banks steal, and Banks three-pointer with a left-wing location. Capture and
  analytics show the same **6–2** score. The game is **not finalized** and has no
  public Gamecast publication.

This work changes demo records and marketing presentation. It does not change
application code, billing, entitlements, or the product's underlying behavior.

## Presentation and scope

Visible captions identify the source as **“Riverside demo program · fictional
data.”** Cards and product figures preserve the full UI with proportional
resizing; screenshots are not redrawn, composited, or populated by editing image
pixels. The hero shows the matching capture in a clear frame beside its copy on
desktop and below the copy on phones.

Core roster and schedule images illustrate the included foundation. Package
images illustrate their named views: the exercise library does not establish
training outcomes, the playbook image does not demonstrate hosted-film playback,
and sample basketball events are not actual competition results. These captures
do not change the paid-package boundaries. Incidental demo-account navigation
does not expand the paid catalog or the tools included in Core.

The Live Game popout and product page pair court entry with the report from the
same recorded demo events. The analytics sample is small and illustrative; it
does not establish season performance or imply that the game is finalized.

The homepage carousel and popouts, hero, product pages, dedicated Inventory page,
and Core page use the shared map. Historical screenshots and lifestyle composites
remain in the repository but are no longer used as active package proof.

## Completion check

All eight published files match their source captures byte for byte, and their
dimensions have been checked. Validation on October 29 passed: `npm test`,
`npm run typecheck`, and `npm run build -- --webpack` (28 pages generated).

Browser review covers desktop and phone layouts, carousel navigation, and every
package popout.
Check that each published asset resolves successfully and that no image is
stretched, cropped in a product card, or paired with the wrong package.
