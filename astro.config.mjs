import { defineConfig } from 'astro/config';

// Set SITE_URL (the origin, for example https://example.org) at build time so share previews and canonical links use absolute URLs.
// If the site is served from a subpath, set `base` here as well.
export default defineConfig({
  site: process.env.SITE_URL,
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
