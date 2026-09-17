/** Site header: brand, desktop nav with an Academy mega-menu, and the mobile overlay. */
import { nav, contact } from '../data/site.js';
import { courses } from '../data/courses.js';
import { icon } from './icons.js';
import { Button, esc } from './primitives.js';

const isCurrent = (href, path) =>
  href === path || (href !== '/' && path.startsWith(href.replace('.html', '')));

const megaCourses = () => `
  <div class="megamenu">
    <div class="megamenu__aside">
      <p class="eyebrow" style="margin-bottom:.75rem">The Academy</p>
      <p class="small" style="color:var(--on-ink-muted);margin-bottom:1rem">
        Basic to advanced training in hair and makeup. Build your own course from the modules.
      </p>
      <a class="link" href="/academy.html" style="color:#fff">All courses ${icon.arrowRight({ size: 15 })}</a>
    </div>
    <div class="megamenu__grid">
      ${courses
        .map(
          (c) => `
        <a class="megamenu__link" href="/courses/${c.slug}.html">
          <strong>${esc(c.shortTitle)}</strong>
          <span>${esc(c.duration)} · ${esc(c.level)}</span>
        </a>`
        )
        .join('')}
    </div>
  </div>`;

const desktopItem = (item, path) => {
  const current = isCurrent(item.href, path);
  const hasPanel = item.mega || item.children;
  return `
    <li class="nav__item" style="${hasPanel ? 'position:static' : 'position:relative'}">
      <a class="nav__link" href="${esc(item.href)}" ${current ? 'aria-current="page"' : ''}>
        ${esc(item.label)}
        ${hasPanel ? `<span class="nav__chev">${icon.chevronDown({ size: 14 })}</span>` : ''}
      </a>
      ${
        item.mega
          ? `<div class="nav__panel">${megaCourses()}</div>`
          : item.children
            ? `<div class="nav__panel nav__panel--sm">
                 <ul>${item.children
                   .map(
                     (c) =>
                       `<li><a class="megamenu__link" href="${esc(c.href)}"><strong>${esc(c.label)}</strong></a></li>`
                   )
                   .join('')}</ul>
               </div>`
            : ''
      }
    </li>`;
};

const mobileItem = (item, i) => {
  const children = item.mega
    ? courses.map((c) => ({ label: c.shortTitle, href: `/courses/${c.slug}.html` }))
    : item.children;
  if (!children) {
    return `<li class="mobilenav__item"><a class="mobilenav__link" href="${esc(item.href)}">${esc(item.label)}</a></li>`;
  }
  return `
    <li class="mobilenav__item">
      <button class="mobilenav__link" type="button" aria-expanded="false" aria-controls="mnav-${i}">
        ${esc(item.label)}
        <span class="mobilenav__chev">${icon.chevronDown({ size: 22 })}</span>
      </button>
      <ul class="mobilenav__sub" id="mnav-${i}" hidden>
        <li><a class="mobilenav__sublink" href="${esc(item.href)}"><strong>${esc(item.label)} overview</strong></a></li>
        ${children
          .map((c) => `<li><a class="mobilenav__sublink" href="${esc(c.href)}">${esc(c.label)}</a></li>`)
          .join('')}
      </ul>
    </li>`;
};

export const Header = ({ path = '/', solid = false } = {}) => `
<a class="skip-link" href="#main">Skip to main content</a>

<header class="header${solid ? ' header--solid' : ''}" data-header>
  <div class="header__inner">
    <a class="brand" href="/" aria-label="Sam and Jas — home">
      <img src="/assets/wordmark-white.png" alt="Sam and Jas" width="1421" height="274" fetchpriority="high">
    </a>

    <nav class="nav" aria-label="Primary">
      <ul class="nav__list">
        ${nav.map((i) => desktopItem(i, path)).join('')}
      </ul>
    </nav>

    <div class="header__actions">
      <a class="icon-btn" href="${esc(contact.whatsapp.href)}" target="_blank" rel="noopener"
         aria-label="Chat with Sam and Jas on WhatsApp">${icon.whatsapp({ size: 20 })}</a>
      <span class="header__cta">${Button({ label: 'Enquire', href: '/contact.html', variant: 'primary', size: 'sm', iconRight: null })}</span>
      <button class="icon-btn nav-toggle" type="button" data-nav-open
              aria-label="Open menu" aria-expanded="false" aria-controls="mobilenav">
        ${icon.menu({ size: 22 })}
      </button>
    </div>
  </div>
</header>

<div class="mobilenav" id="mobilenav" data-mobilenav aria-label="Menu" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="mobilenav__top">
    <a class="brand" href="/" aria-label="Sam and Jas — home">
      <img src="/assets/wordmark-white.png" alt="Sam and Jas" width="1421" height="274">
    </a>
    <button class="icon-btn" type="button" data-nav-close aria-label="Close menu" style="margin-left:auto">
      ${icon.close({ size: 22 })}
    </button>
  </div>
  <div class="mobilenav__body">
    <ul>
      <li class="mobilenav__item"><a class="mobilenav__link" href="/">Home</a></li>
      ${nav.map(mobileItem).join('')}
      <li class="mobilenav__item"><a class="mobilenav__link" href="/contact.html">Contact</a></li>
    </ul>
  </div>
  <div class="mobilenav__foot">
    ${Button({ label: 'WhatsApp', href: contact.whatsapp.href, variant: 'ghost', iconRight: null, extra: { class: 'btn--ghost-ink', target: '_blank', rel: 'noopener' } })}
    ${Button({ label: 'Enquire', href: '/contact.html', variant: 'primary', iconRight: null })}
  </div>
</div>`;
