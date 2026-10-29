# Annual package pricing

The public offer is five independent packages. Prices are USD per program (one
sport including its teams), billed annually. Core is included with any paid
package, has no separate fee, and is not sold on its own.

| Package | Annual price |
| --- | ---: |
| Practice | $250 |
| Performance | $500 |
| Strategy & Film | $350 |
| Live Game & Analytics (basketball only) | $250 |
| Inventory | $400 |
| All five, including Core | $1,750 |

`src/lib/product-catalog.js` owns package prices, names, feature boundaries, Core
groups, and estimate calculations. Existing app identifiers `strength` and
`scouting_film_analytics` remain stable even though their public names changed.
The homepage, pricing page, product pages, lead interests, and structured data
use this catalog. No monthly offer or bundle discount is introduced.

Strategy & Film includes 600 new upload minutes per annual term, 600 retained
minutes at once, and 10,000 delivered minutes per annual term, using Basic 1080p.
YouTube/Vimeo links are unlimited. A hosted asset shared by Film, Playbook, and
Practice counts once toward upload and retained limits; actual playback counts
toward delivery. Deleting a video frees retained capacity but does not replenish
annual uploads. Practice alone supports external drill video links.

## Presentation rationale

- A shared Core panel precedes five equal package cards. These products can be
  combined, so an ascending tier ladder would imply the wrong buying model.
  [NN/G comparison-table guidance](https://www.nngroup.com/articles/comparison-tables/)
  cautions that tables are not always the primary tool for products that are not
  mutually exclusive. The secondary matrix answers this specific offer's
  shared-Core and package-boundary questions.
- Prices and annual billing units appear next to package actions. An optional
  estimate adds selected prices without charging for Core again. This applies
  [NN/G B2B pricing guidance](https://www.nngroup.com/articles/b2b-trust-from-b2c/)
  on visible prices and clear package explanations. It is a design rationale,
  not a claim of a proven conversion uplift.
- The comparison has semantic row/column headers, a caption, a distinct Core
  row, and readable sticky headings. On phones, visitors select two packages
  instead of shrinking five columns. See
  [W3C table guidance](https://www.w3.org/WAI/tutorials/tables/) and NN/G's mobile
  comparison recommendations.

## Billing handoff

The marketing repo does not provision Stripe prices or change app entitlements.
At implementation, app `origin/main` still quoted $250 for every package, which
conflicts with Performance, Strategy & Film, and Inventory here. Until the app
catalog and live Stripe prices are updated and verified, package calls to action
use the existing demo inquiry form instead of sending customers to an incorrect
checkout. Multi-package inquiries preserve selected IDs in a URL and compute
names and prices from the trusted catalog into the existing CRM message field.

Public gamecast and Team Standards remain out of the advertised included offer
because current app source holds them behind release gates. Tryouts & Camps,
Finance & Sponsors, Studio, and Recruiting are not part of the paid catalog.

## Validation

Run `npm test`, `npm run typecheck`, and `npm run build`. The contract check
covers all 32 possible package selections, deduplicated totals, preserved inquiry
selections, stable IDs, allowed products, Film limits, and route compatibility.
Use a browser to verify the estimator, inquiry prefill, and the mobile two-package
comparison. This change was checked at desktop and 390px phone width.
