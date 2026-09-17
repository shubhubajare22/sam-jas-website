# Sam and Jas — website redesign prototype

A modern, mobile-first redesign of [samandjas.com](https://www.samandjas.com/), built as a
presentation prototype for the business owner.

**Live: https://shubhubajare22.github.io/sam-jas-website/**

Every push to `main` rebuilds and redeploys through GitHub Actions
(`.github/workflows/deploy.yml`). The demo is marked `noindex` and `robots.txt`
disallows everything, so it cannot be mistaken for — or compete with — the live site.

**This is a separate project.** It has no connection to the Sam & Jas SaaS application
and shares no code, dependencies or git history with it.

```bash
npm run build     # render src/ -> dist/
npm run dev       # build, then serve dist/ at http://localhost:4321
```

No dependencies. Node 18+ and nothing else. `dist/` is plain static HTML that can be
dropped on any host, opened from `file://`, or served from a sub-path — every internal
URL is rewritten to be page-relative at build time.

---

## What is in it

**19 pages**, generated from 9 templates and 5 data modules.

| Page | What it does |
|---|---|
| `index.html` | Homepage — hero, the Academy/Salon fork, brand story, proof, three pillars, featured courses, why, method, salon, events, franchise, app, final CTA |
| `academy.html` | Course catalogue with live filtering, fees, the six-stage method, FAQ |
| `courses/*.html` | 10 course pages, generated from `src/data/courses.js` |
| `salon.html` | Women's and men's service menus as keyboard-accessible tabs, salon locations |
| `franchise.html` | The four franchise models compared, why partner, enquiry form |
| `locations.html` | Searchable, filterable directory of all 15 locations |
| `events.html` | Seminars, webinars, workshops; organiser contact |
| `about.html` | Founders, the business, why Sam and Jas, full FAQ |
| `contact.html` | Enquiry form, both offices, social, app |
| `404.html` | Recovery page |

## Architecture

```
src/
  data/        site, courses, salon, franchise, brand   — all content lives here
  components/  icons, primitives, header, footer, cards, form, pagehero
  layouts/     page.js — the single HTML shell
  pages/       one module per page; course.js is a template run once per course
  styles/      tokens -> base -> components -> pages
  scripts/     app.js — progressive enhancement only
build.mjs      zero-dependency generator
```

Content is data, not markup. Adding a course means one object in `src/data/courses.js`:
the catalogue card, the detail page, the mega-menu entry, the footer link and the
sitemap all follow.

## Design system

Art direction: **Editorial Scarlet** — ink black, warm paper, one scarlet.

- **Scarlet `#D2291C`** is sampled directly from the official Sam and Jas brand banner,
  not chosen. `--scarlet-text` and `--scarlet-on-ink` are the contrast-safe variants.
- **Playfair Display** for display type — the closest widely-available match to the
  high-contrast serif in the existing Sam and Jas wordmark. **Inter** for everything else.
- Alternating ink and paper bands give the page an editorial rhythm rather than a
  wall of cards. Hairline rules replace borders. Shadows are used sparingly.
- The logo is the real one: the wordmark and full lockup in `public/assets/` were
  extracted from the official brand banner at full resolution and chroma-keyed to
  transparency, in black and white variants.

## What was verified, and how

Checked in a real browser at **320, 360, 375, 414, 600, 768, 900, 1024, 1180, 1280, 1440
and 1920 px** across all 10 page types (120 page × width combinations), with an automated
audit measuring computed styles:

- **No horizontal overflow** at any width, on any page.
- **Contrast**: every text node measured against its real composited background.
  All pass WCAG AA (4.5:1 body, 3:1 large). Four genuine failures were found and fixed
  during the build — see *Issues found and fixed* below.
- **Tap targets**: no interactive control below 24×24 px; buttons, chips, nav links and
  form fields are 44–56 px tall.
- **Semantics**: one `h1` per page, no heading-level skips, every image has `alt`, every
  form field has a visible `<label>`, every icon-only control has an accessible name,
  every decorative SVG is `aria-hidden`.
- **Links**: all 19 pages crawled; every internal link and asset resolves (0 broken).
- **Mobile**: body text 17 px, form inputs 16 px (no iOS auto-zoom), single-column
  grids, 64 px header, content padded clear of the sticky action bar.

Behaviour tested by driving the DOM:

- Course filter — all six filters return the right counts and announce the new count
  through a live region without moving focus.
- Salon tabs — click and full arrow/Home/End keyboard support; panels toggle correctly.
- Accordion — `aria-expanded` and panel visibility stay in sync.
- Mobile nav — opens as a focus-trapped `role="dialog"`, locks body scroll, nested
  disclosures work, Escape closes and returns focus.
- Enquiry form — empty submit shows an error summary that **takes focus** while inline
  field errors are **retained** and linked; validation runs on blur, not on keystroke;
  the enquiry-type selector switches the course panel.

### Issues found and fixed during the build

1. Reveal animations started at `opacity: 0` in CSS, so the whole page would have been
   invisible if JavaScript failed. Now scoped to a `.js` class set before first paint.
2. `.pagehero` did not inherit the ink-surface text rules, so interior page ledes ran at
   2.67:1 and eyebrows at 3.82:1. Fixed with `:is()` selectors covering all ink surfaces.
3. Brand scarlet at 4.37:1 on the recessed paper band, and the WhatsApp green at 4.14:1.
   Both replaced with contrast-safe tokens.
4. `₹50,000+` overflowed its grid. Stat figures now size against their own container
   with a container query, not against the viewport.
5. Mobile nav could strand focus on `<body>` when closed. Now falls back to the toggle.
6. Text over scarlet used translucent white, which composites to about 4.0:1. The
   contrast audit was extended to composite foreground alpha before measuring — that
   is what caught it. All such text is now solid.
7. The scarlet offset plate sat under a figure caption, rendering caption text on
   scarlet. It is anchored to the top of the frame now and cannot reach a caption.
8. The hero cutout carried a `drop-shadow`, which kept it on its own compositing layer
   where it could miss the first painted frame. Removed.
9. The hero's scarlet arc fell entirely outside the section on phones, so the brand
   colour was missing from the mobile hero. Repositioned behind the founders.
10. The method grid followed the viewport, rendering three cramped columns inside the
    narrow column of a course page. It follows its container now.
11. The WhatsApp float covered form controls and the footer's own social links. It is a
    compact circular button and stands down once the footer approaches.
12. The text-link underline vanished on hover, which read as the link switching off.

Every page was also reviewed visually at 1440 px, section by section, and on a 375 px
phone viewport. That pass is what found the caption-on-scarlet collision, the muddy
pillar artwork, the white gutters in the events strip, the mis-cropped salon imagery,
and the floating button sitting on top of a form control.

---

## Content: what is real and what is not

Every factual claim comes from the current samandjas.com. Nothing was invented.

**Used as published:** founding year (2010), both company names, Jas Sir's 24 years and
training at Toni & Guy and Vidal Sassoon, Sam Ma'am's 20 years, "over two lakh students",
"more than 500 seminars and workshops", the six-stage training method, fee range
₹1,000–₹50,000+, payment methods, multi-course discount, placement assistance without a
job guarantee, paid accommodation, the ₹10,000–12,000 starting salary bracket, the all-black
uniform, all 10 courses with their duration/level/mode, both full salon menus (38 women's
and 22 men's services), all four franchise models with investment/tenure/territory/royalty,
all 15 locations with partners and phone numbers, both office addresses, and the app.

### Three things for the owner to decide

1. **The branch count contradicts itself.** The current site's FAQ answers "SAM and Jas has
   5 branches Pan India", but the franchise directory on the same site lists **15**
   (13 academies, 2 salons). The redesign uses the directory — the counts are computed
   from the location data, never typed by hand — and omits the "5 branches" answer.
   Confirm which is right; the number updates itself once the directory is correct.

2. **There are no testimonials, because the source site has none.** The brief asked for
   social proof and explicitly said not to fabricate it, so that slot is filled with
   verified proof points instead (2 lakh+ students, 500+ seminars, since 2010, 15
   locations, Toni & Guy and Vidal Sassoon training). Supply three or four real student
   quotes and a testimonial section drops straight in.

3. **Course pages have no syllabus, because none is published.** Each course page on the
   current site publishes only six facts. Those six are shown, plus the academy-wide
   method and the "build your own course" note — all genuine. A short syllabus and an
   indicative fee per course would make these pages far stronger; the layout already has
   room for both.

**The enquiry form has no backend.** It validates fully and then says so honestly in its
success message. Point it at an endpoint or a WhatsApp deep link to go live.

## Images

Reused from the existing site for this private prototype: the founders' cutouts and
portraits, the event photography, and the brand wordmark.

The logo is the real one. `public/assets/` holds the Sam and Jas wordmark and the full
lockup, extracted from the official brand banner at full resolution and chroma-keyed to
transparency, in black and white variants — useful well beyond this site.

The event photographs were recovered individually from the single collage strip the
current site publishes, each cropped to its own bounds.

Two things worth doing before launch:

- **Commission new photography.** The existing images are the single biggest limit on how
  premium this can look, and the layouts are built to carry better ones.
- **Optimise the images.** The two founder cutouts are around 800 KB each as transparent
  PNGs. Proper tooling (pngquant, or WebP with an AVIF fallback) would cut them by 60–70%
  with no visible loss. It is deliberately not done here, because this project has no
  dependencies and adding a build-time image pipeline was not worth it for a prototype.
