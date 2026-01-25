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

  <!-- 1. Formula SAE IC – Aerodynamics (most recent) -->
  <section class="team-card">
    <div class="team-card-media">
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/formula/team-formula-aero.jpg' | relative_url }}"
          alt="Formula SAE IC racecar with aerodynamic package"
          class="team-image team-image-formula"
          data-team-key="formula-ic"
        >
      </div>
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
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/sae-aero/23-24/team-aero-2023-2024.jpeg' | relative_url }}"
          alt="SAE Aero Design aircraft 2023–2024"
          class="team-image team-image-aero-23-24"
          data-team-key="aero-23-24"
        >
      </div>
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
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/sae-aero/22-23/team-aero-2022-2023.jpeg' | relative_url }}"
          alt="SAE Aero Design aircraft 2022–2023"
          class="team-image team-image-aero-22-23"
          data-team-key="aero-22-23"
        >
      </div>
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
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/sae-aero/21-22/team-aero-2021-2022.JPG' | relative_url }}"
          alt="SAE Aero Design aircraft 2021–2022"
          class="team-image team-image-aero-21-22"
          data-team-key="aero-21-22"
        >
      </div>
    </div>
    <div class="team-card-body">
      <h2>SAE Aero Design – Team Member - 4th Place Overall</h2>
      <p class="team-meta">Role: Team Member · Season: 2021–2022</p>
      <p>
        The 2021-2022 SAE Aero Design season was my first opportunity to apply my engineering education to build a working prototype aircraft. As a member of the Texas A&M Micro Class Structures and Material Science Sub-team, I contributed to the design of a highly optimized RC-scale cargo aircraft developed for short-takeoff, high-payload operations under strict ruleset constraints. My work focused on structural analysis, composite and truss-based airframe design, and translating CFD-derived load cases into manufacturable, test-validated structures.
      </p>
      <ul>
        <li>Supported sizing and optimization of wing, empennage, and fuselage structures using Euler–Bernoulli beam theory, shear-flow analysis, and FEA to meet strength and stiffness targets with defined factors of safety.</li>
        <li>Contributed to composite wing plate and landing gear interface design, including material trade studies, core selection, and validation via physical load testing.</li>
        <li>Assisted with design and refinement of a modular prismatic fuselage truss and control-surface actuation layout to balance payload accessibility, manufacturability, and structural reliability.</li>
      </ul>
    </div>
  </section>

  <!-- Formula SAE detail overlay -->
  <div class="team-overlay" id="formula-overlay" data-team="formula-ic">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>Formula SAE IC – Aerodynamics</h2>
        <p class="team-meta">Role: Full Car Aerodynamics · Season: 2024–2025</p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/formula/2025 Champ Photo.JPEG' | relative_url }}"
          alt="Formula SAE IC racecar with aerodynamic package."
          class="project-hero-image"
        >

        <!-- Overview -->
        <h3>Overview</h3>
        <p>
          As part of my senior capstone, I was a member of the 2025 Texas A&amp;M Formula SAE Internal Combustion design team, where I contributed to the aerodynamic development and performance validation of a Formula-style race car built for international competition. The vehicle was designed and evaluated across a series of static design reviews and dynamic performance events emphasizing acceleration, cornering capability, efficiency, and endurance.
          <br><br>
          My primary technical contributions centered on full-vehicle aerodynamic simulation, composite manufacturing, and track-based validation. I conducted CFD analyses of the complete aerodynamic package to evaluate downforce and drag trade-offs under realistic operating conditions, including the effects of pitch, roll, and yaw. These simulations informed iterative design decisions while accounting for manufacturing feasibility, packaging constraints, and integration with the overall vehicle system.
          <br><br>
          In parallel, I supported the fabrication and assembly of carbon fiber aerodynamic components and participated in on-track testing to correlate simulation predictions with observed vehicle behavior. This simulation-to-testing workflow was used to refine the aerodynamic package and improve performance in cornering- and endurance-dominated events.
        </p>

        <!-- Responsibilities -->
        <h3>Responsibilities</h3>
        <ul>
          <li>Full-vehicle CFD under pitch, roll, and yaw to balance downforce and drag.</li>
          <li>Design and integration of carbon fiber aerodynamic components.</li>
          <li>Trackside data collection and correlation between CFD and telemetry.</li>
        </ul>

        <!-- Small image gallery -->
        <h3>Development images</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/formula/cfd-side-view-formula.png' | relative_url }}"
            alt="CFD side view of Formula car showing velocity magnitude."
            class="project-gallery-img js-lightbox-target"
            data-caption="CFD side view of Formula car showing velocity magnitude."
          >
          <img
            src="{{ '/assets/images/formula/formula-floor-layup.jpg' | relative_url }}"
            alt="Carbon fiber floor during wet layup construction."
            class="project-gallery-img js-lightbox-target"
            data-caption="Carbon fiber floor during wet layup construction."
          >
          <img
            src="{{ '/assets/images/formula/100-miles-of-aero-testing.png' | relative_url }}"
            alt="The 2025 Formula car achieved 100 miles of aero track testing."
            class="project-gallery-img js-lightbox-target"
            data-caption="The 2025 Formula car achieved 100 miles of aero track testing."
          >
          <img
            src="{{ '/assets/images/formula/Formula-Aero-Poster.png' | relative_url }}"
            alt="Aerodynamics Design Event Competition Poster."
            class="project-gallery-img js-lightbox-target"
            data-caption="Aerodynamics Design Event Competition Poster."
          >
          <img
            src="{{ '/assets/images/formula/EPS-Poster-Full-Car.png' | relative_url }}"
            alt="Full Car Engineering Project Showcase Poster."
            class="project-gallery-img js-lightbox-target"
            data-caption="Full Car Engineering Project Showcase Poster."
          >
        </div>

        <!-- GIF or short loop -->
        <h3>Aero visualization - Preliminary side mounted radiator study.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/formula/combined-rad-study.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>

        <!-- Results -->
        <h3>Results</h3>
        <p>
          (Detailed results here: measured downforce, top speed, lap time gains, competition placement, etc.)
        </p>
      </div>
    </div>
  </div>

  <!-- SAE Aero 2023–2024 detail overlay -->
  <div class="team-overlay" id="aero-23-24-overlay" data-team="aero-23-24">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>SAE Aero Design – Team Lead</h2>
        <p class="team-meta">Role: Team Lead · Season: 2023–2024</p>

        <img
          src="{{ '/assets/images/sae-aero/23-24/team-aero-2023-2024.jpeg' | relative_url }}"
          alt="SAE Aero Design aircraft 2023–2024"
          class="project-hero-image"
        >

        <h3>Overview</h3>
        <p>
          (Longer overview of the 2023–2024 aircraft concept, mission, and your responsibilities as team lead.)
        </p>

        <h3>Responsibilities</h3>
        <ul>
          <li>Coordinated subsystem leads and ensured integration of airframe, structure, propulsion, and avionics.</li>
          <li>Led design reviews, requirements tracking, and risk management for the competition timeline.</li>
          <li>Managed test campaigns, flight readiness, and competition logistics.</li>
        </ul>

        <h3>Results</h3>
        <p>
          (Details on competition performance, scoring, reliability, and any unique achievements from this season.)
        </p>

        <!-- Optional: add a gallery here later using .project-gallery -->
      </div>
    </div>
  </div>

  <!-- SAE Aero 2022–2023 detail overlay -->
  <div class="team-overlay" id="aero-22-23-overlay" data-team="aero-22-23">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>SAE Aero Design – Design Lead</h2>
        <p class="team-meta">Role: Design Lead · Season: 2022–2023</p>

        <img
          src="{{ '/assets/images/sae-aero/22-23/team-aero-2022-2023.jpeg' | relative_url }}"
          alt="SAE Aero Design aircraft 2022–2023"
          class="project-hero-image"
        >

        <h3>Overview</h3>
        <p>
          (Overview of the 2022–2023 aircraft, mission profile, and your design goals.)
        </p>

        <h3>Responsibilities</h3>
        <ul>
          <li>Owned conceptual layout, aerodynamic configuration, and structural sizing.</li>
          <li>Developed and reviewed CAD, weight estimates, and performance predictions.</li>
          <li>Worked with manufacturing to ensure designs were buildable and competition-compliant.</li>
        </ul>

        <h3>Results</h3>
        <p>
          (Competition outcome and any notable design successes or lessons learned.)
        </p>

        <!-- Optional: add a gallery here later using .project-gallery -->
      </div>
    </div>
  </div>

  <!-- SAE Aero 2021–2022 detail overlay -->
  <div class="team-overlay" id="aero-21-22-overlay" data-team="aero-21-22">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>SAE Aero Design – Team Member</h2>
        <p class="team-meta">Role: Team Member · Season: 2021–2022</p>

        <img
          src="{{ '/assets/images/sae-aero/21-22/team-aero-2021-2022.JPG' | relative_url }}"
          alt="SAE Aero Design aircraft 2021–2022"
          class="project-hero-image"
        >

        <!-- Overview -->
        <h3>Overview</h3>
        <p>
          As a member of the structural and material science sub-team for the Texas A&M SAE Aero Design Micro Class entry, I worked on an aircraft designed to maximize flight score through short-takeoff performance, high payload fraction, and rapid loading within the SAE ruleset. The airframe featured a biplane wing configuration, prismatic fuselage truss, and rear cargo loading architecture, all tailored to carry multiple payload box configurations and steel plate weight while remaining stable and controllable across a range of wind conditions. My responsibilities centered on turning these system-level goals into robust structural solutions that could be iterated quickly under the team’s Agile-based development process.
          <br><br>
          Within the wing and empennage, I supported structural layouts that combined analytical sizing with simulation and testing to achieve targeted stiffness and safety factors. This included applying Euler–Bernoulli beam theory and shear-flow methods to size spars and shear webs, using CFD-derived lift distributions as input loads, and then validating and refining these concepts in SolidWorks-based FEA and designed experiments. For the empennage, I contributed to redesign efforts following early aeroelastic issues, helping move toward stiffer box-spar concepts and material choices that kept twist and deflection within acceptable limits for control authority.
          <br><br>
          I also worked with the team on composite and truss structures that linked major airframe components and enabled fast iteration. This involved evaluating foam and printed cores for the composite wing plate, supporting design of internal bracing to arrest core fatigue and wing droop, and helping define landing gear attachment strategies that could handle landing loads without excessive weight. In the fuselage, I contributed to the definition of a space truss architecture and member layout that balanced payload volume, buckling resistance, and manufacturability, using SkyCiv-based analysis and physical builds to confirm stress levels and safety margins.
        </p>

        <h3>Responsibilities</h3>
        <ul>
          <li>Performed preliminary and detailed sizing of spars, ribs, and tail structures using beam theory, shear-flow analysis, and CFD-derived load distributions, then supported validation through FEA and physical deflection/twist testing.</li>
          <li>Assisted in composite wing plate and core development, including material trade studies between extruded polystyrene and 3D-printed cores, internal brace design to mitigate fatigue, and assessment of stiffness under simulated wing loads.</li>
          <li>Contributed to fuselage truss and landing gear structural design by helping select member orientations and materials to avoid buckling, define attachment schemes, and meet target factors of safety under combined thrust, lift, and landing loads.</li>
        </ul>

        <!-- Small image gallery -->
        <h3>Development images</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/sae-aero/21-22/21-22-plane.jpeg' | relative_url }}"
            alt="Experimental Plane post first flight test."
            class="project-gallery-img js-lightbox-target"
            data-caption="Experimental Plane post first flight test."
          >
          <img
            src="{{ '/assets/images/sae-aero/21-22/bare-jig-21-22.JPG' | relative_url }}"
            alt="Structural" constrcution of an experimental version of the plane using aluminum extrusion to maintain dimensional               tolerance."
            class="project-gallery-img js-lightbox-target"
            data-caption="Structural" constrcution of an experimental version of the plane using aluminum extrusion to maintain                  dimensional tolerance."
          >
          <img
            src="{{ '/assets/images/sae-aero/21-22/cad-21-22.JPG' | relative_url }}"
            alt="CAD rendering of the 21-22 competition plane."
            class="project-gallery-img js-lightbox-target"
            data-caption="CAD rendering of the 21-22 competition plane."
          >
          <img
            src="{{ '/assets/images/formula/sae-aero/21-22/flight-test-21-22.PNG' | relative_url }}"
            alt="First hand-held launch of the competition aircraft."
            class="project-gallery-img js-lightbox-target"
            data-caption="First hand-held launch of the competition aircraft."
          >
        </div>
        <!-- GIF or short loop -->
        <h3>First drop test on custom carbon fiber landing gear.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/sae-aero/21-22/light-drop-test-21-22.MOV' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <!-- GIF or short loop -->
        <h3>Flight test of 21-22 experimental aircraft.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/sae-aero/21-22/flight-test-21-22.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        
        <h3>Results</h3>
        <p>
          (Competition performance and key takeaways from your first year.)
        </p>

        <!-- Optional: add a gallery here later using .project-gallery -->
      </div>
    </div>
  </div>

  <!-- Shared large image viewer (global, over everything) -->
  <div class="image-lightbox" id="formula-image-lightbox">
    <div class="image-lightbox-inner">
      <button class="image-lightbox-close" aria-label="Close image">&times;</button>
      <img src="" alt="" class="image-lightbox-img">
      <p class="image-lightbox-caption"></p>
    </div>
  </div>

</div>
