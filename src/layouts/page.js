/** The single HTML document shell every page is rendered into. */
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { site } from '../data/site.js';
import { esc } from '../components/primitives.js';

export const Page = ({
  title,
  description,
  path = '/',
  body,
  solidHeader = false,
  jsonLd,
  bodyClass = '',
} = {}) => {
  const fullTitle = path === '/' ? `${title}` : `${title} · ${site.name}`;
  const canonical = `${site.url}${path}`;
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<script>document.documentElement.classList.add('js')</script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">
<meta name="theme-color" content="#0b0b0c">
<!-- Prototype build: keep the demo out of search results so it cannot compete with
     or be mistaken for the live samandjas.com. Remove this when the site goes live. -->
<meta name="robots" content="noindex, nofollow">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${site.url}/assets/founders-duo.png">
<meta name="twitter:card" content="summary_large_image">

<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap">
<link rel="stylesheet" href="/styles.css">
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
</head>
<body class="${esc(bodyClass)}">
${Header({ path, solid: solidHeader })}
<main id="main" tabindex="-1">
${body}
</main>
${Footer()}
<script type="module" src="/app.js"></script>
</body>
</html>`;
};
