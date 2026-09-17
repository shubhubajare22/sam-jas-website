/**
 * Enquiry form.
 * Client-side validation only — this is a prototype with no backend.
 * Accessibility: visible labels, aria-describedby hints and errors,
 * an error summary that takes focus on failed submit, inline errors retained.
 */
import { courses } from '../data/courses.js';
import { icon } from './icons.js';
import { esc } from './primitives.js';

const field = ({ id, label, type = 'text', required = false, hint, autocomplete, inputmode, options, rows }) => {
  const describedBy = [hint && `${id}-hint`, `${id}-err`].filter(Boolean).join(' ');
  const common = `id="${id}" name="${id}" class="field__control"
    ${required ? 'required aria-required="true"' : ''}
    aria-describedby="${describedBy}"
    ${autocomplete ? `autocomplete="${autocomplete}"` : ''}
    ${inputmode ? `inputmode="${inputmode}"` : ''}`;

  let control;
  if (type === 'select') {
    control = `<select ${common}>
      <option value="">Please choose…</option>
      ${options.map((o) => `<option value="${esc(o.value)}">${esc(o.label)}</option>`).join('')}
    </select>`;
  } else if (type === 'textarea') {
    control = `<textarea ${common} rows="${rows || 4}"></textarea>`;
  } else {
    control = `<input type="${type}" ${common}>`;
  }

  return `
    <div class="field">
      <label class="field__label" for="${id}">
        ${esc(label)}${required ? ' <span class="field__req" aria-hidden="true">*</span>' : ''}
      </label>
      ${hint ? `<p class="field__hint" id="${id}-hint">${esc(hint)}</p>` : ''}
      ${control}
      <p class="field__error" id="${id}-err" hidden>${icon.alert({ size: 14 })}<span></span></p>
    </div>`;
};

/** `intent` preselects the enquiry type: academy | salon | franchise */
export const EnquiryForm = ({ intent = 'academy', course = '', compact = false, id = 'enquiry' } = {}) => `
<form class="enquiry-form" id="${id}" data-enquiry novalidate>
  <div class="form-summary" id="${id}-summary" tabindex="-1" role="alert" hidden>
    <h3>Please check the highlighted fields</h3>
    <ul id="${id}-summary-list"></ul>
  </div>

  ${field({ id: `${id}-name`, label: 'Full name', required: true, autocomplete: 'name' })}
  ${field({
    id: `${id}-phone`,
    label: 'Mobile number',
    type: 'tel',
    required: true,
    inputmode: 'tel',
    autocomplete: 'tel',
    hint: '10 digits. We will reply on WhatsApp.',
  })}
  ${compact ? '' : field({ id: `${id}-email`, label: 'Email', type: 'email', autocomplete: 'email', hint: 'Optional.' })}

  ${field({
    id: `${id}-intent`,
    label: 'I am enquiring about',
    type: 'select',
    required: true,
    options: [
      { value: 'academy', label: 'A course at the academy' },
      { value: 'salon', label: 'A salon appointment' },
      { value: 'franchise', label: 'A franchise opportunity' },
      { value: 'event', label: 'Hosting a seminar or workshop' },
    ],
  })}

  <div data-intent-panel="academy" ${intent === 'academy' ? '' : 'hidden'}>
    ${field({
      id: `${id}-course`,
      label: 'Course of interest',
      type: 'select',
      options: [
        { value: 'undecided', label: 'Not sure yet — please advise' },
        ...courses.map((c) => ({ value: c.slug, label: c.shortTitle })),
      ],
    })}
  </div>

  ${compact ? '' : field({ id: `${id}-city`, label: 'Your city', autocomplete: 'address-level2' })}
  ${field({ id: `${id}-message`, label: 'Anything else?', type: 'textarea', hint: 'Optional.', rows: compact ? 3 : 4 })}

  <button class="btn btn--primary btn--lg btn--block" type="submit">
    Send enquiry<span class="btn__icon">${icon.arrowRight({ size: 16 })}</span>
  </button>

  <p class="form-status" id="${id}-status" role="status" aria-live="polite"></p>
  <p class="field__hint" style="margin-top:.75rem">
    Prefer to talk? Message us on WhatsApp at
    <a href="https://wa.me/919920537343" style="color:inherit;font-weight:600">+91 99205 37343</a>.
  </p>
  ${course ? `<input type="hidden" name="source-course" value="${esc(course)}">` : ''}
  <input type="hidden" name="source-intent" value="${esc(intent)}">
</form>`;
