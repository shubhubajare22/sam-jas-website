/** Course detail template — one page generated per entry in data/courses.js */
import { Page } from '../layouts/page.js';
import { PageHero } from '../components/pagehero.js';
import { Button, Link, esc, SectionHead } from '../components/primitives.js';
import { CourseCard, MethodList, CtaBand } from '../components/cards.js';
import { EnquiryForm } from '../components/form.js';
import { icon } from '../components/icons.js';
import { courses, courseMeta } from '../data/courses.js';
import { trainingMethod } from '../data/brand.js';

const spec = (label, value, iconName) => `
  <div class="spec">
    <p class="spec__label">${icon[iconName]({ size: 13 })} ${esc(label)}</p>
    <p class="spec__value">${esc(value)}</p>
  </div>`;

export const renderCourse = (course) => {
  const related = courses.filter((c) => c.slug !== course.slug && c.discipline === course.discipline).slice(0, 3);
  const pool = related.length ? related : courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  const body = `
${PageHero({
  eyebrow: `${course.discipline} · ${course.level}`,
  title: esc(course.title),
  lede: esc(course.positioning),
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Academy', href: '/academy.html' }, { label: course.shortTitle }],
  aside: `<div class="cluster" style="margin-top:var(--space-3)">
    <a class="btn btn--primary" href="#enquire">Enquire about this course${icon.arrowRight({ size: 16 })}</a>
  </div>`,
})}

<section class="section section--tight">
  <div class="container">
    <div class="spec-grid" data-reveal>
      ${spec('Duration', course.duration, 'clock')}
      ${spec('Level', course.level, 'signal')}
      ${spec('Mode', course.mode, 'monitor')}
      ${spec('Certification', courseMeta.certification, 'award')}
      ${spec('Eligibility', courseMeta.eligibility, 'users')}
      ${spec('Accommodation', courseMeta.accommodation, 'home')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--wide-left" style="align-items:start">
      <div class="stack--lg stack">
        <div data-reveal>
          <h2>Who this course is for</h2>
          <p class="lede" style="margin-top:var(--space-2)">${esc(course.audience)}</p>
        </div>

        <div data-reveal>
          <h3 style="font-size:var(--fs-h3)">How it is taught</h3>
          <p class="muted" style="margin-top:var(--space-2)">
            Every course at Sam and Jas runs through the same six stages, in the same order.
          </p>
        </div>

        ${MethodList(trainingMethod)}

        <div class="panel" data-reveal style="background:var(--paper-2);box-shadow:none">
          <h3 style="font-size:var(--fs-h4);font-family:var(--font-body);font-weight:600">Build your own course</h3>
          <p class="small muted" style="margin-top:.6rem">
            ${esc(courseMeta.customisation)} Modules can be combined around where you are starting from and what
            you want to achieve — so the fee matches the objective. Enrol in several at once and a discount applies.
          </p>
          <div style="margin-top:var(--space-3)">${Link({ label: 'See the full catalogue', href: '/academy.html' })}</div>
        </div>

        <p class="small muted" data-reveal>
          Individual course fees across the academy range from ₹1,000 up to ₹50,000 plus taxes and more, depending
          on the course. Ask us for the fee for this one — we will also tell you if a combination works out cheaper.
        </p>
      </div>

      <aside class="sticky-aside">
        <div class="panel" id="enquire" data-reveal>
          <h2 style="font-size:var(--fs-h3);margin-bottom:.4rem">Enquire</h2>
          <p class="small muted" style="margin-bottom:var(--space-3)">
            About <strong>${esc(course.shortTitle)}</strong>. We reply on WhatsApp.
          </p>
          ${EnquiryForm({ intent: 'academy', course: course.slug, compact: true, id: `enq-${course.slug}` })}
        </div>
      </aside>
    </div>
  </div>
</section>

<section class="section section--paper-2">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Also consider',
      title: 'Courses that pair with this one.',
      aside: `<div style="margin-top:var(--space-3)">${Button({ label: 'All courses', href: '/academy.html' })}</div>`,
    })}
    <div class="course-grid">${pool.map((c, i) => CourseCard(c, i)).join('')}</div>
  </div>
</section>

${CtaBand({
  eyebrow: 'Visit us',
  title: 'Come and see the academy before you decide.',
  body: 'We will take you through a detailed comparison on the parameters that matter when you visit.',
  primary: { label: 'Find your nearest academy', href: '/locations.html' },
  secondary: { label: 'Contact us', href: '/contact.html' },
})}
`;

  return Page({
    title: `${course.title} — Academy`,
    description: `${course.positioning} ${course.duration}, ${course.level}, ${course.mode}. Certified course, no formal education needed to start.`,
    path: `/courses/${course.slug}.html`,
    body,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.title,
      description: course.positioning,
      provider: { '@type': 'Organization', name: 'Sam and Jas', url: 'https://www.samandjas.com' },
    },
  });
};
