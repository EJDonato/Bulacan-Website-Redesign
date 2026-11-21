import { pages } from './pages';
import { municipalities } from './nav';
import { agencies } from './agencies';
import { news } from './news';
import { page } from './site';
import { offices, municipalEmergency, otherEmergency } from './directory';
import { opd, services, hospitals } from './health';
import { vacancies, hrGroups, pdsForms } from './hr';
import { contacts } from './contacts';
import { fdrYears } from './fullDisclosure';

/**
 * What the site search can find: only things that live inside the concept. Pages are the registry's pages;
 * items that sit on the homepage (news, agencies, municipalities) lead to their own section or page here,
 * never out to bulacan.gov.ph.
 */
export type SearchEntry = {
  title: string;
  /** Where it lives, shown beside the title. */
  kind: string;
  href: string;
  /** Extra words that should match, kept out of the visible result. */
  keywords?: string;
};

const home = page('/');
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const at = (path: string, hash = '') => `${page(path)}${hash}`;

export const searchIndex: SearchEntry[] = [
  ...pages.map((p) => ({
    title: p.title,
    kind: p.crumbs.length ? p.crumbs.map((c) => c.title).join(' › ') : 'Page',
    href: p.href,
    keywords: p.groups.flatMap((g) => g.items.map((i) => i.title)).join(' '),
  })),
  { title: 'News and announcements', kind: 'Homepage', href: `${home}#news` },
  ...news.map((n) => ({ title: n.title, kind: 'News', href: `${home}#news`, keywords: n.excerpt })),
  { title: 'Publications', kind: 'Homepage', href: `${home}#publications` },
  { title: 'Videos', kind: 'Homepage', href: `${home}#videos` },
  { title: 'Agencies and partners', kind: 'Homepage', href: `${home}#agencies` },
  ...agencies.map((a) => ({
    title: a.name,
    kind: 'Agencies and partners',
    href: `${home}#agencies`,
    keywords: [a.acronym, a.description, a.category].filter(Boolean).join(' '),
  })),
  { title: 'Send feedback', kind: 'Homepage', href: `${home}#feedback`, keywords: 'complaint concern suggestion report' },
  ...municipalities.map((m) => ({
    title: m.label,
    kind: 'Cities and Municipalities',
    href: page('/cities-and-municipalities/'),
    keywords: 'town city municipality',
  })),

  // Inside the pages: offices, numbers, health services, vacancies, forms, documents.
  ...offices.map((o) => ({ title: o.name, kind: 'Offices', href: at('/government/offices/', '#offices'), keywords: 'provincial government office' })),
  ...otherEmergency.map((e) => ({ title: e.label, kind: 'Provincial emergency numbers', href: at('/government/offices/', '#emergency'), keywords: `${e.number} hotline emergency` })),
  ...municipalEmergency.map((m) => ({
    title: `${m.place} emergency numbers`,
    kind: 'Emergency numbers',
    href: at('/government/offices/', '#emergency'),
    keywords: `${m.fire} ${m.police} ${m.disaster} fire police disaster BFP PNP`,
  })),
  { title: 'In-patient services', kind: 'Health', href: at('/health/', '#panel-in-patient'), keywords: 'ward ICU NICU hospital admission beds' },
  { title: 'Out-patient services', kind: 'Health', href: at('/health/', '#panel-out-patient'), keywords: 'OPD clinic schedule' },
  ...opd.map((r) => ({ title: `${r.cases} out-patient clinic`, kind: 'Health › Out-patient', href: at('/health/', '#panel-out-patient'), keywords: `${r.location} ${r.schedule}` })),
  ...services.map((v) => ({ title: v.title, kind: 'Health › Bulacan Medical Center', href: at('/health/', `#panel-${slug(v.title)}`), keywords: v.paragraphs.join(' ') })),
  ...hospitals.map((h) => ({ title: h.name, kind: 'Health › District hospitals', href: at('/health/', '#hospitals-h'), keywords: 'hospital' })),
  ...vacancies.map((v) => ({ title: v.title, kind: 'HR Corner › Vacant positions', href: at('/hr-corner/', '#vacancies'), keywords: `${v.date} job hiring plantilla` })),
  ...[...pdsForms, ...hrGroups].flatMap((g) =>
    g.links.map((l) => ({ title: l.label, kind: `HR Corner › ${g.title ?? 'Forms'}`, href: at('/hr-corner/', pdsForms.includes(g) ? '#forms' : '#policies'), keywords: 'form policy HR' })),
  ),
  { title: 'Equal Employment Opportunity policy', kind: 'HR Corner', href: at('/hr-corner/', '#eeo'), keywords: 'EEO discrimination equality fairness' },
  ...contacts.map((c) => ({ title: c.name, kind: 'Contact Us › Office directory', href: at('/contact-us/'), keywords: `${c.head} ${c.lines.join(' ')}` })),
  ...fdrYears.flatMap((y) => [
    { title: `Full Disclosure Report ${y.year}`, kind: 'Full Disclosure Report', href: at('/government/full-disclosure-report/', `#fdr-${y.year}`), keywords: `${y.year} budget procurement financial report` },
    ...y.annual.map((d) => ({ title: `${d.label} ${y.year}`, kind: 'Full Disclosure Report', href: at('/government/full-disclosure-report/', `#fdr-${y.year}`), keywords: 'annual' })),
  ]),
  { title: "Citizen's Charter Handbook", kind: "Government › Citizen's Charter", href: at('/government/citizens-charter/'), keywords: 'services requirements fees processing time 2026' },
  { title: 'Statement of Assets, Liabilities and Net Worth (SALN)', kind: "Government › Citizen's Charter", href: at('/government/citizens-charter/'), keywords: 'SALN form' },
  { title: 'Feedback and Redress Mechanism', kind: "Government › Citizen's Charter", href: at('/government/citizens-charter/'), keywords: 'complaint concern feedback form' },
  { title: 'Most Business-Friendly LGU awards', kind: 'Invest in Bulacan', href: at('/invest-in-bulacan/'), keywords: 'awards winner finalist PCCI' },
  { title: 'Labor and employment', kind: 'Invest in Bulacan', href: at('/invest-in-bulacan/'), keywords: 'labor force employment unemployment PSA population' },
  { title: 'Daily minimum wage rates', kind: 'Invest in Bulacan', href: at('/invest-in-bulacan/'), keywords: 'wage salary pesos agriculture retail' },
  { title: 'Public-Private Partnership Code', kind: 'Invest in Bulacan', href: at('/invest-in-bulacan/'), keywords: 'PPP ordinance 18-2015' },
  { title: 'Historical sites', kind: 'Tourism', href: at('/tourism/'), keywords: 'shrine heritage' },
  { title: 'Festivals', kind: 'Tourism', href: at('/tourism/'), keywords: 'Singkaban festival events' },
];
