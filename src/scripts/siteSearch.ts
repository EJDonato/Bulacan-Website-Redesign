// Site-only search: loads the build-time index once and ranks entries by title, then keywords.
export type Entry = { title: string; kind: string; href: string; keywords?: string };

let index: Promise<Entry[]> | undefined;

export const loadIndex = () =>
  (index ??= fetch(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/search-index.json`)
    .then((r) => r.json() as Promise<Entry[]>)
    .catch(() => {
      index = undefined;
      return [];
    }));

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export function search(entries: Entry[], query: string, limit = 6): Entry[] {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const scored: [number, Entry][] = [];
  for (const e of entries) {
    const title = fold(e.title);
    const rest = fold(`${e.keywords ?? ''} ${e.kind}`);
    let score = 0;
    for (const w of words) {
      if (title.startsWith(w)) score += 4;
      else if (title.includes(` ${w}`)) score += 3;
      else if (title.includes(w)) score += 2;
      else if (rest.includes(w)) score += 1;
      else {
        score = 0;
        break;
      }
    }
    if (score) scored.push([score, e]);
  }
  const seen = new Set<string>();
  return scored
    .sort((a, b) => b[0] - a[0])
    .map(([, e]) => e)
    .filter((e) => !seen.has(e.title + e.href) && seen.add(e.title + e.href))
    .slice(0, limit);
}
