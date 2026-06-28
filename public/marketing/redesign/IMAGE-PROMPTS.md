# Redesign photo slots — generate & drop in

Every lifestyle/photo on the new homepage is a **slot** rendered by
`src/components/marketing/Photo.tsx`. Until a real file exists, a labelled
placeholder shows, so the page is already complete.

## How to add a real image
1. Generate the image in ChatGPT (GPT image, **high** quality) with the prompt below.
2. Save it as `public/marketing/redesign/<id>.jpg` (use the exact id).
3. Open `src/components/marketing/Photo.tsx` and set that id's value in the
   `PHOTOS` map from `null` to `"/marketing/redesign/<id>.jpg"`.

That's the only change — no layout edits.

## Shared style (paste at the top of every prompt)
> Cinematic editorial sports photography, natural window/golden-hour light, shallow
> depth of field, authentic candid moment (not stocky), muted teal-and-amber grade,
> deep navy shadows, subtle film grain. No text, no logos, no watermarks.

| id | aspect | what to generate |
|----|--------|------------------|
| `hero-field` | 16:9 (wide) | **Full-bleed homepage hero.** A coach shot from BEHIND, standing at the edge of a football field at night under stadium lights, his team gathered in front of him on the grass, crowd softly out of focus in the stands. Cinematic, aspirational, shallow depth. **No overlaid text** — headline renders live over the dark left side; keep the left third in shadow. |
| `hero-coach` | 4:5 (portrait) | _(Currently unused — kept for future use.)_ A coach (40s) sitting courtside on a bench in a dim empty gym at dusk, looking at a phone. |
| `problem-buried` | 16:10 (wide) | **Full-bleed background for the Problem section.** A stressed coach at a cluttered dark office desk, head in hand, surrounded by tablets/laptop/phones showing different apps (inbox, inventory, practice plan, team chat), sticky notes, a "To Do List" notepad, stacked binders ("Practice Plans", "Equipment", "Game Day"), a "Focus Family Football" poster. Moody, cinematic. **Export WITHOUT any overlaid headline/marketing text** — the site renders the words live over the dark left side. Keep the left third in shadow for legibility. |
| `problem-embrace` | 5:6 (portrait) | _(Currently unused — kept for future use.)_ The coach at home embracing his young daughter, fully present, warm interior light. |
| `tools-practice` | 9:19 (phone screen) | A clean mobile app screen for a "Practice Planner" — schedule blocks, dark UI, blue accents. (Or reuse a real product screenshot.) |
| `tools-training` | 9:19 | Mobile "Training" screen — strength groups, load tracking, dark UI. |
| `tools-communication` | 9:19 | Mobile "Communication" screen — team chat / announcements, dark UI. |
| `tools-graphics` | 9:19 | Mobile "Graphics" screen — a game-day social graphic being built, dark UI. |
| `tools-inventory` | 9:19 | Mobile "Inventory" screen — gear list, quantities, dark UI. |
| `story-1` | 4:3 (landscape) | A coach high-fiving / celebrating with a youth athlete on a field, pure joy. |
| `story-2` | 1:1 (square) | A team huddle from above, hands in the center. |
| `story-3` | 1:1 (square) | A coach on the sideline mid-game, focused, whistle. |
| `live-better` | 16:7 (wide) | A coach laughing at the dinner table with his family (partner + 2–3 kids), bowls of food, warm home light. Left third darker for overlaid text. |

> Note: `founder` already uses the existing `/marketing/founder.png`. The five
> `tools-*` slots can also be filled with real app screenshots from
> `public/images/current-app/` if you prefer real UI over generated mockups.

## Phase 3 (upcoming — generate these next)

These power the sections we build next: the "What it gives you back" 4-card
band, the product "sneak peek", and the "Two hours back" CTA. Same shared style
as above. Each card photo has a dark overlay, so faces/action should sit in the
upper half; keep the lower third uncluttered for the caption.

| id | aspect | what to generate |
|----|--------|------------------|
| `gives-coach` | 3:4 (portrait) | A coach on the sideline coaching, clipboard/whistle, fully in his element. ("You coach. We'll handle the busy work.") |
| `gives-athletes` | 3:4 | Young athletes in a tight team huddle, arms around each other, a coach leaning in. ("Your athletes deserve your attention.") |
| `gives-family` | 3:4 | A coach at home at dinner with his family, warm light, laughing. ("Your family deserves your evenings.") |
| `gives-consistency` | 3:4 | A team lifting a trophy / celebrating a win together, confetti or stadium lights. ("Great programs are built with consistency.") |
| `cta-sunset` | 16:7 (wide) | A coach walking off the field at sunset with his young child, silhouetted, holding hands. Warm golden backlight. Right side darker for an overlaid card. ("Imagine getting two hours of your week back.") |
| `product-dashboard` | use real UI | The "sneak peek" product shot — a phone + web dashboard. Best filled with a **real** screenshot from `public/images/` rather than generated, so the UI is authentic. |
