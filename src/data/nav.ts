import type { NavItem } from './types';
import { page } from './site';

const city = (label: string, slug: string): NavItem => ({
  label,
  href: page(`/cities-and-municipalities/${slug}/`),
});

const hospital = (label: string, slug: string): NavItem => ({
  label,
  href: page(`/health/public-health-office/${slug}/`),
});

/** Live-site order is kept as-is (Meycauayan City sits before Marilao). */
export const municipalities: NavItem[] = [
  city('Angat', 'angat'),
  city('Balagtas', 'balagtas'),
  city('Baliwag City', 'baliwag-city'),
  city('Bocaue', 'bocaue'),
  city('Bulakan', 'bulakan'),
  city('Bustos', 'bustos'),
  city('Calumpit', 'calumpit'),
  city('Doña Remedios Trinidad', 'dona-remedios-trinidad'),
  city('Guiguinto', 'guiguinto'),
  city('Hagonoy', 'hagonoy'),
  city('City of Malolos', 'city-of-malolos'),
  city('Meycauayan City', 'meycauayan-city'),
  city('Marilao', 'marilao'),
  city('Norzagaray', 'norzagaray'),
  city('Obando', 'obando'),
  city('Pandi', 'pandi'),
  city('Paombong', 'paombong'),
  city('Plaridel', 'plaridel'),
  city('Pulilan', 'pulilan'),
  city('San Ildefonso', 'san-ildefonso'),
  city('San Jose del Monte City', 'san-jose-del-monte-city'),
  city('San Miguel', 'san-miguel'),
  city('San Rafael', 'san-rafael'),
  city('Santa Maria', 'santa-maria'),
];

export const nav: NavItem[] = [
  { label: 'Home', href: page('/') }, // the concept's own homepage
  {
    label: 'General Info',
    href: page('/general-info/'),
    children: [
      { label: 'About Bulacan', href: page('/general-info/about-bulacan/') },
      {
        label: 'History of Bulacan',
        href: page('/general-info/history-of-bulacan/'),
        children: [
          { label: 'National Heroes and Patriots', href: page('/general-info/national-heroes-and-patriots/') },
          { label: 'National Artists', href: page('/general-info/national-artist/') },
          { label: 'Provincial Governors', href: page('/general-info/provincial-governors/') },
        ],
      },
    ],
  },
  {
    label: 'Government',
    href: page('/government/'),
    children: [
      { label: 'About the Administration', href: page('/government/about-the-administration/') },
      { label: 'Elective Officials', href: page('/government/elective-officials/') },
      { label: 'Offices', href: page('/government/offices/') },
      { label: 'Organizational Chart', href: page('/government/organizational-chart/') },
      { label: 'Civil Society Organizations', href: page('/civil-society-organizations/') },
      { label: "Citizen's Charter", href: page('/government/citizens-charter/') },
      { label: 'Full Disclosure Report', href: page('/government/full-disclosure-report/') },
      {
        label: 'Report on Fund Utilization and Status of Program/Project Implementation',
        href: page('/government/report-on-fund-utilization-and-status-of-program-project-implementation/'),
      },
    ],
  },
  {
    label: 'Cities and Municipalities',
    href: page('/cities-and-municipalities/'),
    children: municipalities,
  },
  {
    label: 'Business',
    href: page('/business/'),
    children: [
      { label: 'Major Industries', href: page('/major-industries/') },
      { label: 'Tatak Bulakenyo Products', href: page('/tatak-bulakenyo-products/') },
      { label: 'Invest in Bulacan', href: page('/invest-in-bulacan/') },
      { label: '8 Reasons for Investing in Bulacan', href: page('/8-reasons-for-investing-in-bulacan/') },
      { label: 'Investment Opportunities', href: page('/investment-opportunities/') },
      { label: 'Investment Incentives', href: page('/investment-incentives/') },
    ],
  },
  {
    label: 'Health',
    href: page('/health/'),
    children: [
      { label: 'Bulacan Medical Center', href: page('/health/bulacan-medical-center/') },
      {
        // Group label only: not a link on the live site either.
        label: 'District Hospitals',
        children: [
          hospital('Baliuag District Hospital', 'baliuag-district-hospital'),
          hospital('Calumpit District Hospital', 'calumpit-district-hospital'),
          hospital('Emilio G. Perez Memorial District Hospital', 'emilio-g-perez-memorial-district-hospital'),
          hospital('Felix T. Reyes Memorial Hospital', 'felix-t-reyes-memorial-hospital'),
          hospital('Gregorio del Pilar District Hospital', 'gregorio-del-pilar-district-hospital'),
          { label: 'Pandi District Hospital', broken: true }, // live href is "#"
          hospital('Plaridel Infirmary (Bulacan Medical Center Annex)', 'plaridel-infirmary'),
          hospital('Rogaciano M. Mercado Memorial Hospital', 'rogaciano-m-mercado-memorial-hospital'),
          hospital('San Miguel District Hospital', 'san-miguel-district-hospital'),
        ],
      },
      { label: 'Public Health Office', href: page('/health/public-health-office/') },
    ],
  },
  {
    // No landing page on the live site: a menu button only.
    label: 'Education',
    children: [
      { label: 'Bulacan Polytechnic College', href: 'https://bpc.edu.ph/' },
      { label: 'Scholarship', broken: true }, // live href is "https://#"
    ],
  },
  {
    label: 'Tourism',
    href: page('/tourism/'),
    children: [
      { label: 'Historical Sites', href: page('/tourism/historical-sites/') },
      { label: 'Heritage Sites', href: page('/tourism/heritage-sites/') },
      { label: 'Ecological Sites', href: page('/tourism/ecological-sites/') },
      { label: 'Religious Sites', href: page('/tourism/religious-sites/') },
      { label: 'Festivals', href: page('/tourism/festivals/') },
      { label: 'Where to Stay, Dine, and Have Fun', href: page('/tourism/where-to-stay-dine-and-have-fun/') },
      { label: 'Photo Gallery', href: page('/tourism/photo-gallery/') },
    ],
  },
  { label: 'HR Corner', href: page('/hr-corner/') },
  { label: 'Contact Us', href: page('/contact-us/') },
];
