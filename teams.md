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
        <img src="{{ '/assets/images/ship-teams.png' | relative_url }}" alt="">
      </a>
    </div>

    <h1 class="page-header-title">Design Teams</h1>

    <div class="page-header-right"></div>
  </div>

  <p>
    During my time at Texas A&amp;M, I contributed to multiple competitive engineering design teams focused on vehicle and aircraft performance.
    Each project highlights my technical role, engineering responsibilities, and the resulting design outcomes.
  </p>

  <!-- 1. Formula SAE IC – Aerodynamics (most recent) -->
  <section class="team-card">
    <div class="team-card-media">
      <img
        src="{{ '/assets/images/team-formula-aero.jpg' | relative_url }}"
        alt="Formula SAE IC racecar with aerodynamic package"
        class="team-image team-image-formula"
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
    </div>
  </section>

  <!-- 2. SAE Aero Design 2023–2024 – Team Lead -->
  <section class="team-card">
    <div class="team-card-media">
      <img
        src="{{ '/assets/images/team-aero-2023-2024.jpeg' | relative_url }}"
        alt="SAE Aero Design aircraft 2023–2024"
        class="team-image"
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
        <li>Reviewed design trades, ensured compliance with SAE rules, and led design reviews or test campaigns.</li>
        <li>Final result: describe how the aircraft performed at competition (flights completed, scoring, lessons learned).</li>
      </ul>
    </div>
  </section>

  <!-- 3. SAE Aero Design 2022–2023 – Design Lead -->
  <section class="team-card">
    <div class="team-card-media">
      <img
        src="{{ '/assets/images/team-aero-2022-2023.jpeg' | relative_url }}"
        alt="SAE Aero Design aircraft 2022–2023"
        class="team-image"
      >
    </div>
    <div class="team-card-body">
      <h2>SAE Aero Design – Design Lead - 3rd Place Overall</h2>
      <p class="team-meta">Role: Design Lead · Season: 2022–2023</p>
      <p>
        (Update this section with your summary of the aircraft concept and your configuration/detailed design role.)
      </p>
      <ul>
        <li>Owned the conceptual layout (wing, tail, fuselage), sizing, and major structural decisions.</li>
        <li>Produced or reviewed CAD models, weight estimates, and basic performance calculations.</li>
        <li>Final result: competition outcome and any notable design achievements or reliability improvements.</li>
      </ul>
    </div>
  </section>

  <!-- 4. SAE Aero Design 2021–2022 – Team Member -->
  <section class="team-card">
    <div class="team-card-media">
      <img
        src="{{ '/assets/images/team-aero-2021-2022.JPG' | relative_url }}"
        alt="SAE Aero Design aircraft 2021–2022"
        class="team-image"
      >
    </div>
    <div class="team-card-body">
      <h2>SAE Aero Design – Team Member - 4th Place Overall</h2>
      <p class="team-meta">Role: Team Member · Season: 2021–2022</p>
      <p>
        (Update this with your first-season story, tasks, and what you learned.)
      </p>
      <ul>
        <li>Describe 1–2 subsystems or tasks you contributed to (fixtures, components, assembly, testing).</li>
        <li>Highlight what you learned that prepared you for design/lead roles in later seasons.</li>
        <li>Final result: aircraft performance and competition experience.</li>
      </ul>
    </div>
  </section>

  <!-- Formula SAE detail overlay -->
  <div class="team-overlay" id="formula-overlay">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>
      <div class="team-overlay-content">
        <h2>Formula SAE IC – Aerodynamics</h2>
        <p class="team-meta">Role: Full Car Aerodynamics · Season: 2024–2025</p>

        <img
          src="{{ '/assets/images/team-formula-aero.jpg' | relative_url }}"
          alt="Formula SAE IC racecar with aerodynamic package"
          class="project-hero-image"
        >

        <h3>Overview</h3>
        <p>
          (Put a more detailed overview here: competition context, car concept, and overall aerodynamic objectives.)
        </p>

        <h3>Responsibilities</h3>
        <ul>
          <li>Performed full-vehicle CFD analyses under pitch, roll, and yaw to guide aerodynamic geometry and validate design decisions.</li>
          <li>Supported design for manufacturability and integration of carbon fiber aerodynamic components with the chassis and suspension.</li>
          <li>Participated in on-track testing to correlate simulation predictions with telemetry and driver feedback.</li>
        </ul>

        <h3>Results</h3>
        <p>
          (Describe key performance improvements, competition placement, and any notable lessons learned.)
        </p>
      </div>
    </div>
  </div>

</div>
