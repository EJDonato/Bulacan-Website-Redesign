/**
 * Pages that opt out of the generic placeholder (InnerPage.astro).
 * Map a path from `conceptPages` (src/data/site.ts) to its own Astro component, which receives `{ page }`.
 * Paths not listed here render the placeholder template.
 */
import FullDisclosurePage from './pages/FullDisclosurePage.astro';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dedicatedPages: Record<string, any> = {
  '/government/full-disclosure-report/': FullDisclosurePage,
};
