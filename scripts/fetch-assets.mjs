// One-time snapshot of the images listed in content.md into src/assets/.
// Run: node scripts/fetch-assets.mjs   (skips files that already exist; --force to re-download)
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');
const UP = 'https://bulacan.gov.ph/wp-content/uploads/';
const force = process.argv.includes('--force');

const videoIds = [
  'peXuGpPKFys', 'z0HlifxTvPs', 'ovSj7s5O_sU', 'fM0lfOQKXcY', 'me_TB3uRkBI',
  'eGXn1TBHfu0', 'brBR19XiKwg', 't-XT4t-QTEM', 'hO9-y4BGUNw', '7h2BdbzsLGY',
];

// [local path under src/assets, source URL]
const manifest = [
  // logos (content.md §1)
  ['logos/seal.png', UP + '2021/05/Official-Logo-1.png'],
  ['logos/province-banner.png', UP + '2021/07/FRAME-3-e1636598453840.png'],
  ['logos/peoples-agenda.png', UP + '2021/11/peoples-agenda-e1636598233282.png'],

  // hero: only posters without officials' photos (content.md §3)
  ['hero/job-fair.jpg', UP + '2026/11/jobfair_nov28.jpg'],
  ['hero/dapc-week.jpg', UP + '2026/11/DAPC-PGB-WEBSITE.jpg'],
  ['hero/childrens-month.jpg', UP + '2026/11/buwan-ng-mga-bata.jpg'],
  ['hero/iso-9001.jpg', UP + '2024/02/iso_banner.jpg'],

  // news (§5)
  ['news/gawad-galing-kooperatiba.jpg', UP + 'bb-plugin/cache/GAWAD-GALING-KOOPERATIBA-2026-HALL-OF-FAME-AWARDEE-1024x576-landscape.jpeg'],
  ['news/double-win.jpg', UP + 'bb-plugin/cache/DOUBLE-WIN-1024x683-landscape.jpg'],
  ['news/seal-placeholder.jpg', UP + 'bb-plugin/cache/Untitled-2-landscape.jpg'],

  // what to do (§7)
  ['experience/shop.jpg', UP + '2022/07/Shop.jpg'],
  ['experience/invest.jpg', UP + '2022/08/Major-Industries-2.jpg'],
  ['experience/have-fun.jpg', UP + '2022/07/HaveFun.jpg'],

  // publications (§8)
  ['publications/the-capitol.jpg', UP + '2026/10/The-Capitol_2ndQ-2026.jpg'],
  ['publications/bulacan-ngayon.jpg', UP + '2026/10/1-791x1024.jpg'],

  // agencies (§10)
  ['agencies/sp.png', UP + '2022/06/SP-SEAL-logo.png'],
  ['agencies/pcl.gif', UP + '2019/09/pcl.gif'],
  ['agencies/lnb.png', UP + '2019/09/lnblogo.png'],
  ['agencies/peso.png', UP + '2024/01/ppeso_logo.png'],
  ['agencies/gad.png', UP + '2021/06/GAD-PGB-LOGO-230x300.png'],
  ['agencies/pdrrmo.png', UP + '2023/07/PDRRMO.png'],
  ['agencies/bpstpc.png', UP + '2021/07/BPSTPC.png'],
  ['agencies/bpc.png', UP + '2021/06/bpclogo.png'],
  ['agencies/library.png', UP + '2026/01/BPL_LOGO.png'],
  ['agencies/gka.png', UP + '2024/10/gka_logo.png'],
  ['agencies/dangal-ng-lipi.png', UP + '2021/08/DNL-LOGO-300.png'],
  ['agencies/ggb.png', UP + '2024/03/GGB-Logo-Trans.png'],
  ['agencies/ggk.png', UP + '2023/10/GGKlogo.png'],
  ['agencies/sineliksik.png', UP + '2022/11/SINEliksikLOGO2022.png'],
  ['agencies/eprocurement.png', UP + '2021/07/eprocurement.png'],

  // footer (§11)
  ['footer/client-survey-qr.jpg', UP + '2026/02/ClientSurveyQR_website.jpg'],
  ['footer/transparency-seal.png', UP + '2020/01/transparencyseal-1-150x150.png'],
  ['footer/govph-seal.png', UP + '2021/06/govph-seal-mono-footer150.png'],

  // video thumbnails (§9)
  ...videoIds.map((id) => [`videos/${id}.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`]),
];

const exists = (p) => access(p).then(() => true, () => false);

// Keep the repo light: cap source width (Astro still optimizes to WebP/AVIF at build).
const maxWidth = (rel) => (rel.startsWith('agencies/') || rel.startsWith('footer/') ? 400 : 2000);
async function shrink(rel, buf) {
  if (!/\.(jpe?g|png)$/i.test(rel)) return buf; // gif/other: leave untouched
  const img = sharp(buf);
  const { width = 0 } = await img.metadata();
  const pipeline = width > maxWidth(rel) ? img.resize({ width: maxWidth(rel) }) : img;
  return /\.png$/i.test(rel)
    ? pipeline.png({ compressionLevel: 9, palette: true }).toBuffer()
    : pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
}

// True 16:9 thumbnail: maxres if it exists, otherwise crop the letterbox bars off the 4:3 hqdefault.
async function videoThumb(id) {
  const get = (name) => fetch(`https://i.ytimg.com/vi/${id}/${name}.jpg`);
  const max = await get('maxresdefault');
  if (max.ok) return Buffer.from(await max.arrayBuffer());
  const hq = await get('hqdefault');
  if (!hq.ok) throw new Error(`HTTP ${hq.status}`);
  return sharp(Buffer.from(await hq.arrayBuffer())).extract({ left: 0, top: 45, width: 480, height: 270 }).toBuffer();
}

let ok = 0, skipped = 0;
const failed = [];
for (const [rel, url] of manifest) {
  const out = join(ROOT, rel);
  if (!force && (await exists(out))) { skipped++; continue; }
  try {
    let buf;
    if (rel.startsWith('videos/')) {
      buf = await videoThumb(rel.slice(7, -4));
    } else {
      const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      buf = Buffer.from(await res.arrayBuffer());
    }
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, await shrink(rel, buf));
    ok++;
  } catch (err) {
    failed.push(`${rel} (${err.message})`);
  }
}
console.log(`downloaded ${ok}, skipped ${skipped}, failed ${failed.length}`);
if (failed.length) { console.log(failed.join('\n')); process.exit(1); }
