/**
 * Founders, proof points, training method and FAQ.
 * All copy condensed from /about-us, /why-sam-and-jas and /events.
 * Numbers are the source's own claims and are attributed as such.
 */

export const founders = [
  {
    key: 'jas',
    name: 'Jas',
    honorific: 'Jas Sir',
    role: 'Founder & Director',
    discipline: 'Hair',
    portrait: '/assets/jas-portrait.jpg',
    lede: 'Twenty-four years in hair, and a technical director who still teaches.',
    body: [
      'Jas Sir is an epitome of creativity in the art of hair styling. His passion for this art, and his experience and knowledge of the science behind it, have made him an extraordinary yet humble artist in the field.',
      'With 24 years of experience and a role as Technical Director of Sam and Jas, he trained at world-class institutes including Toni & Guy and Vidal Sassoon. Through the academies and the online education platform he has shared that knowledge with over two lakh students across India, at a deliberately affordable price.',
    ],
    credentials: ['24 years’ experience', 'Technical Director, Sam and Jas', 'Trained at Toni & Guy and Vidal Sassoon'],
  },
  {
    key: 'sam',
    name: 'Sam',
    honorific: 'Sam Ma’am',
    role: 'Founder & Director',
    discipline: 'Hair & Makeup',
    portrait: '/assets/sam-portrait.jpg',
    lede: 'Twenty years in hair and makeup, and a mentor to every student who walks in.',
    body: [
      'Sam Ma’am brings 20 years of experience in hair and makeup, trained and worked alongside top industry artists, with a creative mind and a mastery of the craft.',
      'As a brand, Sam and Jas have worked with leading celebrities of the film and television industry. Together they have conducted more than 500 seminars and workshops across India. As a mentor, she gives every student the knowledge, guidance, support and feedback they need to build a career.',
    ],
    credentials: ['20 years’ experience', 'Worked with leading film and television artists', '500+ seminars and workshops conducted'],
  },
];

/** Headline proof. Each item cites where the claim comes from on the current site. */
export const proofPoints = [
  { value: '2010', label: 'Established', note: 'Both companies founded in 2010' },
  { value: '2 lakh+', label: 'Students taught', note: 'Across academies and the online platform' },
  { value: '500+', label: 'Seminars & workshops', note: 'Conducted across India' },
  { value: '24 yrs', label: 'Technical leadership', note: 'Jas Sir, Founder & Technical Director' },
];

/** The training method, verbatim in substance from /why-sam-and-jas. */
export const trainingMethod = [
  {
    step: '01',
    title: 'Classroom',
    body: 'Structured classroom training delivered with modern teaching aids.',
  },
  {
    step: '02',
    title: 'Demonstration',
    body: 'Every technique is demonstrated by the trainer before you attempt it.',
  },
  {
    step: '03',
    title: 'Doll heads',
    body: 'Practice sessions on doll heads until the hands know the movement.',
  },
  {
    step: '04',
    title: 'Live models',
    body: 'Work on live models, with the trainer beside you.',
  },
  {
    step: '05',
    title: 'Studentship',
    body: 'A studentship period on the floor to consolidate what you have learned.',
  },
  {
    step: '06',
    title: 'Placement assistance',
    body: 'Candidates who complete the training are given placement assistance, and may apply for positions at Sam and Jas.',
  },
];

export const differentiators = [
  {
    title: 'Affordable by design, not by discount',
    body: 'Fees are set at the lowest level the academy can sustain rather than started high and discounted. Individual course fees range from ₹1,000 to ₹50,000 plus taxes, depending on the course.',
  },
  {
    title: 'Courses you assemble yourself',
    body: 'Modules can be combined around where you are starting from and what you want to achieve — so the fee you pay is the fee your objective actually requires. Enrol in several at once and a discount applies.',
  },
  {
    title: 'Trainers who have done the work',
    body: 'Almost every trainer has practised professionally what they now teach, and has been very good at it.',
  },
  {
    title: 'No qualification required to start',
    body: 'A passion for the industry and a desire to learn are what is needed. Candidates with no formal education are welcome.',
  },
];

/**
 * FAQ, condensed from /why-sam-and-jas.
 * Note: the source's "how many branches" answer (5) conflicts with its own published
 * franchise directory (15 locations), so it is not reproduced here — see the handover
 * notes in README.md.
 */
export const faq = [
  {
    q: 'What is Sam and Jas?',
    a: 'A chain of hair and makeup academies and salons offering online and offline training in hair styling and makeup artistry, alongside salon services. Both companies — Sam and Jas Hair & Makeup Academy Pvt Ltd and Sam and Jas Salon & Spa Pvt Ltd — were established in 2010.',
  },
  {
    q: 'What types of courses does the academy offer?',
    a: 'A basic-to-advanced structure across hair and makeup. Depending on where you are starting from and what you want to achieve, you select the modules that meet your objective — so newcomers and people with previous experience can both be accommodated, and the fee can be optimised to the goal.',
  },
  {
    q: 'How long do the courses run?',
    a: 'From two days or a week up to twelve weeks or more, depending on the course and on how many you combine.',
  },
  {
    q: 'What does it cost?',
    a: 'Individual course fees range from ₹1,000 up to ₹50,000 plus taxes and more, depending on the course.',
  },
  {
    q: 'How can I pay?',
    a: 'Cash, online transfer via net banking or UPI, and cheque.',
  },
  {
    q: 'Are there discounts?',
    a: 'Yes — for enrolling in multiple courses at once. Individual course fees are already set at the lowest sustainable level rather than being started high and discounted.',
  },
  {
    q: 'What qualification do I need to join?',
    a: 'A passion for the industry and a desire to learn. In terms of formal education, candidates with none are welcome.',
  },
  {
    q: 'Is a job guaranteed at the end?',
    a: 'No. The courses are designed to make you employable and every possible placement assistance is provided, but no job guarantee is given. The way to make it likely is 100% attendance and strong exam results.',
  },
  {
    q: 'What salary can I expect after the course?',
    a: 'It depends on where you are placed. Most companies operate on a fixed salary plus revenue sharing (commission), and customer tips form a good part of the income. At Sam and Jas the starting fixed salary is in the bracket of ₹10,000–12,000.',
  },
  {
    q: 'Is accommodation available?',
    a: 'Yes — paid accommodation is available.',
  },
  {
    q: 'Is there a uniform?',
    a: 'Yes. Students wear complete black — typically a black shirt or t-shirt with black jeans or trousers.',
  },
];

/** Events page content, condensed from /events. */
export const eventFormats = [
  {
    name: 'Seminars',
    body: 'One-day seminars led by Sam Ma’am, Jas Sir and the team, covering the latest trends and techniques through to business strategy for the beauty industry.',
    meta: 'One day · In person',
  },
  {
    name: 'Webinars',
    body: 'Interactive sessions delivered by instructors and mentors, going deep on specific areas of hair styling and makeup — joined from home.',
    meta: 'Online · Interactive',
  },
  {
    name: 'Workshops',
    body: 'Hands-on workshops for beginners and experienced artists alike, from intricate haircuts through to colouring and creative makeup, under the guidance of industry experts.',
    meta: 'Hands-on · All levels',
  },
];
