/**
 * Inline SVG icon set (Lucide geometry, 1.75px stroke, 24px grid).
 * Decorative by default: aria-hidden + focusable="false".
 * Pass { title } only when the icon carries meaning with no adjacent text.
 */
const svg = (paths, { size = 20, title, stroke = 1.75, fill = 'none' } = {}) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24"
     fill="${fill}" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"
     ${title ? `role="img" aria-label="${title}"` : 'aria-hidden="true"'} focusable="false">${paths}</svg>`;

export const icon = {
  arrowRight: (o) => svg('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', o),
  arrowUpRight: (o) => svg('<path d="M7 17 17 7"/><path d="M7 7h10v10"/>', o),
  chevronDown: (o) => svg('<path d="m6 9 6 6 6-6"/>', o),
  plus: (o) => svg('<path d="M5 12h14"/><path d="M12 5v14"/>', o),
  close: (o) => svg('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>', o),
  menu: (o) => svg('<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>', o),
  check: (o) => svg('<path d="M20 6 9 17l-5-5"/>', o),
  clock: (o) => svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', o),
  signal: (o) => svg('<path d="M4 20v-4"/><path d="M10 20V10"/><path d="M16 20V4"/><path d="M22 20v-8"/>', o),
  monitor: (o) => svg('<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>', o),
  award: (o) => svg('<path d="M15.5 13.5 17 21l-5-3-5 3 1.5-7.5"/><circle cx="12" cy="9" r="6"/>', o),
  home: (o) => svg('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>', o),
  pin: (o) => svg('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>', o),
  phone: (o) => svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>', o),
  mail: (o) => svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>', o),
  whatsapp: (o = {}) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${o.size || 20}" height="${o.size || 20}" viewBox="0 0 24 24"
     fill="currentColor" ${o.title ? `role="img" aria-label="${o.title}"` : 'aria-hidden="true"'} focusable="false">
  <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.5.3-.5v-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.5a1.2 1.2 0 0 0-.8.4 3.4 3.4 0 0 0-1.1 2.6 6 6 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.7 2.3.6 2.7.6a2.9 2.9 0 0 0 2-1.4 2.4 2.4 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3ZM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/>
</svg>`,
  instagram: (o) => svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/>', o),
  youtube: (o) => svg('<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/>', o),
  facebook: (o) => svg('<path d="M14 8.5V7a1.5 1.5 0 0 1 1.5-1.5H17V2.5h-2.5A4.5 4.5 0 0 0 10 7v1.5H7.5V12H10v9.5h4V12h2.6l.4-3.5H14Z"/>', o),
  download: (o) => svg('<path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M4 20h16"/>', o),
  alert: (o) => svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v6"/><path d="M12 16.5v.01"/>', o),
  sparkle: (o) => svg('<path d="M12 3 13.9 9 20 11l-6.1 2L12 19l-1.9-6L4 11l6.1-2z"/>', o),
  users: (o) => svg('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16.5 5.2a3.5 3.5 0 0 1 0 6.6"/><path d="M18 14.2A6.5 6.5 0 0 1 21.5 20"/>', o),
  scissors: (o) => svg('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9"/><path d="M14.5 14.5 20 20"/><path d="M8.1 8.1 12 12"/>', o),
  brush: (o) => svg('<path d="M9.5 14.5 3 21"/><path d="M14 4.5 19.5 10 11 18.5 5.5 13z"/><path d="M17 2 22 7"/>', o),
  store: (o) => svg('<path d="M3 9.5 4.5 4h15L21 9.5"/><path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v8h14v-8"/>', o),
};

export const iconNames = Object.keys(icon);
