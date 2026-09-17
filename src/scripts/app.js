/**
 * Progressive enhancement only. The site is fully readable with JS disabled.
 * No dependencies.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Header: solid once scrolled ---------------------------------- */
(() => {
  const header = $('[data-header]');
  if (!header) return;
  let ticking = false;
  const update = () => {
    header.classList.toggle('is-stuck', window.scrollY > 24);
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

/* ---------- Mobile navigation -------------------------------------------- */
(() => {
  const panel = $('[data-mobilenav]');
  const openBtn = $('[data-nav-open]');
  const closeBtn = $('[data-nav-close]');
  if (!panel || !openBtn) return;

  let lastFocused = null;
  const focusables = () =>
    $$('a[href], button:not([disabled])', panel).filter((el) => el.offsetParent !== null);

  const open = () => {
    lastFocused = document.activeElement;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('is-nav-open');
    (focusables()[0] || panel).focus();
  };
  const close = () => {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-nav-open');
    // Never strand focus on <body> — fall back to the control that opened the panel.
    const target = lastFocused && lastFocused !== document.body ? lastFocused : openBtn;
    target.focus();
  };

  openBtn.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);

  // Escape closes; Tab is trapped inside while open.
  addEventListener('keydown', (e) => {
    if (!panel.classList.contains('is-open')) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    const items = focusables();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // Nested disclosures inside the overlay
  $$('.mobilenav__link[aria-controls]', panel).forEach((btn) => {
    btn.addEventListener('click', () => {
      const sub = document.getElementById(btn.getAttribute('aria-controls'));
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      sub.hidden = expanded;
    });
  });

  // A link inside the overlay closes it before navigating
  $$('a[href]', panel).forEach((a) => a.addEventListener('click', close));
})();

/* ---------- Scroll reveal ------------------------------------------------- */
(() => {
  const items = $$('[data-reveal]');
  if (!items.length) return;
  if (reduced.matches || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-revealed'));
    return;
  }
  // Anything already in the first viewport is shown immediately, without a transition.
  items.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('is-instant', 'is-revealed');
    }
  });
  requestAnimationFrame(() =>
    requestAnimationFrame(() => items.forEach((el) => el.classList.remove('is-instant')))
  );

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  items.forEach((el) => io.observe(el));
})();

/* ---------- Floating affordances: action bar and WhatsApp ------------------ */
(() => {
  const bar = $('[data-actionbar]');
  const wa = $('.wa-float');
  const footer = $('.footer');
  if (!bar && !wa) return;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    // Both float over the page, so both stand down once the footer is in view —
    // the footer already carries the same phone number and WhatsApp link.
    const footerTop = footer ? footer.getBoundingClientRect().top + y : Infinity;
    const atFooter = y + window.innerHeight > footerTop + 80;
    if (bar) bar.classList.toggle('is-visible', y > 520 && !atFooter);
    if (wa) wa.classList.toggle('is-hidden', atFooter);
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  addEventListener('resize', update, { passive: true });
  update();
})();

/* ---------- Accordion ----------------------------------------------------- */
(() => {
  $$('.accordion__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });
})();

/* ---------- Tabs (salon menus) -------------------------------------------- */
(() => {
  const lists = $$('[role="tablist"]');
  lists.forEach((list) => {
    const tabs = $$('[role="tab"]', list);
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
      });
    };
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const i = tabs.indexOf(tab);
        let next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') next = tabs[0];
        if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next); next.focus(); }
      });
    });
    // Deep link: /salon.html#men selects the men's tab
    const hash = location.hash.slice(1);
    const target = hash && tabs.find((t) => t.getAttribute('aria-controls') === `panel-${hash}`);
    if (target) select(target);
  });
})();

/* ---------- Course filter -------------------------------------------------- */
(() => {
  const group = $('[data-course-filter]');
  if (!group) return;
  const cards = $$('[data-course]');
  const empty = $('[data-course-empty]');
  const count = $('[data-course-count]');

  const tests = {
    all: () => true,
    hair: (c) => c.dataset.discipline === 'Hair',
    makeup: (c) => c.dataset.discipline === 'Makeup',
    beginner: (c) => c.dataset.level.startsWith('Basic'),
    advance: (c) => c.dataset.level === 'Advance',
    online: (c) => c.dataset.mode.includes('Online'),
  };

  $$('.chip', group).forEach((chip) => {
    chip.addEventListener('click', () => {
      const id = chip.dataset.filter;
      $$('.chip', group).forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      let shown = 0;
      cards.forEach((card) => {
        const match = (tests[id] || tests.all)(card);
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (empty) empty.hidden = shown > 0;
      // A complete contextual phrase, announced without moving focus
      if (count) count.textContent = `${shown} ${shown === 1 ? 'course' : 'courses'} shown`;
    });
  });
})();

/* ---------- Location filter + search --------------------------------------- */
(() => {
  const group = $('[data-loc-filter]');
  const search = $('[data-loc-search]');
  if (!group && !search) return;
  const cards = $$('[data-location]');
  const empty = $('[data-loc-empty]');
  const count = $('[data-loc-count]');
  let type = 'all';
  let query = '';

  const apply = () => {
    let shown = 0;
    cards.forEach((card) => {
      const okType = type === 'all' || card.dataset.type === type;
      const okQuery = !query || card.dataset.search.includes(query);
      const match = okType && okQuery;
      card.hidden = !match;
      if (match) shown += 1;
    });
    if (empty) empty.hidden = shown > 0;
    if (count) count.textContent = `${shown} ${shown === 1 ? 'location' : 'locations'} shown`;
  };

  $$('.chip', group || document).forEach((chip) => {
    chip.addEventListener('click', () => {
      type = chip.dataset.loctype;
      $$('.chip', group).forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      apply();
    });
  });

  let t;
  search?.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => { query = search.value.trim().toLowerCase(); apply(); }, 180);
  });
})();

/* ---------- Enquiry form --------------------------------------------------- */
(() => {
  $$('[data-enquiry]').forEach((form) => {
    const id = form.id;
    const summary = document.getElementById(`${id}-summary`);
    const summaryList = document.getElementById(`${id}-summary-list`);
    const status = document.getElementById(`${id}-status`);
    const intent = form.querySelector(`#${id}-intent`);

    // Intent switches which extra panel is shown
    const syncPanels = () => {
      form.querySelectorAll('[data-intent-panel]').forEach((p) => {
        p.hidden = p.dataset.intentPanel !== intent.value;
      });
    };
    intent?.addEventListener('change', syncPanels);

    const rules = {
      [`${id}-name`]: (v) => (v.trim().length >= 2 ? '' : 'Enter your full name.'),
      [`${id}-phone`]: (v) =>
        /^[+\d][\d\s-]{8,15}$/.test(v.trim()) ? '' : 'Enter a valid mobile number, for example 9920537343.',
      [`${id}-email`]: (v) => (!v.trim() || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim()) ? '' : 'Enter a valid email address, or leave it blank.'),
      [`${id}-intent`]: (v) => (v ? '' : 'Choose what your enquiry is about.'),
    };

    const setError = (field, message) => {
      const err = document.getElementById(`${field.id}-err`);
      if (!err) return;
      err.querySelector('span').textContent = message;
      err.hidden = !message;
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
    };

    const validate = (field) => {
      const rule = rules[field.id];
      if (!rule) return '';
      const message = rule(field.value);
      setError(field, message);
      return message;
    };

    // Validate on blur, never on keystroke
    Object.keys(rules).forEach((fid) => {
      const field = document.getElementById(fid);
      field?.addEventListener('blur', () => validate(field));
      field?.addEventListener('change', () => {
        if (field.getAttribute('aria-invalid') === 'true') validate(field);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const problems = [];
      Object.keys(rules).forEach((fid) => {
        const field = document.getElementById(fid);
        if (!field || field.closest('[hidden]')) return;
        const message = validate(field);
        if (message) {
          problems.push({ id: fid, label: form.querySelector(`label[for="${fid}"]`)?.textContent.trim() || fid, message });
        }
      });

      if (problems.length) {
        summaryList.innerHTML = problems
          .map((p) => `<li><a href="#${p.id}">${p.label.replace(/\s*\*$/, '')} — ${p.message}</a></li>`)
          .join('');
        summary.hidden = false;
        summary.focus();          // focus the summary, inline errors stay put
        return;
      }

      summary.hidden = true;
      const btn = form.querySelector('button[type="submit"]');
      btn.setAttribute('aria-disabled', 'true');
      btn.textContent = 'Sending…';

      // Prototype: no backend is wired up. Say so honestly.
      setTimeout(() => {
        form.querySelector('.form-status').innerHTML = `
          <span class="form-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            <span><strong>Thank you — we have your details.</strong><br>
            This is a design prototype, so nothing was actually sent. On the live site this would reach
            education@samandjas.com and the WhatsApp line.</span>
          </span>`;
        form.querySelectorAll('.field, button[type="submit"]').forEach((el) => (el.style.display = 'none'));
      }, 700);
    });

    syncPanels();
  });
})();
