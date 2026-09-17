/**
 * Course catalogue.
 *
 * SOURCE OF TRUTH: each course page on https://www.samandjas.com/ publishes exactly six
 * facts — Duration, Eligibility, Level, Certification, Mode, Accommodation — plus the
 * line "Customized Tailor Made Look N Learn Courses Available."
 *
 * No syllabus, price or outcome is published per course, so none is stated here.
 * `positioning` is an editorial one-liner derived only from the course's own title,
 * level and mode. It adds no new facts.
 */

export const courseMeta = {
  eligibility: 'No Formal Education Needed',
  certification: 'Certified Course',
  accommodation: 'Paid accommodation available',
  customisation: 'Customized tailor-made Look N Learn courses available.',
};

export const courses = [
  {
    slug: 'basic-to-advance-diploma-in-haircuts-and-hair-chemical',
    title: 'Basic to Advance Diploma in Haircuts and Hair Chemical',
    shortTitle: 'Diploma in Haircuts & Hair Chemical',
    discipline: 'Hair',
    duration: '3 Months',
    durationRank: 90,
    level: 'Basic to Advance',
    mode: 'Online & Offline',
    flagship: true,
    positioning:
      'The full hair programme — cutting and chemical work taken from first principles through to advanced technique.',
    audience: 'Start here if you want a complete hair career, from zero or from partial experience.',
  },
  {
    slug: 'basic-to-advance-diploma-in-makeup',
    title: 'Basic to Advance Diploma in Makeup',
    shortTitle: 'Diploma in Makeup',
    discipline: 'Makeup',
    duration: '2 Months',
    durationRank: 60,
    level: 'Basic to Advance',
    mode: 'Online & Offline',
    flagship: true,
    positioning:
      'The full makeup programme, taken from the fundamentals through to advanced artistry.',
    audience: 'Start here if makeup is the craft you want to build a career on.',
  },
  {
    slug: 'basic-bridal-makeup',
    title: 'Basic Bridal Makeup',
    shortTitle: 'Basic Bridal Makeup',
    discipline: 'Makeup',
    duration: '2 Weeks',
    durationRank: 14,
    level: 'Basic',
    mode: 'Offline',
    positioning: 'A focused two-week entry into bridal work, taught in person.',
    audience: 'For beginners who want a first, specific skill they can offer.',
  },
  {
    slug: 'only-haircuts-course',
    title: 'Only Haircuts Course',
    shortTitle: 'Only Haircuts',
    discipline: 'Hair',
    duration: '6 Weeks',
    durationRank: 42,
    level: 'Basic to Advance',
    mode: 'Online & Offline',
    positioning: 'Cutting alone — basic through advanced, without the chemical module.',
    audience: 'For anyone who wants to specialise in the scissors.',
  },
  {
    slug: 'only-hair-chemical-course',
    title: 'Only Hair Chemical Course',
    shortTitle: 'Only Hair Chemical',
    discipline: 'Hair',
    duration: '6 Weeks',
    durationRank: 42,
    level: 'Basic to Advance',
    mode: 'Online & Offline',
    positioning: 'Colour, texture and chemical services — basic through advanced.',
    audience: 'For stylists who already cut and want the chemical side.',
  },
  {
    slug: 'basic-to-advance-barbering-course',
    title: 'Basic to Advance Barbering Course',
    shortTitle: 'Barbering',
    discipline: 'Hair',
    duration: '2 Months',
    durationRank: 60,
    level: 'Basic to Advance',
    mode: 'Offline',
    positioning: 'Barbering as its own discipline, taught hands-on in the academy.',
    audience: 'For anyone building a career in men’s grooming.',
  },
  {
    slug: 'only-short-female-haircuts',
    title: 'Only Short Female Haircuts',
    shortTitle: 'Short Female Haircuts',
    discipline: 'Hair',
    duration: '2 Weeks',
    durationRank: 14,
    level: 'Advance',
    mode: 'Online & Offline',
    positioning: 'An advanced two-week specialisation in short cutting on women.',
    audience: 'For working stylists adding a high-demand specialism.',
  },
  {
    slug: 'fantasy-makeup-course',
    title: 'Fantasy Makeup Course',
    shortTitle: 'Fantasy Makeup',
    discipline: 'Makeup',
    duration: '1 Week',
    durationRank: 7,
    level: 'Advance',
    mode: 'Online & Offline',
    positioning: 'An advanced week in creative and fantasy makeup.',
    audience: 'For artists who want range beyond bridal and beauty.',
  },
  {
    slug: 'master-class-in-hair',
    title: 'Master Class in Hair',
    shortTitle: 'Master Class in Hair',
    discipline: 'Hair',
    duration: '3–10 Days',
    durationRank: 6,
    level: 'Advance',
    mode: 'Offline',
    masterclass: true,
    positioning: 'A short, intensive advanced class held in person.',
    audience: 'For professionals sharpening technique, not starting out.',
  },
  {
    slug: 'master-class-in-makeup',
    title: 'Master Class in Makeup',
    shortTitle: 'Master Class in Makeup',
    discipline: 'Makeup',
    duration: '3–5 Days',
    durationRank: 4,
    level: 'Advance',
    mode: 'Offline',
    masterclass: true,
    positioning: 'A short, intensive advanced class held in person.',
    audience: 'For professionals sharpening technique, not starting out.',
  },
];

/** Filters offered on the catalogue. Values are derived from the data above. */
export const courseFilters = [
  { id: 'all', label: 'All courses', test: () => true },
  { id: 'hair', label: 'Hair', test: (c) => c.discipline === 'Hair' },
  { id: 'makeup', label: 'Makeup', test: (c) => c.discipline === 'Makeup' },
  { id: 'beginner', label: 'Open to beginners', test: (c) => c.level.startsWith('Basic') },
  { id: 'advance', label: 'Advanced', test: (c) => c.level === 'Advance' },
  { id: 'online', label: 'Available online', test: (c) => c.mode.includes('Online') },
];

export const findCourse = (slug) => courses.find((c) => c.slug === slug);
