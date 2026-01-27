---
layout: default
title: Maker Gallery
permalink: /maker/
---

<div class="main-content">

  <div class="page-header">
    <div class="page-header-left">
      <a href="{{ '/' | relative_url }}"
         class="back-ship back-ship-maker"
         aria-label="Back to main orbit"
         onclick="skipBigBangAndGoHome(event);">
        <img src="{{ '/assets/images/back-ship/formula.png' | relative_url }}" alt="">
      </a>
    </div>

    <h1 class="page-header-title">Maker Gallery</h1>

    <div class="page-header-right"></div>
  </div>

  <p>
    A visual wall of some of my favorite projects. Selecting an image opens a quick view of that project.
  </p>

  <div class="maker-grid">

    <!-- Formula SAE IC -->
    <button class="maker-item" data-target-team="formula-ic">
      <img
        src="{{ '/assets/images/maker/maker-formula.jpg' | relative_url }}"
        alt="Formula SAE IC racecar."
      >
      <span>Formula SAE IC</span>
    </button>

    <!-- SAE Aero 23–24 -->
    <button class="maker-item" data-target-team="aero-23-24">
      <img
        src="{{ '/assets/images/maker/maker-aero-23-24.jpg' | relative_url }}"
        alt="SAE Aero 2023–2024 aircraft."
      >
      <span>SAE Aero 2023–2024</span>
    </button>

    <!-- SAE Aero 22–23 -->
    <button class="maker-item" data-target-team="aero-22-23">
      <img
        src="{{ '/assets/images/maker/maker-aero-22-23.jpg' | relative_url }}"
        alt="SAE Aero 2022–2023 aircraft."
      >
      <span>SAE Aero 2022–2023</span>
    </button>

    <!-- SAE Aero 21–22 -->
    <button class="maker-item" data-target-team="aero-21-22">
      <img
        src="{{ '/assets/images/maker/maker-aero-21-22.jpg' | relative_url }}"
        alt="SAE Aero 2021–2022 aircraft."
      >
      <span>SAE Aero 2021–2022</span>
    </button>

    <!-- NASA -->
    <button class="maker-item" data-target-team="nasa-coop">
      <img
        src="{{ '/assets/images/maker/maker-nasa.jpg' | relative_url }}"
        alt="Rocket test hardware at Stennis."
      >
      <span>NASA Pathways</span>
    </button>

    <!-- RAD Lab -->
    <button class="maker-item" data-target-team="rad-lab">
      <img
        src="{{ '/assets/images/maker/maker-radlab.jpg' | relative_url }}"
        alt="RoboBall platform in the RAD Lab."
      >
      <span>RAD Lab RoboBall</span>
    </button>

    <!-- FPV -->
    <button class="maker-item" data-target-team="hobby-fpv">
      <img
        src="{{ '/assets/images/maker/maker-fpv.jpg' | relative_url }}"
        alt="Custom FPV drone."
      >
      <span>FPV Drones</span>
    </button>

    <!-- Astrophotography -->
    <button class="maker-item" data-target-team="hobby-astro">
      <img
        src="{{ '/assets/images/maker/maker-astro.jpg' | relative_url }}"
        alt="Deep-sky astrophotography image."
      >
      <span>Astrophotography</span>
    </button>

    <!-- Misc builds -->
    <button class="maker-item" data-target-team="hobby-misc">
      <img
        src="{{ '/assets/images/maker/maker-misc.jpg' | relative_url }}"
        alt="Assorted small projects."
      >
      <span>Misc Builds</span>
    </button>

  </div>

  <!-- Quick-view overlays for each item -->
  <!-- You can keep these short, or paste in full overlays if you prefer -->

  <!-- Formula quick view -->
  <div class="team-overlay" id="maker-formula-overlay" data-team="formula-ic">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>Formula SAE IC</h2>
        <p class="team-meta">Quick view from Maker Gallery</p>
        <img
          src="{{ '/assets/images/maker/maker-formula.jpg' | relative_url }}"
          alt="Formula SAE IC racecar."
          class="project-hero-image"
        >
        <p>
          Full-car aerodynamics, carbon fiber manufacturing, and on-track testing for the Texas A&amp;M Formula SAE IC team.
        </p>
        <p>
          For more detail, visit the Design Teams page.
        </p>
      </div>
    </div>
  </div>

  <!-- SAE Aero 23–24 quick view -->
  <div class="team-overlay" id="maker-aero-23-24-overlay" data-team="aero-23-24">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>SAE Aero Design 2023–2024</h2>
        <p class="team-meta">Quick view from Maker Gallery</p>
        <img
          src="{{ '/assets/images/maker/maker-aero-23-24.jpg' | relative_url }}"
          alt="SAE Aero 2023–2024 aircraft."
          class="project-hero-image"
        >
        <p>
          Micro Class aircraft focused on short takeoff, high payload fraction, and robust stability and control.
        </p>
        <p>
          For more detail, visit the Design Teams page.
        </p>
      </div>
    </div>
  </div>

  <!-- SAE Aero 22–23 quick view -->
  <div class="team-overlay" id="maker-aero-22-23-overlay" data-team="aero-22-23">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>SAE Aero Design 2022–2023</h2>
        <p class="team-meta">Quick view from Maker Gallery</p>
        <img
          src="{{ '/assets/images/maker/maker-aero-22-23.jpg' | relative_url }}"
          alt="SAE Aero 2022–2023 aircraft."
          class="project-hero-image"
        >
        <p>
          Delta wing, lifting fuselage aircraft designed around payload, takeoff distance, and manufacturability constraints.
        </p>
        <p>
          For more detail, visit the Design Teams page.
        </p>
      </div>
    </div>
  </div>

  <!-- SAE Aero 21–22 quick view -->
  <div class="team-overlay" id="maker-aero-21-22-overlay" data-team="aero-21-22">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>SAE Aero Design 2021–2022</h2>
        <p class="team-meta">Quick view from Maker Gallery</p>
        <img
          src="{{ '/assets/images/maker/maker-aero-21-22.jpg' | relative_url }}"
          alt="SAE Aero 2021–2022 aircraft."
          class="project-hero-image"
        >
        <p>
          First season in Micro Class structures, focusing on truss fuselage and composite wing structures.
        </p>
        <p>
          For more detail, visit the Design Teams page.
        </p>
      </div>
    </div>
  </div>

  <!-- NASA quick view -->
  <div class="team-overlay" id="maker-nasa-overlay" data-team="nasa-coop">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>NASA Pathways Co‑Op</h2>
        <p class="team-meta">Quick view from Maker Gallery</p>
        <img
          src="{{ '/assets/images/maker/maker-nasa.jpg' | relative_url }}"
          alt="Rocket test hardware at Stennis."
          class="project-hero-image"
        >
        <p>
          Rocket propulsion test engineering at NASA Stennis, supporting LOX valve testing and facility documentation.
        </p>
        <p>
          For more detail, visit the Experience page.
        </p>
      </div>
    </div>
  </div>

  <!-- RAD Lab quick view -->
  <div class="team-overlay" id="maker-radlab-overlay" data-team="rad-lab">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>RAD Lab – RoboBall</h2>
        <p class="team-meta">Quick view from Maker Gallery</p>
        <img
          src="{{ '/assets/images/maker/maker-radlab.jpg' | relative_url }}"
          alt="RoboBall platform in the RAD Lab."
          class="project-hero-image"
        >
        <p>
          Real-time visualization, wireless charging, and sensing for large spherical robotic platforms.
        </p>
        <p>
          For more detail, visit the Experience page.
        </p>
      </div>
    </div>
  </div>

  <!-- FPV quick view -->
  <div class="team-overlay" id="maker-fpv-overlay" data-team="hobby-fpv">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>FPV Drone Builds</h2>
        <p class="team-meta">Quick view from Maker Gallery</p>
        <img
          src="{{ '/assets/images/maker/maker-fpv.jpg' | relative_url }}"
          alt="Custom FPV drone."
          class="project-hero-image"
        >
        <p>
          Custom FPV builds focused on clean wiring, durability, and tuned flight performance.
        </p>
        <p>
          For more detail, visit the Hobby Builds page.
        </p>
      </div>
    </div>
  </div>

  <!-- Astrophotography quick view -->
  <div class="team-overlay" id="maker-astro-overlay" data-team="hobby-astro">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>Astrophotography</h2>
        <p class="team-meta">Quick view from Maker Gallery</p>
        <img
          src="{{ '/assets/images/maker/maker-astro.jpg' | relative_url }}"
          alt="Deep-sky astrophotography image."
          class="project-hero-image"
        >
        <p>
          Deep-sky imaging with a Sky-Watcher Evostar 80ED APO refractor and tracking mount.
        </p>
        <p>
          For more detail, visit the Hobby Builds page.
        </p>
      </div>
    </div>
  </div>

  <!-- Misc builds quick view -->
  <div class="team-overlay" id="maker-misc-overlay" data-team="hobby-misc">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>Misc Builds</h2>
        <p class="team-meta">Quick view from Maker Gallery</p>
        <img
          src="{{ '/assets/images/maker/maker-misc.jpg' | relative_url }}"
          alt="Assorted small projects."
          class="project-hero-image"
        >
        <p>
          One-off utility projects, small fixtures, and experiments that support larger builds.
        </p>
        <p>
          For more detail, visit the Hobby Builds page.
        </p>
      </div>
    </div>
  </div>

</div>
