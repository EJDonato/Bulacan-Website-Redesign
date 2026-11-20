// Scans dist/**/*.html after a build. Fails when an internal href has no built file,
// when a registered page (dist/sitemap.json) was not built, or when a page does not have exactly one h1.
// External links (the official site, other agencies) are counted but not checked.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const dist = resolve('dist');
if (!existsSync(dist)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(dist);
const htmlFiles = files.filter((f) => f.endsWith('.html'));

const resolves = (pathname) => {
  const clean = decodeURIComponent(pathname).replace(/^\/+/, '');
  const target = join(dist, clean);
  if (clean === '' || clean.endsWith('/')) return existsSync(join(target, 'index.html'));
  if (existsSync(target) && statSync(target).isFile()) return true;
  return existsSync(join(target, 'index.html'));
};

const problems = [];
let internalCount = 0;
let externalCount = 0;

for (const file of htmlFiles) {
  const rel = relative(dist, file).replaceAll('\\', '/');
  const html = readFileSync(file, 'utf8');

  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1s !== 1) problems.push(`${rel}: expected exactly one h1, found ${h1s}`);

  for (const tag of html.matchAll(/<a\b[^>]*>/g)) {
    const href = tag[0].match(/\shref="([^"]*)"/)?.[1];
    if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:)/.test(href)) continue;

    if (/^https?:\/\//.test(href)) {
      externalCount++;
      continue;
    }
    if (!href.startsWith('/') || href.startsWith('//')) {
      problems.push(`${rel}: unexpected non-root-relative href "${href}"`);
      continue;
    }
    internalCount++;
    const pathname = href.split('#')[0].split('?')[0];
    if (!resolves(pathname)) problems.push(`${rel}: internal link ${href} has no built file`);
  }
}

const sitemapFile = join(dist, 'sitemap.json');
let registered = 0;
if (!existsSync(sitemapFile)) {
  problems.push('sitemap.json missing from dist');
} else {
  const { pages } = JSON.parse(readFileSync(sitemapFile, 'utf8'));
  registered = pages.length;
  for (const p of pages) if (!resolves(p)) problems.push(`sitemap: registered page ${p} was not built`);
}

console.log(`Checked ${htmlFiles.length} pages, ${internalCount} internal links, ${externalCount} external links, ${registered} registered pages.`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log('OK: every internal link resolves, every page has one h1.');
