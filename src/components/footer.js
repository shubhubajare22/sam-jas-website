/** Site footer. */
import { contact, social, legal, app, site } from '../data/site.js';
import { courses } from '../data/courses.js';
import { icon } from './icons.js';
import { esc } from './primitives.js';

const socialIcon = { Instagram: 'instagram', YouTube: 'youtube', Facebook: 'facebook' };

export const Footer = () => `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">

      <div>
        <img class="footer__lockup" src="/assets/wordmark-white.png"
             alt="Sam and Jas" width="1421" height="274" loading="lazy">
        <p class="small" style="color:var(--on-ink-muted);max-width:32ch">
          Hair and makeup academies and salons across India. Training online and offline since ${site.established}.
        </p>
        <ul class="footer__list" style="margin-top:1.25rem">
          <li><a href="tel:${esc(contact.phones[0].tel)}">${icon.phone({ size: 15 })}&nbsp;&nbsp;${esc(contact.phones[0].label)}</a></li>
          <li><a href="mailto:${esc(contact.email)}" class="wrap-anywhere">${icon.mail({ size: 15 })}&nbsp;&nbsp;${esc(contact.email)}</a></li>
        </ul>
      </div>

      <nav aria-labelledby="f-academy">
        <h2 class="footer__title" id="f-academy">Academy</h2>
        <ul class="footer__list">
          <li><a href="/academy.html">All courses</a></li>
          ${courses
            .slice(0, 5)
            .map((c) => `<li><a href="/courses/${c.slug}.html">${esc(c.shortTitle)}</a></li>`)
            .join('')}
          <li><a href="/about.html#faq">Fees &amp; FAQ</a></li>
        </ul>
      </nav>

      <nav aria-labelledby="f-business">
        <h2 class="footer__title" id="f-business">Salon &amp; Franchise</h2>
        <ul class="footer__list">
          <li><a href="/salon.html#women">Services for women</a></li>
          <li><a href="/salon.html#men">Services for men</a></li>
          <li><a href="/franchise.html">Franchise models</a></li>
          <li><a href="/locations.html">All locations</a></li>
          <li><a href="/events.html">Events &amp; seminars</a></li>
          <li><a href="/about.html">About Sam and Jas</a></li>
        </ul>
      </nav>

      <div>
        <h2 class="footer__title">Visit the head office</h2>
        <address class="small" style="font-style:normal;color:var(--on-ink-muted);line-height:1.7">
          ${contact.offices[0].lines.map(esc).join('<br>')}
        </address>
        <a class="link" href="${esc(contact.offices[0].maps)}" target="_blank" rel="noopener"
           style="color:#fff;margin-top:.5rem">Open in Maps ${icon.arrowUpRight({ size: 15 })}</a>

        <h2 class="footer__title" style="margin-top:2rem">${esc(app.name)} app</h2>
        <a class="link" href="${esc(app.href)}" style="color:#fff">
          ${icon.download({ size: 15 })}&nbsp;Download for ${esc(app.platform)}
        </a>
      </div>

    </div>

    <div class="footer__bottom">
      <p style="margin:0">© ${new Date().getFullYear()} ${esc(site.legalNames[0])} · ${esc(site.legalNames[1])}</p>
      <ul class="footer__legal">
        ${legal.map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join('')}
      </ul>
      <ul class="footer__social">
        ${social
          .map(
            (s) =>
              `<li><a class="icon-btn" href="${esc(s.href)}" target="_blank" rel="noopener"
                      aria-label="${esc(site.name)} on ${esc(s.name)}">${icon[socialIcon[s.name]]({ size: 18 })}</a></li>`
          )
          .join('')}
      </ul>
    </div>
  </div>
</footer>

<a class="wa-float" href="${esc(contact.whatsapp.href)}" target="_blank" rel="noopener">
  ${icon.whatsapp({ size: 20 })}<span class="wa-float__label">WhatsApp us</span>
</a>

<div class="actionbar" data-actionbar>
  <a class="btn btn--ghost btn--sm" href="tel:${esc(contact.phones[0].tel)}" style="min-height:44px">Call</a>
  <a class="btn btn--primary btn--sm" href="/contact.html" style="min-height:44px">Enquire</a>
</div>`;
