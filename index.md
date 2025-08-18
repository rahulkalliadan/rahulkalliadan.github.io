---
layout: home
title: ""
author_profile: false
---

<!-- ======================= HERO ======================= -->
<section id="home" class="rk-section rk-hero">
  <div class="rk-container">
    <div class="rk-hero__inner">
      <img class="rk-avatar" src="{{ '/assets/images/avatar.jpeg' | relative_url }}" alt="Rahul Kalliadan">

      <h1 class="rk-title">Rahul Kalliadan</h1>
      <p class="rk-tagline">Engineer — Mechanical Robotics</p>

      <p class="rk-blurb rk-narrow">
        Hello, I’m Rahul — a Mechanical Robotics Engineer with 7+ years building reliable AMRs and commercial cleaning robots.
        I work end-to-end: first-principles design, DFM/DFA, GD&amp;T/tolerance stacks, validation and scaling from prototype to production.
      </p>

      <div class="rk-socials">
        <a href="https://www.linkedin.com/in/rahulkalliadan" aria-label="LinkedIn" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/rahulkalliadan" aria-label="GitHub" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>
        <a href="mailto:rahulkalliadan@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
      </div>

      <!-- Only the resume button here -->
      <div class="rk-cta">
        <a class="btn rk-btn--neon" href="{{ '/assets/resume/Rahul_Kalliadan_Resume.pdf' | relative_url }}" download>
          <i class="fas fa-download"></i> Download Resume
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ======================= ABOUT (centered) ======================= -->
<section id="about" class="rk-section">
  <div class="rk-container">
    <h2 class="rk-h2 rk-center-text">About</h2>

    <p class="rk-narrow">
      I design, validate and ship robust robotics hardware: mechanisms, chassis, suspensions,
      lifters/tugs, water/vacuum subsystems, and sensor layouts. I care about clean drawings,
      stack-ups that pass, fixtures that speed assembly, and field reliability.
    </p>

    <!-- Interests (left) & Education (right) -->
    <div class="rk-two-col rk-wide">
      <div>
        <h3 class="rk-h3">Interests</h3>
        <ul class="rk-bullets">
          <li>Robotics hardware systems &amp; mechanisms</li>
          <li>DFM/DFA, GD&amp;T, reliability engineering</li>
          <li>Field validation, IP sealing, lifecycle testing</li>
        </ul>
      </div>
      <div>
        <h3 class="rk-h3">Education</h3>
        <ul class="rk-bullets">
          <li>M.S. Robotics &amp; Automation</li>
          <li>B.E. Mechanical Engineering</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ======================= EXPERIENCE (timeline with circular logos) ======================= -->
<section id="experience" class="rk-section">
  <div class="rk-container">
    <h2 class="rk-h2 rk-center-text">Experience</h2>

    <ul class="rk-timeline">
      <!-- Lionsbot -->
      <li class="rk-item">
        <div class="rk-logo">
          <img src="{{ '/assets/images/logos/lionsbot.png' | relative_url }}" alt="Lionsbot">
        </div>
        <div class="rk-expcard">
          <header class="rk-exphead">
            <h3>Lionsbot — Senior Mechanical Engineer</h3>
            <span>Commercial cleaning robots · 2022 — 2024</span>
          </header>
          <ul class="rk-bullets">
            <li>Owned mechanical design for handlebar, cleaning mechanism, vacuum chamber, safety bumper, water-line, sensor layout.</li>
            <li>Shipped <strong>1,800+ robots</strong> and achieved <strong>IPX3</strong> ingress compliance.</li>
            <li><strong>25% cost down</strong> &amp; <strong>33% faster assembly</strong> via DFM/DFA and fixture redesign.</li>
          </ul>
        </div>
      </li>

      <!-- Botsync -->
      <li class="rk-item">
        <div class="rk-logo">
          <img src="{{ '/assets/images/logos/botsync.png' | relative_url }}" alt="Botsync">
        </div>
        <div class="rk-expcard">
          <header class="rk-exphead">
            <h3>Botsync — Mechanical Engineer → Senior</h3>
            <span>AMRs for warehouses &amp; factories · 2020 — 2022</span>
          </header>
          <ul class="rk-bullets">
            <li>Sole mechanical owner for MAG500/1000: chassis, suspension, lifter/tug modules, docking stations.</li>
            <li>Validation plans (drop/rumble, slope, ingress), tolerance stacks, FEA; release to production.</li>
            <li>Standardised PDM/BOM/ECN workflows; reduced design cycle time.</li>
          </ul>
        </div>
      </li>

      <!-- Material Handling / FMCG -->
      <li class="rk-item">
        <div class="rk-logo">
          <img src="{{ '/assets/images/logos/fmcg.png' | relative_url }}" alt="Material Handling (FMCG)">
        </div>
        <div class="rk-expcard">
          <header class="rk-exphead">
            <h3>Early Roles — Material Handling (FMCG)</h3>
            <span>Conveyors &amp; on-site commissioning · 2018 — 2019</span>
          </header>
          <ul class="rk-bullets">
            <li>Designed conveyors; commissioned unit at HUL site with stable 3-week run during handover.</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</section>
