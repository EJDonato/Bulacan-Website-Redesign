import seal from '../assets/logos/seal.png';
import provinceBanner from '../assets/logos/province-banner.png';
import peoplesAgenda from '../assets/logos/peoples-agenda.png';

export const OFFICIAL_ORIGIN = 'https://bulacan.gov.ph';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * The pages that exist inside the concept (same pathname as bulacan.gov.ph). Home ("/") is always ours.
 * This is the ONLY list to edit to add or remove a page: `page()` sends every other path to the official site.
 */
export const conceptPages: readonly string[] = [
  '/cities-and-municipalities/',
  '/government/offices/',
  '/government/citizens-charter/',
  '/invest-in-bulacan/',
  '/health/',
  '/tourism/',
  '/hr-corner/',
  '/contact-us/',
];

/** Href for a bulacan.gov.ph page: the concept path when it is a concept page, else the absolute official URL. */
export const page = (path: string) =>
  path === '/' || conceptPages.includes(path) ? `${BASE}${path}` : official(path);

/** Absolute URL of the same page on the official site (the "view the original" counterpart). */
export const official = (path: string) => `${OFFICIAL_ORIGIN}${path}`;

/** Inverse of `page()`: the site-relative path of an internal href, always with a leading and a trailing slash. */
export const toPath = (href: string) => {
  const p = BASE && href.startsWith(BASE) ? href.slice(BASE.length) : href;
  return p.endsWith('/') ? p : `${p}/`;
};

/** True for hrefs that leave the concept. */
export const isExternal = (href: string) => /^https?:/.test(href);

export const site = {
  name: 'Provincial Government of Bulacan',
  // Shown once, quietly, in the footer. There is no site-wide banner (owner's decision, 2026-11-20).
  disclaimer: 'This website is only a concept redesign, not the official website of the Provincial Government of Bulacan.',
  conceptCredit:
    'Concept redesign by Elton James Donato. Content from bulacan.gov.ph, developed by the Provincial Information Technology Office. Not affiliated with the Provincial Government of Bulacan.',
  originalCredit:
    'Provincial Government of Bulacan | Developed and Designed by the Provincial Information Technology Office. © Copyright 2022. All Rights Reserved.',
  hosting: { label: 'Philippine Data Center', href: 'https://bnshosting.net/' },
} as const;

export const logos = {
  seal: { src: seal, alt: 'Official seal of the Province of Bulacan' },
  // The gold-framed plaque from the official header. Low-resolution source (391px wide): shown at 2x or less.
  provinceBanner: { src: provinceBanner, alt: 'Republic of the Philippines, Province of Bulacan, The Official Website' },
  peoplesAgenda: { src: peoplesAgenda, alt: "The People's Agenda 10 advocacies" },
};
