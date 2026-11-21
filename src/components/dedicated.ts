/**
 * Pages that opt out of the generic placeholder (InnerPage.astro).
 * Map a path from `conceptPages` (src/data/site.ts) to its own Astro component, which receives `{ page }`.
 * Paths not listed here render the placeholder template.
 */
import FullDisclosurePage from './pages/FullDisclosurePage.astro';
import CitiesPage from './pages/CitiesPage.astro';
import OfficesPage from './pages/OfficesPage.astro';
import CharterPage from './pages/CharterPage.astro';
import InvestPage from './pages/InvestPage.astro';
import HealthPage from './pages/HealthPage.astro';
import TourismPage from './pages/TourismPage.astro';
import HrPage from './pages/HrPage.astro';
import ContactPage from './pages/ContactPage.astro';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dedicatedPages: Record<string, any> = {
  '/cities-and-municipalities/': CitiesPage,
  '/government/offices/': OfficesPage,
  '/government/citizens-charter/': CharterPage,
  '/government/full-disclosure-report/': FullDisclosurePage,
  '/invest-in-bulacan/': InvestPage,
  '/health/': HealthPage,
  '/tourism/': TourismPage,
  '/hr-corner/': HrPage,
  '/contact-us/': ContactPage,
};
