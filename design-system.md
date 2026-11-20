# Design System: Bulacan Provincial Website Redesign (Concept)

**Owner:** Elton
**Status:** Draft
**Last updated:** 2026-11-20
**Related:** [PRD.md](PRD.md) · [system-design.md](system-design.md)

All values here become CSS custom properties in `src/styles/tokens.css`. Components use tokens only: no raw hex values, pixel sizes or durations.

---

## 1. Principles

1. **Clear before clever.** A resident on a phone should find what they need in one scroll. Hierarchy comes before decoration.
2. **One system, applied everywhere.** One type scale, one spacing scale, one heading style, one card shape.
3. **Rooted in Bulacan.** Colors come from the province's own identity: the navy of the current site and the gold of the official banner, with the seal's red and green for status colors.
4. **Feels alive, never noisy.** Every element responds to the user (Game-Feel UI, visual only). Motion explains; it never decorates for its own sake.
5. **Accessible by default.** WCAG 2.1 AA minimum for every token pairing; most text pairs reach AAA.

---

## 2. Source audit (live site, 2026-11-20)

Pulled from bulacan.gov.ph stylesheets and the official logo images:

| Found | Value | Used for |
|---|---|---|
| Header/footer navy | `#000642` | Kept as the brand navy (`--navy-950`) |
| "Province of Bulacan" banner gold | `#cc9c24` (dominant) | Kept as brand gold (`--gold-500`) |
| Seal red | `#c01818` | Basis for the error color |
| Seal green | `#009000` | Basis for the success color |
| Seal blue | `#006cfc` | Not used (would compete with navy) |
| Body font | Open Sans (theme), plus stray Roboto and Helvetica in plugin CSS | Open Sans only |
| Font sizes in CSS | 15+ distinct sizes (12–52px) plus `em` values | Replaced by a 6-step scale |
| Other colors | ~25 unrelated saturated colors from plugins and presets | Dropped |

---

## 3. Color

### 3.1 Brand palette

**Navy** (primary: structure, headings, primary buttons)

| Token | Hex | Use |
|---|---|---|
| `--navy-950` | `#000642` | Brand navy. Header on scroll, footer, hero overlay, headings |
| `--navy-900` | `#0a1660` | Footer secondary panels, dropdown on dark |
| `--navy-800` | `#13237a` | Primary button hover |
| `--navy-700` | `#1f3494` | Primary button, links |
| `--navy-600` | `#2f48b0` | Focus ring on light backgrounds |
| `--navy-200` | `#c9cfec` | Secondary text on navy |
| `--navy-100` | `#e6e9f5` | Tinted section background, selected chip |
| `--navy-50` | `#f3f5fb` | Hover background for tiles on white |

**Gold** (accent: the one color for actions and highlights)

| Token | Hex | Use |
|---|---|---|
| `--gold-700` | `#7d5c0a` | Gold text on light backgrounds (eyebrows, dates) |
| `--gold-500` | `#cc9c24` | Brand gold. Decorative rules, icons, active indicator |
| `--gold-400` | `#e3b53c` | Accent button background; gold text on navy |
| `--gold-300` | `#f0d27a` | Focus ring on dark backgrounds |
| `--gold-100` | `#fbf3dc` | Concept banner background, highlight surfaces |

### 3.2 Neutrals (slightly warm, to sit well with gold)

| Token | Hex | Use |
|---|---|---|
| `--white` | `#ffffff` | Page background, cards |
| `--surface-2` | `#f6f5f1` | Alternate section background |
| `--surface-3` | `#eeede9` | Skeletons, image placeholders |
| `--border` | `#cfccc4` | Decorative dividers and card outlines only |
| `--border-strong` | `#8f8b82` | Input borders and any border that conveys meaning (≥ 3:1) |
| `--text-subtle` | `#75726a` | Captions, metadata (≥ 4.5:1 on white only) |
| `--text-muted` | `#5c5a53` | Excerpts, secondary text |
| `--text` | `#1c1b18` | Body text |

### 3.3 Status

| Token | Hex | Use |
|---|---|---|
| `--success` | `#1d6b36` | Success text, icons, borders (from seal green) |
| `--success-bg` | `#e6f2ea` | Success surface |
| `--error` | `#b3261e` | Error text, icons, borders (from seal red) |
| `--error-bg` | `#fbeae8` | Error surface |
| `--warning` | `--gold-700` | Warning text |
| `--info` | `--navy-700` | Info text |

### 3.4 Semantic roles

| Role token | Maps to |
|---|---|
| `--bg` | `--white` |
| `--bg-alt` | `--surface-2` |
| `--bg-inverse` | `--navy-950` |
| `--fg` | `--text` |
| `--fg-muted` | `--text-muted` |
| `--fg-inverse` | `--white` |
| `--fg-inverse-muted` | `--navy-200` |
| `--link` | `--navy-700` |
| `--action-primary` | `--navy-700` (hover `--navy-800`) |
| `--action-accent` | `--gold-400` (text `--navy-950`) |
| `--focus` | `--navy-600` on light, `--gold-300` on dark |

### 3.5 Verified contrast pairs

| Foreground / background | Ratio | Level |
|---|---|---|
| `--text` on `--white` | 17.2 | AAA |
| `--text` on `--surface-2` | 15.8 | AAA |
| `--text-muted` on `--white` | 6.9 | AA |
| `--text-muted` on `--surface-2` | 6.3 | AA |
| `--text-subtle` on `--white` | 4.8 | AA |
| `--white` on `--navy-950` | 19.0 | AAA |
| `--white` on `--navy-700` | 10.6 | AAA |
| `--navy-700` (link) on `--white` | 10.6 | AAA |
| `--navy-200` on `--navy-950` | 12.3 | AAA |
| `--gold-400` on `--navy-950` | 9.9 | AAA |
| `--navy-950` on `--gold-400` (accent button) | 9.9 | AAA |
| `--gold-700` on `--white` | 6.2 | AA |
| `--gold-700` on `--gold-100` | 5.6 | AA |
| `--navy-950` on `--gold-100` (concept banner) | 17.2 | AAA |
| `--success` / `--error` on `--white` | 6.5 | AA |
| Focus `--navy-600` vs `--white` | 7.9 | ≥ 3:1 UI |
| Focus `--gold-300` vs `--navy-950` | 12.9 | ≥ 3:1 UI |
| `--border-strong` vs `--white` | 3.4 | ≥ 3:1 UI |
| `--border` vs `--white` | 1.6 | Decorative only |

**Rules:** `--text-subtle` is never used on `--surface-2` or darker. `--gold-500` and `--gold-400` are never used as text on light backgrounds. Never put text on top of a photo without the hero scrim (§9.3).

---

## 4. Typography

**Family:** Open Sans Variable (self-hosted, Latin subset, `font-display: swap`).
Fallback: `"Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

### 4.1 Type scale (6 steps)

| Token | Mobile (≤ 640) | Desktop (> 1024) | Line height | Weight | Use |
|---|---|---|---|---|---|
| `--text-sm` | 14px | 14px | 1.5 | 400 / 600 | Captions, dates, labels, footer links |
| `--text-base` | 16px | 16px | 1.6 | 400 | Body, excerpts, nav links |
| `--text-lg` | 18px | 20px | 1.4 | 600 | Card titles, lead paragraph |
| `--text-xl` | 20px | 24px | 1.3 | 700 | Sub-headings (h3) |
| `--text-2xl` | 26px | 32px | 1.2 | 700 | Section headings (h2) |
| `--text-3xl` | 32px | 40px | 1.15 | 700 | Hero headline (h1) |

Steps that change size use `clamp()` between the mobile and desktop values, so there are no jumps at breakpoints. This meets the PRD target of 5–6 sizes, down from 15+ on the live site.

### 4.2 Rules
- **Sentence case for every heading**, button and label. No all-caps headings. Uppercase is only allowed on the eyebrow style (§4.3), with letter spacing.
- **One heading style:** weight 700, `--navy-950` on light, `--white` on dark, letter-spacing `-0.01em` for `--text-2xl` and up.
- **Line length:** 45–75 characters for body text (`max-width: 65ch`).
- **Left-aligned** text everywhere except the hero on mobile if centered reads better. Never center paragraphs longer than two lines.
- **Weights:** 400 (body), 600 (emphasis, labels, buttons), 700 (headings). No other weights.
- Filipino passages get `lang="fil"`.

### 4.3 Text styles

| Style | Spec |
|---|---|
| Eyebrow | `--text-sm`, 600, uppercase, letter-spacing `0.08em`, `--gold-700` (light) / `--gold-400` (dark) |
| Body | `--text-base`, 400, `--fg` |
| Lead | `--text-lg`, 400, `--fg-muted` |
| Meta (dates) | `--text-sm`, 400, `--text-subtle`, `<time>` element |
| Link | `--link`, underline offset 3px, thickness 1px → 2px on hover |

---

## 5. Spacing and layout

### 5.1 Spacing scale (4/8 base)

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | 4px | Icon to label gap |
| `--space-2` | 8px | Tight stacks, chip padding |
| `--space-3` | 12px | Button vertical padding, card meta gap |
| `--space-4` | 16px | Mobile gutter, card padding (mobile) |
| `--space-5` | 24px | Card padding, grid gap |
| `--space-6` | 32px | Desktop gutter, heading to content |
| `--space-7` | 48px | Section padding (mobile) |
| `--space-8` | 64px | Section padding (tablet) |
| `--space-9` | 96px | Section padding (desktop) |

### 5.2 Layout

| Token | Value |
|---|---|
| `--container-max` | 1200px |
| `--container-narrow` | 720px (Governor's Message, long text) |
| `--gutter` | 16px mobile · 24px tablet · 32px desktop |
| Grid | 4 columns mobile · 8 tablet · 12 desktop; gap `--space-5` |

### 5.3 Breakpoints

| Name | Range | Notes |
|---|---|---|
| Mobile | ≤ 640px | Designed first. Drawer nav, single-column cards, swipe rows |
| Tablet | 641–1024px | 2-column cards, drawer nav |
| Desktop | > 1024px | Full single-row nav with dropdowns, 3–4 column grids |

Write CSS mobile-first: `@media (min-width: 641px)` and `@media (min-width: 1025px)`.

---

## 6. Shape and depth

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Chips, inputs, small buttons |
| `--radius-md` | 10px | Buttons, tiles |
| `--radius-lg` | 16px | Cards, images in cards |
| `--radius-xl` | 24px | Hero (desktop), feedback panel |
| `--radius-full` | 999px | Pills, dots, avatar-style icons |

Shadows are tinted with navy, not black, so they feel part of the palette:

| Token | Value | Use |
|---|---|---|
| `--shadow-1` | `0 1px 2px rgb(0 6 66 / 0.06), 0 1px 3px rgb(0 6 66 / 0.08)` | Cards at rest |
| `--shadow-2` | `0 4px 8px rgb(0 6 66 / 0.08), 0 8px 24px rgb(0 6 66 / 0.10)` | Card hover lift, sticky header |
| `--shadow-3` | `0 12px 32px rgb(0 6 66 / 0.16), 0 24px 64px rgb(0 6 66 / 0.12)` | Drawer, dropdowns, video player |

Borders: `1px solid var(--border)` for card outlines on white; cards on `--surface-2` drop the border and use `--shadow-1`.

### Z-index

| Token | Value |
|---|---|
| `--z-base` | 0 |
| `--z-raised` | 10 (hovered cards) |
| `--z-header` | 100 |
| `--z-dropdown` | 200 |
| `--z-overlay` | 300 (scrim) |
| `--z-drawer` | 400 |
| `--z-modal` | 500 (video player) |
| `--z-skip` | 1000 (skip link) |

---

## 7. Iconography and imagery

- **Icons:** one outline set ([Lucide](https://lucide.dev)), inlined as SVG at build time. Stroke 1.75px, sizes 20px (inline) and 24px (tiles). Color inherits `currentColor`.
- **No Font Awesome**: the live site loads the whole set; we only ship the icons used.
- **Photos:** 16:9 for hero and video thumbnails, 3:2 for news and "What to do" cards, original ratio for publication covers.
- **Posters with baked-in text:** crop to the image area where possible; the headline is real text (system-design §4.2).
- **Agency logos:** shown in a fixed 56×56px box on a white rounded square, so mixed logo styles look uniform.
- **Photos of officials** are never used as design elements. The slider posters, news photos and the Governor's message photo appear only as existing content, unaltered (PRD §3).
- **Alt text:** describe what the image shows; `alt=""` for decorative images.

---

## 8. Motion (Game-Feel UI, visual only)

Final values for system-design §6.2. **No sound and no haptics/vibration.**

| Token | Value | Use |
|---|---|---|
| `--dur-instant` | 120ms | Hover, press |
| `--dur-fast` | 200ms | Dropdowns, tooltips, chips |
| `--dur-medium` | 320ms | Drawer, video player, header compact |
| `--dur-slow` | 500ms | Hero slide change, section reveal |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entering |
| `--ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exiting |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Moving between two on-screen positions |
| `--ease-spring` | `linear(0, 0.25 7%, 0.69 18%, 0.96 29%, 1.04 38%, 1.03 47%, 1 60%)` | Press release, overshoot and settle |
| `--stagger` | 40ms | Delay per item |
| `--press-scale` | 0.97 | Squash on press |
| `--hover-lift` | `translateY(-4px)` | Card and tile lift |
| `--reveal-distance` | 16px | Rise distance for scroll reveals |

JS springs (Motion): stiffness 400, damping 30 for press and drag; stiffness 300, damping 32 for the drawer.

**Exit is faster than enter:** exits use the next shorter duration (e.g. dropdown opens at `--dur-fast`, closes at `--dur-instant`).

**Reduced motion:** all durations above 120ms collapse to a 150ms opacity fade; `--press-scale` becomes 1, `--hover-lift` becomes none, `--reveal-distance` becomes 0. State changes still show through color and outline.

---

## 9. Components

Each component lists its anatomy, variants and states. Every interactive component has **default, hover, focus-visible, active/pressed, disabled** states at minimum.

### 9.1 Focus ring (global)
`outline: 3px solid var(--focus); outline-offset: 3px; border-radius` matches the element. Animates in by `outline-offset` 0 → 3px over `--dur-instant`. Never removed without a replacement.

### 9.2 Button

| Variant | Rest | Hover | Pressed |
|---|---|---|---|
| Primary | `--navy-700` bg, white text | `--navy-800`, `--shadow-2` | scale `--press-scale`, spring back |
| Accent | `--gold-400` bg, `--navy-950` text | `--gold-500` | same |
| Secondary | transparent, `--navy-700` text, 1.5px `--navy-700` border | `--navy-50` bg | same |
| Ghost (on dark) | transparent, white text, 1.5px white/40% border | white/10% bg | same |
| Text link | `--link`, underlined | underline 2px, arrow nudges 4px right | — |

Sizes: md (44px height, `--space-3` / `--space-5` padding, `--text-base` 600) and sm (36px, `--text-sm`; never the only target on touch). Disabled: 40% opacity, `cursor: not-allowed`, no hover. Loading: label stays, spinner replaces the icon, width locked.
**One primary or accent button per section.**

### 9.3 Concept disclaimer
No site-wide banner (owner decision, 2026-11-20): a banner above the header would compete with the design being shown. The disclaimer "Concept redesign, not the official website of the Provincial Government of Bulacan." appears once, in the footer (§9.10), in `--text-sm` `--navy-200`. The page is also `noindex` and hosted off any official-looking domain.

### 9.4 Header and navigation
- **At rest (top of page):** `--bg-inverse` (brand navy) background with a 2px `--gold-500` bottom edge that echoes the gold frame of the banner. Left: the Lalawigan ng Bulacan seal (40px) beside the gold-framed "Republic of the Philippines · Province of Bulacan · The Official Website" plaque (44px tall, 40px on phones), kept from the official header as the wordmark. Nav on the right in white, search icon button. The People's Agenda logo shows in the header only at ≥ 1500px and always in the footer. On phones the seal is dropped and the plaque stays.
- **Scrolled:** sticky, height shrinks from 72px to 60px (60px to 52px on phones) over the first scroll distance and gains `--shadow-2`. Max 15% of the mobile screen (PRD). Progressive enhancement: where scroll-driven animations or motion aren't available it stays 72px.
- **Layout switch:** there is no fixed breakpoint. A script measures the inline row and uses it only when every link fits (about ≥ 1366px today, with the plaque in the header); otherwise the Menu button opens the drawer. Adding a link, a translation or larger text moves the switch point automatically. Without script, the nav shows inline and wraps.
- **Desktop nav:** single row, `--text-sm` 600 (a deviation from `--text-base`, needed to fit ten items in one row), white. Home is an icon-only link. Hover/open: `--gold-300` text with a 2px `--gold-400` underline that grows from the center. Current page: a 3px `--gold-400` underline always shown (9.9:1 against navy), `aria-current="page"`. Focus ring in the header is `--gold-300`; dropdown cards stay white with the normal navy ring.
- **Dropdown:** a native popover. A transparent wrapper provides a hover bridge, and the visible card is white, `--radius-lg`, `--shadow-3`, `--space-2` padding, items 40px tall. Opens on hover (mouse only) or Enter/Space, and positions itself with anchor positioning, flipping at screen edges. Each parent with its own page gets an "{Label} overview" first link. Links that are broken on the official site render as dashed placeholders. Third-level items (e.g. History → National Heroes) are an indented group with a small label, not a flyout. Cities and Municipalities uses a 3-column mega panel for its 24 entries.
- **Mobile drawer:** opens from the right, 88% width (max 400px), `--navy-950` background, white text, accordion sections with chevrons that rotate 180°. Scrim `rgb(0 6 66 / 0.5)`.

### 9.5 Hero
Each of the 13 slides is its **full poster, unaltered** (owner decision, 2026-11-20): shown at its own 2000:897 proportions, never tinted or overlaid with text. The artwork carries its own headline, so the hero adds nothing on top of it.
- **Inset with space around it** (owner decision, 2026-11-20, after trying full bleed): the poster sits in a frame inside the page gutter (max 1440px wide, `--radius-xl` from 641px and `--radius-lg` on phones, `--shadow-2`), with `--space-5` above and `--space-7` below it (`--space-4` and `--space-6` on phones), so it never covers the page edge to edge. It scales with the frame width at 2000:897 and its height is capped at `min(680px, 100svh - header - 96px)`, so the hero is never taller than the screen. **The poster is never cropped:** when the screen is short, the frame itself gets narrower (its max width is the capped height times 2000/897) and stays centered, so the poster shrinks as a whole.
- **Track:** a native scroll-snap row, one slide per swipe. Swipe, arrow keys and the no-JS scroll all work without script.
- **Controls:** previous and next are 48px round buttons on the **left and right edges** of the poster, vertically centered (44px, translucent navy with `backdrop-filter: blur(8px)`; tablet and up). A 13-segment progress scrubber (an invisible native range laid over it, so there are no 13 tab stops) sits in a slim navy bar under the poster, so it never covers the artwork. There is **no play button and no slide numbers** (owner decision, 2026-11-20), and slides never advance on their own. On phones swiping moves between slides and the arrows are hidden. Previous and next disable at the ends and hand focus to the other button.
- **Accessibility:** the page's only h1 is a visually hidden "Provincial Government of Bulacan". Each poster's alt text transcribes everything it says (`slideAlt` in `src/data/hero.ts`), and the active slide's title is announced politely after the person moves the carousel.
- **Motion:** nothing moves on a poster. Under reduced motion slides snap instantly.

### 9.6 Section heading
Eyebrow (optional) → h2 `--text-2xl` → optional lead → optional "View all" text link aligned right on desktop, below on mobile. A 40×3px `--gold-500` bar sits above the eyebrow. Spacing to content: `--space-6`.

### 9.7 Cards

**Shared:** `--radius-lg`, white background, `--shadow-1` or `--border`, whole card is one link (title link with a stretched pseudo-element), equal heights in a row (`display: grid` + `grid-template-rows: subgrid` or flex column with the footer pushed down).
Hover: `--hover-lift` + `--shadow-2`, image scales 1.05 inside its frame. Pressed: `--press-scale`.

| Card | Anatomy |
|---|---|
| **News** | 3:2 image · date (meta) · title (`--text-lg`, 3-line clamp) · excerpt (`--text-base` muted, 3-line clamp) · "Read more →" |
| **Image** (What to do) | Full-bleed 3:2 or 4:5 image, scrim, label (`--text-xl` white) bottom-left; description slides up on hover/focus, always shown on touch |
| **Publication** | Cover (original ratio, subtle tilt on hover on desktop) · title · issue (meta) |
| **Video** | 16:9 thumbnail · centered 56px play button (white circle, navy icon, scales 1.1 on hover) · title (`--text-base` 600, 2-line clamp) |
| **Quick link tile** | See §9.7.1 |
| **Agency tile** | 56px logo box · full name (`--text-base` 600) · acronym (eyebrow style) · one-line description (`--text-sm` muted) · external-link icon |

#### 9.7.1 Quick link tile
Six tiles (system-design §4.4). The tile changes shape per breakpoint so the hint always has room:

| Breakpoint | Grid | Tile layout |
|---|---|---|
| Mobile (≤ 640) | 2 columns, gap `--space-3` | Stacked: 40px icon circle on top, label below (`--text-base` 600, up to 2 lines). **Hint hidden** (kept as `aria-describedby` text for screen readers). Min height 112px |
| Tablet (641–1024) | 3 columns, gap `--space-4` | Horizontal: 48px icon circle left; label + hint (`--text-sm` muted, 2-line clamp) right; chevron far right |
| Desktop (> 1024) | 6 columns, gap `--space-4` | Stacked: 48px icon circle, label, hint (`--text-sm` muted, 2-line clamp); chevron/external icon top-right |

- **Surface:** white, `--border`, `--radius-md`, padding `--space-4`. The whole tile is the link.
- **Icon circle:** `--navy-100` background, `--navy-700` icon (24px, 20px on mobile).
- **Hover:** `--hover-lift`, `--shadow-2`, background `--navy-50`; icon circle turns `--navy-700` with a white icon (`--dur-instant`); the icon nudges up 2px (anticipation) before the lift.
- **Pressed:** `--press-scale`, spring back.
- **External tile (PESO):** external-link icon replaces the chevron; label gets visually hidden "(opens in a new tab)".
- **Labels must fit in 2 lines at 2 columns on a 360px screen.** "Cities & Municipalities" is the longest and has been checked at `--text-base`.
- **Reveal:** tiles stagger in at `--stagger` the first time the row enters view.

#### 9.7.2 Governor's Message section
Its own brief section between News and "What to do" (owner decision, 2026-11-20), not a side card. It keeps the live site's photo of the Governor and Vice Governor and expands the full message on request.

- **Surface:** brand navy (`--bg-inverse`) full-width band, so the white-shirted cutout photo reads clearly, with a soft `--gold-500` glow behind the photo. This also breaks up the long run of white and `--surface-2` sections.
- **Layout (> 1024px):** photo left (5 of 12 columns, max 520px) standing on the bottom edge of the band (the section adds no padding below it), text right (7 of 12, vertically centered). Below 1025px the text comes first and the photo stands on the bottom edge beneath it, centered. DOM order is text first (heading, then photo) on every screen.
- **Text (top to bottom):** gold bar, eyebrow "From the Governor" (`--gold-400`), h2 "Governor's Message" (white), then the **opening paragraph only**, set at `--text-xl` with a `--gold-400` quote mark, then the attribution ("Daniel R. Fernando", "Governor of Bulacan").
- **Expand in place:** a ghost button "Read full message" with a chevron, built on a native `<details>`/`<summary>`. Opening reveals the remaining five paragraphs in `--fg-inverse-muted`, the label changes to "Show less" and the chevron turns 180°. It slides open where the browser can animate to an intrinsic height and opens instantly elsewhere and under reduced motion. It works without script, and the hidden text is still found by Find in page.
- **Photo:** alt text "Governor Daniel R. Fernando and Vice Governor Alex C. Castro". It is existing content from the live site, not a design element.
- **Reveal:** the text and the photo rise in on scroll, the photo one step later.

### 9.8 Filter chip (agencies)
36px tall pill, `--radius-full`. Rest: white, `--border-strong` border. Selected: `--navy-950` bg, white text, check icon draws in. Hover: `--navy-50`.

### 9.9 Feedback call to action
Navy panel (`--bg-inverse`), `--radius-xl`. Left: heading, one line of text, accent button "Give feedback" (opens the official form in a new tab). Right: QR code on a white rounded square with caption. Stacks on mobile with the QR hidden behind a "Show QR code" toggle, since scanning a code on the same phone doesn't work.

### 9.10 Footer
`--navy-950` background, `--navy-200` text, white headings (`--text-sm` 600, eyebrow style in gold-400).
Columns (desktop 4, tablet 2, mobile accordion): **Government**, **Services** (Webmail, SEPS Online, E-Procurement…), **Media** (Galing Bulacan, Radyo Kapitolyo, publications), **Resources** (PAGASA, gov.ph). Bottom row: Transparency Seal + Philippine Government Seal + People's Agenda logo, credit line (Provincial Information Technology Office as original content source), copyright, and the concept disclaimer repeated.

### 9.11 Search overlay (visual only)
A native popover panel anchored under the search icon, right-aligned, with the field focused on open. Submitting runs `feedback.error()` (shake, and a red border for reduced motion) and shows an inline message: "Search isn't available in this concept."

### 9.12 Skip link
First focusable element. Hidden until focused, then slides down from the top: `--navy-950` bg, white text, `--z-skip`.

### 9.13 Placeholder link (broken on the official site)
Rendered as text in `--text-subtle` with a dashed underline and a tooltip/label "Link unavailable on the official site". Not focusable as a link.

---

## 10. Tokens file preview

```css
:root {
  /* Color: brand */
  --navy-950: #000642; --navy-900: #0a1660; --navy-800: #13237a; --navy-700: #1f3494;
  --navy-600: #2f48b0; --navy-200: #c9cfec; --navy-100: #e6e9f5; --navy-50: #f3f5fb;
  --gold-700: #7d5c0a; --gold-500: #cc9c24; --gold-400: #e3b53c; --gold-300: #f0d27a; --gold-100: #fbf3dc;

  /* Color: neutral + status */
  --white: #ffffff; --surface-2: #f6f5f1; --surface-3: #eeede9;
  --border: #cfccc4; --border-strong: #8f8b82;
  --text: #1c1b18; --text-muted: #5c5a53; --text-subtle: #75726a;
  --success: #1d6b36; --success-bg: #e6f2ea; --error: #b3261e; --error-bg: #fbeae8;

  /* Type */
  --font-sans: "Open Sans Variable", "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: clamp(1.125rem, 1.05rem + 0.25vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);
  --text-2xl: clamp(1.625rem, 1.4rem + 0.95vw, 2rem);
  --text-3xl: clamp(2rem, 1.7rem + 1.25vw, 2.5rem);

  /* Space */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-5: 24px;
  --space-6: 32px; --space-7: 48px; --space-8: 64px; --space-9: 96px;

  /* Shape */
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-xl: 24px; --radius-full: 999px;

  /* Motion */
  --dur-instant: 120ms; --dur-fast: 200ms; --dur-medium: 320ms; --dur-slow: 500ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: linear(0, 0.25 7%, 0.69 18%, 0.96 29%, 1.04 38%, 1.03 47%, 1 60%);
  --stagger: 40ms; --press-scale: 0.97; --reveal-distance: 16px;
}

@media (prefers-reduced-motion: reduce) {
  :root { --press-scale: 1; --reveal-distance: 0px; }
}
```

The full file (semantic roles, shadows, z-index, layout) is generated from this document when the build starts.

---

## 11. Open items

- **Dark mode:** not in v1. The semantic role tokens (§3.4) are set up so it can be added later by remapping them.
- **Navy on the logo lockup:** confirm the wordmark reads well at 40px; it may need a simplified SVG redraw for crispness.
- **Hero aspect ratio on mobile:** 4:5 is the starting point; confirm against real poster crops.
- **Gold on large surfaces:** test the accent button and concept banner on a real phone screen in sunlight.
