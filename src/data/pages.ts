import type { NavItem } from './types';
import { fullMenu } from './nav';
import { quickLinks } from './quickLinks';
import { experience } from './experience';
import { footerColumns, seals } from './footer';
import { conceptPages, isExternal, official, toPath } from './site';

export { conceptPages };

/**
 * Registry of the pages that live inside the concept (single source for routes).
 * Which paths those are is decided by `conceptPages` in site.ts: `page()` turns every other bulacan.gov.ph
 * path into an absolute official URL, so only internal hrefs reach this registry. Titles, breadcrumb trails
 * and children come from the menu tree. Home is the homepage (src/pages/index.astro), not part of the registry.
 */

/** A step in a breadcrumb. No `href` means a label with no page of ours (shown as plain text). */
export type Crumb = { title: string; href?: string };

/** A link listed on a section page. External ones (the official site) open in a new tab. */
export type ChildRef = { title: string; href?: string; external?: boolean; broken?: boolean };

export type ChildGroup = { label?: string; items: ChildRef[] };

export type PageEntry = {
  /** Site-relative pathname with leading and trailing slash, mirroring bulacan.gov.ph. */
  path: string;
  /** Internal href (respects the base path). */
  href: string;
  title: string;
  /** Ancestors, nearest last. Home is added by the page, the current page is not included. */
  crumbs: Crumb[];
  groups: ChildGroup[];
  /** The same page on bulacan.gov.ph. */
  official: string;
};

const entries = new Map<string, PageEntry>();

const add = (href: string, title: string, extra: Partial<PageEntry> = {}) => {
  if (isExternal(href)) return;
  const path = toPath(href);
  if (path === toPath('/') || entries.has(path)) return;
  entries.set(path, { path, href, title, crumbs: [], groups: [], official: official(path), ...extra });
};

const refOf = (item: NavItem): ChildRef | undefined => {
  if (item.broken) return { title: item.label, broken: true };
  if (!item.href) return undefined;
  return { title: item.label, href: item.href, external: isExternal(item.href) };
};

/** Walks the menu: registers each concept page with its trail, and collects what it lists beneath it. */
const walk = (items: NavItem[], crumbs: Crumb[]) => {
  for (const item of items) {
    const internal = !!item.href && !isExternal(item.href) && !item.broken;
    const kids = item.children ?? [];
    if (internal) {
      const groups: ChildGroup[] = [];
      const plain = kids.filter((k) => !(k.children && !k.href)).map(refOf).filter((r): r is ChildRef => !!r);
      if (plain.length) groups.push({ items: plain });
      for (const k of kids) {
        if (k.children && !k.href) {
          const list = k.children.map(refOf).filter((r): r is ChildRef => !!r);
          if (list.length) groups.push({ label: k.label, items: list });
        }
      }
      add(item.href!, item.label, { crumbs, groups });
    }
    if (kids.length) walk(kids, [...crumbs, { title: item.label, href: internal ? item.href : undefined }]);
  }
};

walk(fullMenu.filter((i) => i.label !== 'Home'), []);

// Any concept page the menu tree does not reach (labels as the fallback title).
for (const l of [...quickLinks, ...experience, ...footerColumns.flatMap((c) => c.links), ...seals]) {
  add(l.href, l.label);
}

export const pages: PageEntry[] = [...entries.values()];

/** Route param for `[...slug].astro`: "/government/offices/" -> "government/offices". */
export const slugOf = (path: string) => path.replace(/^\/|\/$/g, '');
