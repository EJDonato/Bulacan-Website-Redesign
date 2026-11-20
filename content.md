# Content: Bulacan Provincial Website Redesign (Concept)

**Owner:** Elton
**Status:** Draft
**Snapshot taken:** 2026-11-20 from https://bulacan.gov.ph/
**Related:** [PRD.md](PRD.md) · [system-design.md](system-design.md) · [design-system.md](design-system.md)

This is the single source for every piece of content on the concept homepage. Each section maps to a data file in `src/data/` (system-design §4.2). Content is **kept as-is** (PRD non-goal: no rewriting). The only changes are presentational and are listed in §0.

> Re-check the live site and update this file before recording Part 3. News, posters and publications change often. Items marked **⏱ time-sensitive** will expire first.

---

## 0. Editorial rules

| Rule | Example |
|---|---|
| **Casing:** all-caps headings and titles are converted to sentence case. The original text is kept in the data file as `originalTitle` | "PHOTO RELEASE – DOUBLE WIN" → "Photo release – Double win" |
| **Poster text becomes real text:** headlines baked into slider images are transcribed word for word | See §3 |
| **Status markers:** `[external]` opens in a new tab; `[broken]` renders as a placeholder (design-system §9.13); `[new label]` means a label or hint written for the concept, drawn from existing page titles | — |
| **No new facts.** Hints and descriptions only restate what the destination page or site title already says | — |
| **Outdated text stays** (PRD non-goal), but is flagged in §12 for the Part 1 audit | "newly launched" in the Governor's Message |
| **No photos of officials as design elements** (PRD §3). The slider posters are existing content and are shown whole and unaltered | See §3 |

---

## 1. Site identity

| Item | Value |
|---|---|
| Site name | Provincial Government of Bulacan |
| Page title (concept) | Concept · Provincial Government of Bulacan |
| Original `<title>` | Provincial Government of Bulacan – Official Website of the Provincial Government of Bulacan |
| Disclaimer (footer only; no banner) | Concept redesign, not the official website of the Provincial Government of Bulacan. |

### Logos

| Asset | Source | Use |
|---|---|---|
| Official seal (Lalawigan ng Bulacan) | `/wp-content/uploads/2021/05/Official-Logo-1.png` | Header lockup, footer |
| "Province of Bulacan · The Official Website" banner | `/wp-content/uploads/2021/07/FRAME-3-e1636598453840.png` | Header lockup (desktop); may be redrawn as SVG wordmark |
| People's Agenda 10 | `/wp-content/uploads/2021/11/peoples-agenda-e1636598233282.png` | Header on desktop, footer on mobile |

All asset paths in this file are relative to `https://bulacan.gov.ph`.

---

## 2. Main navigation

`src/data/nav.ts`. All links are internal unless marked.

- **Home** → `/`
- **General Info** → `/general-info/`
  - About Bulacan → `/general-info/about-bulacan/`
  - History of Bulacan → `/general-info/history-of-bulacan/`
    - National Heroes and Patriots → `/general-info/national-heroes-and-patriots/`
    - National Artists → `/general-info/national-artist/`
    - Provincial Governors → `/general-info/provincial-governors/`
- **Government** → `/government/`
  - About the Administration → `/government/about-the-administration/`
  - Elective Officials → `/government/elective-officials/`
  - Offices → `/government/offices/`
  - Organizational Chart → `/government/organizational-chart/`
  - Civil Society Organizations → `/civil-society-organizations/`
  - Citizen's Charter → `/government/citizens-charter/`
  - Full Disclosure Report → `/government/full-disclosure-report/`
  - Report on Fund Utilization and Status of Program/Project Implementation → `/government/report-on-fund-utilization-and-status-of-program-project-implementation/`
- **Cities and Municipalities** → `/cities-and-municipalities/` (mega panel, 3 columns)
  | | | |
  |---|---|---|
  | Angat → `angat/` | Doña Remedios Trinidad → `dona-remedios-trinidad/` | Paombong → `paombong/` |
  | Balagtas → `balagtas/` | Guiguinto → `guiguinto/` | Plaridel → `plaridel/` |
  | Baliwag City → `baliwag-city/` | Hagonoy → `hagonoy/` | Pulilan → `pulilan/` |
  | Bocaue → `bocaue/` | City of Malolos → `city-of-malolos/` | San Ildefonso → `san-ildefonso/` |
  | Bulakan → `bulakan/` | Meycauayan City → `meycauayan-city/` | San Jose del Monte City → `san-jose-del-monte-city/` |
  | Bustos → `bustos/` | Marilao → `marilao/` | San Miguel → `san-miguel/` |
  | Calumpit → `calumpit/` | Norzagaray → `norzagaray/` | San Rafael → `san-rafael/` |
  | | Obando → `obando/` | Santa Maria → `santa-maria/` |
  | | Pandi → `pandi/` | |

  All under `/cities-and-municipalities/`. Order matches the live site (alphabetical except Meycauayan City before Marilao; kept as-is).
- **Business** → `/business/`
  - Major Industries → `/major-industries/`
  - Tatak Bulakenyo Products → `/tatak-bulakenyo-products/`
  - Invest in Bulacan → `/invest-in-bulacan/`
  - 8 Reasons for Investing in Bulacan → `/8-reasons-for-investing-in-bulacan/`
  - Investment Opportunities → `/investment-opportunities/`
  - Investment Incentives → `/investment-incentives/`
- **Health** → `/health/`
  - Bulacan Medical Center → `/health/bulacan-medical-center/`
  - *District Hospitals* (group label, not a link)
    - Baliuag District Hospital → `/health/public-health-office/baliuag-district-hospital/`
    - Calumpit District Hospital → `/health/public-health-office/calumpit-district-hospital/`
    - Emilio G. Perez Memorial District Hospital → `/health/public-health-office/emilio-g-perez-memorial-district-hospital/`
    - Felix T. Reyes Memorial Hospital → `/health/public-health-office/felix-t-reyes-memorial-hospital/`
    - Gregorio del Pilar District Hospital → `/health/public-health-office/gregorio-del-pilar-district-hospital/`
    - Pandi District Hospital → `[broken]` (live href is `#`)
    - Plaridel Infirmary (Bulacan Medical Center Annex) → `/health/public-health-office/plaridel-infirmary/`
    - Rogaciano M. Mercado Memorial Hospital → `/health/public-health-office/rogaciano-m-mercado-memorial-hospital/`
    - San Miguel District Hospital → `/health/public-health-office/san-miguel-district-hospital/`
  - Public Health Office → `/health/public-health-office/`
- **Education** (no landing page on the live site; renders as a menu button only)
  - Bulacan Polytechnic College → `https://bpc.edu.ph/` `[external]`
  - Scholarship → `[broken]` (live href is `https://#`)
- **Tourism** → `/tourism/`
  - Historical Sites → `/tourism/historical-sites/`
  - Heritage Sites → `/tourism/heritage-sites/`
  - Ecological Sites → `/tourism/ecological-sites/`
  - Religious Sites → `/tourism/religious-sites/`
  - Festivals → `/tourism/festivals/`
  - Where to Stay, Dine, and Have Fun → `/tourism/where-to-stay-dine-and-have-fun/`
  - Photo Gallery → `/tourism/photo-gallery/`
- **HR Corner** → `/hr-corner/`
- **Contact Us** → `/contact-us/`

---

## 3. Hero slides

`src/data/hero.ts`. 13 posters on the live site (2500×1121px each, **21.9 MB in total**). None of them link anywhere and none have alt text.

**Image rule:** every slide is its full poster, unaltered (owner decision, 2026-11-20). The text columns below transcribe each poster; they feed its alt text and nothing is overlaid on the image.

**Order:** most recent and most useful to residents first. Upcoming events lead; awards follow, newest first.

| # | Eyebrow | Headline | Supporting line | Date | Visual | Source file |
|---|---|---|---|---|---|---|
| 1 | Job fair · ⏱ | Tara trabaho, G? Job fair for local employment | Level 1, Robinsons Malolos, City of Malolos, Bulacan · 10:00 AM | 2026-11-28 | Whole poster | `2026/11/jobfair_nov28.jpg` |
| 2 | Drug Abuse Prevention and Control · ⏱ | DAPC Week 2026 | *"Nagkakaisang Pamilya at Pamayanan Laban sa Ilegal na Droga Para sa Ligtas at Malusog na Kinabukasan."* (`lang="fil"`) | 2026-11-16 to 2026-11-22 | Whole poster | `2026/11/DAPC-PGB-WEBSITE.jpg` |
| 3 | 34th National Children's Month Celebration · ⏱ | Manindigan! Tumugon at Kumalinga: Sa batang handa, mas ligtas ang bansa. (`lang="fil"`) | — | November 2026 | Whole poster | `2026/11/buwan-ng-mga-bata.jpg` |
| 4 | Award | Outstanding Governor for Excellence in Provincial Leadership and Public Service Award | Governor Daniel R. Fernando · Parangal ng Natatanging Pilipino Awards Inc., Eurotel Hotel, Makati | 2026-10-25 | Whole poster | `2026/10/OutstandingGovernor2026.png` |
| 5 | Award | People's Governor Excellence Award | Hon. Daniel R. Fernando · 15th World Class Excellence Japan Awards, The Heritage Hotel Manila, Pasay City | 2026-06-18 | Whole poster | `2026/06/ExcellenceAward2026.jpg` |
| 6 | Award · In commemoration of Philippine Independence Day | Duyan ka ng Magiting | Natatanging Filipino sa Larangan sa Paglilingkod sa Tao at Bayan · Gov. Daniel R. Fernando · AFP Commissioned Officers Club House, Tejeros Hall General Emilio Aguinaldo, Quezon City | 2026-06-12 | Whole poster | `2026/06/award_DuyanKaNgMagiting.jpg` |
| 7 | Award | 2025 Global Beacon of Good Governance | Gov. Daniel R. Fernando · GAA Hollywood | 2025 | Whole poster | `2026/01/2025GlobalBeaconAward.jpg` |
| 8 | Award · Provincial Agriculture Office | Top Performing Province (Rank 1) | Province of Bulacan | — | Whole poster | `2026/01/Top-Performing-Province.jpg` |
| 9 | Award · DILG | SubayBayani Award Exemplar 2025 | Province of Bulacan · The Manila Hotel, City of Manila | 2025-11-26 | Whole poster | `2025/12/SubayBayani_award2025.jpg` |
| 10 | Award · Department of Health | CLEXAH 2024 Health Champions | Province of Bulacan, Gold, Provincial Category · Central Luzon 11th Excellence Awards for Health 2024, Royce Hotel, Clark, Pampanga | 2025-11-24 | Whole poster | `2025/12/CLEXAH2024.jpg` |
| 11 | Award · Bureau of Local Government Finance | Three awards at the BLGF Stakeholders' Recognition Program | Top 1 in the collection of locally sourced revenues among all provinces for FY 2024 · Third in the ratio of locally sourced revenues to total current operating income · Ninth in the year-on-year growth rate of locally sourced revenues | — | Whole poster | `2025/12/finance_award2025.jpg` |
| 12 | Paalala · Tanggapan ng Panlalawigang Ingat-Yaman · ⏱ | Real property tax deadlines 2026 (`lang="fil"` body) | Q1 Marso 31 · Q2 Hunyo 30 · Q3 Setyembre 30 · Q4 Disyembre 29, 2026 · 10% discount for on-time payment, 15% for advance payment · Inquiries: Revenue Operations Division, (044) 791-8115 | 2026 | Whole poster | `2025/11/Real-Property-Tax.jpg` |
| 13 | Certification | ISO 9001:2015 certified | TÜV Rheinland, Management System, ID 9105086309 | — | Whole poster | `2024/02/iso_banner.jpg` |

**Slide 10 extra detail** (shown only if the text-only variant has room, otherwise omitted from the slide and kept in data): City and municipal health champions: Gold, City of San Jose del Monte · Silver, Plaridel · Bronze, Santa Maria.

**Slide 12 extra detail** (kept in data): other tax deadlines: Professional tax on or before 31 January 2026 · Tax on printing and publication on or before the 20th of each month · Tax on delivery vans and trucks on or before 20 January 2026 · Amusement tax on or before the 15th of each month.

**Alt text** for image slides:
1. "Job fair poster with a pre-registration QR code" → in the concept, the QR is cropped out; alt: "Illustration for the Tara Trabaho job fair"
2. "Teal awareness ribbon for DAPC Week 2026"
3. "Illustrated children in scout uniforms with emergency kits, for National Children's Month"
13. "Bulacan Provincial Capitol, the provincial seal and the ISO 9001:2015 certification mark"

**Hero controls copy:** "Previous slide", "Next slide", "Pause slideshow" / "Play slideshow", "Go to slide {n} of 13".

---

## 4. Quick links

`src/data/quickLinks.ts`. Decided in system-design §4.4. All labels and hints are `[new label]`.

| # | Label | Hint | Icon (Lucide) | Destination |
|---|---|---|---|---|
| 1 | Cities & Municipalities | The 24 towns and cities of Bulacan | `map-pinned` | `/cities-and-municipalities/` |
| 2 | Offices & directory | Find a provincial office | `building-2` | `/government/offices/` |
| 3 | Citizen's Charter | Service requirements, fees and processing times | `file-check-2` | `/government/citizens-charter/` |
| 4 | Jobs (PESO) | Public Employment Service Office | `briefcase` | `https://peso.bulacan.gov.ph/` `[external]` |
| 5 | Invest in Bulacan | Why and how to invest | `trending-up` | `/invest-in-bulacan/` |
| 6 | Health facilities | Bulacan Medical Center and district hospitals | `hospital` | `/health/` |

Section heading: **Quick links** (h2, visually hidden; the tiles speak for themselves).

---

## 5. News and announcements

`src/data/news.ts`. Latest 3. ⏱ Refresh before Part 3.

| Field | Live site | Concept |
|---|---|---|
| Section heading | "News and Announcements" (h1) | **News and announcements** (h2) |
| Sub-heading | "Want to know the latest?" | Kept as the lead line |
| View all | (none on the live site) | "View all news →" `[new label]`. Destination: no news index URL is linked on the live homepage; **open item** (§13) |

| # | Title (concept) | Original title | Date | Excerpt (as published, truncated by the live site) | Whole poster | Link |
|---|---|---|---|---|---|---|
| 1 | Photo release – Gawad Galing Kooperatiba 2026 Hall of Fame awardee | PHOTO RELEASE – GAWAD GALING KOOPERATIBA 2026 HALL OF FAME AWARDEE | 2026-11-19 | Bulacan Governor Daniel R. Fernando with (5th from left) Sta. Monica of Bustos Multipurpose Cooperative… | `bb-plugin/cache/GAWAD-GALING-KOOPERATIBA-2026-HALL-OF-FAME-AWARDEE-1024x576-landscape.jpeg` | `/photo-release-gawad-galing-kooperatiba-2026-hall-of-fame-awardee/` |
| 2 | Photo release – Double win | PHOTO RELEASE – DOUBLE WIN | 2026-11-18 | Barangay officials of Brgy. Matictic, Norzagaray headed by their Captain Marcial S. Lucas, who won… | `bb-plugin/cache/DOUBLE-WIN-1024x683-landscape.jpg` | `/photo-release-double-win-2/` |
| 3 | PGB honors outstanding barangay programs, officials in 25th GGB | (same; "25th" uses a superscript "th") | 2026-11-18 | CITY OF MALOLOS – The Provincial Government of Bulacan (PGB) headed by Governor Daniel R.… | `bb-plugin/cache/Untitled-2-landscape.jpg` (generic seal placeholder) | `/pgb-honors-outstanding-barangay-programs-officials-in-25th-ggb/` |

All image paths are under `/wp-content/uploads/`.

**Image notes:**
- News photos are event photos that include officials. They are **content thumbnails** for the article, not design elements, so they are kept (cropped to 3:2). Confirm this reading of PRD §3 (open item, §13).
- Item 3 uses a generic seal image (the "repeated thumbnail" issue in PRD §6 #7). The concept shows the seal on a `--navy-100` tile at a smaller size instead of stretching it.
- Alt text: #1 "Gawad Galing Kooperatiba 2026 Hall of Fame awardees with Governor Daniel R. Fernando" · #2 "Barangay officials of Brgy. Matictic, Norzagaray" · #3 `alt=""` (decorative placeholder).

---

## 6. Governor's Message

`src/data/governor.ts`. Its own brief section with the photo the live site shows beside the message: `2022/07/gov-and-vg.png` (Governor and Vice Governor), kept as content. Only the opening paragraph shows; the full message expands in place.

| Field | Value |
|---|---|
| Eyebrow | From the Governor `[new label]` |
| Heading | Governor's Message |
| Attribution | Daniel R. Fernando, Governor of Bulacan (name as it appears in the site's news; the message itself is unsigned) |
| Brief (always visible) | Paragraph 1 below |
| Expand control | "Read full message" / "Show less" expands paragraphs 2-6 in place (native `<details>`) |

**Full message (verbatim):**

> Brimming with pride and joy, I welcome you all to the newly launched official website of the Provincial Government of Bulacan!
>
> It is my great pleasure to have you visit our inclusive online platform that aims to uphold our adherence to a responsive, fair and transparent governance. May this site empower our dear constituents with understanding about our province's milestones, programs and aspirations.
>
> In here, we let everyone witness how the unity and shared dynamism of the local government and the people have constantly opened doors to promote our tourism, agriculture and economy; preserve our history and cultural heritage; reinforce our preparedness and response to crises and calamities; and move forward as a more resilient and thriving province.
>
> As the People's Governor, it is my utmost duty to ensure that the voice and the will of the Bulakeños are prioritized in launching sustainable interventions in the province, as part of our continued fulfillment of The People's Agenda 10 advocacies.
>
> My dear Bulakeños, we have gone past the darkest days of the pandemic. I want to commend each and every one for braving through every challenge and standing up with renewed strength and faith in God. In our journey to recovery, I encourage everyone to continue putting your trust in your public servants towards achieving everlasting peace and progress for our beloved province.
>
> Cheers to our empowered Bulakeños! Cheers to our beloved province of Bulacan!

---

## 7. What to do in Bulacan

`src/data/experience.ts`.

| Field | Value |
|---|---|
| Heading | What to do in Bulacan? |
| Lead | Experience Bulacan! |

| Card | Description (revealed on hover) `[new label]` | Whole poster | Link |
|---|---|---|---|
| Shop | Tatak Bulakenyo products | `2022/07/Shop.jpg` | `/tatak-bulakenyo-products/` |
| Invest | Business and investment in Bulacan | `2022/08/Major-Industries-2.jpg` | `/business/` |
| Have Fun | Tourism: historical, heritage, ecological and religious sites, and festivals | `2022/07/HaveFun.jpg` | `/tourism/` |

Live site opens these in a new tab even though they're internal; the concept opens them in the same tab.

---

## 8. Publications

`src/data/publications.ts`. ⏱ New issues are quarterly.

| Field | Value |
|---|---|
| Heading | Publications (live: "PUBLICATIONS") |

| Title | Issue | Cover | Link |
|---|---|---|---|
| The Capitol | 2nd Quarter 2026 | `2026/10/The-Capitol_2ndQ-2026.jpg` | `/capitol/the-capitol-2nd-quarter-2026/` |
| Bulacan Ngayon | 2nd Quarter 2026 | `2026/10/1-791x1024.jpg` | `/bulngayon/bulacan-ngayon-2nd-quarter-2026/` |

Alt text: "Cover of The Capitol, 2nd Quarter 2026" · "Cover of Bulacan Ngayon, 2nd Quarter 2026" (live alt is `"1"`).

---

## 9. Featured videos

`src/data/videos.ts`. 10 YouTube embeds on the live site, all loaded at once. The concept shows thumbnails (`https://i.ytimg.com/vi/{id}/hqdefault.jpg`, or a local copy) and loads `youtube-nocookie.com` only on click.

| Field | Value |
|---|---|
| Heading | Featured videos (live: "FEATURED VIDEOS") |
| More link | "More on Galing Bulacan →" → `https://www.youtube.com/user/MyBulacan` `[external]` `[new label]` (channel already linked in the live footer) |

| # | Title | YouTube ID |
|---|---|---|
| 1 | Singkaban 2026 Teaser | `peXuGpPKFys` |
| 2 | Bulacan Dreamers | `z0HlifxTvPs` |
| 3 | The State of Governance in Bulacan | `ovSj7s5O_sU` |
| 4 | Bulacan Medical Center | `fM0lfOQKXcY` |
| 5 | Bulacan Polytechnic College | `me_TB3uRkBI` |
| 6 | Provincial Disaster Risk Reduction and Management Council Accomplishments | `eGXn1TBHfu0` |
| 7 | PHACTO: Hiyas ng Bulacan Cultural Center | `brBR19XiKwg` |
| 8 | BIAM: Inauguration of MRI Section Department of Radiology sa Bulacan Medical Center | `t-XT4t-QTEM` |
| 9 | Galing Bulacan Season 2 Episode 33 | `hO9-y4BGUNw` |
| 10 | Phases of Ambulance Response | `7h2BdbzsLGY` |

Play button label: "Play video: {title}".

---

## 10. Agencies and partners

`src/data/agencies.ts`. 15 tiles, 5 × 3 on desktop. All `[external]`. Full names come from each site's own title; descriptions are `[new label]` restating that title.

| # | Acronym | Full name | Description | Category (filter) | Logo | Link |
|---|---|---|---|---|---|---|
| 1 | SP | Sangguniang Panlalawigan | Provincial legislative board | Government | `2022/06/SP-SEAL-logo.png` | `https://sp.bulacan.gov.ph/index.php` |
| 2 | PCL | Philippine Councilors League, Bulacan | League of city and municipal councilors | Government | `2019/09/pcl.gif` | `https://pcl.bulacan.gov.ph/index.php` |
| 3 | LNB | Liga ng mga Barangay, Bulacan Chapter | League of barangays | Government | `2019/09/lnblogo.png` | `https://lnb.bulacan.gov.ph/index.php` |
| 4 | PESO | Provincial Public Employment Service Office | Jobs and employment services | Services | `2024/01/ppeso_logo.png` | `https://peso.bulacan.gov.ph/` |
| 5 | GAD-FPS | Gender and Development Focal Point System | PGB Gender and Development | Services | `2021/06/GAD-PGB-LOGO-230x300.png` | `https://gad.bulacan.gov.ph/` |
| 6 | PDRRMO | Provincial Disaster Risk Reduction and Management Office | Disaster preparedness and response | Services | `2023/07/PDRRMO.png` | `https://pdrrmo.bulacan.gov.ph/index.php` |
| 7 | BPSTPC | **To verify**: full name not stated on its site | — | Government | `2021/07/BPSTPC.png` | `https://bpstpc.bulacan.gov.ph/index.php` |
| 8 | BPC | Bulacan Polytechnic College | Provincial college ("Your Partner to Reach the World") | Education | `2021/06/bpclogo.png` | `https://bpc.edu.ph/` |
| 9 | — | Bulacan Provincial Library | Provincial library | Education | `2026/01/BPL_LOGO.png` | `https://sites.google.com/view/bulacan-provincial-library/home` |
| 10 | GKA | Gintong Kabataan Awards | Awards for outstanding Bulakenyo youth | Awards | `2024/10/gka_logo.png` | `https://gka.bulacan.gov.ph/` |
| 11 | — | Dangal ng Lipi | Natatanging Bulakenyo Award (`lang="fil"`) | Awards | `2021/08/DNL-LOGO-300.png` | `https://dangalnglipi.bulacan.gov.ph/` |
| 12 | GGB | Gawad Galing Barangay | Awards for outstanding barangays | Awards | `2024/03/GGB-Logo-Trans.png` | `https://gawadgalingbarangay.bulacan.gov.ph/index.php` |
| 13 | GGK | Gawad Galing Kooperatiba | Awards for outstanding cooperatives | Awards | `2023/10/GGKlogo.png` | `https://ggk.bulacan.gov.ph/index.php` |
| 14 | — | Sineliksik Bulacan Program | Sineliksik Bulacan Program | Culture | `2022/11/SINEliksikLOGO2022.png` | `https://sineliksik.bulacan.gov.ph/index.php` |
| 15 | — | E-Procurement | Bulacan e-Procurement System | Services | `2021/07/eprocurement.png` | `https://eprocurement.bulacan.gov.ph/` |

**Filter chips:** All · Government · Services · Education · Awards · Culture `[new label]`.
**Heading:** Agencies and partners `[new label]` (the live grid has no heading).

---

## 11. Feedback and footer

### 11.1 Feedback band
`src/data/footer.ts` → `feedback`.

| Field | Value |
|---|---|
| Heading | Feedback and Redress Mechanism (from PRD §5.10; the live site shows it as a QR image only) |
| Line | Tell us about your experience with our services. `[new label]` |
| Button | Give feedback → `https://forms.gle/iWRccrL6EdD3t3rk7` `[external]` |
| QR | `2026/02/ClientSurveyQR_website.jpg`, alt "QR code for the client satisfaction survey" |
| Mobile toggle | "Show QR code" / "Hide QR code" |

### 11.2 Footer columns
All `[external]` unless internal.

| Column `[new label]` | Links |
|---|---|
| **Government** | General Info `/general-info/` · Government `/government/` · Cities and Municipalities `/cities-and-municipalities/` · Citizen's Charter `/government/citizens-charter/` · HR Corner `/hr-corner/` · Contact Us `/contact-us/` |
| **Services** | Bulacan Webmail `https://webmail.bulacan.gov.ph/` · Socio-Economic Profiling System (SEPS Online) `https://sep.bulacan.gov.ph/` · E-Procurement `https://eprocurement.bulacan.gov.ph/` · Jobs (PESO) `https://peso.bulacan.gov.ph/` |
| **Media** | Galing Bulacan `https://www.youtube.com/user/MyBulacan` · Radyo Kapitolyo `https://www.facebook.com/radyokapitolyo/` · The Capitol and Bulacan Ngayon (§8 links) |
| **Resources** | PAGASA `https://www.pagasa.dost.gov.ph/` · Business `/business/` · Health `/health/` · Tourism `/tourism/` |

Live footer menu also lists Home and Education (Education points to the homepage; `[broken]`, omitted from the columns since Education has no landing page).

Logos used on the live footer for Galing Bulacan (`2022/07/GB-LOGO-NEW-nov14.png`), Radyo Kapitolyo (`2022/07/radyokapitolyo_fromPPAO.jpg`), Webmail (`2021/09/webmail-2-300x117.png`), SEPS (`2021/09/seps-1-300x117.png`) and PAGASA (`2024/09/pagasa-logo-150x150.png`) become text links; logos aren't needed in the concept footer.

### 11.3 Seals row

| Seal | Whole poster | Link |
|---|---|---|
| Transparency Seal | `2020/01/transparencyseal-1-150x150.png` | `/government/citizens-charter/` (as on live site) |
| Philippine Government Seal | `2021/06/govph-seal-mono-footer150.png` | `https://www.gov.ph/` `[external]` |
| People's Agenda 10 | §1 | — |

### 11.4 Credits

| Line | Text |
|---|---|
| Original credit (verbatim) | Provincial Government of Bulacan \| Developed and Designed by the Provincial Information Technology Office. © Copyright 2022. All Rights Reserved. |
| Original hosting credit | Philippine Data Center → `https://bnshosting.net/` |
| Concept credit `[new label]` | Concept redesign by Elton. Content from bulacan.gov.ph, developed by the Provincial Information Technology Office. Not affiliated with the Provincial Government of Bulacan. |
| Disclaimer | Concept redesign, not the official website of the Provincial Government of Bulacan. (shown once, in the footer) |

The concept shows its own credit and disclaimer; the original credit is quoted in a smaller line as the source attribution.

---

## 12. Audit notes (for Part 1)

Found while taking this snapshot. Not fixed in content (PRD non-goal), but useful for the reel.

| # | Finding |
|---|---|
| 1 | 13 slider posters weigh **21.9 MB**, all loaded on the homepage, each 2500×1121px |
| 2 | Slider images have **no alt text** and **no links**; prev/next controls are empty links |
| 3 | 9 of 13 posters bake all their text into the image, so it can't be read by screen readers, translated or searched |
| 4 | Header logos are in the HTML **twice** |
| 5 | **Five `<h1>`s** on one page (Governor's Message, What to do, News, Publications, Featured videos) |
| 6 | 10 YouTube iframes load at once |
| 7 | Broken links: Scholarship (`https://#`), Pandi District Hospital (`#`), footer Education (→ homepage) |
| 8 | Copyright says **2022**; Governor's Message still says "newly launched" and refers to the pandemic |
| 9 | Internal "What to do" links open in a new tab |
| 10 | Unhelpful alt text: publication cover alt is `"1"`, logos are `"Official-Logo"`, `"FRAME"` |
| 11 | 15+ font sizes and 3 font families in the CSS (design-system §2) |
| 12 | Agency grid has no heading and uses acronym-only labels |

---

## 13. Open items

1. ~~Text-only hero slide variant~~ Dropped: every slide shows its full poster.
2. **News "View all" destination:** no news index is linked on the live homepage. Options: link to the live site's category/archive page if one exists, or omit the link.
3. **News thumbnails with officials:** treated as article content, not design elements. Confirm.
4. **BPSTPC full name:** not stated on its own site or the homepage; confirm from another source or show the acronym only.
5. **Hero length:** 13 slides is a lot. Option: show slides 1–4 in the carousel and the 8 awards as a single "Recognitions" slide that expands into a list. Content stays complete either way.
6. **Asset download:** pull every asset listed here into `src/assets/` at the start of the build, so the concept doesn't hotlink the official server.
