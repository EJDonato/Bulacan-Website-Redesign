import type { ImageMetadata } from 'astro';

/** A link out to the real site. `broken` links render as placeholders (design-system §9.13). */
export type Link = {
  label: string;
  href: string;
  broken?: boolean;
};

/** A menu entry. No `href` means a group label or a button that only opens a submenu. */
export type NavItem = {
  label: string;
  href?: string;
  broken?: boolean;
  children?: NavItem[];
};

/** One hero poster, shown whole. The text fields transcribe what the poster says: they describe it for screen readers. */
export type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  text?: string;
  /** Extra lines the poster carries (winners, deadlines). */
  details?: string[];
  /** Human-readable date as shown on the poster. */
  dateLabel?: string;
  image: ImageMetadata;
  /** Source poster path under /wp-content/uploads/, for reference. */
  source: string;
};

export type QuickLink = Link & {
  hint: string;
  /** Lucide icon name. */
  icon: string;
};

export type NewsItem = {
  title: string;
  originalTitle: string;
  /** ISO date. */
  date: string;
  excerpt: string;
  image: ImageMetadata;
  imageAlt: string;
  href: string;
  /** Generic placeholder image: render small on a tinted tile instead of stretching it. */
  placeholderImage?: boolean;
};

export type ExperienceCard = {
  label: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  href: string;
};

export type Publication = {
  title: string;
  issue: string;
  cover: ImageMetadata;
  coverAlt: string;
  href: string;
};

export type Video = {
  youtubeId: string;
  title: string;
  thumbnail: ImageMetadata;
};

export type AgencyCategory = 'Government' | 'Services' | 'Education' | 'Awards' | 'Culture';

export type Agency = {
  acronym?: string;
  name: string;
  description?: string;
  category: AgencyCategory;
  logo: ImageMetadata;
  href: string;
  /** True when the full name could not be confirmed from the agency's own site. */
  nameUnverified?: boolean;
};
