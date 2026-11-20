import type { Agency, AgencyCategory } from './types';

import sp from '../assets/agencies/sp.png';
import pcl from '../assets/agencies/pcl.gif';
import lnb from '../assets/agencies/lnb.png';
import peso from '../assets/agencies/peso.png';
import gad from '../assets/agencies/gad.png';
import pdrrmo from '../assets/agencies/pdrrmo.png';
import bpstpc from '../assets/agencies/bpstpc.png';
import bpc from '../assets/agencies/bpc.png';
import library from '../assets/agencies/library.png';
import gka from '../assets/agencies/gka.png';
import dangalNgLipi from '../assets/agencies/dangal-ng-lipi.png';
import ggb from '../assets/agencies/ggb.png';
import ggk from '../assets/agencies/ggk.png';
import sineliksik from '../assets/agencies/sineliksik.png';
import eprocurement from '../assets/agencies/eprocurement.png';

export const agenciesHeading = 'Agencies and partners';

export const agencyCategories: ('All' | AgencyCategory)[] = [
  'All',
  'Government',
  'Services',
  'Education',
  'Awards',
  'Culture',
];

/**
 * 15 tiles, live-site order. Full names come from each site's own title; descriptions restate that
 * title (content.md §10). Every link is external.
 */
export const agencies: Agency[] = [
  {
    acronym: 'SP',
    name: 'Sangguniang Panlalawigan',
    description: 'Provincial legislative board',
    category: 'Government',
    logo: sp,
    href: 'https://sp.bulacan.gov.ph/index.php',
  },
  {
    acronym: 'PCL',
    name: 'Philippine Councilors League, Bulacan',
    description: 'League of city and municipal councilors',
    category: 'Government',
    logo: pcl,
    href: 'https://pcl.bulacan.gov.ph/index.php',
  },
  {
    acronym: 'LNB',
    name: 'Liga ng mga Barangay, Bulacan Chapter',
    description: 'League of barangays',
    category: 'Government',
    logo: lnb,
    href: 'https://lnb.bulacan.gov.ph/index.php',
  },
  {
    acronym: 'PESO',
    name: 'Provincial Public Employment Service Office',
    description: 'Jobs and employment services',
    category: 'Services',
    logo: peso,
    href: 'https://peso.bulacan.gov.ph/',
  },
  {
    acronym: 'GAD-FPS',
    name: 'Gender and Development Focal Point System',
    description: 'PGB Gender and Development',
    category: 'Services',
    logo: gad,
    href: 'https://gad.bulacan.gov.ph/',
  },
  {
    acronym: 'PDRRMO',
    name: 'Provincial Disaster Risk Reduction and Management Office',
    description: 'Disaster preparedness and response',
    category: 'Services',
    logo: pdrrmo,
    href: 'https://pdrrmo.bulacan.gov.ph/index.php',
  },
  {
    // Full name is not stated on its own site or the homepage (content.md §13). Shown as the acronym only.
    acronym: 'BPSTPC',
    name: 'BPSTPC',
    category: 'Government',
    logo: bpstpc,
    href: 'https://bpstpc.bulacan.gov.ph/index.php',
    nameUnverified: true,
  },
  {
    acronym: 'BPC',
    name: 'Bulacan Polytechnic College',
    description: 'Provincial college ("Your Partner to Reach the World")',
    category: 'Education',
    logo: bpc,
    href: 'https://bpc.edu.ph/',
  },
  {
    name: 'Bulacan Provincial Library',
    description: 'Provincial library',
    category: 'Education',
    logo: library,
    href: 'https://sites.google.com/view/bulacan-provincial-library/home',
  },
  {
    acronym: 'GKA',
    name: 'Gintong Kabataan Awards',
    description: 'Awards for outstanding Bulakenyo youth',
    category: 'Awards',
    logo: gka,
    href: 'https://gka.bulacan.gov.ph/',
  },
  {
    name: 'Dangal ng Lipi',
    description: 'Natatanging Bulakenyo Award',
    category: 'Awards',
    logo: dangalNgLipi,
    href: 'https://dangalnglipi.bulacan.gov.ph/',
  },
  {
    acronym: 'GGB',
    name: 'Gawad Galing Barangay',
    description: 'Awards for outstanding barangays',
    category: 'Awards',
    logo: ggb,
    href: 'https://gawadgalingbarangay.bulacan.gov.ph/index.php',
  },
  {
    acronym: 'GGK',
    name: 'Gawad Galing Kooperatiba',
    description: 'Awards for outstanding cooperatives',
    category: 'Awards',
    logo: ggk,
    href: 'https://ggk.bulacan.gov.ph/index.php',
  },
  {
    name: 'Sineliksik Bulacan Program',
    description: 'Sineliksik Bulacan Program',
    category: 'Culture',
    logo: sineliksik,
    href: 'https://sineliksik.bulacan.gov.ph/index.php',
  },
  {
    name: 'E-Procurement',
    description: 'Bulacan e-Procurement System',
    category: 'Services',
    logo: eprocurement,
    href: 'https://eprocurement.bulacan.gov.ph/',
  },
];
