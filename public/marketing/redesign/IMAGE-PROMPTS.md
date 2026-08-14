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
| `founder-wide` | 16:9 (wide) | **Full-bleed "Why I built this" background.** The real founder huddle photo, outpainted/extended to 16:9: keep the coach + team huddle sharp on the LEFT, open court extending to the RIGHT. The site darkens the right side with a gradient for the story text. No text baked in. |
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

## Rotating hero panes (Adobe-style category hero)

Four hero images, one per category card (Run the program / Coach the game /
Fund the program / Bring families in). Rolling over a card slides in that
card's hero. Save as `hero-run.jpg`, `hero-game.jpg`, `hero-fund.jpg`,
`hero-family.jpg` (16:9, largest export size).

> **STATUS: generated & composited (2026-08-13).** The `hero-*-blank.jpg`
> files are the AI originals with empty screens; `hero-*.jpg` are the finals
> with real product screenshots perspective-warped onto every screen.
> To refresh after a screenshot changes: `python3 scripts/compose-hero-screens.py`
> (that script also documents which capture goes on which device; the fund
> phone's graphic is `hero-fund-graphic.png` — swap that file to change the post).

**Direction (locked 2026-08-13): FIRST-PERSON POV, bright & airy.** Every hero
is shot from the user's own eyes — your hands, your desk, your field. No faces
of the "you" character, ever. Daylight, clean whites, optimistic. No moody
night scenes.

**Series rules (bake into every prompt):**
- Generate all four in ONE ChatGPT conversation. After the first image, start
  each following prompt with: *"Same photographic series as the previous image —
  identical bright color grade, lens, and the same first-person hands."*
- Keep the LEFT THIRD simple and uncluttered (plain wall, open court, open
  sky) — the headline renders there live over the image.
- Every screen in the scene is BLANK with a soft cool glow — never let the AI
  draw UI. Composite real app screenshots onto the screens in post.

**Base block (paste at the top of each prompt):**
> Bright, airy editorial photograph, 16:9 landscape, FIRST-PERSON POV: shot
> from the subject's own eye level, their hands visible in the lower frame,
> face never shown. Natural daylight, clean whites, soft shadows, crisp and
> optimistic; shallow depth of field; subtle blue and warm-gold accents in the
> environment. Keep the LEFT THIRD of the frame simple and uncluttered — a
> large headline will be overlaid there. Every screen in the scene is BLANK
> with only a soft cool glow — no readable interface, icons, or text anywhere.
> No logos, no watermarks.

| id | scene |
|----|-------|
| `hero-run` | POV: you are the coach sitting at a tidy desk in a sunlit athletics office in the morning. Your own hands rest on a keyboard in the lower frame. Slightly right of center, a large desktop monitor with a blank, softly glowing screen; an iPhone leans against its stand, also glowing. On the desk: a coffee mug, a whistle on its lanyard, a small stack of numbered index cards, one neat notepad. Big soft window light from the left; through an interior window, a bright empty gym court. Mood: the whole program handled before first period. |
| `hero-game` | POV: your hands hold an iPad (blank glowing screen) at the scorer's table of a bright, sun-filled high-school gym — daylight pouring through high windows onto polished maple. A laptop sits open to the right, screen blank; a basketball and a marker rest beside it. The far court and championship banners are softly out of focus in the light. Mood: game-planning in the daylight, everything under control. |
| `hero-fund` | POV: your two hands hold an iPhone up in landscape, framing the football field below from the top of the home bleachers at golden hour — the phone screen a blank soft glow. Beyond it, a vivid green field in warm late-afternoon sun, players warming up small in the distance, blue sky with a little gold flare. A plain BLANK banner on the fence rail nearby (no lettering). Mood: every golden hour is content; the program looks big-time. |
| `hero-family` | POV: you are the parent leaning on a bright kitchen counter in the morning, your own hand steadying an iPhone propped against a fruit bowl, screen a blank soft glow. Beside the phone, your teenage athlete leans in smiling at the screen, morning light across the counter, a glass of orange juice, a numbered jersey folded on a stool behind. Mood: the program reaches home; nothing is missed. |
