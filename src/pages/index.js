import { Page } from '../layouts/page.js';
import { Button, Link, SectionHead, Stats, Eyebrow, esc } from '../components/primitives.js';
import { CourseCard, Pillar, EventCard, MenuPanel, MethodList, CtaBand } from '../components/cards.js';
import { EventMarquee } from '../components/marquee.js';
import { salonMenus } from '../data/salon.js';
import { icon } from '../components/icons.js';
import { courses } from '../data/courses.js';
import { proofPoints, trainingMethod, differentiators, eventFormats, founders } from '../data/brand.js';
import { locationStats } from '../data/franchise.js';
import { site, contact, app } from '../data/site.js';

const featured = courses.filter((c) => c.flagship || c.masterclass).concat(courses.filter((c) => !c.flagship && !c.masterclass).slice(0, 3)).slice(0, 6);

const body = `

<!-- ============================ HERO ============================ -->
<section class="hero">
  <span class="hero__arc" aria-hidden="true"></span>
  <div class="container hero__inner">
    <div class="hero__copy">
      <p class="eyebrow">Academy · Salon · Franchise</p>
      <h1 class="hero__title">
        Learn the craft.<br><em>Wear the name.</em>
      </h1>
      <p class="lede hero__lede">
        Hair and makeup training that starts wherever you are — and salons where the same
        standard is practised every day. Taught by Sam and Jas across ${locationStats.cities} cities.
      </p>
      <div class="hero__actions">
        ${Button({ label: 'Explore courses', href: '/academy.html', variant: 'primary', size: 'lg' })}
        ${Button({ label: 'Book the salon', href: '/salon.html', variant: 'ghost', size: 'lg', iconRight: null, extra: { class: 'btn--ghost-ink' } })}
      </div>
    </div>

    <figure class="hero__figure">
      <img src="/assets/founders-duo.png" width="776" height="722" fetchpriority="high" decoding="async"
           alt="Jas Sir and Sam Ma'am, founders of Sam and Jas, holding scissors and a makeup brush">
    </figure>
  </div>

  <div class="container">
    <div class="hero__fork">
      <a class="fork" href="/academy.html">
        <span>
          <span class="fork__label">I want to learn</span>
          <span class="fork__hint">The Academy · ${courses.length} courses</span>
        </span>
        <span class="fork__arrow">${icon.arrowRight({ size: 26 })}</span>
      </a>
      <a class="fork" href="/salon.html">
        <span>
          <span class="fork__label">I want a salon appointment</span>
          <span class="fork__hint">Hair · Colour · Makeup · Bridal</span>
        </span>
        <span class="fork__arrow">${icon.arrowRight({ size: 26 })}</span>
      </a>
    </div>
  </div>
</section>

<!-- ======================= BRAND INTRODUCTION ======================= -->
<section class="section">
  <div class="container">
    <div class="split split--wide-left">
      <div data-reveal>
        ${Eyebrow('Who we are')}
        <h2>Two founders, one standard, taught the same way in every room.</h2>
        <div class="prose" style="margin-top:var(--space-3)">
          <p class="muted">
            Sam and Jas is a chain of hair and makeup academies and salons, founded in ${site.established}.
            We train online and offline, and we run the salons where that training has to hold up.
          </p>
          <p class="muted">
            Jas Sir trained at Toni &amp; Guy and Vidal Sassoon and leads the technical side.
            Sam Ma'am brings twenty years across hair and makeup, and mentors every student through it.
            Together they have taught over two lakh students and run more than 500 seminars and workshops across India.
          </p>
        </div>
        <div class="cluster" style="margin-top:var(--space-4)">
          ${Button({ label: 'About Sam and Jas', href: '/about.html' })}
          ${Link({ label: 'Why Sam and Jas', href: '/about.html#why' })}
        </div>
      </div>

      <div class="grid-2" style="gap:var(--space-3)">
        ${founders
          .map(
            (f, i) => `
        <figure class="figure figure--portrait" data-reveal style="--reveal-delay:${i * 100}ms">
          <div class="figure__frame">
            <img src="${esc(f.portrait)}" width="1080" height="1920" loading="lazy" decoding="async"
                 alt="${esc(f.honorific)}, ${esc(f.role)} of Sam and Jas">
          </div>
          <figcaption class="figure__caption"><strong>${esc(f.honorific)}</strong> · ${esc(f.role)}</figcaption>
        </figure>`
          )
          .join('')}
      </div>
    </div>
  </div>
</section>

<!-- ============================ PROOF ============================ -->
<section class="section section--tight">
  <div class="container">
    ${Stats(proofPoints)}
    <p class="small muted" style="margin-top:var(--space-3)">
      ${locationStats.total} locations listed across ${locationStats.cities} cities and ${locationStats.states} states —
      ${locationStats.academies} academies and ${locationStats.salons} salons.
      <a class="link" href="/locations.html" style="margin-left:.5rem">See them all ${icon.arrowRight({ size: 14 })}</a>
    </p>
  </div>
</section>

<!-- =========================== PILLARS =========================== -->
<section class="section section--ink">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Three ways in',
      title: 'One brand, three doors.',
      lede: 'Whether you want to train, to be looked after, or to run a Sam and Jas of your own — start here.',
    })}
    <div class="pillars">
      ${Pillar(
        {
          num: '01',
          title: 'The Academy',
          body: `${courses.length} courses in hair and makeup, from two-week specialisations to three-month diplomas. Online and offline. No formal education required to start.`,
          href: '/academy.html',
          cta: 'Explore courses',
          feature: true,
        },
        0
      )}
      ${Pillar(
        {
          num: '02',
          title: 'The Salon',
          body: 'Cutting, colour, chemical services, treatments and bridal — for women and for men. The full menu, practised by the people who teach it.',
          href: '/salon.html',
          cta: 'See services',
        },
        1
      )}
      ${Pillar(
        {
          num: '03',
          title: 'Franchise',
          body: 'Four partnership models, from a single academy to a whole state. Published investment, tenure, territory and royalty — no guessing.',
          href: '/franchise.html',
          cta: 'See the models',
        },
        2
      )}
    </div>
  </div>
</section>

<!-- ======================= FEATURED COURSES ======================= -->
<section class="section" id="courses">
  <div class="container">
    ${SectionHead({
      eyebrow: 'The Academy',
      title: 'Start where you are. Finish where you want to be.',
      lede: 'Courses are modular — combine them around your goal so you only pay for the training that goal actually needs.',
      aside: `<div style="margin-top:var(--space-3)">${Button({ label: `All ${courses.length} courses`, href: '/academy.html' })}</div>`,
    })}
    <div class="course-grid">
      ${featured.map((c, i) => CourseCard(c, i)).join('')}
    </div>
  </div>
</section>

<!-- ========================= WHY SAM AND JAS ========================= -->
<section class="section section--ink" id="why">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Why Sam and Jas',
      title: 'Affordable by design. Rigorous by method.',
      lede: 'Fees are set at the lowest level we can sustain rather than started high and discounted — and the training is the same either way.',
    })}
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

<!-- =========================== THE METHOD =========================== -->
<section class="section">
  <div class="container">
    ${SectionHead({
      eyebrow: 'How you are taught',
      title: 'Six stages, in this order, every time.',
      lede: 'Nobody touches a live model before the hands already know the movement.',
    })}
    ${MethodList(trainingMethod)}
    <p class="small muted" style="margin-top:var(--space-3)">
      Placement assistance is provided to candidates who complete the training. No job guarantee is given.
    </p>
  </div>
</section>

<!-- ======================== SALON EXPERIENCE ======================== -->
<section class="section section--paper-2">
  <div class="container">
    ${SectionHead({
      eyebrow: 'The Salon',
      title: 'The same hands that teach it, doing it.',
      lede: 'Cutting, styling, colour, chemical services and treatments — with a separate, complete menu for women and for men.',
      aside: `<div style="margin-top:var(--space-3)">${Button({ label: 'Full service menu', href: '/salon.html' })}</div>`,
    })}
    <div class="grid-2">
      ${MenuPanel({ title: 'For Women', href: '/salon.html#women', count: `${salonMenus.women.groups.reduce((n, g) => n + g.items.length, 0)} services`, categories: salonMenus.women.groups.map((g) => g.name), note: 'Bridal make-up and mehandi are taken on appointment only.' }, 0)}
      ${MenuPanel({ title: 'For Men', href: '/salon.html#men', count: `${salonMenus.men.groups.reduce((n, g) => n + g.items.length, 0)} services`, categories: salonMenus.men.groups.map((g) => g.name), note: 'Groom’s make-up is available at the salon.' }, 1)}
    </div>
  </div>
</section>

<!-- ============================ EVENTS ============================ -->
<section class="section section--ink">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Events & seminars',
      title: 'Five hundred rooms, and counting.',
      lede: 'Seminars, webinars and workshops led by Sam Ma\'am, Jas Sir and the team — across India, for beginners and working professionals alike.',
      aside: `<div style="margin-top:var(--space-3)">${Button({ label: 'Events & seminars', href: '/events.html', variant: 'ghost', extra: { class: 'btn--ghost-ink' } })}</div>`,
    })}
    <div class="grid-3">
      ${eventFormats
        .map(
          (e, i) => `
        <article class="event-card" data-reveal style="--reveal-delay:${i * 80}ms;background:var(--ink-2);border-color:var(--line-ink);color:var(--on-ink)">
          <p class="event-card__meta" style="color:#ff6b5c">${esc(e.meta)}</p>
          <h3 class="event-card__name" style="color:var(--on-ink)">${esc(e.name)}</h3>
          <p class="small" style="margin:0;color:var(--on-ink-muted)">${esc(e.body)}</p>
        </article>`
        )
        .join('')}
    </div>
  </div>
  <div style="margin-top:var(--space-6)">
    ${EventMarquee()}
  </div>
  <p class="container small" style="margin-top:1rem;color:var(--on-ink-faint)">
    Seminars, workshops and stage sessions conducted by Sam and Jas across India.
  </p>
</section>

<!-- =========================== FRANCHISE =========================== -->
<section class="section">
  <div class="container">
    <div class="split split--wide-right split--reverse">
      <div data-reveal>
        ${Eyebrow('Franchise')}
        <h2>Run a Sam and Jas. The numbers are on the table.</h2>
        <p class="lede" style="margin-top:var(--space-3)">
          Four models — a single academy, a single salon, both together, or a master franchise for an entire
          state. Investment, tenure, territory and royalty are published for each one.
        </p>
        <div class="cluster" style="margin-top:var(--space-4)">
          ${Button({ label: 'See the four models', href: '/franchise.html', variant: 'primary' })}
          ${Link({ label: `Where we already are (${locationStats.total})`, href: '/locations.html' })}
        </div>
      </div>
      <div class="stats stats--2" style="border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden" data-reveal>
        <div class="stat" style="background:var(--surface)">
          <p class="stat__value tnum">₹1L</p>
          <p class="stat__label">From</p>
          <p class="stat__note">Individual academy or salon</p>
        </div>
        <div class="stat" style="background:var(--surface)">
          <p class="stat__value tnum">4</p>
          <p class="stat__label">Models</p>
          <p class="stat__note">Academy, salon, both, or master</p>
        </div>
        <div class="stat" style="background:var(--surface)">
          <p class="stat__value tnum">${locationStats.academies}</p>
          <p class="stat__label">Academies</p>
          <p class="stat__note">Already operating</p>
        </div>
        <div class="stat" style="background:var(--surface)">
          <p class="stat__value tnum">${locationStats.states}</p>
          <p class="stat__label">States</p>
          <p class="stat__note">Maharashtra, UP, West Bengal</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================ THE APP ============================ -->
<section class="section section--tight section--paper-2">
  <div class="container appband" data-reveal>
    <span class="appband__mark" aria-hidden="true">SJ</span>
    <div>
      <h2 style="font-size:var(--fs-h3)">${esc(app.name)}</h2>
      <p class="small muted" style="margin:.4rem 0 0">
        ${esc(app.subtitle)} — course material and learning, in your pocket. Available for ${esc(app.platform)}.
      </p>
    </div>
    ${Button({ label: 'Download the app', href: app.href, iconRight: 'download' })}
  </div>
</section>

${CtaBand({
  eyebrow: 'Talk to us',
  title: 'Tell us what you want to do.<br>We will tell you exactly how.',
  body: 'A course, an appointment, or a franchise — send one message and the right person will come back to you.',
  primary: { label: 'Send an enquiry', href: '/contact.html' },
  secondary: { label: 'WhatsApp us', href: contact.whatsapp.href, external: true },
})}
`;

export default Page({
  title: 'Sam and Jas — Hair & Makeup Academy and Salon',
  description:
    'Hair and makeup academies and salons across India. Modular courses from two weeks to three months, online and offline, plus full salon services and four franchise models. Founded 2010.',
  path: '/',
  body,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    foundingDate: String(site.established),
    email: contact.email,
    telephone: contact.phones[0].tel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '33, Aram Nagar Part 1, J P Road, Andheri West',
      addressLocality: 'Mumbai',
      postalCode: '400061',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  },
});
