import type { ExperienceCard } from './types';
import { page } from './site';

import shop from '../assets/experience/shop.jpg';
import invest from '../assets/experience/invest.jpg';
import haveFun from '../assets/experience/have-fun.jpg';

export const experienceHeading = {
  title: 'What to do in Bulacan?',
  lead: 'Experience Bulacan!',
};

/** Descriptions are concept labels that restate the destination menus (content.md §7). */
export const experience: ExperienceCard[] = [
  {
    label: 'Shop',
    description: 'Tatak Bulakenyo products',
    image: shop,
    imageAlt: 'Tatak Bulakenyo products',
    href: page('/tatak-bulakenyo-products/'),
  },
  {
    label: 'Invest',
    description: 'Business and investment in Bulacan',
    image: invest,
    imageAlt: "Bulacan's major industries",
    href: page('/business/'),
  },
  {
    label: 'Have Fun',
    description: 'Tourism: historical, heritage, ecological and religious sites, and festivals',
    image: haveFun,
    imageAlt: 'Tourist attractions in Bulacan',
    href: page('/tourism/'),
  },
];
