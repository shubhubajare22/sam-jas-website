import { Page } from '../layouts/page.js';
import { PageHero } from '../components/pagehero.js';
import { SectionHead, Button, Link, esc, formatPhone } from '../components/primitives.js';
import { CtaBand } from '../components/cards.js';
import { icon } from '../components/icons.js';
import { salonMenus } from '../data/salon.js';
import { locations } from '../data/franchise.js';
import { contact } from '../data/site.js';

const menuPanel = (menu, selected) => `
  <div id="panel-${menu.id}" role="tabpanel" aria-labelledby="tab-${menu.id}" tabindex="0" ${selected ? '' : 'hidden'}>
    <p class="lede" style="margin-bottom:var(--space-5)">${esc(menu.intro)}</p>
    <div class="menu-groups">
      ${menu.groups
        .map(
          (g, i) => `
        <section class="menu-group" data-reveal style="--reveal-delay:${Math.min(i, 5) * 50}ms">
          <h3 class="menu-group__name">${esc(g.name)}</h3>
          <ul class="menu-group__list">
            ${g.items.map((it) => `<li>${esc(it)}</li>`).join('')}
          </ul>
        </section>`
        )
        .join('')}
      <aside class="menu-note" data-reveal>
        <h3 style="font-family:var(--font-display);font-size:1.375rem;margin:0">${esc(menu.note.title)}</h3>
        <p class="small" style="margin:0;color:var(--on-ink-muted)">${esc(menu.note.body)}</p>
        <div style="margin-top:.5rem">
          <a class="btn btn--primary btn--sm" href="tel:${esc(contact.phones[0].tel)}">
            ${icon.phone({ size: 14 })}&nbsp;Call to book
          </a>
        </div>
      </aside>
    </div>
    <p class="small muted" style="margin-top:var(--space-4)">
      Prices are confirmed at the salon and vary by length, service and location. Call or WhatsApp for a quote.
    </p>
  </div>`;

const salonLocations = locations.filter((l) => l.type === 'salon' || l.badge);

const body = `
${PageHero({
  eyebrow: 'The Salon',
  title: 'The people who teach it,<br>doing it.',
  lede: 'Cutting, styling, colour, chemical services, treatments and bridal work — with a full, separate menu for women and for men.',
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Salon' }],
  aside: `<div class="cluster" style="margin-top:var(--space-3)">
    <a class="btn btn--primary" href="tel:${esc(contact.phones[0].tel)}">${icon.phone({ size: 16 })}&nbsp;Call to book</a>
    <a class="btn btn--ghost btn--ghost-ink" href="${esc(contact.whatsapp.href)}" target="_blank" rel="noopener">WhatsApp</a>
  </div>`,
})}

<section class="section" id="services">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Service menu',
      title: 'Choose your menu.',
      lede: 'Every service below is offered at Sam and Jas salons. Deep-link straight to the one you need.',
      aside: '',
    })}

    <div class="tabs" role="tablist" aria-label="Salon service menus" id="menus" data-tab-anchors="women,men,bridal:women">
      <button class="tab" role="tab" id="tab-women" aria-controls="panel-women" aria-selected="true" tabindex="0">For Women</button>
      <button class="tab" role="tab" id="tab-men" aria-controls="panel-men" aria-selected="false" tabindex="-1">For Men</button>
    </div>

    ${menuPanel(salonMenus.women, true)}
    ${menuPanel(salonMenus.men, false)}
  </div>
</section>

<section class="section section--ink">
  <div class="container">
    <div class="split split--wide-left">
      <div data-reveal>
        <p class="eyebrow">The experience</p>
        <h2>A salon run to the standard the academy teaches.</h2>
        <p class="lede" style="margin-top:var(--space-3)">
          The salons and the academies are the same business. The techniques taught in the classroom are the
          techniques practised on the floor — by trainers who have almost all professionally practised what they teach.
        </p>
        <div class="cluster" style="margin-top:var(--space-4)">
          ${Button({ label: 'Find a salon near you', href: '/locations.html', variant: 'primary' })}
          ${Link({ label: 'Train with us instead', href: '/academy.html', extra: { style: 'color:#fff' } })}
        </div>
      </div>
      <figure class="figure figure--tall" data-reveal>
        <div class="figure__frame" style="background:var(--ink-2)">
          <img src="/assets/founders-duo-alt.png" width="776" height="722" loading="lazy" decoding="async"
               alt="Jas Sir with scissors and Sam Ma'am with a compact, founders of Sam and Jas">
        </div>
        <figcaption class="figure__caption">Sam Ma'am and Jas Sir, Founders &amp; Directors.</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section section--paper-2">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Where to find us',
      title: 'Salon locations.',
      aside: `<div style="margin-top:var(--space-3)">${Button({ label: 'All 15 locations', href: '/locations.html' })}</div>`,
    })}
    <div class="loc-grid">
      ${salonLocations
        .map(
          (l, i) => `
        <article class="loc" data-reveal style="--reveal-delay:${i * 60}ms">
          <div class="loc__top">
            <div>
              <h3 class="loc__city">${esc(l.city)}</h3>
              <p class="loc__area" style="margin:.2rem 0 0">${esc(l.area)}</p>
            </div>
            <span class="badge${l.badge ? ' badge--scarlet' : ''}">${esc(l.badge || 'Salon')}</span>
          </div>
          <p class="loc__addr">${esc(l.address)}</p>
          <div class="loc__links">
            ${l.phones
              .map((p) => `<a class="btn btn--ghost btn--sm" href="tel:${esc(p)}">${icon.phone({ size: 13 })}&nbsp;${esc(formatPhone(p))}</a>`)
              .join('')}
            <a class="btn btn--ghost btn--sm" target="_blank" rel="noopener"
               href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.address)}">
               ${icon.pin({ size: 13 })}&nbsp;Map</a>
          </div>
        </article>`
        )
        .join('')}
    </div>
  </div>
</section>

${CtaBand({
  eyebrow: 'Book',
  title: 'Bridal and mehandi are by appointment.<br>Everything else, walk in or call ahead.',
  body: 'Call the salon directly, or send us a message and we will arrange the time.',
  primary: { label: 'Call the salon', href: `tel:${contact.phones[0].tel}` },
  secondary: { label: 'WhatsApp us', href: contact.whatsapp.href, external: true },
})}
`;

export default Page({
  title: 'Salon — services for women and men',
  description:
    'Full salon service menus for women and men: cutting, styling, colour bar, chemical services, treatments, bridal and mehandi by appointment.',
  path: '/salon.html',
  body,
});
