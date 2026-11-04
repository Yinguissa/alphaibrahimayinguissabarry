/* =========================================================
   Portfolio · Alpha Ibrahima Yinguissa Barry
   All content lives in the data objects below. Edit them to
   update the site without touching the HTML.
   ========================================================= */

/* ---------- 1. FEATURED CASE STUDIES ---------- */
const CASES = [
  {
    name: 'BioPro: Biometric Attendance & HR',
    url: 'https://cgc-sau-drh-gn.com/',
    domain: 'cgc-sau-drh-gn.com',
    status: [{ label: 'Live in production', type: 'live' }, { label: 'Conseil Guinéen des Chargeurs' }, { label: 'Jul 2026 – now' }],
    tagline: 'A production HR platform that pulls attendance from biometric terminals into one place: enrolment, device management, attendance records and statistics for a national organisation in Guinea.',
    role: 'Backend & Full Stack Developer',
    platform: 'Laravel web app + REST API on an Ubuntu VPS',
    points: [
      'Built <strong>attendance synchronisation</strong> that retrieves records from each <strong>ZKTeco biometric terminal</strong> by device ID (BioPro SA40 units 4370 and 4371) and consolidates them into one MySQL database.',
      'Delivered <strong>enrolment and device management</strong>: enrolled vs. pending staff, and which employees are registered on which device.',
      'Built REST endpoints and the attendance interface with <strong>filtering, pagination, CSV export</strong> and a <strong>statistics dashboard</strong>.',
      'Own <strong>production operations</strong> on Ubuntu with Nginx and PHP-FPM: deployments, schema changes, data integrity and query-level debugging.'
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'REST API', 'ZKTeco SDK', 'Ubuntu', 'Nginx', 'PHP-FPM'],
    image: 'images/biopro-hero.jpg',
    mobile: 'images/biopro-mobile.jpg',
    bg: 'linear-gradient(135deg, #6b6fe0 0%, #1b1640 85%)',
    links: [{ label: 'Visit the platform', href: 'https://cgc-sau-drh-gn.com/', primary: true }],
    note: 'Internal system: the public page is the secure login, employee data stays private.'
  },
  {
    name: 'Movely',
    url: 'https://movely.africa/',
    domain: 'movely.africa',
    status: [{ label: 'Live', type: 'live' }, { label: 'Mobile app in progress', type: 'wip' }, { label: 'AWMLVV Binary Technology' }],
    tagline: 'A vehicle rental and sales marketplace for Guinea, serving clients, vehicle owners, drivers and administrators. Find a verified car, sign a digital contract and get the keys.',
    role: 'Full Stack Developer (Mar 2026 – now)',
    platform: 'Spring Boot REST API + Angular web app, Dockerised on a VPS',
    points: [
      'Build <strong>Java / Spring Boot REST APIs</strong> and <strong>Angular</strong> interfaces for rental and sales workflows: vehicle publishing, client, owner and driver management.',
      'Implemented <strong>KYC and document verification</strong>, plus <strong>role-based access control</strong> for a back office with four admin profiles (Super Admin, Support, Compliance, Reader).',
      'Model and maintain the <strong>MySQL</strong> schema for users, vehicles, roles and rentals, behind a versioned, paginated public API (v1).',
      '<strong>Containerise services with Docker</strong> and deploy to a VPS. Researched mobile-money payment options for the Guinean market.'
    ],
    stack: ['Java', 'Spring Boot', 'Angular 19', 'TypeScript', 'MySQL', 'Docker', 'REST API'],
    image: 'images/movely-hero.jpg',
    mobile: 'images/movely-mobile.jpg',
    bg: 'linear-gradient(135deg, #2741e6 0%, #0a0f1e 85%)',
    links: [{ label: 'Visit movely.africa', href: 'https://movely.africa/', primary: true }]
  },
  {
    name: 'Fanka Labs',
    url: 'https://fankalabs.github.io/',
    domain: 'fankalabs.github.io',
    status: [{ label: 'Startup · Co-founder', type: 'live' }, { label: 'Karan in development', type: 'wip' }, { label: 'Montréal, Canada' }],
    tagline: '“Fanka” means strength. A tech startup I co-founded with two partners to build simple, accessible digital tools designed for local realities. Our first product is Karan, an education platform.',
    role: 'Co-founder & Scrum Master (Sep 2026 – now)',
    platform: 'Karan: education platform (private, in development)',
    points: [
      'Co-founded Fanka Labs with <strong>Gaoussou Cissé (CEO)</strong> and <strong>Ahmed Tidiane Diané (CTO)</strong>, one shared drive to build tech that matters.',
      'Serve as <strong>Scrum Master</strong>: running the team’s agile process, sprints and backlog as we build our first product.',
      'Building <strong>Karan</strong>, an education platform that supports learners with content and tools designed to help them succeed.',
      'Focused on the company mission: <strong>education, innovation and lasting impact</strong> for our communities.'
    ],
    stack: ['Scrum', 'Agile delivery', 'Product', 'EdTech', 'Startup'],
    image: 'images/fanka-hero.jpg',
    mobile: 'images/fanka-mobile.jpg',
    bg: 'linear-gradient(135deg, #1d3a8a 0%, #0b1433 85%)',
    links: [{ label: 'Visit fankalabs.github.io', href: 'https://fankalabs.github.io/', primary: true }],
    note: 'Karan is private while in development. More details at launch.'
  },
  {
    name: 'Dab City Basket Teams',
    url: 'https://dabcitybasketteams.org/',
    domain: 'dabcitybasketteams.org',
    status: [{ label: 'Live', type: 'live' }, { label: 'Dabola, Guinea' }, { label: 'FR / EN' }],
    tagline: 'The official home of Dabola’s basketball club: roster, schedule, news, events and membership, with a bold brand to match.',
    role: 'Designer & Front-End Developer',
    platform: 'Bilingual single-page web app',
    points: [
      'Designed the <strong>full brand system</strong>: "D for Dabola", orange for energy, gold for ambition, plus documented motion and interaction states.',
      'Built a <strong>bilingual (French / English)</strong> Angular app with team & player roster, schedule & results, news and events.',
      '<strong>Event registration</strong> for community days (3×3 tournaments, workshops) with limited-capacity sign-ups.',
      'Membership, partner/sponsor and newsletter flows with consent, and <strong>accessible by default</strong> (reduced-motion support, keyboard focus states).'
    ],
    stack: ['Angular 22', 'TypeScript', 'i18n', 'Design System', 'Figma', 'Accessibility'],
    image: 'images/dabcity-hero.jpg',
    mobile: 'images/dabcity-mobile.jpg',
    bg: 'linear-gradient(135deg, #e8782f 0%, #15161a 80%)',
    links: [{ label: 'Visit the site', href: 'https://dabcitybasketteams.org/', primary: true }]
  }
];

/* ---------- 2. EXPERIENCE (edit dates/roles here) ---------- */
const EXPERIENCE = [
  {
    when: 'Jul 2026 — Present', current: true,
    role: 'Backend & Full Stack Developer', org: 'BioPro · Conseil Guinéen des Chargeurs', orgUrl: 'https://cgc-sau-drh-gn.com/',
    desc: 'Develop and run a production biometric attendance and HR system: ZKTeco device sync, enrolment, attendance records, CSV export and statistics, deployed on Ubuntu with Nginx and PHP-FPM.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Linux', 'Nginx']
  },
  {
    when: 'Mar 2026 — Present', current: true,
    role: 'Full Stack Developer', org: 'AWMLVV Binary Technology · Movely', orgUrl: 'https://movely.africa/',
    desc: 'Build the Spring Boot API and Angular app behind a vehicle rental and sales marketplace: KYC, role-based back office, MySQL data model and Docker deployment.',
    tags: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker']
  },
  {
    when: 'Sep 2026 — Present', current: true,
    role: 'Co-founder & Scrum Master', org: 'Fanka Labs · Montréal (remote)', orgUrl: 'https://fankalabs.github.io/',
    desc: 'Co-founded a Canadian tech startup building useful digital tools for local realities. As Scrum Master I run our agile process while we build Karan, our education platform (in development).',
    tags: ['Scrum', 'Agile', 'Startup', 'EdTech']
  },
  {
    when: '2026',
    role: 'Designer & Front-End Developer', org: 'Dab City Basket Teams', orgUrl: 'https://dabcitybasketteams.org/',
    desc: 'Designed and built the club’s bilingual website and brand identity: roster, schedule, events with registration, membership and partner pages.',
    tags: ['Angular', 'UI/UX', 'Branding', 'i18n']
  },
  {
    when: 'Apr 2025 — Sep 2026',
    role: 'Java Software Developer', org: 'CodeAlpha · Remote',
    desc: 'Built Java applications remotely as part of CodeAlpha’s developer programme, covering object-oriented design, data handling and clean, maintainable code.',
    tags: ['Java', 'OOP', 'Git']
  },
  {
    when: 'Dec 2022 — Present', current: true,
    role: 'Mobile Developer', org: 'E-Cash · Guinea',
    desc: 'Build the Flutter front end of E-Cash’s delivery app and integrate its REST APIs for real-time order tracking, order management and secure user flows.',
    tags: ['Flutter', 'Dart', 'REST API']
  },
  {
    when: 'Mar 2023 — Aug 2024',
    role: 'Computer Programmer (Apprenticeship)', org: 'Orange · Guinea',
    desc: 'Work-study programme at Orange: software development on-site, plus Orange Digital Center training in mobile development (Kotlin).',
    tags: ['Kotlin', 'Mobile', 'Programming']
  },
  {
    when: 'Mar 2022 — Present', current: true,
    role: 'Developer (Seasonal)', org: 'Service Informatique de Guinée', orgUrl: 'https://www.sinformatiqueguinee.com/',
    desc: 'Built and maintain the company’s website presenting its services and vision, with a contact pipeline for partners and clients.',
    tags: ['PHP', 'JavaScript', 'Bootstrap']
  }
];

/* ---------- 3. MORE PROJECTS ---------- */
const PROJECTS = [
  {
    id: 'gambiango', title: 'Gambian Go: E-Commerce API', category: 'backend', kicker: 'Backend · API',
    image: 'images/gambian.jpeg',
    desc: 'RESTful e-commerce API with four roles: buyers shop, sellers manage products, drivers deliver orders and admins oversee the platform. Each role has its own scoped permissions.',
    tech: ['Laravel', 'PostgreSQL', 'JWT Auth', 'REST'],
    features: ['Authentication & role-based authorization', 'Product catalogue management', 'Cart & order processing', 'Delivery workflow for drivers'],
    github: 'https://github.com/Yinguissa/Gambiango',
    live: 'https://www.linkedin.com/posts/alpha-ibrahima-yinguissa-barry-97a234262_i-am-currently-collaborating-with-abdou-salam-activity-7379396502642798592-N9PX',
    liveLabel: 'See on LinkedIn'
  },
  {
    id: 'ecash', title: 'eCash Delivery App', category: 'mobile', kicker: 'Mobile · Flutter',
    image: 'images/ecash.jpeg',
    desc: 'Front end of the eCash delivery application in Guinea: a smooth, responsive Flutter UI wired to REST APIs for real-time deliveries and order management.',
    tech: ['Flutter', 'Dart', 'Provider', 'REST'],
    features: ['Auth & profile management', 'Real-time order tracking', 'Push notifications', 'Secure payment integration'],
    live: 'https://drive.google.com/file/d/1UcQ2NjOnytwfmJKR2kfP_bnlSOV98Krj/view?usp=sharing',
    liveLabel: 'Watch demo'
  },
  {
    id: 'transfer', title: 'Money Transfer System', category: 'backend', kicker: 'Back-office · Fintech',
    image: 'images/money.PNG',
    desc: 'Back-office money-transfer simulation, built with a teammate: each transfer generates a unique secure code that any agent can redeem for withdrawal.',
    tech: ['Laravel', 'SQL', 'Bootstrap', 'Postman'],
    features: ['Secure transaction code generation', 'Agent management dashboard', 'Transaction history & reporting', 'Role-based access'],
    live: 'https://frontend-transfert-argent.vercel.app/login'
  },
  {
    id: 'stock', title: 'Multi-Store Stock Manager', category: 'backend', kicker: 'SaaS · API',
    image: 'images/stock.PNG',
    desc: 'Multi-tenant inventory system for shops in Guinea. Each store’s data is isolated, and the system tracks stock in real time with low-stock alerts and sales history.',
    tech: ['Node.js', 'SQLite', 'JWT', 'REST'],
    features: ['Multi-store, isolated tenant data', 'Real-time stock & low-stock alerts', 'Sales & transaction history', 'Auth & roles'],
    live: 'https://stock-frontend-phi.vercel.app/login'
  },
  {
    id: 'sig', title: 'Service Informatique de Guinée', category: 'web', kicker: 'Web · Company site',
    image: 'images/sig.PNG',
    desc: 'Corporate website presenting the company, its services and vision, with an easy contact flow for partners and clients.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
    features: ['Company & services overview', 'Vision and mission', 'Contact form', 'Responsive layout'],
    live: 'https://www.sinformatiqueguinee.com/'
  },
  {
    id: 'booking', title: 'AIU Field Booking', category: 'web', kicker: 'Web · Campus',
    image: 'images/book.PNG',
    desc: 'Lets AIU students reserve sports fields, check live availability and see upcoming events, with double-booking prevention built in.',
    tech: ['Laravel', 'Botpress', 'HTML', 'CSS'],
    features: ['Field reservations', 'Availability checking', 'No double bookings', 'Event schedule'],
    live: 'https://www.linkedin.com/posts/alpha-ibrahima-yinguissa-barry-97a234262_laravel-booking-activity-7360162368674304004-qdMv',
    liveLabel: 'See on LinkedIn'
  },
  {
    id: 'heart', title: 'AIU Heart-Failure Assistant', category: 'ai', kicker: 'AI · Chatbot',
    image: 'images/aiu.PNG',
    desc: 'Conversational health assistant built on Botpress that answers questions about heart failure and related conditions with structured, well-organised information.',
    tech: ['Botpress', 'Python', 'NLP'],
    features: ['Disease knowledge base', 'Interactive Q&A', 'Friendly chat UI', 'Structured health insights'],
    live: 'https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/07/08/20250507080642-FZALUMMR.json',
    liveLabel: 'Try the bot',
    video: 'https://www.youtube.com/watch?v=QAh016aP70s'
  }
];

/* ---------- 4. STACK ---------- */
const STACK = [
  { title: 'Frontend & Mobile', icon: 'fa-solid fa-display', items: [['Angular', 'fab fa-angular'], ['TypeScript', 'fas fa-code'], ['JavaScript', 'fab fa-js'], ['HTML5', 'fab fa-html5'], ['CSS3', 'fab fa-css3-alt'], ['Bootstrap', 'fab fa-bootstrap'], ['Flutter', 'fas fa-mobile-alt'], ['Dart', 'fas fa-bullseye']] },
  { title: 'Backend & Databases', icon: 'fa-solid fa-server', items: [['Java', 'fab fa-java'], ['Spring Boot', 'fas fa-leaf'], ['Laravel', 'fab fa-laravel'], ['PHP', 'fab fa-php'], ['Node.js', 'fab fa-node-js'], ['REST APIs', 'fas fa-plug'], ['JWT Auth', 'fas fa-key'], ['MySQL', 'fas fa-database'], ['PostgreSQL', 'fas fa-database'], ['SQLite', 'fas fa-database'], ['C', 'fas fa-terminal']] },
  { title: 'Data & AI', icon: 'fa-solid fa-chart-line', items: [['Python', 'fab fa-python'], ['pandas · NumPy', 'fas fa-table'], ['Machine learning', 'fas fa-brain'], ['SQL analysis', 'fas fa-database'], ['Dashboards & BI', 'fas fa-chart-pie'], ['NLP chatbots', 'fas fa-robot']] },
  { title: 'DevOps & Tools', icon: 'fa-solid fa-toolbox', items: [['Docker', 'fab fa-docker'], ['Linux (Ubuntu)', 'fab fa-linux'], ['Nginx · PHP-FPM', 'fas fa-server'], ['VPS deployment', 'fas fa-cloud-arrow-up'], ['Git & GitHub', 'fab fa-github'], ['Postman', 'fas fa-paper-plane'], ['Vercel', 'fas fa-cloud'], ['Figma', 'fab fa-figma'], ['WordPress', 'fab fa-wordpress'], ['Shopify', 'fab fa-shopify']] }
];

/* =========================================================
   RENDERING
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s = '') => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function renderCases() {
  $('#cases').innerHTML = CASES.map(c => `
    <article class="case reveal" style="--case-bg:${c.bg}">
      <div class="case-media">
       <div class="devices">
        <div class="browser">
          <div class="browser-bar"><i></i><i></i><i></i>
            <span class="browser-url"><span class="fas fa-lock"></span>${esc(c.domain)}</span>
          </div>
          <img src="${c.image}" alt="${esc(c.name)} homepage, desktop" loading="lazy" width="800" height="500">
        </div>
        ${c.mobile ? `<div class="phone"><img src="${c.mobile}" alt="${esc(c.name)} on mobile" loading="lazy" width="375" height="812"></div>` : ''}
       </div>
      </div>
      <div class="case-body">
        <div class="case-meta">
          ${c.status.map(s => `<span class="chip ${s.type ? 'chip-' + s.type : ''}">${esc(s.label)}</span>`).join('')}
        </div>
        <h3 class="case-title">${esc(c.name)}</h3>
        <p class="case-tagline">${esc(c.tagline)}</p>
        <dl class="case-role">
          <dt>Role</dt><dd>${esc(c.role)}</dd>
          <dt>Product</dt><dd>${esc(c.platform)}</dd>
        </dl>
        <ul class="case-points">${c.points.map(p => `<li>${p}</li>`).join('')}</ul>
        <div class="case-stack">${c.stack.map(t => `<span>${esc(t)}</span>`).join('')}</div>
        ${c.note ? `<p class="case-note"><i class="fas fa-lock"></i> ${esc(c.note)}</p>` : ''}
        <div class="case-links">
          ${c.links.map(l => `<a class="btn ${l.primary ? 'btn-primary' : 'btn-ghost'}" href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} <span class="arrow-ne">→</span></a>`).join('')}
        </div>
      </div>
    </article>`).join('');
}

function renderTimeline() {
  $('#timeline').innerHTML = EXPERIENCE.map(e => `
    <li class="tl-item reveal">
      <div class="tl-when">${e.current ? `<span class="now">${esc(e.when)}</span>` : esc(e.when)}</div>
      <div>
        <div class="tl-head">
          <span class="tl-role">${esc(e.role)}</span>
          <span class="tl-org">${e.orgUrl ? `<a href="${e.orgUrl}" target="_blank" rel="noopener">@ ${esc(e.org)}</a>` : '@ ' + esc(e.org)}</span>
        </div>
        <p class="tl-desc">${esc(e.desc)}</p>
        <div class="tl-tags">${e.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
      </div>
    </li>`).join('');
}

function renderProjects() {
  $('#project-grid').innerHTML = PROJECTS.map(p => `
    <button class="project reveal" data-category="${p.category}" data-id="${p.id}" aria-haspopup="dialog">
      <div class="project-thumb"><img src="${p.image}" alt="" loading="lazy"></div>
      <div class="project-body">
        <span class="project-kicker">${esc(p.kicker)}</span>
        <h3 class="project-title">${esc(p.title)}</h3>
        <p class="project-desc">${esc(p.desc)}</p>
        <div class="project-foot">
          <span class="project-tech">${p.tech.slice(0, 3).map(esc).join(' · ')}</span>
          <span class="project-more">Details <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    </button>`).join('');

  $$('.project').forEach(card => card.addEventListener('click', () => openModal(card.dataset.id)));
}

function renderStack() {
  $('#stack-grid').innerHTML = STACK.map(g => `
    <div class="stack-col reveal">
      <h3><i class="${g.icon}"></i>${esc(g.title)}</h3>
      <ul>${g.items.map(([n, i]) => `<li><i class="${i}"></i>${esc(n)}</li>`).join('')}</ul>
    </div>`).join('');
}

/* ---------- Filters ---------- */
function initFilters() {
  $$('.filter').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter').forEach(b => b.classList.toggle('active', b === btn));
    const f = btn.dataset.filter;
    $$('.project').forEach(card => card.classList.toggle('is-hidden', f !== 'all' && card.dataset.category !== f));
  }));
}

/* ---------- Modal ---------- */
const modal = $('#modal');
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const links = [
    p.live && `<a class="btn btn-primary" href="${p.live}" target="_blank" rel="noopener">${esc(p.liveLabel || 'Live demo')} <span class="arrow-ne">→</span></a>`,
    p.github && `<a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Source code</a>`,
    p.video && `<a class="btn btn-ghost" href="${p.video}" target="_blank" rel="noopener"><i class="fab fa-youtube"></i> Video</a>`
  ].filter(Boolean).join('');

  $('#modal-body').innerHTML = `
    <div class="modal-hero"><img src="${p.image}" alt="${esc(p.title)} screenshot"></div>
    <div class="modal-content">
      <span class="eyebrow">${esc(p.kicker)}</span>
      <h2 id="modal-title">${esc(p.title)}</h2>
      <p>${esc(p.desc)}</p>
      <div class="modal-cols">
        <div><h4>Built with</h4><ul>${p.tech.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>
        <div><h4>Key features</h4><ul>${p.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>
      </div>
      <div class="modal-links">${links}</div>
    </div>`;
  if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
}
$('#modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

/* ---------- Theme ---------- */
function initTheme() {
  const btn = $('#theme-toggle');
  const sync = () => {
    const t = document.documentElement.getAttribute('data-theme');
    btn.querySelector('i').className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', t === 'dark' ? '#0b0b0c' : '#f6f5f1');
  };
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
  sync();
}

/* ---------- Navigation ---------- */
function initNav() {
  const header = $('#header'), links = $('#nav-links'), toggle = $('#nav-toggle');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 20);
    header.classList.toggle('hidden', y > lastY && y > 400 && !links.classList.contains('open'));
    lastY = y;
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
  });
  $$('a', links).forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('i').className = 'fas fa-bars';
  }));

  // Active section highlight
  const sections = $$('main section[id]');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) $$('a', links).forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));
}

/* ---------- Cursor glow ---------- */
function initGlow() {
  const glow = $('.cursor-glow');
  if (!glow || matchMedia('(hover: none)').matches) return;
  let x = innerWidth * .7, y = innerHeight * .2, tx = x, ty = y;
  addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  (function loop() {
    x += (tx - x) * .08; y += (ty - y) * .08;
    glow.style.left = x + 'px'; glow.style.top = y + 'px';
    requestAnimationFrame(loop);
  })();
}

/* ---------- Contact form (Formspree) ---------- */
function initForm() {
  const form = $('#contact-form'), status = $('#form-status');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = $('button[type="submit"]', form), label = btn.innerHTML;
    btn.disabled = true; btn.innerHTML = 'Sending… <i class="fas fa-circle-notch fa-spin"></i>';
    status.className = 'form-status'; status.textContent = '';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error('bad response');
      status.textContent = 'Thanks! Your message is on its way. I’ll reply within 24 hours.';
      status.classList.add('ok');
      form.reset();
    } catch {
      status.textContent = 'Something went wrong. Please email me directly at alphaibrahimayinguissa@gmail.com.';
      status.classList.add('err');
    } finally {
      btn.disabled = false; btn.innerHTML = label;
    }
  });
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderCases();
  renderTimeline();
  renderProjects();
  renderStack();
  initFilters();
  initTheme();
  initNav();
  initGlow();
  initForm();
  initReveal();
  $('#year').textContent = new Date().getFullYear();
});
