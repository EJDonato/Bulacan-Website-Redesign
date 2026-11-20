import type { QuickLink } from './types';
import { page } from './site';

/** Task-based shortcuts, one or more per user group in PRD §4 (system-design §4.4). */
export const quickLinks: QuickLink[] = [
  {
    label: 'Cities & Municipalities',
    hint: 'The 24 towns and cities of Bulacan',
    icon: 'map-pinned',
    href: page('/cities-and-municipalities/'),
  },
  {
    label: 'Offices & directory',
    hint: 'Find a provincial office',
    icon: 'building-2',
    href: page('/government/offices/'),
  },
  {
    label: "Citizen's Charter",
    hint: 'Service requirements, fees and processing times',
    icon: 'file-check-2',
    href: page('/government/citizens-charter/'),
  },
  {
    label: 'Jobs (PESO)',
    hint: 'Public Employment Service Office',
    icon: 'briefcase',
    href: 'https://peso.bulacan.gov.ph/',
  },
  {
    label: 'Invest in Bulacan',
    hint: 'Why and how to invest',
    icon: 'trending-up',
    href: page('/invest-in-bulacan/'),
  },
  {
    label: 'Health facilities',
    hint: 'Bulacan Medical Center and district hospitals',
    icon: 'hospital',
    href: page('/health/'),
  },
];
