import type { ImageMetadata } from 'astro';
import type { NavItem } from './types';
import { nav } from './nav';
import { news } from './news';
import { publications } from './publications';
import { quickLinks } from './quickLinks';
import { experience } from './experience';
import { footerColumns, seals } from './footer';
import { isExternal, official, toPath } from './site';

/**
 * Registry of every page that lives inside the concept (single source for routes).
 * Internal hrefs are collected from all data files and deduped by path. The menu tree gives each
 * page its parent trail and children; news and publication pages keep what the homepage already shows.
 * Home is the homepage (src/pages/index.astro), so it is not part of the registry.
 */

/** A step in a breadcrumb. No `href` means a label with no page, like the "District Hospitals" menu group. */
export type Crumb = { title: string; href?: string };

/** A page (or unavailable placeholder) listed on a section page. */
export type ChildRef = { title: string; href?: string; broken?: boolean };

export type ChildGroup = { label?: string; items: ChildRef[] };

export type PageEntry = {
  /** Site-relative pathname with leading and trailing slash, mirroring bulacan.gov.ph. */
  path: string;
  /** Internal href (respects the base path). */
  href: string;
  title: string;
  kind: 'section' | 'page' | 'news' | 'publication';
  /** Ancestors, nearest last. Home is added by the page, the current page is not included. */
  crumbs: Crumb[];
  groups: ChildGroup[];
  /** The same page on bulacan.gov.ph. */
  official: string;
  news?: { date: string; excerpt: string; image: ImageMetadata; imageAlt: string; placeholderImage?: boolean };
  publication?: { title: string; issue: string; cover: ImageMetadata; coverAlt: string };
};

const entries = new Map<string, PageEntry>();

const add = (href: string, title: string, extra: Partial<PageEntry> = {}) => {
  const path = toPath(href);
  if (path === toPath('/') || entries.has(path)) return;
  entries.set(path, {
    path,
    href,
    title,
    kind: 'page',
    crumbs: [],
    groups: [],
    official: official(path),
    ...extra,
  });
};

const refOf = (item: NavItem): ChildRef | undefined => {
  if (item.broken) return { title: item.label, broken: true };
  if (item.href && !isExternal(item.href)) return { title: item.label, href: item.href };
  return undefined;
};

/** Walks the menu: registers each internal page with its trail, and collects what each page lists beneath it. */
const walk = (items: NavItem[], crumbs: Crumb[]) => {
  for (const item of items) {
    const internal = item.href && !isExternal(item.href) && !item.broken;
    const kids = item.children ?? [];
    if (internal) {
      const groups: ChildGroup[] = [];
      const plain = kids.filter((k) => !(k.children && !k.href)).map(refOf).filter((r): r is ChildRef => !!r);
      if (plain.length) groups.push({ items: plain });
      for (const k of kids) {
        if (k.children && !k.href) {
          const items = k.children.map(refOf).filter((r): r is ChildRef => !!r);
          if (items.length) groups.push({ label: k.label, items });
        }
      }
      add(item.href!, item.label, { kind: groups.length ? 'section' : 'page', crumbs, groups });
    }
    if (kids.length) walk(kids, [...crumbs, { title: item.label, href: internal ? item.href : undefined }]);
  }
};

walk(nav.filter((i) => i.label !== 'Home'), []);

for (const n of news) {
  add(n.href, n.title, {
    kind: 'news',
    news: { date: n.date, excerpt: n.excerpt, image: n.image, imageAlt: n.imageAlt, placeholderImage: n.placeholderImage },
  });
}

for (const p of publications) {
  add(p.href, `${p.title}, ${p.issue}`, {
    kind: 'publication',
    publication: { title: p.title, issue: p.issue, cover: p.cover, coverAlt: p.coverAlt },
  });
}

// Anything else the homepage links to that the menu does not cover (labels as the fallback title).
for (const l of [...quickLinks, ...experience, ...footerColumns.flatMap((c) => c.links), ...seals]) {
  const href = l.href;
  if (isExternal(href)) continue;
  add(href, 'label' in l ? l.label : href);
}

export const pages: PageEntry[] = [...entries.values()];

export const getPage = (path: string) => entries.get(path);

/** Route param for `[...slug].astro`: "/government/offices/" -> "government/offices". */
export const slugOf = (path: string) => path.replace(/^\/|\/$/g, '');
