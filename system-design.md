# System Design: Bulacan Provincial Website Redesign (Concept)

**Owner:** Elton
**Status:** Draft
**Last updated:** 2026-11-20
**Related:** [PRD.md](PRD.md) · `design-system.md` (to do) · `content.md` (to do) · `goals.md` (to do)

---

## 1. Overview

A static, front-end-only concept homepage that re-presents the content of https://bulacan.gov.ph/ with a new layout and visual design. There is no backend, no database, no user data, and no CMS. The whole site is built once into HTML, CSS, a small amount of JavaScript, and optimized images, then served from a CDN.

```
 ┌──────────────┐   build    ┌──────────────────┐  deploy   ┌──────────────────────┐
 │ Source repo  │ ─────────▶ │ Static output    │ ────────▶ │ CDN / static host    │
 │ (Astro, data │  (CI)      │ HTML, CSS, JS,   │           │ personal subdomain,  │
 │  files, raw  │            │ WebP/AVIF images │           │ noindex, HTTPS       │
 │  assets)     │            └──────────────────┘           └──────────┬───────────┘
 └──────────────┘                                                      │
                                                                       ▼
                                                              ┌──────────────────┐
                                                              │ Visitor browser  │
                                                              │ (mobile first)   │
                                                              └────────┬─────────┘
                                                                       │ only on click
                                                                       ▼
                                                     ┌──────────────────────────────┐
                                                     │ External: YouTube (videos),  │
                                                     │ official bulacan.gov.ph      │
                                                     │ subdomains, Google Form      │
                                                     └──────────────────────────────┘
```

---

## 2. Requirements

### 2.1 Functional
| # | Requirement | Source |
|---|---|---|
| F1 | Render every homepage section from the content inventory | PRD §5, §7 |
| F2 | Desktop single-row nav with dropdowns (up to 3 levels); mobile drawer menu | PRD §6 #3 |
| F3 | Hero with a real text headline over an image, with accessible controls | PRD §6 #4 |
| F4 | Videos shown as thumbnails; the YouTube player loads only on click | PRD §6 #12 |
| F5 | Search icon and any forms are visual only. Nothing is submitted or stored | PRD §3 |
| F6 | Disclaimer "Concept redesign, not the official website" in the footer (no site-wide banner) | PRD §3 |
| F7 | Outbound links go to the real official URLs and open in a new tab. Known broken links are shown as disabled placeholders | Review of live site |

### 2.2 Non-functional
| # | Requirement | Target |
|---|---|---|
| N1 | Homepage weight (first load, uncached) | < 3 MB total; < 1 MB above the fold |
| N2 | Lighthouse Performance (mobile) | 90+ |
| N3 | Lighthouse Accessibility | 95+ (WCAG 2.1 AA) |
| N4 | Largest Contentful Paint (mobile, 4G) | < 2.5 s |
| N5 | Cumulative Layout Shift | < 0.1 |
| N6 | JavaScript shipped | < 30 KB gzipped, no framework runtime |
| N7 | Works without JavaScript | All content and links readable; only enhancements (slider, drawer animation, video player) need JS |
| N8 | Breakpoints | ≤ 640 mobile, ≤ 1024 tablet, > 1024 desktop |

### 2.3 Constraints
- One developer, built with Claude Code, recorded for reels. A simple, readable stack matters more than flexibility.
- No cost beyond a free hosting tier.
- Must never look like an official deployment (see §9).
- Interaction design follows the Game-Feel UI approach (see §6), **without sound or haptics/vibration**.

---

## 3. Stack decision

**Decision: [Astro](https://astro.build) (static output) + plain CSS with custom properties + vanilla TypeScript for interactivity.**

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| Plain HTML/CSS/JS | Zero tooling, easiest to explain on camera | Manual image optimization (the main lever for 59 MB → < 3 MB), repeated markup for 24 municipalities, 23 agencies, 10 videos | Workable, but the image pipeline alone justifies a build step |
| **Astro (static)** | Components without a JS runtime; built-in image pipeline (WebP/AVIF, `srcset`, width/height to prevent CLS); data-driven sections; outputs plain HTML | One build step and a `node_modules` to install | **Chosen** |
| Next.js / Nuxt / SvelteKit | Familiar, rich ecosystem | Ships a framework runtime by default; server features unused; harder to hit N6 | Overkill for a static page |
| Tailwind CSS | Fast to build | Class-heavy markup reads poorly in reel close-ups; the design system is better shown as named tokens | Not used; plain CSS with tokens instead |

Fonts: Open Sans (variable), self-hosted via `@fontsource-variable/open-sans`, Latin subset only, `font-display: swap`. No Google Fonts request.

---

## 4. Architecture

### 4.1 Project structure

```
/
├── PRD.md, system-design.md, design-system.md, content.md, goals.md
├── astro.config.mjs
├── package.json
├── public/
│   ├── robots.txt              # Disallow: /
│   └── favicon.svg
├── src/
│   ├── data/                   # Single source of truth for content (PRD §5)
│   │   ├── nav.ts              # Menu tree incl. 24 municipalities, 9 hospitals
│   │   ├── hero.ts             # Featured slides (title, date, image, link)
│   │   ├── quickLinks.ts       # 6 task tiles (§4.4)
│   │   ├── governor.ts         # Excerpt + link to full message
│   │   ├── experience.ts       # Shop / Invest / Have Fun
│   │   ├── news.ts             # Latest 3 items
│   │   ├── publications.ts     # The Capitol, Bulacan Ngayon
│   │   ├── videos.ts           # YouTube IDs + titles
│   │   ├── agencies.ts         # Logo, full name, short description, URL
│   │   └── footer.ts           # Footer link groups, seals, credits
│   ├── assets/                 # Raw images (posters, logos, thumbnails), optimized at build
│   ├── styles/
│   │   ├── tokens.css          # Colors, type scale, spacing, radii, shadows, motion (from design-system.md)
│   │   ├── motion.css          # Shared hover/press/focus/enter keyframes + reduced-motion overrides
│   │   ├── base.css            # Reset, typography, focus styles
│   │   └── utilities.css       # Container, visually-hidden, stack/cluster layouts
│   ├── components/
│   │   ├── Header.astro        # Logos + Nav + search icon
│   │   ├── Nav.astro           # Desktop dropdowns + mobile drawer (same markup)
│   │   ├── Hero.astro
│   │   ├── QuickLinks.astro
│   │   ├── SectionHeading.astro
│   │   ├── NewsCard.astro
│   │   ├── ImageCard.astro     # "What to do" + publications
│   │   ├── VideoCard.astro     # Thumbnail facade
│   │   ├── AgencyTile.astro
│   │   ├── Button.astro
│   │   ├── FeedbackCta.astro
│   │   └── Footer.astro
│   ├── scripts/                # Progressive enhancement only
│   │   ├── nav.ts              # Drawer open/close, focus trap, Esc, aria-expanded
│   │   ├── hero.ts             # Slide controls, pause on hover/focus, reduced motion
│   │   ├── carousel.ts         # Video row scroll buttons
│   │   ├── video-facade.ts     # Swap thumbnail for iframe on click
│   │   ├── reveal.ts           # Scroll-triggered, staggered section/card entrances
│   │   ├── header-scroll.ts    # Compact header state on scroll
│   │   └── feedback.ts         # Visual-only feedback helper (press, success, error)
│   ├── layouts/
│   │   └── BaseLayout.astro    # <head>, meta, noindex, Header, Footer
│   └── pages/
│       └── index.astro         # Composes sections in PRD §7 order
└── .github/workflows/ci.yml    # Build + Lighthouse CI + deploy
```

### 4.2 Data model

Content lives in typed TypeScript files, not in markup. Components only render. This keeps `content.md` and the code in sync, and makes the "keep all content" goal checkable in review.

```ts
type Link = { label: string; href: string; external?: boolean; broken?: boolean };

type NavItem = Link & { children?: NavItem[] };      // up to 3 levels

type Slide = {
  title: string;              // real text headline (replaces text baked into posters)
  date?: string;              // ISO date
  image: ImageMetadata;       // poster, cropped to remove baked-in text where possible
  imageAlt: string;
  link?: Link;
};

type NewsItem = { title: string; date: string; excerpt: string; image: ImageMetadata; imageAlt: string; href: string };

type Publication = { title: string; issue: string; cover: ImageMetadata; href: string };

type Video = { youtubeId: string; title: string };   // thumbnail from i.ytimg.com, or a local copy

type Agency = {
  acronym: string;            // "PDRRMO"
  name: string;               // "Provincial Disaster Risk Reduction and Management Office"
  description: string;        // one line
  logo: ImageMetadata;
  href: string;
};
```

`broken: true` renders the link as a disabled placeholder with "(link unavailable on the official site)" text, rather than linking to `#`.

### 4.3 Page composition (PRD §7)

```
BaseLayout
├── Header → Nav
└── <main>
    ├── Hero                 h1 lives here (visually the featured headline)
    ├── QuickLinks           6 task tiles (§4.4)
    ├── <div .row-news>
    │   ├── News             3 × NewsCard + "View all"      (wide column)
    │   └── GovernorMessage  excerpt + "Read full message" (side card, no portrait)
    ├── WhatToDo             3 × ImageCard, full width
    ├── <div .row-media>
    │   ├── Publications     2 × ImageCard, stacked         (narrow column)
    │   └── FeaturedVideos   VideoCard carousel             (wide column)
    ├── Agencies             AgencyTile grid (5 × 3 on desktop)
    └── FeedbackCta          button + QR
└── Footer
```

Desktop layout:

```
Header (compact)
Hero slider
Quick links (6 tiles)
┌───────────────────────────────┬─────────────────┐
│ News & Announcements (wide)   │ Governor's      │
│ 3 equal cards + View all →    │ Message (card)  │
└───────────────────────────────┴─────────────────┘
What to do in Bulacan: Shop · Invest · Have Fun (3 large image cards)
┌───────────────┬─────────────────────────────────┐
│ Publications  │ Featured Videos (carousel)      │
│ (stacked)     │                                 │
└───────────────┴─────────────────────────────────┘
Agencies & partners (5 × 3)
Feedback band
Footer
```

- **Source order = mobile order.** On phones, sections stack in DOM order, so News always comes right after Quick links. Columns only appear at > 1024px via CSS grid; the DOM order never changes for layout.
- Row splits on desktop: news row 8 / 4 columns, media row 4 / 8 columns (12-column grid). Tablet: news row stacks, Publications shows its two covers side by side above Videos.
- The page uses one `<h1>`. Each section uses an `<h2>` via `SectionHeading`.

### 4.4 Quick links

Task-based shortcuts, chosen to cover each user group in PRD §4. All six are existing links on the live site.

| # | Label | Hint | Destination | User |
|---|---|---|---|---|
| 1 | Cities & Municipalities | The 24 towns and cities of Bulacan | `/cities-and-municipalities/` | Residents |
| 2 | Offices & directory | Find a provincial office | `/government/offices/` | Residents |
| 3 | Citizen's Charter | Service requirements, fees and processing times | `/government/citizens-charter/` | Residents |
| 4 | Jobs (PESO) | Public Employment Service Office | `https://peso.bulacan.gov.ph` (external) | Job seekers |
| 5 | Invest in Bulacan | Why and how to invest | `/invest-in-bulacan/` | Business owners, investors |
| 6 | Health facilities | Bulacan Medical Center and district hospitals | `/health/` | Everyone |

Hints are drawn from existing page titles and descriptions; final wording is confirmed in `content.md`. Scholarships is deliberately left out because its official link is broken (it stays in the nav as a placeholder). Layout: 2 columns on mobile, 3 on tablet, 6 in one row on desktop.

---

## 5. Front-end behavior

### 5.1 Interactive components
| Component | No-JS behavior | With JS |
|---|---|---|
| Nav (desktop) | Dropdowns open on `:hover` / `:focus-within` | `aria-expanded` toggling, Esc to close, arrow-key support |
| Nav (mobile) | `<details>`-based accordion menu | Slide-in drawer with focus trap, Esc, scroll lock |
| Hero | First slide shown; others listed as links below | Prev/next/pause controls, auto-advance off by default, respects `prefers-reduced-motion` |
| Video card | Thumbnail links to the YouTube page | Click swaps thumbnail for `youtube-nocookie.com` iframe with `autoplay=1` |
| Video row | Native horizontal scroll with `scroll-snap` | Prev/next buttons |
| Search | Icon button opens a visual-only field | Submitting shows "Search isn't available in this concept" |

### 5.2 Images
- Source images are pulled once from the live site into `src/assets/` and committed.
- Astro `<Image>`/`<Picture>` outputs AVIF + WebP + fallback, a `srcset` per breakpoint, and explicit `width`/`height`.
- The hero image is `loading="eager"` + `fetchpriority="high"`. Everything else is `loading="lazy"`.
- Agency logos are normalized to one tile size (and SVG where available) so the grid looks uniform.

### 5.3 Performance budget

| Resource | Budget |
|---|---|
| HTML | 50 KB |
| CSS | 30 KB |
| JS | 30 KB |
| Fonts | 1 variable file, ~60 KB woff2 |
| Images above the fold | 400 KB |
| Total page, first load | < 3 MB |
| Third-party requests before interaction | 0 |

---

## 6. Interaction and motion (Game-Feel UI)

The page should feel responsive and satisfying, not just look right. It follows the four Game-Feel UI layers, built in order. **Scope: visual only. No sound and no haptics/vibration** are used anywhere on the site.

| Layer | Question | Applied here |
|---|---|---|
| 1. Body | What is it at rest? | Static layout and every component state, readable with zero motion |
| 2. Interaction | How does it move? | Hover/press/focus reactions, enter/exit, staggered reveals, continuity between states |
| 3. Feel | Is it smooth and satisfying? | Tuned timing, easing curves, springs, press squash, overshoot and settle |
| 4. Feedback | Does it answer back? | **Visual confirmation only**: pressed states, glows, loading and success/error states |

### 6.1 Body: states before motion
Every interactive component in §4.1 is designed in all of its states before any animation is added: default, hover, focus-visible, active/pressed, disabled, and, where relevant, loading, empty, error. Images reserve their space (width/height, skeleton backgrounds) so nothing shifts when it loads.

### 6.2 Motion tokens
Defined in `tokens.css` and documented in `design-system.md`. Components never use raw durations or curves.

| Token | Value | Use |
|---|---|---|
| `--dur-instant` | 120ms | Hover, press |
| `--dur-fast` | 200ms | Tooltips, dropdowns, small state changes |
| `--dur-medium` | 320ms | Drawer, modal, video player |
| `--dur-slow` | 500ms | Hero slide change, section reveal (max 600ms) |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entering |
| `--ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exiting (and faster than the entrance) |
| `--ease-spring` | `linear()` spring approximation | Press release, overshoot and settle |
| `--stagger` | 40ms | Delay per item in lists and grids |
| `--press-scale` | 0.97 | Squash on press |

No `linear` easing on UI motion. Only `transform` and `opacity` are animated, to stay at 60fps.

### 6.3 Interaction map

| Section / component | Interaction | Feel detail |
|---|---|---|
| Buttons, tiles, cards (all) | Lift + shadow on hover; squash on press | Scale to 0.97 on press, spring back with a slight overshoot to ~1.02 |
| Focus ring (all) | Ring animates in on `:focus-visible` | So keyboard users get the same feel as mouse users |
| Header | Compacts and gains a solid background after scrolling | 200ms ease-out; never moves content below it |
| Nav dropdowns | Fade + slide down from the trigger | Open 200ms ease-out, close 150ms ease-in; can be reversed mid-animation |
| Mobile drawer | Slides in from the side; scrim fades | Spring-based open; panel follows the finger 1:1 when swiped closed, with rubber-banding at the edge |
| Hero | Swipeable slides, progress dots, slow zoom on the active image | Swipe follows the finger and flings with momentum; the active dot fills as a progress bar |
| Quick links | Icon nudges/morphs on hover | Small anticipation before the lift |
| News cards | Image zooms within its frame; whole card is the click target | Cards stagger in on first view |
| What to do cards | Description slides up over the image on hover/focus | Always visible on touch screens, where there is no hover |
| Publications | Cover tilts slightly toward the cursor | Disabled on touch and under reduced motion |
| Videos | Swipeable row with snap points; click opens the player | Thumbnail scales into the player (shared-element style transition) |
| Agencies | Filter chips animate the grid as tiles are added/removed | FLIP layout animation, staggered |
| Municipalities (if added as a map) | Town highlights on hover; selection zooms in | The standout reveal moment for Part 3 |
| Sections | Fade and rise into view on scroll | Once per section, staggered children, 500ms max |
| Visual-only search | Field expands from the icon | Submitting shakes the field (300ms, 3–4 oscillations) and shows the "not available in this concept" message |
| Feedback CTA | Gentle glow pulse on the button | Slow, subtle, never flashing more than 3 times per second |

"Juice" (count-ups, glow pulses) is kept for a small number of moments. Count-ups are only used for numbers that already exist in the content.

### 6.4 Visual feedback helper
`feedback.ts` centralizes visual feedback so every component behaves the same way:

```ts
feedback.press(el);    // squash + spring back
feedback.success(el);  // brief glow + check state
feedback.error(el);    // short horizontal shake + error color
```

It has no sound or vibration code paths. If sound or haptics are ever added, they belong here behind an opt-in setting, so there is still one global on/off switch.

### 6.5 Implementation
- **CSS first:** hover, press, focus, dropdowns, card effects and scroll-snap are pure CSS using the motion tokens.
- **Vanilla TS for the rest:** reveals use `IntersectionObserver`; drag and swipe use Pointer Events.
- **Springs and layout animation:** [Motion](https://motion.dev) (`animate`, imported per use) for springs, FLIP and interruptible animations. It's the only animation dependency and stays inside the 30 KB JS budget (N6).
- **No layout thrash:** no animating `width`, `height`, `top` or `left`; reveals never cause layout shift (N5).
- **Response time:** every input shows a visible reaction within 100ms. No animation blocks the user from acting.

### 6.6 Reduced motion
Under `prefers-reduced-motion: reduce`:
- Movement, zoom, tilt, parallax, overshoot and shake are replaced by short opacity fades.
- Hero auto-advance stays off; swipe still works.
- State changes (pressed, focus, success, error) still show, as color and outline changes instead of motion.

### 6.7 Done checklist
- [ ] Every interactive element has hover, press, focus and disabled states
- [ ] Input response starts in under 100ms; no animation blocks the user
- [ ] No linear easing; springs on touch and drag
- [ ] Elements enter and exit with motion, never pop
- [ ] Lists stagger; state changes keep continuity
- [ ] Success and error moments have distinct **visual** feedback
- [ ] Only `transform` and `opacity` animate; 60fps on a mid-range phone
- [ ] `prefers-reduced-motion` respected
- [ ] No sound and no vibration anywhere
- [ ] It feels satisfying to use, not just correct to look at

---

## 7. Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `footer`; skip link as the first focusable element.
- One `h1`; headings never skip levels.
- Every image has `alt`. Decorative images use `alt=""`.
- Visible focus outline on every interactive element (defined in `tokens.css`).
- Color contrast checked against WCAG AA for all token pairs in `design-system.md`.
- Touch targets at least 44 × 44 px.
- `lang="en"` on `<html>`, with `lang="fil"` on Filipino passages.
- Hero auto-rotation off by default; a pause control whenever motion is on.

---

## 8. Build, test, and deploy

```
push / PR ─▶ GitHub Actions
             ├── npm ci
             ├── astro check          (types, data files)
             ├── astro build          → dist/
             ├── link check           (internal links; external links reported, not failed)
             ├── Lighthouse CI        (mobile; assert perf ≥ 90, a11y ≥ 95, budgets in §5.3)
             └── deploy dist/         (main branch only)
```

- **Hosting:** Cloudflare Pages (free tier, global CDN, automatic HTTPS, preview URL per PR). GitHub Pages is the fallback.
- **Domain:** personal subdomain or path, e.g. `bulacan-concept.<yourname>.dev`. Never a name containing "gov" or that looks like a province domain.
- **Previews:** PR preview URLs are handy for recording "in progress" footage for Part 2.
- **Baseline:** Lighthouse reports for the live site are stored under `docs/lighthouse/before/` and the concept's under `docs/lighthouse/after/`, for Part 3.

---

## 9. Guardrails (PRD §3, enforced in code)

| Guardrail | How it's enforced |
|---|---|
| Clearly a concept | No banner. The footer (rendered by `BaseLayout`, so no page can skip it) carries the disclaimer and concept credit |
| Not mistaken for official | `<meta name="robots" content="noindex, nofollow">`, `robots.txt` disallows all; `<title>` starts with "Concept ·" |
| No data collection | No forms submit anywhere; no analytics, cookies, or trackers |
| No official photos as design elements | Governor's Message uses a neutral image or none; enforced in review against `content.md` |
| Respectful credit | Footer credits the original site and the Provincial Information Technology Office as the content source |

---

## 10. Trade-offs

| Decision | Gain | Cost |
|---|---|---|
| Static build, no CMS | Fast, free, nothing to secure | Content updates mean editing data files and redeploying. Acceptable for a concept |
| Astro over plain HTML | Image pipeline, components, typed data | Build tooling to install and explain |
| Plain CSS tokens over Tailwind | Design system is visible and readable on camera | More CSS to write by hand |
| Content snapshot in the repo | Reproducible, works offline, no hotlinking | Goes stale as the live site posts new news and posters; refresh before recording Part 3 |
| Video facade | Removes ~10 iframes and their scripts from first load | One extra click to play |
| Game-Feel UI motion layer | The page feels responsive and satisfying; strong reel material | More states to design and tune; must be checked on a mid-range phone to protect the 60fps and Lighthouse targets |
| Visual-only feedback (no sound or haptics) | Nothing surprises visitors on a government site; simpler code; works the same on iOS | Less multi-sensory feedback; visual states have to carry all of it |
| Motion library for springs/FLIP | Interruptible, physical motion that's hard to do by hand | One small dependency |
| Real outbound links | Concept feels real and usable | Visitors leave the concept for official sites; the banner and new-tab behavior make this clear |

---

## 11. Assumptions

- The live site's content as of 2026-11-20 is the snapshot (see the PRD review notes).
- Navy and gold come from the official logo; exact values get confirmed from the live CSS in `design-system.md`.
- YouTube IDs for the featured videos can be read from the live page source.
- Visitors arrive mostly on phones over 4G.

---

## 12. Revisit as it grows

- **Inner pages:** every link hosted on bulacan.gov.ph now resolves to a placeholder page inside the concept. `page(path)` in `src/data/site.ts` builds the internal href, `official(path)` the original; `src/data/pages.ts` collects all internal hrefs into one registry (titles, breadcrumb trails, children from the nav tree, news and publication details) and `src/pages/[...slug].astro` builds a route for each. `npm run check:links` verifies the built output. Real inner-page designs (municipalities, offices, tourism) remain v2 and would replace the placeholder per route.
- **Cities and Municipalities:** an SVG map of the 24 LGUs as an alternative to the list (PRD open question).
- **Language toggle:** English / Filipino using Astro's i18n routing.
- **Real search:** a static index (e.g. Pagefind) once there are inner pages worth searching.
- **Content updates:** a headless CMS or Markdown content collections if this ever became more than a concept.
