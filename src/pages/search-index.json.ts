import { searchIndex } from '../data/searchIndex';

/** The site-search index, fetched the first time someone focuses a search box. */
export function GET() {
  return new Response(JSON.stringify(searchIndex), { headers: { 'Content-Type': 'application/json' } });
}
