/** Content cards: courses, pillars, locations, events, franchise models. */
import { icon } from './icons.js';
import { esc, Badge, Link } from './primitives.js';

export const CourseCard = (course, index = 0) => `
  <a class="course-card" href="/courses/${esc(course.slug)}.html"
     data-course
     data-discipline="${esc(course.discipline)}"
     data-level="${esc(course.level)}"
     data-mode="${esc(course.mode)}"
     data-reveal style="--reveal-delay:${Math.min(index, 5) * 60}ms">
    <div class="course-card__top">
      ${Badge(course.discipline, course.discipline.toLowerCase())}
      <span class="course-card__index tnum">${String(index + 1).padStart(2, '0')}</span>
    </div>
    <div>
      <h3 class="course-card__title">${esc(course.shortTitle)}</h3>
      <p class="course-card__desc" style="margin-top:.6rem">${esc(course.positioning)}</p>
    </div>
    <div class="course-card__meta">
      <span>${icon.clock({ size: 14 })}${esc(course.duration)}</span>
      <span>${icon.signal({ size: 14 })}${esc(course.level)}</span>
      <span>${icon.monitor({ size: 14 })}${esc(course.mode)}</span>
    </div>
  </a>`;

export const Pillar = ({ num, title, body, href, cta, art, feature = false }, i = 0) => `
  <a class="pillar${feature ? ' pillar--feature' : ''}" href="${esc(href)}"
     data-reveal style="--reveal-delay:${i * 90}ms">
    ${art ? `<span class="pillar__art" style="background-image:url('${esc(art)}')" aria-hidden="true"></span>` : ''}
    <span class="pillar__num tnum">${esc(num)}</span>
    <div>
      <h3 class="pillar__title">${esc(title)}</h3>
      <p class="pillar__body" style="margin-top:.85rem">${esc(body)}</p>
    </div>
    <span class="pillar__foot">${esc(cta)} ${icon.arrowRight({ size: 16 })}</span>
  </a>`;

export const LocationCard = (loc, i = 0) => {
  const mapQ = encodeURIComponent(`${loc.address}`);
  return `
  <article class="loc" data-location data-type="${esc(loc.type)}" data-state="${esc(loc.state)}"
           data-search="${esc(`${loc.city} ${loc.area} ${loc.state} ${loc.partner || ''}`.toLowerCase())}"
           data-reveal style="--reveal-delay:${Math.min(i, 6) * 50}ms">
    <div class="loc__top">
      <div>
        <h3 class="loc__city">${esc(loc.city)}</h3>
        <p class="loc__area" style="margin:.2rem 0 0">${esc(loc.area)}</p>
      </div>
      ${loc.badge ? Badge(loc.badge, 'scarlet') : Badge(loc.type === 'salon' ? 'Salon' : 'Academy')}
    </div>
    <p class="loc__addr">${esc(loc.address)}</p>
    ${loc.partner ? `<p class="loc__meta">Franchise partner · <strong>${esc(loc.partner)}</strong></p>` : `<p class="loc__meta">${esc(loc.entity)}</p>`}
    <div class="loc__links">
      ${loc.phones
        .map(
          (p) =>
            `<a class="btn btn--ghost btn--sm" href="tel:${esc(p)}">${icon.phone({ size: 13 })}&nbsp;${esc(
              p.replace(/^\+91/, '+91 ')
            )}</a>`
        )
        .join('')}
      <a class="btn btn--ghost btn--sm" href="https://www.google.com/maps/search/?api=1&query=${mapQ}"
         target="_blank" rel="noopener">${icon.pin({ size: 13 })}&nbsp;Map</a>
    </div>
  </article>`;
};

export const ModelCard = (m, i = 0) => `
  <article class="model${m.recommended ? ' model--recommended' : ''}" data-reveal style="--reveal-delay:${i * 70}ms">
    ${m.recommended ? `<span class="model__flag">Both sides of the business</span>` : ''}
    <div>
      <h3 class="model__name">${esc(m.name)}</h3>
      <p class="model__kicker" style="margin-top:.3rem">${esc(m.kicker)}</p>
    </div>
    <p class="model__price tnum">${esc(m.investment)}<small>Investment</small></p>
    <dl class="model__specs">
      <div class="model__spec"><dt>Tenure</dt><dd>${esc(m.tenure)}</dd></div>
      <div class="model__spec"><dt>Territory</dt><dd>${esc(m.territory)}</dd></div>
      <div class="model__spec"><dt>Royalty</dt><dd>${esc(m.royalty)}</dd></div>
    </dl>
    <ul class="model__resp">
      ${m.responsibilities.map((r) => `<li>${icon.check({ size: 14 })}<span>${esc(r)}</span></li>`).join('')}
    </ul>
    <p class="small muted" style="margin:0;padding-top:.5rem">${esc(m.forWhom)}</p>
  </article>`;

export const EventCard = (e, i = 0) => `
  <article class="event-card" data-reveal style="--reveal-delay:${i * 80}ms">
    <p class="event-card__meta">${esc(e.meta)}</p>
    <h3 class="event-card__name">${esc(e.name)}</h3>
    <p class="small muted" style="margin:0">${esc(e.body)}</p>
  </article>`;

export const MethodList = (steps) => `
  <ol class="method">
    ${steps
      .map(
        (s, i) => `
      <li class="method__item" data-reveal style="--reveal-delay:${Math.min(i, 5) * 60}ms">
        <span class="method__step tnum">${esc(s.step)}</span>
        <h3 class="method__title">${esc(s.title)}</h3>
        <p class="method__body">${esc(s.body)}</p>
      </li>`
      )
      .join('')}
  </ol>`;

export const Accordion = (items, { idPrefix = 'acc' } = {}) => `
  <div class="accordion">
    ${items
      .map(
        (it, i) => `
      <div class="accordion__item">
        <h3 style="margin:0">
          <button class="accordion__btn" type="button" aria-expanded="false" aria-controls="${idPrefix}-${i}" id="${idPrefix}-btn-${i}">
            <span>${esc(it.q)}</span>
            <span class="accordion__icon">${icon.plus({ size: 20 })}</span>
          </button>
        </h3>
        <div class="accordion__panel" id="${idPrefix}-${i}" role="region" aria-labelledby="${idPrefix}-btn-${i}" hidden>
          <div><p>${esc(it.a)}</p></div>
        </div>
      </div>`
      )
      .join('')}
  </div>`;

export const CtaBand = ({
  eyebrow = 'Next step',
  title,
  body,
  primary = { label: 'Enquire now', href: '/contact.html' },
  secondary,
} = {}) => `
  <section class="section section--tight cta-band">
    <div class="container cta-band__inner">
      <div data-reveal>
        <p class="eyebrow" style="color:rgba(255,255,255,.8)">${esc(eyebrow)}</p>
        <h2 class="cta-band__title">${title}</h2>
        ${body ? `<p class="cta-band__body">${esc(body)}</p>` : ''}
      </div>
      <div class="cta-band__actions" data-reveal style="--reveal-delay:90ms">
        <a class="btn btn--lg" href="${esc(primary.href)}">${esc(primary.label)}<span class="btn__icon">${icon.arrowRight({ size: 16 })}</span></a>
        ${secondary ? `<a class="btn btn--ghost btn--lg" href="${esc(secondary.href)}"${secondary.external ? ' target="_blank" rel="noopener"' : ''}>${esc(secondary.label)}</a>` : ''}
      </div>
    </div>
  </section>`;
