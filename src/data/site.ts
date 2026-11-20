import seal from '../assets/logos/seal.png';
import provinceBanner from '../assets/logos/province-banner.png';
import peoplesAgenda from '../assets/logos/peoples-agenda.png';

export const OFFICIAL_ORIGIN = 'https://bulacan.gov.ph';

/** Absolute URL on the official site. Every link in the concept leaves the concept, so all are absolute. */
export const official = (path: string) => `${OFFICIAL_ORIGIN}${path}`;

export const site = {
  name: 'Provincial Government of Bulacan',
  // Shown once, quietly, in the footer. There is no site-wide banner (owner's decision, 2026-11-20).
  disclaimer: 'Concept redesign, not the official website of the Provincial Government of Bulacan.',
  conceptCredit:
    'Concept redesign by Elton. Content from bulacan.gov.ph, developed by the Provincial Information Technology Office. Not affiliated with the Provincial Government of Bulacan.',
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
