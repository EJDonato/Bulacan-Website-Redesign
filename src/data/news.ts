import type { NewsItem } from './types';
import { official } from './site';

import gawadGalingKooperatiba from '../assets/news/gawad-galing-kooperatiba.jpg';
import doubleWin from '../assets/news/double-win.jpg';
import sealPlaceholder from '../assets/news/seal-placeholder.jpg';

export const newsHeading = {
  title: 'News and announcements',
  lead: 'Want to know the latest?',
  viewAll: 'View all news',
  // The live homepage links to no news index, so there is no destination yet (content.md §13).
  viewAllHref: undefined as string | undefined,
};

/** Latest 3, as of 2026-11-20. Excerpts are truncated by the live site. Refresh before Part 3. */
export const news: NewsItem[] = [
  {
    title: 'Photo release – Gawad Galing Kooperatiba 2026 Hall of Fame awardee',
    originalTitle: 'PHOTO RELEASE – GAWAD GALING KOOPERATIBA 2026 HALL OF FAME AWARDEE',
    date: '2026-11-19',
    excerpt: 'Bulacan Governor Daniel R. Fernando with (5th from left) Sta. Monica of Bustos Multipurpose Cooperative…',
    image: gawadGalingKooperatiba,
    imageAlt: 'Gawad Galing Kooperatiba 2026 Hall of Fame awardees with Governor Daniel R. Fernando',
    href: official('/photo-release-gawad-galing-kooperatiba-2026-hall-of-fame-awardee/'),
  },
  {
    title: 'Photo release – Double win',
    originalTitle: 'PHOTO RELEASE – DOUBLE WIN',
    date: '2026-11-18',
    excerpt: 'Barangay officials of Brgy. Matictic, Norzagaray headed by their Captain Marcial S. Lucas, who won…',
    image: doubleWin,
    imageAlt: 'Barangay officials of Brgy. Matictic, Norzagaray',
    href: official('/photo-release-double-win-2/'),
  },
  {
    title: 'PGB honors outstanding barangay programs, officials in 25th GGB',
    originalTitle: 'PGB honors outstanding barangay programs, officials in 25th GGB',
    date: '2026-11-18',
    excerpt: 'CITY OF MALOLOS – The Provincial Government of Bulacan (PGB) headed by Governor Daniel R.…',
    image: sealPlaceholder,
    imageAlt: '',
    href: official('/pgb-honors-outstanding-barangay-programs-officials-in-25th-ggb/'),
    placeholderImage: true,
  },
];
