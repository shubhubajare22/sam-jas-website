import { Page } from '../layouts/page.js';
import { PageHero } from '../components/pagehero.js';
import { SectionHead, esc } from '../components/primitives.js';
import { LocationCard, CtaBand } from '../components/cards.js';
import { icon } from '../components/icons.js';
import { locations, locationStats } from '../data/franchise.js';

const byState = [...new Set(locations.map((l) => l.state))];

const body = `
${PageHero({
  eyebrow: 'Locations',
  title: 'Where Sam and Jas already is.',
  lede: `${locationStats.total} locations across ${locationStats.cities} cities and ${locationStats.states} states —
         ${locationStats.academies} academies and ${locationStats.salons} salons, including the head office in Mumbai.`,
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Locations' }],
})}

<section class="section">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Directory',
      title: 'Find your nearest academy or salon.',
      lede: 'Filter by type, or search for a city, an area or a franchise partner by name.',
    })}
    <div class="split" style="align-items:end;margin-bottom:var(--space-5)">
      <div class="chips" role="group" aria-label="Filter by type" data-loc-filter>
        <button class="chip" type="button" data-loctype="all" aria-pressed="true">
          All <span class="chip__count tnum">${locationStats.total}</span>
        </button>
        <button class="chip" type="button" data-loctype="academy" aria-pressed="false">
          Academies <span class="chip__count tnum">${locationStats.academies}</span>
        </button>
        <button class="chip" type="button" data-loctype="salon" aria-pressed="false">
          Salons <span class="chip__count tnum">${locationStats.salons}</span>
        </button>
      </div>
      <div class="field" style="margin:0">
        <label class="field__label" for="loc-search">Search by city, area or partner</label>
        <input class="field__control" type="search" id="loc-search" data-loc-search
               placeholder="Pune, Kolkata, Andheri…" autocomplete="off">
      </div>
    </div>

    <p class="visually-hidden" role="status" aria-live="polite" data-loc-count></p>

    <div class="loc-grid">
      ${locations.map((l, i) => LocationCard(l, i)).join('')}
      <p class="course-grid__empty" data-loc-empty hidden>
        No location matches that search. Try a different city, or
        <a class="link" href="/contact.html">ask us</a> — we may be opening near you.
      </p>
    </div>

    <p class="small muted" style="margin-top:var(--space-5)">
      States represented: ${byState.map(esc).join(' · ')}.
      Franchise partners are named where the location is partner-operated.
    </p>
  </div>
</section>

${CtaBand({
  eyebrow: 'Not on the list?',
  title: 'No Sam and Jas in your city yet?',
  body: 'That is either a reason to train online, or a reason to talk to us about a franchise.',
  primary: { label: 'Franchise opportunity', href: '/franchise.html' },
  secondary: { label: 'Courses available online', href: '/academy.html' },
})}
`;

export default Page({
  title: 'Locations — academies and salons across India',
  description: `${locationStats.total} Sam and Jas locations across ${locationStats.cities} cities in Maharashtra, Uttar Pradesh and West Bengal.`,
  path: '/locations.html',
  body,
});
