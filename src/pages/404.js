import { Page } from '../layouts/page.js';
import { Button } from '../components/primitives.js';

const body = `
<section class="section" style="padding-top:calc(var(--header-h) + var(--space-7));min-height:70vh;display:grid;align-items:center">
  <div class="container container--narrow" style="text-align:center">
    <p class="eyebrow eyebrow--plain" style="justify-content:center">404</p>
    <h1 style="font-size:var(--fs-display)">That page has moved on.</h1>
    <p class="lede" style="margin:var(--space-3) auto 0">
      The link may be old, or the page may have been renamed in the rebuild. Everything is still here — start from one of these.
    </p>
    <div class="cluster" style="justify-content:center;margin-top:var(--space-5)">
      ${Button({ label: 'Home', href: '/', variant: 'primary' })}
      ${Button({ label: 'All courses', href: '/academy.html', variant: 'ghost', iconRight: null })}
      ${Button({ label: 'Salon services', href: '/salon.html', variant: 'ghost', iconRight: null })}
      ${Button({ label: 'Contact', href: '/contact.html', variant: 'ghost', iconRight: null })}
    </div>
  </div>
</section>`;

export default Page({
  title: 'Page not found',
  description: 'The page you were looking for could not be found.',
  path: '/404.html',
  body,
  solidHeader: true,
});
