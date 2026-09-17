import { Page } from '../layouts/page.js';
import { PageHero } from '../components/pagehero.js';
import { SectionHead, Button, Stats, Eyebrow, esc } from '../components/primitives.js';
import { Accordion, MethodList, CtaBand } from '../components/cards.js';
import { icon } from '../components/icons.js';
import { founders, proofPoints, faq, differentiators, trainingMethod } from '../data/brand.js';
import { site, contact } from '../data/site.js';
import { locationStats } from '../data/franchise.js';

const founderSection = (f, i) => `
<section class="section${i === 1 ? ' section--paper-2' : ''}">
  <div class="container">
    <div class="split${i === 1 ? ' split--reverse' : ''} split--wide-${i === 1 ? 'left' : 'right'}">
      <figure class="figure figure--portrait${i === 0 ? ' figure--plated' : ''}" data-reveal>
        <div class="figure__frame">
          <img src="${esc(f.portrait)}" width="1080" height="1920" loading="lazy" decoding="async"
               alt="${esc(f.honorific)}, ${esc(f.role)} of Sam and Jas">
        </div>
      </figure>
      <div data-reveal style="--reveal-delay:90ms">
        ${Eyebrow(`${f.role} · ${f.discipline}`)}
        <h2 style="font-size:var(--fs-display)">${esc(f.honorific)}</h2>
        <p class="lede" style="margin-top:var(--space-3)">${esc(f.lede)}</p>
        <div class="prose" style="margin-top:var(--space-3)">
          ${f.body.map((p) => `<p class="muted">${esc(p)}</p>`).join('')}
        </div>
        <ul class="stack" style="margin-top:var(--space-4);gap:.6rem">
          ${f.credentials
            .map(
              (c) =>
                `<li style="display:flex;gap:.7rem;align-items:flex-start;font-size:var(--fs-sm)">
                   <span style="color:var(--scarlet);margin-top:.15rem">${icon.check({ size: 15 })}</span>${esc(c)}
                 </li>`
            )
            .join('')}
        </ul>
      </div>
    </div>
  </div>
</section>`;

const body = `
${PageHero({
  eyebrow: `Established ${site.established}`,
  title: 'Two founders who still<br>stand in the room.',
  lede: `Sam and Jas is a chain of hair and makeup academies and salons. We train online and offline, and we run the
         salons where that training has to hold up — across ${locationStats.cities} cities.`,
  crumbs: [{ label: 'Home', href: '/' }, { label: 'About' }],
})}

<section class="section section--tight">
  <div class="container">${Stats(proofPoints)}</div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div data-reveal>
      ${Eyebrow('The business')}
      <h2>What Sam and Jas actually is.</h2>
      <div class="prose" style="margin-top:var(--space-3)">
        <p class="muted">
          Two companies, both founded in ${site.established}: <strong>${esc(site.legalNames[0])}</strong> and
          <strong>${esc(site.legalNames[1])}</strong>. Between them they run the academies, the online education
          platform and the salons.
        </p>
        <p class="muted">
          The commitment that shapes everything else is making high-quality training affordable. Aspiring hair and
          makeup professionals should not be limited by what they can pay, so the programmes are built to
          international standards and priced as low as the business can sustain.
        </p>
        <p class="muted">
          Students go through classroom training with modern teaching aids, then demonstrations, then practice on
          doll heads, then live models, then a studentship. Those who make it through are given placement
          assistance, and may apply for positions at Sam and Jas.
        </p>
      </div>
    </div>
  </div>
</section>

${founders.map(founderSection).join('')}

<section class="section section--ink" id="why">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Why Sam and Jas',
      title: 'What sets the academy apart.',
      lede: 'Four things, stated plainly, that students and franchise partners ask about most.',
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

<section class="section">
  <div class="container">
    ${SectionHead({
      eyebrow: 'The method',
      title: 'Six stages, in this order, every time.',
      lede: 'This is what "intensive training" means here, in practice.',
    })}
    ${MethodList(trainingMethod)}
  </div>
</section>

<section class="section section--paper-2" id="faq">
  <div class="container container--narrow">
    ${SectionHead({ eyebrow: 'Frequently asked', title: 'Fees, eligibility, placement, accommodation.', split: false })}
    ${Accordion(faq, { idPrefix: 'aboutfaq' })}
    <p class="small muted" style="margin-top:var(--space-4)">
      Something not answered here? <a class="link" href="/contact.html">Ask us directly</a> or WhatsApp
      <a class="link" href="${esc(contact.whatsapp.href)}" target="_blank" rel="noopener">${esc(contact.whatsapp.display)}</a>.
    </p>
  </div>
</section>

${CtaBand({
  eyebrow: 'Join us',
  title: 'Come and see it before you commit to it.',
  body: 'Visit an academy and we will take you through a detailed comparison on the parameters that actually matter.',
  primary: { label: 'Find your nearest academy', href: '/locations.html' },
  secondary: { label: 'Browse the courses', href: '/academy.html' },
})}
`;

export default Page({
  title: 'About — founders, method and the business',
  description:
    'Sam and Jas was established in 2010. Jas Sir trained at Toni & Guy and Vidal Sassoon; Sam Ma\'am brings 20 years in hair and makeup and 500+ seminars. Over two lakh students taught.',
  path: '/about.html',
  body,
});
