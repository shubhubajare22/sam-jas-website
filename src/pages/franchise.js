import { Page } from '../layouts/page.js';
import { PageHero } from '../components/pagehero.js';
import { SectionHead, Button, Stats, esc } from '../components/primitives.js';
import { ModelCard, CtaBand } from '../components/cards.js';
import { EnquiryForm } from '../components/form.js';
import { icon } from '../components/icons.js';
import { franchiseModels, locationStats } from '../data/franchise.js';
import { proofPoints } from '../data/brand.js';

const body = `
${PageHero({
  eyebrow: 'Franchise',
  title: 'Run a Sam and Jas.<br>The numbers are published.',
  lede: `Four models — a single academy, a single salon, both on one site, or a master franchise for an entire state.
         Investment, tenure, territory and royalty are stated for each, before you ask.`,
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Franchise' }],
  aside: `<div class="cluster" style="margin-top:var(--space-3)">
    <a class="btn btn--primary" href="#models">Compare the models${icon.arrowRight({ size: 16 })}</a>
    <a class="btn btn--ghost btn--ghost-ink" href="#franchise-enquiry">Enquire</a>
  </div>`,
})}

<section class="section section--tight">
  <div class="container">
    ${Stats([
      { value: String(locationStats.total), label: 'Locations listed', note: `${locationStats.academies} academies, ${locationStats.salons} salons` },
      { value: String(locationStats.cities), label: 'Cities', note: `Across ${locationStats.states} states` },
      { value: '2 lakh+', label: 'Students taught', note: 'Academies and online platform' },
      { value: '2010', label: 'Brand established', note: 'Both companies' },
    ])}
  </div>
</section>

<section class="section" id="models">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Four models',
      title: 'Pick the one that matches your ambition.',
      lede: 'Every figure below is the published figure. Territory and royalty are contractual, not indicative.',
    })}
    <div class="models">
      ${franchiseModels.map((m, i) => ModelCard(m, i)).join('')}
    </div>
    <p class="small muted" style="margin-top:var(--space-4);max-width:72ch">
      All models require adherence to the brand standards, syllabus and contract terms. Figures shown are the
      investment, tenure, territory and royalty published by Sam and Jas; the full terms are set out in the
      franchise agreement.
    </p>
  </div>
</section>

<section class="section section--ink">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Why partner',
      title: 'You are not buying a logo. You are buying a syllabus that already works.',
    })}
    <div class="diff">
      <div class="diff__item" data-reveal>
        <h3 class="diff__title">A curriculum that has taught two lakh students</h3>
        <p class="diff__body">The syllabus, the six-stage method and the teaching aids come with the franchise. You teach what Sam and Jas teach.</p>
      </div>
      <div class="diff__item" data-reveal style="--reveal-delay:70ms">
        <h3 class="diff__title">Founders who still train</h3>
        <p class="diff__body">Jas Sir, trained at Toni &amp; Guy and Vidal Sassoon, leads the technical side. Sam Ma'am has run more than 500 seminars and workshops across India.</p>
      </div>
      <div class="diff__item" data-reveal style="--reveal-delay:140ms">
        <h3 class="diff__title">Exclusive territory</h3>
        <p class="diff__body">A defined radius — 10 km for an academy, 3 km for a salon, or a whole state for a master franchise — protected for the length of the term.</p>
      </div>
      <div class="diff__item" data-reveal style="--reveal-delay:210ms">
        <h3 class="diff__title">Marketing on brand platforms</h3>
        <p class="diff__body">The monthly royalty on the academy and salon models buys exclusive marketing for your location on the brand's own platforms.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="franchise-enquiry">
  <div class="container">
    <div class="split split--wide-left" style="align-items:start">
      <div data-reveal>
        <p class="eyebrow">Next step</p>
        <h2>Tell us which model, and which territory.</h2>
        <p class="lede" style="margin-top:var(--space-3)">
          Send the enquiry and the franchise team will come back to you with the agreement terms, the syllabus
          outline and what setting up actually involves.
        </p>
        <div class="stack" style="margin-top:var(--space-5)">
          <p class="small muted" style="margin:0">Already know the area you want? Check what is taken.</p>
          ${Button({ label: `See all ${locationStats.total} locations`, href: '/locations.html' })}
        </div>
      </div>
      <div class="panel" data-reveal>
        <h3 style="font-size:var(--fs-h3);margin-bottom:var(--space-3)">Franchise enquiry</h3>
        ${EnquiryForm({ intent: 'franchise', id: 'enq-franchise' })}
      </div>
    </div>
  </div>
</section>

${CtaBand({
  eyebrow: 'Franchise',
  title: 'Every territory we have was once unclaimed.',
  body: 'If your city is not on the list yet, that is the opportunity.',
  primary: { label: 'Enquire about a franchise', href: '#franchise-enquiry' },
  secondary: { label: 'See where we are', href: '/locations.html' },
})}
`;

export default Page({
  title: 'Franchise — four partnership models',
  description:
    'Four Sam and Jas franchise models: master franchise, individual academy, individual salon, or academy and salon combined. Published investment, tenure, territory and royalty.',
  path: '/franchise.html',
  body,
});
