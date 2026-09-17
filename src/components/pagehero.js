/** Interior page hero. */
import { Crumbs, Eyebrow, esc } from './primitives.js';

export const PageHero = ({ eyebrow, title, lede, crumbs, aside }) => `
<section class="pagehero">
  <div class="container">
    ${crumbs ? Crumbs(crumbs) : ''}
    <div class="pagehero__inner">
      <div data-reveal>
        ${eyebrow ? Eyebrow(eyebrow) : ''}
        <h1 class="pagehero__title">${title}</h1>
      </div>
      <div data-reveal style="--reveal-delay:90ms">
        ${lede ? `<p class="lede">${lede}</p>` : ''}
        ${aside || ''}
      </div>
    </div>
  </div>
</section>`;
