#!/usr/bin/env node
/**
 * Zero-dependency static site generator.
 * Renders src/pages/*.js to dist/, concatenates the stylesheets, copies assets.
 */
import { mkdir, writeFile, readFile, readdir, copyFile, rm, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');

const STYLES = ['tokens.css', 'base.css', 'components.css', 'pages.css'];

/**
 * Rewrite root-relative URLs to page-relative ones so the built site is portable:
 * it works from a web root, from a sub-path, from file:// and from a static host
 * that serves it alongside other files. Absolute, protocol-relative, anchor,
 * mailto:, tel: and data: URLs are left alone.
 */
const relativise = (html, rel) => {
  const depth = rel.split('/').length - 1;
  const prefix = depth === 0 ? '' : '../'.repeat(depth);
  return html
    // the bare site root must resolve to a real file, not to the current page
    .replace(/(\s(?:href|src)=")\/(")/g, (_m, lead, tail) => `${lead}${prefix}index.html${tail}`)
    .replace(/(\s(?:href|src|content)=")\/(?!\/)/g, (_m, lead) => `${lead}${prefix}`);
};

/**
 * The 404 page is served by the host for *any* missing path, so page-relative URLs
 * would resolve against whatever directory the visitor typed. It alone gets
 * root-absolute URLs under SITE_BASE ("/" locally, "/sam-jas-website/" on Pages).
 */
const SITE_BASE = (process.env.SITE_BASE || '/').replace(/\/?$/, '/');
const absolutise = (html) =>
  html
    .replace(/(\s(?:href|src)=")\/(")/g, (_m, lead, tail) => `${lead}${SITE_BASE}${tail}`)
    .replace(/(\s(?:href|src|content)=")\/(?!\/)/g, (_m, lead) => `${lead}${SITE_BASE}`);

const write = async (rel, contents) => {
  const out = join(dist, rel);
  await mkdir(dirname(out), { recursive: true });
  const html = rel === '404.html' ? absolutise(contents) : relativise(contents, rel);
  await writeFile(out, rel.endsWith('.html') ? html : contents);
  return out;
};

const copyDir = async (from, to) => {
  await mkdir(to, { recursive: true });
  for (const entry of await readdir(from, { withFileTypes: true })) {
    const s = join(from, entry.name);
    const d = join(to, entry.name);
    if (entry.isDirectory()) await copyDir(s, d);
    else await copyFile(s, d);
  }
};

const bust = (mod) => `${pathToFileURL(mod).href}?t=${Date.now()}`;

async function build() {
  const t0 = Date.now();
  if (existsSync(dist)) await rm(dist, { recursive: true });
  await mkdir(dist, { recursive: true });

  /* ---- Styles: one request, in cascade order ---------------------------- */
  const css = (
    await Promise.all(
      STYLES.map(async (f) => `/* ==== ${f} ==== */\n${await readFile(join(root, 'src/styles', f), 'utf8')}`)
    )
  ).join('\n\n');
  await write('styles.css', css);

  /* ---- Client script ----------------------------------------------------- */
  await write('app.js', await readFile(join(root, 'src/scripts/app.js'), 'utf8'));

  /* ---- Static assets ----------------------------------------------------- */
  await copyDir(join(root, 'public'), dist);

  /* ---- Pages ------------------------------------------------------------- */
  const pageDir = join(root, 'src/pages');
  const files = (await readdir(pageDir)).filter((f) => extname(f) === '.js' && f !== 'course.js');
  const written = [];

  for (const file of files) {
    const mod = await import(bust(join(pageDir, file)));
    const name = file.replace(/\.js$/, '');
    const out = name === 'index' ? 'index.html' : `${name}.html`;
    await write(out, mod.default);
    written.push(out);
  }

  /* ---- Course detail pages, generated from data -------------------------- */
  const { renderCourse } = await import(bust(join(pageDir, 'course.js')));
  const { courses } = await import(bust(join(root, 'src/data/courses.js')));
  for (const course of courses) {
    await write(`courses/${course.slug}.html`, renderCourse(course));
    written.push(`courses/${course.slug}.html`);
  }

  /* ---- sitemap.xml + robots.txt ------------------------------------------ */
  const { site } = await import(bust(join(root, 'src/data/site.js')));
  const urls = written.map((p) => `${site.url}/${p.replace(/index\.html$/, '')}`);
  await write(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map((u) => `  <url><loc>${u}</loc></url>`)
      .join('\n')}\n</urlset>\n`
  );
  // Prototype build: search engines are kept off the demo entirely.
  await write('robots.txt', 'User-agent: *\nDisallow: /\n');

  const bytes = (await Promise.all(written.map(async (p) => (await stat(join(dist, p))).size))).reduce((a, b) => a + b, 0);
  console.log(`✓ ${written.length} pages · ${(bytes / 1024).toFixed(0)} KB HTML · ${Date.now() - t0}ms`);
  written.forEach((p) => console.log(`  /${p}`));
}

build().catch((err) => {
  console.error('✗ build failed\n', err);
  process.exit(1);
});
