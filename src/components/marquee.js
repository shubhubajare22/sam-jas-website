/**
 * Event photo marquee.
 * A continuous strip of real event frames at one height, doubled so the loop is
 * seamless. Paused on hover, and stopped entirely under prefers-reduced-motion
 * (see .marquee rules in components.css), where it becomes a horizontally
 * scrollable strip instead.
 */
import { eventPhotos } from '../data/events.js';
import { esc } from './primitives.js';

const strip = (ariaHidden) => `
  <ul class="marquee__group" ${ariaHidden ? 'aria-hidden="true"' : ''}>
    ${eventPhotos
      .map(
        (p) => `
      <li class="marquee__item">
        <img src="/assets/events/${esc(p.file)}" width="${p.w}" height="${p.h}"
             loading="lazy" decoding="async" alt="${ariaHidden ? '' : esc(p.alt)}">
      </li>`
      )
      .join('')}
  </ul>`;

export const EventMarquee = () => `
<div class="marquee" role="group" aria-label="Photographs from Sam and Jas seminars and workshops">
  <div class="marquee__track">
    ${strip(false)}
    ${strip(true)}
  </div>
</div>`;
