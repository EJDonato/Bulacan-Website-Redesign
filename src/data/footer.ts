import type { Link } from './types';
import { page } from './site';

import clientSurveyQr from '../assets/footer/client-survey-qr.jpg';
import transparencySeal from '../assets/footer/transparency-seal.png';
import govphSeal from '../assets/footer/govph-seal.png';

export const feedback = {
  heading: 'Feedback and Redress Mechanism',
  text: 'Tell us about your experience with our services.',
  button: { label: 'Give feedback', href: 'https://forms.gle/iWRccrL6EdD3t3rk7' },
  qr: { src: clientSurveyQr, alt: 'QR code for the client satisfaction survey' },
  showQr: 'Show QR code',
  hideQr: 'Hide QR code',
};

export type FooterColumn = { heading: string; links: Link[] };

/**
 * Column names are concept labels. Footer logos (Galing Bulacan, Radyo Kapitolyo, Webmail, SEPS, PAGASA)
 * become text links. "Education" is left out: on the live site it points to the homepage.
 */
export const footerColumns: FooterColumn[] = [
  {
    heading: 'Government',
    links: [
      { label: 'General Info', href: page('/general-info/') },
      { label: 'Government', href: page('/government/') },
      { label: 'Cities and Municipalities', href: page('/cities-and-municipalities/') },
      { label: "Citizen's Charter", href: page('/government/citizens-charter/') },
      { label: 'Full Disclosure Report', href: page('/government/full-disclosure-report/') },
      { label: 'HR Corner', href: page('/hr-corner/') },
      { label: 'Contact Us', href: page('/contact-us/') },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Bulacan Webmail', href: 'https://webmail.bulacan.gov.ph/' },
      { label: 'Socio-Economic Profiling System (SEPS Online)', href: 'https://sep.bulacan.gov.ph/' },
      { label: 'E-Procurement', href: 'https://eprocurement.bulacan.gov.ph/' },
      { label: 'Jobs (PESO)', href: 'https://peso.bulacan.gov.ph/' },
    ],
  },
  {
    heading: 'Media',
    links: [
      { label: 'Galing Bulacan', href: 'https://www.youtube.com/user/MyBulacan' },
      { label: 'Radyo Kapitolyo', href: 'https://www.facebook.com/radyokapitolyo/' },
      { label: 'The Capitol', href: page('/capitol/the-capitol-2nd-quarter-2026/') },
      { label: 'Bulacan Ngayon', href: page('/bulngayon/bulacan-ngayon-2nd-quarter-2026/') },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'PAGASA', href: 'https://www.pagasa.dost.gov.ph/' },
      { label: 'Business', href: page('/business/') },
      { label: 'Health', href: page('/health/') },
      { label: 'Tourism', href: page('/tourism/') },
    ],
  },
];

export const seals = [
  {
    // Links to the Citizen's Charter, as on the live site.
    label: 'Transparency Seal',
    src: transparencySeal,
    href: page('/government/citizens-charter/'),
  },
  { label: 'Philippine Government Seal', src: govphSeal, href: 'https://www.gov.ph/' },
];
