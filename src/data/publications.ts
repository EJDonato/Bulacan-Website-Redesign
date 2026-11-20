import type { Publication } from './types';
import { page } from './site';

import theCapitol from '../assets/publications/the-capitol.jpg';
import bulacanNgayon from '../assets/publications/bulacan-ngayon.jpg';

export const publicationsHeading = 'Publications';

/** Quarterly issues. Refresh before Part 3. */
export const publications: Publication[] = [
  {
    title: 'The Capitol',
    issue: '2nd Quarter 2026',
    cover: theCapitol,
    coverAlt: 'Cover of The Capitol, 2nd Quarter 2026',
    href: page('/capitol/the-capitol-2nd-quarter-2026/'),
  },
  {
    title: 'Bulacan Ngayon',
    issue: '2nd Quarter 2026',
    cover: bulacanNgayon,
    coverAlt: 'Cover of Bulacan Ngayon, 2nd Quarter 2026',
    href: page('/bulngayon/bulacan-ngayon-2nd-quarter-2026/'),
  },
];
