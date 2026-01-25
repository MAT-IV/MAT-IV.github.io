---
layout: default
title: Design Teams
permalink: /teams/
---

<div class="main-content">

  <!-- Header row: ship on far left, title centered -->
  <div class="page-header">
    <div class="page-header-left">
      <a href="{{ '/' | relative_url }}"
         class="back-ship back-ship-teams"
         aria-label="Back to main orbit"
         onclick="skipBigBangAndGoHome(event);">
        <img src="{{ '/assets/images/back-ship/ship-teams.png' | relative_url }}" alt="">
      </a>
    </div>

    <h1 class="page-header-title">Design Teams</h1>

    <div class="page-header-right"></div>
  </div>

  <p>
    During my time at Texas A&amp;M, I contributed to multiple competitive engineering design teams focused on vehicle and aircraft performance.
    Each project highlights my technical role, engineering responsibilities, and the resulting design outcomes.
  </p>

  <!-- 1. Formula SAE IC – Aerodynamics -->
  <section class="team-card">
    <div class="team-card-media">
      <img
        src="{{ '/assets/images/formula/team-formula-aero.jpg' | relative_url }}"
        alt="Formula SAE IC racecar with aerodynamic package"
        class="team-image js-team-hero"
        data-team-key="formula-ic"
      >
    </div>
    <div class="team-card-body">
      <h2>Formula SAE IC – Aerodynamics - 2nd Place Overall</h2>
      <p class="team-meta">Role: Full Car Aerodynamics · Season: 2024–2025</p>
      <p>
        As part of the 2025 Texas A&amp;M Formula SAE IC team, I contributed to the aerodynamic development and performance validation
        of a Formula-style race car designed for international competition. My work focused on full-vehicle CFD analysis,
        carbon fiber aerodynamic component manufacturing, and on-track testing to maximize vehicle performance.
      </p>
      <ul>
        <li>Performed full-vehicle CFD analyses to evaluate aerodynamic performance under pitch, roll, and yaw, informing design iterations based on downforce–drag trade-offs.</li>
        <li>Supported fabrication and integration of carbon fiber aerodynamic components, with emphasis on manufacturability and structural reliability.</li>
        <li>Participated in on-track testing to correlate simulation results with vehicle behavior and refine performance for cornering- and endurance-focused events.</li>
      </ul>
      <button class="resume-download js-team-open" data-team-key="formula-ic">View project details</button>
    </div>
  </section>

  <!-- 2. SAE Aero Design 2023–2024 – Team Lead -->
  <section class="team-card">
    <div class="team-card-media">
      <img
        src="{{ '/assets/images/sae-aero/23-24/team-aero-2023-2024.jpeg' | relative_url }}"
        alt="SAE Aero Design aircraft 2023–2024"
        class="team-image js-team-hero"
        data-team-key="sae-aero-23-24"
      >
    </div>
    <div class="team-card-body">
      <h2>SAE Aero Design – Team Lead - 1st Place Overall</h2>
      <p class="team-meta">Role: Team Lead · Season: 2023–2024</p>
      <p>
        (Update this section with your final text about the class, mission, and your leadership.)
      </p>
      <ul>
        <li>Coordinated subsystem leads (airframe, structures, propulsion, avionics) and managed schedule and milestones.</li>
        <li>Reviewed design trades, ensured compliance with SAE rules, and led the team through competition preparation and test flights.</li>
        <li>Integrated feedback from flight tests into final design refinements and documentation.</li>
      </ul>
      <button class="resume-download js-team-open" data-team-key="sae-aero-23-24">View project details</button>
    </div>
  </section>

  <!-- 3. SAE Aero Design 2022–2023 – Structures, etc. -->
  <section class="team-card">
    <div class="team-card-media">
      <img
        src="{{ '/assets/images/sae-aero/22-23/team-aero-2022-2023.jpeg' | relative_url }}"
        alt="SAE Aero Design aircraft 2022–2023"
        class="team-image js-team-hero"
        data-team-key="sae-aero-22-23"
      >
    </div>
    <div class="team-card-body">
      <h2>SAE Aero Design – Structures &amp; Testing</h2>
      <p class="team-meta">Role: Structures · Season: 2022–2023</p>
      <p>
        (Update this section with your description of the structures role, analysis, and testing contributions.)
      </p>
      <ul>
        <li>Developed structural sizing and margins for primary airframe members.</li>
        <li>Helped define test plans to validate structural performance under expected flight loads.</li>
        <li>Supported manufacturing and repairs during the build season and competition.</li>
      </ul>
      <button class="resume-download js-team-open" data-team-key="sae-aero-22-23">View project details</button>
    </div>
  </section>

  <!-- ===== Overlays for each team ===== -->

  <!-- Formula IC overlay -->
  <div class="team-overlay" data-team="formula-ic">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" type="button" aria-label="Close Formula IC details">&times;</button>

      <h2>Formula SAE IC – Aerodynamics</h2>
      <p class="team-meta">Season 2024–2025 · Role: Full Car Aerodynamics</p>

      <img
        src="{{ '/assets/images/formula/team-formula-aero.jpg' | relative_url }}"
        alt="Formula SAE IC racecar with aerodynamic package"
        class="project-hero-image"
      >

      <p>
        (Long-form description of your aero workflow, vehicle targets, CFD process, and competition results.)
      </p>

      <h3>Development images</h3>
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/formula/dev/cfd-wing-1.png' | relative_url }}"
          alt="Front wing CFD iteration 1"
          class="project-gallery-img js-lightbox-target"
          data-caption="CFD iteration 1 – front wing pressure distribution"
        >
        <img
          src="{{ '/assets/images/formula/dev/cfd-wing-2.png' | relative_url }}"
          alt="Front wing CFD iteration 2"
          class="project-gallery-img js-lightbox-target"
          data-caption="CFD iteration 2 – refined endplate geometry"
        >
        <img
          src="{{ '/assets/images/formula/dev/aero-package.png' | relative_url }}"
          alt="Full aero package visualization"
          class="project-gallery-img js-lightbox-target"
          data-caption="Full-vehicle aero package visualization"
        >
      </div>

      <!-- Example video, optional -->
      <!--
      <video class="project-video" controls>
        <source src="{{ '/assets/videos/formula/aero-walkthrough.mp4' | relative_url }}" type="video/mp4">
      </video>
      -->
    </div>
  </div>

  <!-- SAE Aero 23–24 overlay -->
  <div class="team-overlay" data-team="sae-aero-23-24">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" type="button" aria-label="Close SAE Aero 23–24 details">&times;</button>

      <h2>SAE Aero Design – 2023–2024</h2>
      <p class="team-meta">Season 2023–2024 · Role: Team Lead</p>

      <img
        src="{{ '/assets/images/sae-aero/23-24/team-aero-2023-2024.jpeg' | relative_url }}"
        alt="SAE Aero Design aircraft 2023–2024"
        class="project-hero-image"
      >

      <p>
        (Long-form description of the mission, leadership responsibilities, system integration, and competition performance.)
      </p>

      <h3>Development images</h3>
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/sae-aero/23-24/dev-wing-layout.png' | relative_url }}"
          alt="Wing planform concept"
          class="project-gallery-img js-lightbox-target"
          data-caption="Early wing planform layout for payload mission."
        >
        <img
          src="{{ '/assets/images/sae-aero/23-24/dev-cad.png' | relative_url }}"
          alt="CAD of airframe assembly"
          class="project-gallery-img js-lightbox-target"
          data-caption="CAD assembly of primary airframe structure."
        >
        <img
          src="{{ '/assets/images/sae-aero/23-24/dev-flight-test.png' | relative_url }}"
          alt="Flight test image"
          class="project-gallery-img js-lightbox-target"
          data-caption="Flight testing to validate takeoff distance and climb performance."
        >
      </div>
    </div>
  </div>

  <!-- SAE Aero 22–23 overlay -->
  <div class="team-overlay" data-team="sae-aero-22-23">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" type="button" aria-label="Close SAE Aero 22–23 details">&times;</button>

      <h2>SAE Aero Design – 2022–2023</h2>
      <p class="team-meta">Season 2022–2023 · Role: Structures &amp; Testing</p>

      <img
        src="{{ '/assets/images/sae-aero/22-23/team-aero-2022-2023.jpeg' | relative_url }}"
        alt="SAE Aero Design aircraft 2022–2023"
        class="project-hero-image"
      >

      <p>
        (Long-form description of structural analysis, materials, and test work.)
      </p>

      <h3>Development images</h3>
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/sae-aero/22-23/dev-spar-analysis.png' | relative_url }}"
          alt="Wing spar analysis"
          class="project-gallery-img js-lightbox-target"
          data-caption="Wing spar sizing and margin of safety checks."
        >
        <img
          src="{{ '/assets/images/sae-aero/22-23/dev-fuselage-layout.png' | relative_url }}"
          alt="Fuselage layout"
          class="project-gallery-img js-lightbox-target"
          data-caption="Fuselage layout balancing structure and payload volume."
        >
        <img
          src="{{ '/assets/images/sae-aero/22-23/dev-static-test.png' | relative_url }}"
          alt="Static load test"
          class="project-gallery-img js-lightbox-target"
          data-caption="Static load testing of wing and landing gear."
        >
      </div>
    </div>
  </div>

  <!-- Shared image lightbox (used by all galleries) -->
  <div class="image-lightbox" aria-hidden="true">
    <div class="image-lightbox-inner">
      <button class="image-lightbox-close" type="button" aria-label="Close image">&times;</button>
      <img src="" alt="" class="image-lightbox-img">
      <div class="image-lightbox-caption"></div>
    </div>
  </div>

</div>
