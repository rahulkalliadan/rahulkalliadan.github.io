# Create a Jekyll-based GitHub Pages starter for Rahul, filled with resume details.
import os, json, zipfile, textwrap, shutil, datetime, re, pathlib

root = "/mnt/data/rahulkalliadan_github_pages_site"
if os.path.exists(root):
    shutil.rmtree(root)
os.makedirs(root, exist_ok=True)

# Basic structure
dirs = [
    "_posts",
    "_projects",
    "_data",
    "_pages",
    "assets/images",
    "assets/resume",
]
for d in dirs:
    os.makedirs(os.path.join(root, d), exist_ok=True)

# Attempt to copy the uploaded resume if present
uploaded_pdf = "/mnt/data/Rahul_Kalliadan_Resume.pdf"
resume_target = os.path.join(root, "assets/resume/Rahul_Kalliadan_Resume.pdf")
if os.path.exists(uploaded_pdf):
    shutil.copy(uploaded_pdf, resume_target)
else:
    # create a placeholder if missing
    with open(resume_target, "wb") as f:
        f.write(b"")


# _config.yml content with Minimal Mistakes remote theme
config_yml = textwrap.dedent("""
title: "Rahul Kalliadan"
name: "Rahul Kalliadan"
email: "rahulkalliadan@gmail.com"
description: "Senior Mechanical Engineer (Robotics) — 7+ years building AMRs & commercial cleaning robots. Canada PR."
url: "https://rahulkalliadan.github.io"
baseurl: ""
timezone: "Asia/Kolkata"

# Minimal Mistakes settings
remote_theme: "mmistakes/minimal-mistakes@4.24.0"
plugins:
  - jekyll-remote-theme
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-feed

logo: "/assets/images/avatar.png"
masthead_title: "Rahul Kalliadan"
search: true

# Author profile (appears on About/Posts if enabled)
author:
  name: "Rahul Kalliadan"
  avatar: "/assets/images/avatar.png"
  bio: "Mechanical Robotics Engineer. AMRs, mechanisms, DFM/DFA, GD&T. Prototype → Production."
  location: "Calgary, Canada"
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: "mailto:rahulkalliadan@gmail.com"
    - label: "LinkedIn"
      icon: "fab fa-fw fa-linkedin"
      url: "https://www.linkedin.com/in/rahulkalliadan"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/rahulkalliadan"

# Collections
collections:
  projects:
    output: true
    permalink: /projects/:path/

# Defaults for layouts
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "single"
      author_profile: true
      read_time: false
      comments: false
      share: true
  - scope:
      path: ""
      type: "projects"
    values:
      layout: "single"
      author_profile: true
      classes: "wide"

# Navigation
breadcrumbs: true
paginate: 5
paginate_path: "/blog/page:num/"
permalink: /:categories/:title/

# SEO
social:
  name: "Rahul Kalliadan"
  links:
    - "https://www.linkedin.com/in/rahulkalliadan"
    - "https://github.com/rahulkalliadan"
jekyll_seo_tag:
  type: "Person"
  name: "Rahul Kalliadan"
  same_as:
    - "https://www.linkedin.com/in/rahulkalliadan"
    - "https://github.com/rahulkalliadan"
""").strip()

with open(os.path.join(root, "_config.yml"), "w", encoding="utf-8") as f:
    f.write(config_yml)

# _data/navigation.yml
navigation_yml = textwrap.dedent("""
main:
  - title: "Work"
    url: /projects/
  - title: "Blog"
    url: /blog/
  - title: "About"
    url: /about/
  - title: "Resume"
    url: /assets/resume/Rahul_Kalliadan_Resume.pdf
""").strip()

with open(os.path.join(root, "_data", "navigation.yml"), "w", encoding="utf-8") as f:
    f.write(navigation_yml)

# index.md (splash layout with featured projects)
index_md = textwrap.dedent("""
---
layout: splash
title: "Mechanical Robotics Engineer"
excerpt: "AMRs • mechanisms • DFM/DFA • GD&T — from prototype to production."
header:
  overlay_color: "#000"
  overlay_filter: "0.35"
  overlay_image: /assets/images/hero.jpg
  caption: "Field-tested robots and reliable hardware design"
feature_row:
  - image_path: /assets/images/proj-r3.jpg
    alt: "R3 Scrub Pro"
    title: "R3 Scrub Pro — concept to production"
    excerpt: "Shipped 1.8k+ units, achieved IPX3 ingress compliance, 25% cost reduction and 33% faster assembly."
    url: "/projects/r3-scrub-pro/"
    btn_label: "Case Study"
    btn_class: "btn--primary"
  - image_path: /assets/images/proj-mag.jpg
    alt: "MAG AMRs"
    title: "MAG500/1000 AMRs — logistics workhorses"
    excerpt: "Sole mechanical owner across chassis, suspension, lifter/tug modules, and docking stations; release to production."
    url: "/projects/mag-amrs/"
    btn_label: "Case Study"
    btn_class: "btn--primary"
  - image_path: /assets/images/proj-susp.jpg
    alt: "Suspension & Chassis"
    title: "Suspension & chassis — slopes and robustness"
    excerpt: "12° slope capability; full CAD integration, stability calcs, and validation plans."
    url: "/projects/suspension-chassis/"
    btn_label: "Case Study"
    btn_class: "btn--primary"
---

Welcome — I design, validate, and productise robotics hardware. If you’re a hiring manager, the **Work** section has 3–5 minute case studies; the **Blog** shows my decision-making; and **About** has a concise background and contact.
""").strip()

with open(os.path.join(root, "index.md"), "w", encoding="utf-8") as f:
    f.write(index_md)

# About page
about_md = textwrap.dedent("""
---
title: "About"
permalink: /about/
layout: single
author_profile: true
---

I'm a Senior Mechanical Engineer (Robotics) with 7+ years designing and launching industrial AMRs and commercial cleaning robots. I enjoy first-principles engineering, supplier collaboration, and delivering reliable systems in the field.

**Highlights**  
- 1.8k+ robots shipped in service with **IPX3** ingress compliance.  
- **25%** unit cost reduction and **33%** faster assembly via DFM/DFA and supplier optimisation.  
- End-to-end mechanical ownership: chassis, suspensions, lifting/tug modules, cleaning mechanisms, docking stations, sealing, sensor layout.

**Core skills:** SolidWorks, GD&T (ASME Y14.5), tolerance stacks, DFM/DFA, FEA/CFD (Ansys), ROS basics, DFMEA, ECNs, supplier coordination.

**Open to:** Mechanical design, robotics hardware, and product development roles in Canada and beyond.

[Download my resume →](/assets/resume/Rahul_Kalliadan_Resume.pdf)
""").strip()

with open(os.path.join(root, "_pages", "about.md"), "w", encoding="utf-8") as f:
    f.write(about_md)

# Projects landing
projects_md = textwrap.dedent("""
---
title: "Selected Work"
permalink: /projects/
layout: collection
collection: projects
entries_layout: grid
---

A few case studies with context, constraints, engineering decisions, and outcomes.
""").strip()

with open(os.path.join(root, "_pages", "projects.md"), "w", encoding="utf-8") as f:
    f.write(projects_md)

# Project 1: R3 Scrub Pro
proj1_md = textwrap.dedent("""
---
title: "R3 Scrub Pro — Concept to Production"
excerpt: "Shipped 1.8k+ units across markets; IPX3 compliance; 25% cost reduction and 33% faster assembly."
date: 2025-03-01
permalink: /projects/r3-scrub-pro/
tags: [robots, cleaning, mechanisms, dfm, ip-rating]
header:
  teaser: /assets/images/proj-r3.jpg
---

**Role:** Senior Mechanical Engineer (Lionsbot)  
**Scope:** Mechanical design & system architecture — handlebar, cleaning mechanism, vacuum chamber, safety bumper, water-line, sensor layout.

**Outcomes**
- **1.8k+ units** shipped in service across multiple markets.  
- Achieved **IPX3** ingress compliance (IEC 60529).  
- **25%** part cost reduction (design consolidation, supplier process changes).  
- **33%** faster assembly via DFA and fixture redesign.

**Notes**
- Managed handover to production with SOPs, QA validation plans, and supplier-ready drawings.
- Drove drop/rumble and lifecycle testing and coordinated ECNs.

_Add media:_ PDF one-pager, demo video, exploded views.
""").strip()

with open(os.path.join(root, "_projects", "r3-scrub-pro.md"), "w", encoding="utf-8") as f:
    f.write(proj1_md)

# Project 2: MAG AMRs
proj2_md = textwrap.dedent("""
---
title: "MAG500 & MAG1000 AMRs — Logistics Workhorses"
excerpt: "Sole mechanical owner from architecture to validation and release; chassis, suspension, lifter/tug modules, docking stations."
date: 2021-10-01
permalink: /projects/mag-amrs/
tags: [amr, logistics, mechanisms, validation]
header:
  teaser: /assets/images/proj-mag.jpg
---

**Role:** Mechanical Engineer → Senior Mechanical Engineer (Botsync)  
**Scope:** Architecture, chassis, suspension, pallet lifter, tug modules, docking stations, validation, supplier engagement.

**Outcomes**
- Released **MAG500/1000** AMRs (500 kg & 1000 kg payloads) into production.  
- CAD modelling, tolerance stacks, FEA to ensure structural robustness in warehouses and factories.  
- PDM and release workflows standardised; reduced design cycle time; established BOM/ECN traceability.

**Customer pilots**
- Supported DARs with enterprise clients; resolved CAPAs within **2 weeks** enabling POC approvals.
""").strip()

with open(os.path.join(root, "_projects", "mag-amrs.md"), "w", encoding="utf-8") as f:
    f.write(proj2_md)

# Project 3: Suspension & Chassis
proj3_md = textwrap.dedent("""
---
title: "Suspension & Chassis — Stability on Slopes"
excerpt: "12° slope capability through first-principles traction and stability calculations; validation plan and integration."
date: 2023-05-01
permalink: /projects/suspension-chassis/
tags: [mechanisms, chassis, suspension]
header:
  teaser: /assets/images/proj-susp.jpg
---

**Role:** Senior Mechanical Engineer  
**Scope:** Traction, spring, and stability calculations; CAD integration; sensor and water-line layout; test plan for slope and vibration.

**Highlights**
- Targeted **12° slope** capability with robust contact patch and vibration control.
- Designed for serviceability and sealing; supported IP compliance testing.
- Coordinated supplier fixtures and tolerance stacks.

_Add drawings or FEA results as images._
""").strip()

with open(os.path.join(root, "_projects", "suspension-chassis.md"), "w", encoding="utf-8") as f:
    f.write(proj3_md)

# Additional projects from earlier roles
proj4_md = textwrap.dedent("""
---
title: "Material Handling — Conveyor Systems (FMCG)"
excerpt: "Designed conveyors and commissioned a unit at HUL site; ran for 3 weeks without operational issues."
date: 2019-06-01
permalink: /projects/conveyors-fmcg/
tags: [material-handling, conveyors, fmcg]
header:
  teaser: /assets/images/proj-conveyor.jpg
---

Owned mechanical design for pilot projects with FMCG clients; delivered functional prototypes and BOM packages with first-pass site acceptance. Commissioned a conveyor unit on site and oversaw installation and successful operation during handover.
""").strip()

with open(os.path.join(root, "_projects", "conveyors-fmcg.md"), "w", encoding="utf-8") as f:
    f.write(proj4_md)

proj5_md = textwrap.dedent("""
---
title: "Greenhouse Drone — CFD Exploration"
excerpt: "Evaluated duct geometries in Ansys for thrust efficiency; informed prototype iterations."
date: 2018-06-01
permalink: /projects/greenhouse-drone-cfd/
tags: [cfd, ansys, drones, greenhouse]
header:
  teaser: /assets/images/proj-drone.jpg
---

Performed CFD simulations for ducted fan configurations, balancing thrust with pressure losses and providing recommendations to the prototype team.
""").strip()

with open(os.path.join(root, "_projects", "greenhouse-drone-cfd.md"), "w", encoding="utf-8") as f:
    f.write(proj5_md)

# Blog index (category listing via /blog/ permalink using home collection)
blog_index_md = textwrap.dedent("""
---
layout: home
title: "Blog"
permalink: /blog/
excerpt: "Technical notes, design memos, and field learnings."
author_profile: true
---
""").strip()

with open(os.path.join(root, "_pages", "blog.md"), "w", encoding="utf-8") as f:
    f.write(blog_index_md)

# Sample posts
post1 = textwrap.dedent("""
---
title: "AMR Suspension Trade-offs: Trailing Arm vs. Swing Axle"
date: 2025-08-15
categories: [mechanical, amr]
tags: [suspension, design, vibration]
excerpt: "A quick rubric I use to select a suspension for small AMRs."
---

*Geometry, terrain, vibration, and serviceability* drive the choice more than brand preference. I sketch the load paths and contact patches first, then simulate for worst-case shocks before moving into packaging and sealing.
""").strip()

post2 = textwrap.dedent("""
---
title: "DFM/DFA Checks that Prevent Fire Drills"
date: 2025-07-20
categories: [manufacturing, dfm]
tags: [dfm, dfa, tolerance]
excerpt: "Five checks that consistently catch issues before tooling."
---

From tolerance stack hotspots to datum schemes that vendors actually use — here are quick checks that have saved weeks of churn and cost.
""").strip()

with open(os.path.join(root, "_posts", "2025-08-15-amr-suspension-tradeoffs.md"), "w", encoding="utf-8") as f:
    f.write(post1)

with open(os.path.join(root, "_posts", "2025-07-20-dfm-dfa-checks.md"), "w", encoding="utf-8") as f:
    f.write(post2)

# 404
notfound_md = textwrap.dedent("""
---
permalink: /404.html
layout: single
title: "Page not found"
---

Sorry, the page you were looking for doesn’t exist.
""").strip()

with open(os.path.join(root, "404.md"), "w", encoding="utf-8") as f:
    f.write(notfound_md)

# README with instructions
readme_md = textwrap.dedent("""
# Rahul's Personal Site (GitHub Pages + Jekyll)

This repository contains a recruiter-friendly portfolio and a blog, using the Minimal Mistakes Jekyll theme (via `remote_theme`).

## Deploy (User Site)
1. Create a **public** repository named `rahulkalliadan.github.io` on GitHub.
2. Upload all files in this folder to the repo root (or push via Git).
3. In **Settings → Pages**, set Source to **Deploy from a branch** → Branch: `main` → `/ (root)`.
4. Visit `https://rahulkalliadan.github.io` after the build completes.

## Customise
- Replace images in `assets/images/` (hero.jpg, avatar.png, project thumbnails).
- Replace or update your resume in `assets/resume/` (already included).
- Edit `_config.yml` with your links, bio, and options.
- Add/edit project pages under `_projects/`.
- Write blog posts in `_posts/` using Markdown; filenames must be `YYYY-MM-DD-title.md`.

## Local preview (optional)
If you want to run locally: install Ruby + Bundler, then
