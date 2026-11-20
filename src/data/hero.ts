import type { Slide } from './types';

import jobFair from '../assets/hero/job-fair.jpg';
import dapcWeek from '../assets/hero/dapc-week.jpg';
import childrensMonth from '../assets/hero/childrens-month.jpg';
import outstandingGovernor from '../assets/hero/outstanding-governor.jpg';
import peoplesGovernorExcellence from '../assets/hero/peoples-governor-excellence.jpg';
import duyanKaNgMagiting from '../assets/hero/duyan-ka-ng-magiting.jpg';
import globalBeacon from '../assets/hero/global-beacon.jpg';
import topPerformingProvince from '../assets/hero/top-performing-province.jpg';
import subaybayani from '../assets/hero/subaybayani.jpg';
import clexah2024 from '../assets/hero/clexah-2024.jpg';
import blgfFinance from '../assets/hero/blgf-finance.jpg';
import realPropertyTax from '../assets/hero/real-property-tax.jpg';
import iso9001 from '../assets/hero/iso-9001.jpg';

/**
 * 13 slides, as on the live site (content.md §3), in the order: upcoming events first, then awards newest first.
 * Each slide is its full poster, unaltered. The text fields transcribe the poster and feed its alt text.
 *
 * Time-sensitive: slides 1-3 and 12 expire first. Refresh before recording Part 3.
 */
export const slides: Slide[] = [
  {
    id: 'job-fair',
    eyebrow: 'Job fair',
    title: 'Tara trabaho, G? Job fair for local employment',
    text: 'Level 1, Robinsons Malolos, City of Malolos, Bulacan · 10:00 AM',
    dateLabel: 'November 28, 2026',
    image: jobFair,
    source: '2026/11/jobfair_nov28.jpg',
  },
  {
    id: 'dapc-week',
    eyebrow: 'Drug Abuse Prevention and Control',
    title: 'DAPC Week 2026',
    text: 'Nagkakaisang Pamilya at Pamayanan Laban sa Ilegal na Droga Para sa Ligtas at Malusog na Kinabukasan.',
    dateLabel: 'November 16–22, 2026',
    image: dapcWeek,
    source: '2026/11/DAPC-PGB-WEBSITE.jpg',
  },
  {
    id: 'childrens-month',
    eyebrow: "34th National Children's Month Celebration",
    title: 'Manindigan! Tumugon at Kumalinga: Sa batang handa, mas ligtas ang bansa.',
    dateLabel: 'November 2026',
    image: childrensMonth,
    source: '2026/11/buwan-ng-mga-bata.jpg',
  },
  {
    id: 'outstanding-governor',
    eyebrow: 'Award',
    title: 'Outstanding Governor for Excellence in Provincial Leadership and Public Service Award',
    text: 'Governor Daniel R. Fernando · Parangal ng Natatanging Pilipino Awards Inc., Eurotel Hotel, Makati',
    dateLabel: 'October 25, 2026',
    image: outstandingGovernor,
    source: '2026/10/OutstandingGovernor2026.png',
  },
  {
    id: 'peoples-governor-excellence',
    eyebrow: 'Award',
    title: "People's Governor Excellence Award",
    text: 'Hon. Daniel R. Fernando · 15th World Class Excellence Japan Awards, The Heritage Hotel Manila, Pasay City',
    dateLabel: 'June 18, 2026',
    image: peoplesGovernorExcellence,
    source: '2026/06/ExcellenceAward2026.jpg',
  },
  {
    id: 'duyan-ka-ng-magiting',
    eyebrow: 'Award · In commemoration of Philippine Independence Day',
    title: 'Duyan ka ng Magiting',
    text: 'Natatanging Filipino sa Larangan sa Paglilingkod sa Tao at Bayan · Gov. Daniel R. Fernando · AFP Commissioned Officers Club House, Tejeros Hall General Emilio Aguinaldo, Quezon City',
    dateLabel: 'June 12, 2026',
    image: duyanKaNgMagiting,
    source: '2026/06/award_DuyanKaNgMagiting.jpg',
  },
  {
    id: 'global-beacon',
    eyebrow: 'Award',
    title: '2025 Global Beacon of Good Governance',
    text: 'Gov. Daniel R. Fernando · GAA Hollywood',
    dateLabel: '2025',
    image: globalBeacon,
    source: '2026/01/2025GlobalBeaconAward.jpg',
  },
  {
    id: 'top-performing-province',
    eyebrow: 'Award · Provincial Agriculture Office',
    title: 'Top Performing Province (Rank 1)',
    text: 'Province of Bulacan',
    image: topPerformingProvince,
    source: '2026/01/Top-Performing-Province.jpg',
  },
  {
    id: 'subaybayani',
    eyebrow: 'Award · DILG',
    title: 'SubayBayani Award Exemplar 2025',
    text: 'Province of Bulacan · The Manila Hotel, City of Manila',
    dateLabel: 'November 26, 2025',
    image: subaybayani,
    source: '2025/12/SubayBayani_award2025.jpg',
  },
  {
    id: 'clexah-2024',
    eyebrow: 'Award · Department of Health',
    title: 'CLEXAH 2024 Health Champions',
    text: 'Province of Bulacan, Gold, Provincial Category · Central Luzon 11th Excellence Awards for Health 2024, Royce Hotel, Clark, Pampanga',
    details: [
      'City and municipal health champions: Gold, City of San Jose del Monte · Silver, Plaridel · Bronze, Santa Maria',
    ],
    dateLabel: 'November 24, 2025',
    image: clexah2024,
    source: '2025/12/CLEXAH2024.jpg',
  },
  {
    id: 'blgf-finance',
    eyebrow: 'Award · Bureau of Local Government Finance',
    title: "Three awards at the BLGF Stakeholders' Recognition Program",
    text: 'Province of Bulacan, for receiving three awards at the Bureau of Local Government Finance Stakeholders\' Recognition Program',
    details: [
      'Top 1 in the collection of locally sourced revenues among all provinces for FY 2024',
      'Third among all provinces in the ratio of locally sourced revenues to total current operating income for FY 2024',
      'Ninth among all provinces in the year-on-year growth rate of locally sourced revenues for FY 2024',
    ],
    image: blgfFinance,
    source: '2025/12/finance_award2025.jpg',
  },
  {
    id: 'real-property-tax',
    eyebrow: 'Paalala · Tanggapan ng Panlalawigang Ingat-Yaman',
    title: 'Real property tax deadlines 2026',
    text: 'Q1 Marso 31 · Q2 Hunyo 30 · Q3 Setyembre 30 · Q4 Disyembre 29, 2026 · 10% discount for on-time payment, 15% for advance payment · Inquiries: Revenue Operations Division, (044) 791-8115',
    details: [
      'Professional tax: on or before January 31, 2026',
      'Tax on printing and publication: on or before the 20th of each month',
      'Tax on delivery vans and trucks: on or before January 20, 2026',
      'Amusement tax: on or before the 15th of each month',
    ],
    dateLabel: '2026',
    image: realPropertyTax,
    source: '2025/11/Real-Property-Tax.jpg',
  },
  {
    id: 'iso-9001',
    eyebrow: 'Certification',
    title: 'ISO 9001:2015 certified',
    text: 'TÜV Rheinland, Management System, ID 9105086309',
    image: iso9001,
    source: '2024/02/iso_banner.jpg',
  },
];

/** Alt text for a poster: everything it says, in reading order. */
export const slideAlt = (slide: Slide) =>
  [slide.eyebrow, slide.title, slide.text, ...(slide.details ?? []), slide.dateLabel]
    .filter(Boolean)
    .join('. ');
