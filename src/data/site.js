/**
 * Global site data.
 * Every value here is taken verbatim, or condensed without changing meaning,
 * from https://www.samandjas.com/ . Nothing is invented.
 */

export const site = {
  name: 'Sam and Jas',
  legalNames: [
    'Sam and Jas Hair & Makeup Academy Pvt Ltd',
    'Sam and Jas Salon & Spa Pvt Ltd',
  ],
  tagline: 'Hair & Make-up Academy · Salon & Spa',
  established: 2010,
  url: 'https://www.samandjas.com',
  description:
    'A chain of hair and makeup academies and salons offering online and offline training in hair styling and makeup artistry, and salon services across India.',
};

export const contact = {
  email: 'education@samandjas.com',
  phones: [
    { label: '+91 99205 37343', tel: '+919920537343', whatsapp: true },
    { label: '+91 91529 67136', tel: '+919152967136', whatsapp: false },
  ],
  whatsapp: {
    number: '919920537343',
    display: '+91 99205 37343',
    href: 'https://wa.me/919920537343',
  },
  eventsOrganisers: [
    { label: '+91 99205 37343', tel: '+919920537343' },
    { label: '+91 77188 17056', tel: '+917718817056' },
  ],
  offices: [
    {
      kind: 'Head Office',
      entities: ['Sam and Jas Hair & Makeup Pvt Ltd', 'Sam and Jas Salon & Spa Pvt Ltd'],
      lines: [
        '33, Aram Nagar Part 1',
        'Behind 7 Bunglows Gurudwara',
        'Opp Dariya Mahal, Near Kino Cottage Bus stop',
        'J P Road, Andheri West',
        'Mumbai 400061',
      ],
      city: 'Mumbai',
      state: 'Maharashtra',
      maps: 'https://www.google.com/maps/search/?api=1&query=33+Aram+Nagar+Part+1+J+P+Road+Andheri+West+Mumbai+400061',
    },
    {
      kind: 'Own Branch',
      entities: ['Sam and Jas Hair & Makeup Pvt Ltd', 'Sam and Jas Salon & Spa Pvt Ltd'],
      lines: [
        'First Floor, Bilvakunj Apartment',
        'Next To Everest Hall',
        'Opp Platform No. 1, Middle Railway Bridge',
        'M G Road, Dombivli West 421202',
      ],
      city: 'Dombivli',
      state: 'Maharashtra',
      maps: 'https://www.google.com/maps/search/?api=1&query=Bilvakunj+Apartment+M+G+Road+Dombivli+West+421202',
    },
  ],
};

export const social = [
  { name: 'Instagram', href: 'https://www.instagram.com/samandjas_mumbai', handle: '@samandjas_mumbai' },
  { name: 'YouTube', href: 'https://youtube.com/@samandjashairmakeupacademy', handle: '@samandjashairmakeupacademy' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/GrWiieuUP5W3QgGQ/', handle: 'Sam and Jas' },
];

export const app = {
  name: 'SAM & JAS Academy',
  subtitle: 'The official Learning Management App',
  platform: 'Android',
  href: 'https://www.samandjas.com/downloads',
};

export const legal = [
  { label: 'Terms & Conditions', href: 'https://samandjas.com/terms-and-conditions' },
  { label: 'Privacy Policy', href: 'https://samandjas.com/privacy-policy' },
  { label: 'Refund Policy', href: 'https://samandjas.com/refund-policy' },
];

/** Primary navigation. Three pillars first, then the supporting pages. */
export const nav = [
  {
    label: 'Academy',
    href: '/academy.html',
    mega: 'courses',
    blurb: 'Basic to advanced training in hair and makeup, online and offline.',
  },
  {
    label: 'Salon',
    href: '/salon.html',
    children: [
      { label: 'Services for Women', href: '/salon.html#women' },
      { label: 'Services for Men', href: '/salon.html#men' },
      { label: 'Bridal & Mehandi', href: '/salon.html#bridal' },
    ],
  },
  {
    label: 'Franchise',
    href: '/franchise.html',
    children: [
      { label: 'Franchise Models', href: '/franchise.html#models' },
      { label: 'Where We Are', href: '/locations.html' },
    ],
  },
  { label: 'Locations', href: '/locations.html' },
  { label: 'Events', href: '/events.html' },
  { label: 'About', href: '/about.html' },
];
