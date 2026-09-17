import { Page } from '../layouts/page.js';
import { PageHero } from '../components/pagehero.js';
import { SectionHead, Button, esc } from '../components/primitives.js';
import { EventCard, CtaBand } from '../components/cards.js';
import { EventMarquee } from '../components/marquee.js';
import { icon } from '../components/icons.js';
import { eventFormats } from '../data/brand.js';
import { contact } from '../data/site.js';

const body = `
${PageHero({
  eyebrow: 'Events & seminars',
  title: 'Over five hundred rooms,<br>across India.',
  lede: `Seminars, webinars and workshops led by Sam Ma'am, Jas Sir and the team — for people starting out
         and for professionals who want to go further.`,
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Events' }],
  aside: `<div class="cluster" style="margin-top:var(--space-3)">
    <a class="btn btn--primary" href="#host">Host an event with us${icon.arrowRight({ size: 16 })}</a>
  </div>`,
})}

${EventMarquee()}
<div class="container">
  <p class="small muted" style="margin-top:1rem">
    Seminars, workshops and stage sessions conducted by Sam and Jas across India.
  </p>
</div>

<section class="section">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Three formats',
      title: 'Come for a day, join from home, or get your hands in it.',
      lede: 'Whichever format you choose, it is the same people and the same standard.',
    })}
    <div class="grid-3">
      ${eventFormats.map((e, i) => EventCard(e, i)).join('')}
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="container container--narrow">
    <div data-reveal>
      <p class="eyebrow">Who it is for</p>
      <h2>Whether you are starting out or already working.</h2>
      <div class="prose" style="margin-top:var(--space-3)">
        <p style="color:var(--on-ink-muted)">
          At Sam and Jas we are dedicated to providing training and education in the art of hair styling and
          makeup. With a wealth of experience in the industry, we have conducted over 500 seminars, webinars and
          workshops — empowering aspiring stylists and makeup artists to hone their craft.
        </p>
        <p style="color:var(--on-ink-muted)">
          Whether you are a beginner looking to start a career in the beauty industry, or a professional seeking
          to expand your skill set, Sam and Jas is here to support your journey.
        </p>
      </div>
      <div class="cluster" style="margin-top:var(--space-4)">
        ${Button({ label: 'Browse the courses', href: '/academy.html', variant: 'primary' })}
      </div>
    </div>
  </div>
</section>

<section class="section" id="host">
  <div class="container">
    <div class="split split--wide-left">
      <div data-reveal>
        <p class="eyebrow">For organisers</p>
        <h2>Conducting a seminar or workshop?</h2>
        <p class="lede" style="margin-top:var(--space-3)">
          Organisers who wish to conduct seminars and workshops with Sam and Jas can get in touch directly.
        </p>
      </div>
      <div class="panel" data-reveal>
        <h3 style="font-size:var(--fs-h4);font-family:var(--font-body);font-weight:600;margin-bottom:var(--space-3)">
          Call the events line
        </h3>
        <div class="stack" style="gap:.6rem">
          ${contact.eventsOrganisers
            .map(
              (p) =>
                `<a class="btn btn--ghost btn--block" href="tel:${esc(p.tel)}" style="justify-content:flex-start">
                   ${icon.phone({ size: 16 })}&nbsp;&nbsp;${esc(p.label)}
                 </a>`
            )
            .join('')}
          <a class="btn btn--ghost btn--block" href="mailto:${esc(contact.email)}" style="justify-content:flex-start">
            ${icon.mail({ size: 16 })}&nbsp;&nbsp;<span class="wrap-anywhere">${esc(contact.email)}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

${CtaBand({
  eyebrow: 'Stay close',
  title: 'The next seminar is announced on Instagram first.',
  body: 'Follow the academy to see where the team is next, and what is being taught.',
  primary: { label: 'Follow on Instagram', href: 'https://www.instagram.com/samandjas_mumbai' },
  secondary: { label: 'Contact us', href: '/contact.html' },
})}
`;

export default Page({
  title: 'Events & seminars',
  description:
    'Sam and Jas has conducted over 500 seminars, webinars and workshops across India, for beginners and working professionals in hair and makeup.',
  path: '/events.html',
  body,
});
