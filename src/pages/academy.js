import { Page } from '../layouts/page.js';
import { PageHero } from '../components/pagehero.js';
import { SectionHead, Button, Stats, esc } from '../components/primitives.js';
import { CourseCard, MethodList, CtaBand, Accordion } from '../components/cards.js';
import { icon } from '../components/icons.js';
import { courses, courseFilters, courseMeta } from '../data/courses.js';
import { trainingMethod, differentiators, faq } from '../data/brand.js';

const body = `
${PageHero({
  eyebrow: 'The Academy',
  title: 'Every course we teach,<br>and who each one is for.',
  lede: `${courses.length} courses in hair and makeup — from a three-day master class to a three-month diploma.
         No formal education is needed to start, and modules can be combined around the career you actually want.`,
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Academy' }],
  aside: `<div class="cluster" style="margin-top:var(--space-3)">
    <a class="btn btn--primary" href="#catalogue">Browse courses${icon.arrowRight({ size: 16 })}</a>
    <a class="btn btn--ghost btn--ghost-ink" href="/contact.html">Ask us what fits</a>
  </div>`,
})}

<!-- ========================= CATALOGUE ========================= -->
<section class="section" id="catalogue">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Course catalogue',
      title: 'Pick a discipline, or a level.',
      lede: 'Filter the catalogue, or send one enquiry and we will recommend the combination that meets your objective for the lowest total fee.',
    })}

    <div class="chips" role="group" aria-label="Filter courses" data-course-filter style="margin-bottom:var(--space-4)">
      ${courseFilters
        .map(
          (f) => `
        <button class="chip" type="button" data-filter="${esc(f.id)}" aria-pressed="${f.id === 'all'}">
          ${esc(f.label)}
          <span class="chip__count tnum">${courses.filter(f.test).length}</span>
        </button>`
        )
        .join('')}
    </div>
    <p class="result-count" role="status" aria-live="polite" data-course-count>${courses.length} courses shown</p>

    <div class="course-grid">
      ${courses.map((c, i) => CourseCard(c, i)).join('')}
      <p class="course-grid__empty" data-course-empty hidden>
        No course matches that filter. Clear it, or <a href="/contact.html" class="link">ask us directly</a>.
      </p>
    </div>

    <p class="small muted" style="margin-top:var(--space-4);max-width:70ch">
      ${esc(courseMeta.customisation)} Duration ranges from two days or a week up to twelve weeks or more,
      depending on the course and on how many you combine.
    </p>
  </div>
</section>

<!-- ========================= FEES ========================= -->
<section class="section section--ink">
  <div class="container">
    <div class="split split--wide-left">
      <div data-reveal>
        <p class="eyebrow">Fees</p>
        <h2>₹1,000 to ₹50,000. The number depends on the course, not on the negotiation.</h2>
        <p class="lede" style="margin-top:var(--space-3)">
          Individual course fees range from ₹1,000 up to ₹50,000 plus taxes and more, depending on the course.
          Fees are set at the lowest level we can sustain rather than started high and then discounted —
          and enrolling in several courses at once earns a further discount.
        </p>
        <p class="small" style="color:var(--on-ink-faint);margin-top:var(--space-3)">
          We accept cash, net banking, UPI and cheque.
        </p>
      </div>
      <div class="stats stats--2" data-reveal>
        <div class="stat"><p class="stat__value tnum">₹1,000</p><p class="stat__label">From</p><p class="stat__note">Shortest individual course</p></div>
        <div class="stat"><p class="stat__value tnum">₹50,000+</p><p class="stat__label">Up to</p><p class="stat__note">Plus taxes, for the longest</p></div>
        <div class="stat"><p class="stat__value">Yes</p><p class="stat__label">Multi-course discount</p><p class="stat__note">When you enrol in several at once</p></div>
        <div class="stat"><p class="stat__value">Paid</p><p class="stat__label">Accommodation</p><p class="stat__note">Available to students</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ========================= METHOD ========================= -->
<section class="section">
  <div class="container">
    ${SectionHead({
      eyebrow: 'The method',
      title: 'Classroom, demo, doll head, live model, floor.',
      lede: 'Every course runs through the same six stages. Nobody touches a live model before the hands already know the movement.',
    })}
    ${MethodList(trainingMethod)}
  </div>
</section>

<!-- ========================= WHY ========================= -->
<section class="section section--paper-2">
  <div class="container">
    ${SectionHead({ eyebrow: 'Why train here', title: 'Four things that are actually different.' })}
    <div class="diff">
      ${differentiators
        .map(
          (d, i) => `
        <div class="diff__item" data-reveal style="--reveal-delay:${i * 70}ms">
          <h3 class="diff__title">${esc(d.title)}</h3>
          <p class="diff__body">${esc(d.body)}</p>
        </div>`
        )
        .join('')}
    </div>
  </div>
</section>

<!-- ========================= FAQ ========================= -->
<section class="section" id="faq">
  <div class="container container--narrow">
    ${SectionHead({ eyebrow: 'Before you enrol', title: 'The questions students actually ask.', split: false })}
    ${Accordion(faq, { idPrefix: 'acadfaq' })}
  </div>
</section>

${CtaBand({
  eyebrow: 'Enrol',
  title: 'Not sure which course you need?<br>That is the normal starting point.',
  body: 'Tell us where you are starting from and what you want to do. We will tell you which modules get you there, and what it costs.',
  primary: { label: 'Send an enquiry', href: '/contact.html' },
  secondary: { label: 'See all locations', href: '/locations.html' },
})}
`;

export default Page({
  title: 'Academy — courses in hair and makeup',
  description:
    'Ten hair and makeup courses from two-week specialisations to three-month diplomas, online and offline. Fees from ₹1,000. No formal education required to start.',
  path: '/academy.html',
  body,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sam and Jas courses',
    itemListElement: courses.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      url: `https://www.samandjas.com/courses/${c.slug}.html`,
    })),
  },
});
