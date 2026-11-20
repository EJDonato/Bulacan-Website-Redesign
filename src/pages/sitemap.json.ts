import { pages } from '../data/pages';
import { page } from '../data/site';

/** Every page in the concept (homepage plus the registry). Read by scripts/check-links.mjs. */
export function GET() {
  const paths = [page('/'), ...pages.map((p) => p.href)];
  return new Response(JSON.stringify({ pages: paths }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
