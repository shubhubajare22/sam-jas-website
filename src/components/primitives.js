/** Small shared building blocks. */
import { icon } from './icons.js';

/** Escape untrusted/interpolated text for HTML. */
export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const attrs = (o = {}) =>
  Object.entries(o)
    .filter(([, v]) => v !== false && v != null && v !== '')
    .map(([k, v]) => (v === true ? k : `${k}="${esc(v)}"`))
    .join(' ');

/**
 * Button / link-button.
 * `variant`: primary | dark (default) | ghost   `size`: sm | md | lg
 */
export const Button = ({
  label,
  href,
  variant = 'dark',
  size = 'md',
  iconRight = 'arrowRight',
  block = false,
  type,
  extra = {},
} = {}) => {
  const cls = [
    'btn',
    variant === 'primary' && 'btn--primary',
    variant === 'ghost' && 'btn--ghost',
    size === 'lg' && 'btn--lg',
    size === 'sm' && 'btn--sm',
    block && 'btn--block',
    extra.class,
  ]
    .filter(Boolean)
    .join(' ');
  const inner = `${esc(label)}${iconRight ? `<span class="btn__icon">${icon[iconRight]({ size: 16 })}</span>` : ''}`;
  const rest = attrs({ ...extra, class: undefined });
  return href
    ? `<a class="${cls}" href="${esc(href)}" ${rest}>${inner}</a>`
    : `<button class="${cls}" type="${type || 'button'}" ${rest}>${inner}</button>`;
};

export const Link = ({ label, href, scarlet = false, iconRight = 'arrowRight', extra = {} } = {}) =>
  `<a class="link${scarlet ? ' link--scarlet' : ''}${extra.class ? ` ${extra.class}` : ''}" href="${esc(href)}" ${attrs({ ...extra, class: undefined })}>
     ${esc(label)}${iconRight ? `<span class="btn__icon">${icon[iconRight]({ size: 15 })}</span>` : ''}
   </a>`;

export const Eyebrow = (text, { plain = false } = {}) =>
  `<p class="eyebrow${plain ? ' eyebrow--plain' : ''}">${esc(text)}</p>`;

/** Section header with an optional right-hand aside (lede, or a link). */
export const SectionHead = ({ eyebrow, title, lede, aside, id, split = true } = {}) => `
  <header class="section-head${split && (lede || aside) ? ' section-head--split' : ''}" data-reveal>
    <div>
      ${eyebrow ? Eyebrow(eyebrow) : ''}
      <h2 ${id ? `id="${esc(id)}"` : ''}>${title}</h2>
    </div>
    ${lede || aside ? `<div class="section-head__aside">${lede ? `<p class="lede">${lede}</p>` : ''}${aside || ''}</div>` : ''}
  </header>`;

export const Badge = (label, variant) =>
  `<span class="badge${variant ? ` badge--${variant}` : ''}">${esc(label)}</span>`;

export const Crumbs = (items) => `
  <nav aria-label="Breadcrumb">
    <ol class="crumbs">
      ${items
        .map((i, n) =>
          n === items.length - 1
            ? `<li aria-current="page">${esc(i.label)}</li>`
            : `<li><a href="${esc(i.href)}">${esc(i.label)}</a></li>`
        )
        .join('')}
    </ol>
  </nav>`;

export const Stat = ({ value, label, note }) => `
  <div class="stat" data-reveal>
    <p class="stat__value tnum">${esc(value)}</p>
    <p class="stat__label">${esc(label)}</p>
    ${note ? `<p class="stat__note">${esc(note)}</p>` : ''}
  </div>`;

export const Stats = (items) =>
  `<div class="stats">${items.map(Stat).join('')}</div>`;
