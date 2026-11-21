import { pages } from './pages';
import { municipalities } from './nav';
import { agencies } from './agencies';
import { news } from './news';
import { page } from './site';

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
];
