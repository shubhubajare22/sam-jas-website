import { Page } from '../layouts/page.js';
import { PageHero } from '../components/pagehero.js';
import { SectionHead, Button, esc } from '../components/primitives.js';
import { EnquiryForm } from '../components/form.js';
import { icon } from '../components/icons.js';
import { contact, social, app } from '../data/site.js';
import { locationStats } from '../data/franchise.js';

const officeCard = (o, i) => `
  <article class="panel" data-reveal style="--reveal-delay:${i * 80}ms">
    <span class="badge badge--scarlet">${esc(o.kind)}</span>
    <h3 style="font-family:var(--font-display);font-size:var(--fs-h3);margin:var(--space-2) 0 .6rem">
      ${esc(o.city)}
    </h3>
    <p class="small muted" style="margin-bottom:var(--space-2)">${o.entities.map(esc).join('<br>')}</p>
    <address style="font-style:normal;font-size:var(--fs-sm);line-height:1.75;color:var(--text-muted)">
      ${o.lines.map(esc).join('<br>')}<br>${esc(o.state)}
    </address>
    <div class="cluster" style="margin-top:var(--space-3)">
      <a class="btn btn--ghost btn--sm" href="${esc(o.maps)}" target="_blank" rel="noopener">
        ${icon.pin({ size: 13 })}&nbsp;Open in Maps
      </a>
      <a class="btn btn--ghost btn--sm" href="tel:${esc(contact.phones[0].tel)}">
        ${icon.phone({ size: 13 })}&nbsp;Call
      </a>
    </div>
  </article>`;

const body = `
${PageHero({
  eyebrow: 'Contact',
  title: 'Tell us what you want to do.',
  lede: 'A course, a salon appointment, a franchise, or an event — one message reaches the right person.',
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Contact' }],
  aside: `<div class="cluster" style="margin-top:var(--space-3)">
    <a class="btn btn--primary" href="${esc(contact.whatsapp.href)}" target="_blank" rel="noopener">
      ${icon.whatsapp({ size: 16 })}&nbsp;WhatsApp ${esc(contact.whatsapp.display)}
    </a>
  </div>`,
})}

<section class="section">
  <div class="container">
    <div class="split split--wide-right" style="align-items:start">

      <div class="stack--lg stack">
        <div data-reveal>
          <p class="eyebrow">Direct</p>
          <h2 style="font-size:var(--fs-h3)">Reach us</h2>
        </div>

        <ul class="stack" style="gap:.5rem" data-reveal>
          ${contact.phones
            .map(
              (p) => `
            <li>
              <a class="btn btn--ghost btn--block" href="tel:${esc(p.tel)}" style="justify-content:flex-start">
                ${icon.phone({ size: 16 })}&nbsp;&nbsp;${esc(p.label)}${p.whatsapp ? ' · WhatsApp' : ''}
              </a>
            </li>`
            )
            .join('')}
          <li>
            <a class="btn btn--ghost btn--block" href="mailto:${esc(contact.email)}" style="justify-content:flex-start">
              ${icon.mail({ size: 16 })}&nbsp;&nbsp;<span class="wrap-anywhere">${esc(contact.email)}</span>
            </a>
          </li>
        </ul>

        <div data-reveal>
          <p class="eyebrow">Follow</p>
          <ul class="stack" style="gap:.4rem">
            ${social
              .map(
                (s) => `
              <li>
                <a class="link" href="${esc(s.href)}" target="_blank" rel="noopener">
                  ${esc(s.name)} · ${esc(s.handle)}
                </a>
              </li>`
              )
              .join('')}
          </ul>
        </div>

        <div class="panel" data-reveal style="background:var(--paper-2);box-shadow:none">
          <h3 style="font-size:var(--fs-h4);font-family:var(--font-body);font-weight:600">Looking for a branch?</h3>
          <p class="small muted" style="margin-top:.5rem">
            ${locationStats.total} locations across ${locationStats.cities} cities, each with its own number.
          </p>
          <div style="margin-top:var(--space-3)">
            ${Button({ label: 'All locations', href: '/locations.html', size: 'sm' })}
          </div>
        </div>
      </div>

      <div class="panel" data-reveal>
        <h2 style="font-size:var(--fs-h3);margin-bottom:.5rem">Send an enquiry</h2>
        <p class="small muted" style="margin-bottom:var(--space-4)">
          Fields marked <span class="field__req">*</span> are required. We reply on WhatsApp.
        </p>
        ${EnquiryForm({ intent: 'academy', id: 'enq-contact' })}
      </div>

    </div>
  </div>
</section>

<section class="section section--paper-2">
  <div class="container">
    ${SectionHead({
      eyebrow: 'Our offices',
      title: 'Come and see us.',
      aside: `<div style="margin-top:var(--space-3)">${Button({ label: 'Every location', href: '/locations.html' })}</div>`,
    })}
    <div class="grid-2">
      ${contact.offices.map(officeCard).join('')}
    </div>
  </div>
</section>

<section class="section section--tight section--ink">
  <div class="container appband" data-reveal>
    <span class="appband__mark" aria-hidden="true">SJ</span>
    <div>
      <h2 style="font-size:var(--fs-h3);color:var(--on-ink)">${esc(app.name)}</h2>
      <p class="small" style="margin:.4rem 0 0;color:var(--on-ink-muted)">
        ${esc(app.subtitle)}. Available for ${esc(app.platform)}.
      </p>
    </div>
    ${Button({ label: 'Download the app', href: app.href, variant: 'primary', iconRight: 'download' })}
  </div>
</section>
`;

export default Page({
  title: 'Contact',
  description:
    'Contact Sam and Jas: head office in Andheri West, Mumbai and a branch in Dombivli West. Call, email education@samandjas.com, or WhatsApp +91 99205 37343.',
  path: '/contact.html',
  body,
});
