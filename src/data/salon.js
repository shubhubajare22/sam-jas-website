/**
 * Salon service menus.
 * Transcribed verbatim from /services-for-women and /services-for-men.
 * The source publishes no prices; none are shown.
 */

export const salonMenus = {
  women: {
    id: 'women',
    label: 'Women',
    intro:
      'Cutting, styling, colour, chemical services and treatments — the full women’s menu at Sam and Jas.',
    groups: [
      {
        name: 'Hair',
        items: [
          'Hair Cut',
          'Hair Cut with Blow Dry',
          'Customised Hair Cut',
          'Fringe / Bangs',
          'Trim / U Cut',
          'Hair Wash with Shampoo & Conditioner',
        ],
      },
      {
        name: 'Head Massage',
        items: ['Normal Oil', 'Special Treatment Oil', 'Aroma Oil'],
      },
      {
        name: 'Hair Styling',
        items: [
          'Straight Blow Dry',
          'Blow Dry Curls',
          'Ironing',
          'Tongs / Hot Rollers / Crimping',
          'Hairdo’s',
        ],
      },
      {
        name: 'Colour Bar',
        items: [
          'Root Touch Up',
          'Global Colour',
          'Highlights on Crown',
          'Highlights',
          'Highlights and Global Colour',
          'Highlights Per Streak',
          'Balayage',
          'Colour Melting',
          '3D Colour',
          'Advanced Hair Colouring',
        ],
      },
      {
        name: 'Chemical Services',
        items: [
          'Smoothening',
          'Straightening',
          'Rebonding',
          'Fringe',
          'Ear to Ear',
          'Perming',
          'Keratin',
          'Botox',
        ],
      },
      {
        name: 'Treatments',
        items: [
          'Hair Spa',
          'Deep Conditioning',
          'Hair Fall Treatment',
          'Dandruff Treatment',
          'Power Dose (Coloured Hair / Repair)',
          'Renew C',
        ],
      },
    ],
    note: {
      title: 'Bridal & Mehandi',
      body: 'Bridal make-up and mehandi orders are taken on appointment only.',
    },
  },

  men: {
    id: 'men',
    label: 'Men',
    intro:
      'Cutting, grooming, colour, chemical services and treatments — the full men’s menu at Sam and Jas.',
    groups: [
      { name: 'Hair', items: ['Hair Cut', 'Haircuts for Kids'] },
      { name: 'Head Massage', items: ['Normal Oil', 'Special Treatment Oil', 'Aroma Oil'] },
      { name: 'Shaving', items: ['Moustache', 'Beard'] },
      {
        name: 'Colour Bar',
        items: ['Single Streak', 'Global Colour', 'Highlights', 'Special Effects'],
      },
      {
        name: 'Chemical Services',
        items: ['Smoothening', 'Straightening', 'Rebonding', 'Perming', 'Keratin', 'Botox'],
      },
      {
        name: 'Treatments',
        items: ['Hair Spa', 'Hair Fall Treatment', 'Dandruff Treatment', 'Deep Conditioning'],
      },
      { name: 'Makeup', items: ['Groom’s Makeup'] },
    ],
    note: {
      title: 'Groom’s Makeup',
      body: 'Groom’s make-up is available at the salon. Call ahead for wedding-day timing.',
    },
  },
};
