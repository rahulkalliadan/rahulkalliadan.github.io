<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Rahul | Mechanical Robotics Engineer</title>
  <meta name="description" content="Portfolio of Rahul — Mechanical Robotics Engineer. Selected work, projects, notes, and contact." />
  <link rel="canonical" href="https://example.github.io/" />

  <!-- Open Graph / Twitter -->
  <meta property="og:title" content="Rahul | Mechanical Robotics Engineer" />
  <meta property="og:description" content="Selected robotics work, personal projects, and notes." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://example.github.io/" />
  <meta property="og:image" content="/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Tailwind Play CDN for quick start (fine for a personal site) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: [
              'ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','Helvetica Neue','Arial','"Apple Color Emoji"','"Segoe UI Emoji"'
            ]
          }
        }
      },
      darkMode: 'media'
    }
  </script>

  <!-- Favicon (drop your files in /public root when you create one) -->
  <link rel="icon" href="/favicon.ico" />

  <!-- Schema.org person markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahul",
    "jobTitle": "Mechanical Robotics Engineer",
    "url": "https://example.github.io/",
    "sameAs": [
      "https://www.linkedin.com/in/your-linkedin",
      "https://github.com/your-github"
    ]
  }
  </script>

  <style>
    /* Print-friendly CV snapshot: hides nav/filters, compresses layout */
    @media print {
      nav, .no-print, .filters, footer { display: none !important; }
      main { padding: 0 !important; }
      .card { box-shadow: none !important; border: 1px solid #e5e7eb; }
    }
  </style>
</head>
<body class="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
  <!-- Top Nav -->
  <nav class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/50 border-b border-slate-200/60 dark:border-slate-800">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
      <a href="#home" class="font-semibold">Rahul</a>
      <div class="hidden sm:flex items-center gap-6 text-sm">
        <a href="#work" class="hover:underline">Work</a>
        <a href="#projects" class="hover:underline">Projects</a>
        <a href="#notes" class="hover:underline">Notes</a>
        <a href="#about" class="hover:underline">About</a>
        <a href="#contact" class="hover:underline">Contact</a>
      </div>
      <a href="/Rahul_CV.pdf" class="text-sm px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900">Download CV</a>
    </div>
  </nav>

  <!-- Hero -->
  <header id="home" class="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
    <div class="grid gap-8 sm:gap-10 md:grid-cols-[1.2fr_1fr] items-center">
      <div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Mechanical Robotics Engineer building reliable systems from prototype to scale.</h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-prose">7+ years across AMRs and commercial cleaning robots. End-to-end mechanical ownership, validation, and field reliability. Currently exploring startup ideas in agri-robotics and cognitive tooling.</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="#projects" class="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">See Projects</a>
          <a href="#contact" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700">Contact</a>
        </div>
        <dl class="mt-8 grid grid-cols-3 gap-4 text-center">
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 card">
            <dt class="text-xs text-slate-500">Experience</dt>
            <dd class="text-xl font-semibold">7+ yrs</dd>
          </div>
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 card">
            <dt class="text-xs text-slate-500">Robots in field</dt>
            <dd class="text-xl font-semibold">1,800+</dd>
          </div>
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 card">
            <dt class="text-xs text-slate-500">Core skills</dt>
            <dd class="text-sm font-medium">SolidWorks • GD&T • DFM/DFA • FEA/CFD</dd>
          </div>
        </dl>
      </div>
      <div class="justify-self-center md:justify-self-end">
        <img src="/headshot.jpg" alt="Portrait of Rahul" class="w-44 h-44 sm:w-56 sm:h-56 rounded-3xl object-cover ring-1 ring-slate-200 dark:ring-slate-800" loading="lazy" />
      </div>
    </div>
  </header>

  <main class="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
    <!-- Selected Work (case studies for recruiters) -->
    <section id="work" class="py-8 sm:py-10">
      <div class="flex items-end justify-between gap-4">
        <h2 class="text-2xl sm:text-3xl font-semibold">Selected Work</h2>
        <a class="text-sm no-print" href="#projects">View all projects →</a>
      </div>
      <p class="mt-2 text-slate-600 dark:text-slate-300 max-w-prose">Deep dives with context, constraints, design choices, and results. Each case study is 3–5 minutes to skim with diagrams and field videos.</p>

      <div class="mt-6 grid gap-6 sm:grid-cols-2">
        <!-- Case Study Card 1 -->
        <article class="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 card">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">AMR Chassis Redesign for Rugged Warehouses</h3>
            <span class="text-xs px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">2023</span>
          </div>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Owned full mechanical architecture; improved stiffness 28% and reduced BOM by 11% while meeting IP54 sealing and serviceability targets.</p>
          <ul class="mt-3 list-disc list-inside text-sm text-slate-700 dark:text-slate-200">
            <li>DFM/DFA with Tier-1 vendors; tolerance stack for gear-train alignment</li>
            <li>FEA-driven rib optimisation; drop/rumble tests</li>
            <li>Result: <strong>field failure rate −35%</strong> over 120-day window</li>
          </ul>
          <div class="mt-4 flex gap-3 text-sm">
            <a class="underline" href="#" aria-label="View PDF case study">PDF</a>
            <a class="underline" href="#" aria-label="Watch demo video">Video</a>
            <a class="underline" href="#" aria-label="View patent or doc">Docs</a>
          </div>
        </article>

        <!-- Case Study Card 2 -->
        <article class="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 card">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Commercial Cleaning Robot: Lift Module</h3>
            <span class="text-xs px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">2022</span>
          </div>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Designed compact scissor lift with backlash control; achieved repeatability ±0.3 mm under wet conditions with sealed bearings and wipers.</p>
          <ul class="mt-3 list-disc list-inside text-sm text-slate-700 dark:text-slate-200">
            <li>Fluid ingress control; IP ratings; corrosion mitigation</li>
            <li>Lifecycle test rig; 200k cycles with <1% drift</li>
            <li>Result: <strong>maintenance cost −18%</strong> YoY</li>
          </ul>
          <div class="mt-4 flex gap-3 text-sm">
            <a class="underline" href="#">PDF</a>
            <a class="underline" href="#">Video</a>
            <a class="underline" href="#">Docs</a>
          </div>
        </article>
      </div>
    </section>

    <!-- All Projects with filters -->
    <section id="projects" class="py-8 sm:py-10">
      <div class="flex items-end justify-between gap-4">
        <h2 class="text-2xl sm:text-3xl font-semibold">Projects</h2>
        <div class="filters no-print flex flex-wrap gap-2 text-sm" aria-label="Filter projects by tag">
          <button class="filter-btn px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700" data-tag="all" aria-pressed="true">All</button>
          <button class="filter-btn px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700" data-tag="amr">AMR</button>
          <button class="filter-btn px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700" data-tag="mechanisms">Mechanisms</button>
          <button class="filter-btn px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700" data-tag="dfm">DFM/DFA</button>
          <button class="filter-btn px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700" data-tag="agri">Agri</button>
        </div>
      </div>

      <div id="projectGrid" class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Project Card Template -->
        <article class="project card rounded-2xl border border-slate-200 dark:border-slate-800 p-5" data-tags="amr dfm">
          <img src="/images/project-amr.jpg" alt="AMR chassis" class="rounded-xl aspect-video object-cover w-full" loading="lazy" />
          <h3 class="mt-3 text-lg font-semibold">AMR Chassis — Cost-Down & Stiffness</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">Cost−11%, stiffness +28%, IP54. Vendor-ready drawings, tolerance stacks, and test plan.</p>
          <div class="mt-2 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
            <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-900">SolidWorks</span>
            <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-900">FEA</span>
            <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-900">GD&T</span>
          </div>
          <div class="mt-3 flex gap-3 text-sm">
            <a class="underline" href="#">GitHub</a><a class="underline" href="#">PDF</a>
          </div>
        </article>

        <article class="project card rounded-2xl border border-slate-200 dark:border-slate-800 p-5" data-tags="mechanisms dfm">
          <img src="/images/project-lift.jpg" alt="Lift module" class="rounded-xl aspect-video object-cover w-full" loading="lazy" />
          <h3 class="mt-3 text-lg font-semibold">Compact Lift Module — Repeatability</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">±0.3 mm repeatability in wet conditions, sealed bearings, corrosion-proof materials.</p>
          <div class="mt-2 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
            <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-900">Mechanisms</span>
            <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-900">Materials</span>
          </div>
          <div class="mt-3 flex gap-3 text-sm">
            <a class="underline" href="#">Video</a><a class="underline" href="#">Docs</a>
          </div>
        </article>

        <article class="project card rounded-2xl border border-slate-200 dark:border-slate-800 p-5" data-tags="agri mechanisms">
          <img src="/images/project-coffee.jpg" alt="Coffee field mechanism" class="rounded-xl aspect-video object-cover w-full" loading="lazy" />
          <h3 class="mt-3 text-lg font-semibold">Agri Mechanism — Coffee Sucker Removal</h3>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">Field prototype plan for selective sucker removal with safety and crop protection.</p>
          <div class="mt-2 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
            <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-900">Agri</span>
            <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-900">Prototyping</span>
          </div>
          <div class="mt-3 flex gap-3 text-sm">
            <a class="underline" href="#">Write-up</a>
          </div>
        </article>
      </div>
    </section>

    <!-- Notes / Knowledge base -->
    <section id="notes" class="py-8 sm:py-10">
      <h2 class="text-2xl sm:text-3xl font-semibold">Notes</h2>
      <p class="mt-2 text-slate-600 dark:text-slate-300 max-w-prose">Short technical write-ups and decision memos. Recruiters: these show my thinking, trade-offs, and communication.</p>

      <ul class="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
        <li class="py-3">
          <a class="flex items-start justify-between gap-4 group" href="#">
            <div>
              <h3 class="font-medium group-hover:underline">Choosing a suspension for small AMRs: trailing arm vs. swing axle</h3>
              <p class="text-sm text-slate-600 dark:text-slate-300">Design constraints, terrain, vibration, manufacturing and serviceability.</p>
            </div>
            <time class="text-xs text-slate-500">2024-11</time>
          </a>
        </li>
        <li class="py-3">
          <a class="flex items-start justify-between gap-4 group" href="#">
            <div>
              <h3 class="font-medium group-hover:underline">DFM checklists that actually catch issues pre-tooling</h3>
              <p class="text-sm text-slate-600 dark:text-slate-300">Supplier-ready drawings, tolerance stacks, and golden samples.</p>
            </div>
            <time class="text-xs text-slate-500">2025-03</time>
          </a>
        </li>
      </ul>
    </section>

    <!-- About -->
    <section id="about" class="py-8 sm:py-10">
      <h2 class="text-2xl sm:text-3xl font-semibold">About</h2>
      <div class="mt-4 grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p class="text-slate-700 dark:text-slate-200">I design, validate, and productise robotics hardware. I enjoy first-principles problem solving, working closely with suppliers, and shipping reliable systems at scale.</p>
          <ul class="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
            <li class="rounded-xl border border-slate-200 dark:border-slate-800 p-3">SolidWorks, GD&T, DFM/DFA</li>
            <li class="rounded-xl border border-slate-200 dark:border-slate-800 p-3">FEA/CFD, structural + thermal</li>
            <li class="rounded-xl border border-slate-200 dark:border-slate-800 p-3">Mechanisms, sealing, materials</li>
            <li class="rounded-xl border border-slate-200 dark:border-slate-800 p-3">Prototype → Mass production</li>
          </ul>
        </div>
        <aside class="rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
          <h3 class="font-semibold">Quick facts</h3>
          <dl class="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt class="text-slate-500">Location</dt>
              <dd>Canada / India</dd>
            </div>
            <div>
              <dt class="text-slate-500">Open to</dt>
              <dd>Design • Robotics • Automation</dd>
            </div>
            <div>
              <dt class="text-slate-500">Education</dt>
              <dd>B.E. Mech, M.S. Robotics</dd>
            </div>
            <div>
              <dt class="text-slate-500">Contact</dt>
              <dd><a class="underline" href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-8 sm:py-10">
      <h2 class="text-2xl sm:text-3xl font-semibold">Contact</h2>
      <p class="mt-2 text-slate-600 dark:text-slate-300">Best way to reach me is email. I also respond on LinkedIn.</p>
      <div class="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <a class="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900" href="mailto:hello@yourdomain.com">Email me</a>
        <a class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700" href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700" href="https://github.com/your-github" target="_blank" rel="noopener">GitHub</a>
      </div>
    </section>
  </main>

  <footer class="border-t border-slate-200 dark:border-slate-800">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-sm text-slate-600 dark:text-slate-400 flex items-center justify-between">
      <span>© <span id="year"></span> Rahul</span>
      <a href="#home" class="no-print underline">Back to top</a>
    </div>
  </footer>

  <script>
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple tag filtering for Projects
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        buttons.forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        cards.forEach(card => {
          const tags = card.dataset.tags.split(' ');
          const show = tag === 'all' || tags.includes(tag);
          card.style.display = show ? '' : 'none';
        });
      });
    });
  </script>
</body>
</html>
