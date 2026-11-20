# PRD: Bulacan Provincial Website Redesign (Concept)

**Owner:** Elton
**Status:** Draft
**Last updated:** 2026-11-20
**Reference site:** https://bulacan.gov.ph/

---

## 1. Summary

This is a **concept redesign** of the Bulacan Provincial Government homepage. It keeps all of the existing content and rethinks how it looks and how easy it is to use. The work is documented in a 3-part reel series ("Website Redesign · Part X/3") to show UI/UX skill and build a public portfolio.

**Core message:** websites can be beautiful and easy to use when they're designed right, and that includes government websites.

---

## 2. Goals

### What we want to accomplish
1. **Show strong UI/UX skills.** Turn a cluttered homepage into a clean, modern, consistent design.
2. **Keep the content, change the experience.** Every section, link, and asset on the current homepage stays. Only layout, visual design, and usability change.
3. **Make it mobile-first.** The first screen on a phone shows useful content, not stacked logos.
4. **Build a public portfolio piece.** The redesign becomes the reveal in Part 3 and a case study for future clients.
5. **Practice a real workflow.** Plan with markdown files (PRD, design system, content), build with Claude Code, and record the process.

### Success metrics
| Metric | Current | Target |
| --- | --- | --- |
| Distinct font sizes on the homepage | ~10 | 5–6 (one type scale) |
| Heading styles | Mixed casing, inconsistent | One consistent style |
| Mobile first screen | ~50% logos | Header ≤ 15% of the screen; content visible immediately |
| Homepage weight | ~59 MB | Under 3 MB |
| Lighthouse Performance (mobile) | [record before building] | 90+ |
| Lighthouse Accessibility | [record before building] | 95+ |
| News cards | Uneven heights, repeated thumbnail, centered text | Equal heights, left-aligned, clear hover state |
| Agency links | Acronym-only labels, mixed logo styles | Uniform tiles with full names |

### Non-goals
- Not rewriting or updating the content: no new services, no new copy, no fixing outdated text.
- Not building a working backend (search results, forms, CMS).
- Not redesigning most inner pages, at least in v1. The homepage plus a small set of key pages (Cities and Municipalities, Offices, Citizen's Charter, Invest in Bulacan, Health, Tourism, HR Corner, Contact Us) get pages on our site, currently placeholders with a link to the original. Every other bulacan.gov.ph link goes to the official site in a new tab, with a small external-link icon in the menus. The `conceptPages` list in `src/data/site.ts` controls which pages are ours.
- Not an official site and not meant to replace the real one.

---

## 3. Constraints and guardrails

- **Clearly a concept, without a banner.** No site-wide banner, since it would get in the way of the design being shown. The disclaimer "Concept redesign, not the official website of the Provincial Government of Bulacan" appears once in the footer, together with the page being `noindex` and hosted off any official-looking domain.
- **No impersonation.** Never deploy on a domain or URL that looks official, and don't collect any user data. Forms and search are visual only.
- **Respectful tone.** In the reels, critique design principles, not people. Credit what the current site does well.
- **Assets.** Reuse logos and seals only as in-context placeholders for the concept. Don't use photos of officials as design elements. The existing slider posters and news photos are content, so they are shown whole and unaltered.

---

## 4. Users

| User | What they need from the homepage |
| --- | --- |
| Bulakeño residents (mostly on phones) | Find offices, news, and agency links quickly |
| Business owners and investors | Business info, investment info, e-procurement |
| Tourists | Things to do, events, tourism info |
| Job seekers and students | HR Corner, PESO, scholarships, Bulacan Polytechnic College |
| Reel viewers (content audience) | A clear before/after that's satisfying to watch |

---

## 5. Content inventory (keep all of it)

Order matches the current homepage, top to bottom.

### 5.1 Header
- Logos: Lalawigan ng Bulacan seal, "Province of Bulacan · The Official Website" banner, People's Agenda 10 logo

### 5.2 Main navigation
- Home
- General Info
- Government
- Cities and Municipalities (24 entries)
- Business
- Health
- Education (Bulacan Polytechnic College, Scholarship)
- Tourism
- HR Corner
- Contact Us

### 5.3 Slider / carousel
- Rotating poster banners (events, awards, campaigns), currently with text baked into the images

### 5.4 Governor's Message
- Heading plus a multi-paragraph welcome message

### 5.5 "What to do in Bulacan?" (Experience Bulacan!)
- Shop
- Invest
- Have Fun

### 5.6 News and Announcements
- Latest 3 news cards (title, date, excerpt, Read More)

### 5.7 Publications
- The Capitol (latest quarter)
- Bulacan Ngayon (latest quarter)

### 5.8 Featured Videos
- 10 YouTube videos (e.g., Bulacan Dreamers, The State of Governance in Bulacan, Bulacan Medical Center)

### 5.9 Agency / partner links (about 15)
SP (Sangguniang Panlalawigan), PCL, LNB, PESO, GAD-FPS, PDRRMO, BPSTPC, BPC, Bulacan Provincial Library, Gintong Kabataan Award, Dangal ng Lipi, GGB, GGK, Sineliksik, E-Procurement

### 5.10 Footer
- Feedback and Redress Mechanism banner (QR code that also links to the feedback form)
- Links: Galing Bulacan, Radyo Kapitolyo, Bulacan Webmail, SEPS Online, PAGASA, Transparency Seal, Philippine Government Seal
- Credit line (Provincial Information Technology Office) and copyright

> Before building, re-check the live site and update this list: posters and news change often.

---

## 6. Design problems to solve

| # | Area | Current problem | Redesign direction |
| --- | --- | --- | --- |
| 1 | Header | Three logos in different styles and sizes, lots of empty grey space | Compact header: logos smaller and aligned left, menu right |
| 2 | Whitespace | Large blank gap between the menu and the slider | Purposeful spacing on a consistent spacing scale |
| 3 | Navigation | 10 top-level items; wraps into two rows on smaller laptops; plain dropdowns | Single-row nav, styled dropdowns, mobile drawer menu |
| 4 | Slider | Text baked into poster images, hard to read on phones | Real text headline over the image, with clear controls |
| 5 | Governor's Message | Long wall of text under a huge heading | Short excerpt with a "Read full message" link, better line length |
| 6 | "What to do" cards | Small images floating in big grey boxes | Full-bleed image cards with clear labels |
| 7 | News cards | Uneven heights, repeated thumbnail, centered text, title turns grey on hover | Equal-height cards, left-aligned text, hover that highlights |
| 8 | Typography | Mixed casing and ~10 font sizes | One type scale, one heading style |
| 9 | Agency grid | Mixed logo styles, acronym-only labels | Uniform tiles: logo, full name, short description |
| 10 | Footer | Crowded logos; feedback poster looks like a plain image | Organized footer columns; feedback as a clear button or section |
| 11 | Mobile | Three logos stack and fill half the first screen | Compact mobile header; content first |
| 12 | Videos | 10 embeds load at once and make the page heavy | Thumbnails that load the video only on click |

---

## 7. Proposed homepage structure (v1)

1. **Header:** compact logos, single-row nav, search icon (visual only)
2. **Hero / slider:** one featured item at a time with a real text headline
3. **Quick links:** the most-used destinations as clear tiles (drawn from the existing nav and agency links)
4. **News and Announcements:** 3 equal cards plus "View all"
5. **Governor's Message:** short excerpt plus "Read full message"
6. **What to do in Bulacan:** Shop, Invest, Have Fun as image cards
7. **Publications:** The Capitol and Bulacan Ngayon side by side
8. **Featured Videos:** a carousel of lightweight thumbnails
9. **Agencies and partners:** uniform tiles with full names
10. **Feedback:** a clear call-to-action section (button plus QR)
11. **Footer:** organized columns for links, seals, and credits, plus the concept disclaimer

> This order is a starting point. Confirm it on the whiteboard before building.

---

## 8. Design system (to detail in `design-system.md`)

- **Color:** palette taken from Bulacan's existing navy and gold, plus neutrals and one accent for actions. All text meets WCAG AA contrast.
- **Typography:** one family (the current site uses Open Sans) and a 5–6 step type scale (e.g., 14 / 16 / 20 / 24 / 32 / 40 px). Headings in sentence case.
- **Spacing:** 4/8 px scale; consistent section padding.
- **Components:** header, nav and dropdown, mobile drawer, hero, card (news, image, agency), button, section heading, footer, concept banner.
- **States:** hover, focus (visible outline), and active for every interactive element.
- **Breakpoints:** mobile (≤ 640), tablet (≤ 1024), desktop (> 1024).

---

## 9. Technical notes

- **Stack:** decide in `goals.md`. A static site (e.g., HTML/CSS/JS, or a lightweight framework) is enough, since there's no backend.
- **Performance:** compressed images (WebP/AVIF), lazy-loading, click-to-load videos.
- **Accessibility:** semantic HTML, one H1, alt text on all images, keyboard navigation.
- **Hosting:** a personal subdomain or portfolio path that is clearly not official (e.g., `yourname.dev/bulacan-concept`).

---

## 10. Deliverables

1. Working concept homepage (desktop and mobile)
2. Before/after screenshots and Lighthouse reports
3. Reel series:
   - **Part 1 · The audit:** 5 design issues plus a bonus on the footer
   - **Part 2 · The build:** why, plan, timelapse, progress preview
   - **Part 3 · The reveal:** before/after, section by section
4. A case study post (LinkedIn) for the portfolio

---

## 11. Timeline (suggested)

| Step | Output |
| --- | --- |
| 1 | Record all "before" footage and Lighthouse scores (Part 1) |
| 2 | Finalize this PRD, `design-system.md`, `goals.md`, `content.md` |
| 3 | Build the homepage, recording every session (Part 2) |
| 4 | Polish mobile, accessibility, performance; run Lighthouse again |
| 5 | Record before/after (Part 3), edit, post the parts 2–3 days apart |

---

## 12. Open questions

- Which stack and hosting to use?
- Should the hero show one featured item or keep the multi-slide carousel?
- Should the 24 Cities and Municipalities get a visual map or stay as a list?
- Which "quick links" are most used? (Best guess from the nav, or ask a few residents.)
