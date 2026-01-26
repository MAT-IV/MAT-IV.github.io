---
layout: default
title: Experience
permalink: /experience/
---

<div class="main-content">

  <!-- Header row: ship on far left, title centered -->
  <div class="page-header">
    <div class="page-header-left">
      <a href="{{ '/' | relative_url }}"
         class="back-ship back-ship-experience"
         aria-label="Back to main orbit"
         onclick="skipBigBangAndGoHome(event);">
        <img src="{{ '/assets/images/back-ship/SLS.png' | relative_url }}" alt="">
      </a>
    </div>

    <h1 class="page-header-title">Professional Experience</h1>

    <div class="page-header-right"></div>
  </div>

  <p>
    This page highlights my most significant professional experiences. Select an image to view more details.
  </p>

  <!-- 1. NASA Co-Op -->
  <section class="team-card">
    <div class="team-card-media">
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/nasa/LVT-wide.jpeg' | relative_url }}"
          alt="LOX Valve Test final build wide shot."
          class="team-image team-image-nasa"
          data-team-key="nasa-coop"
        >
      </div>
    </div>
    <div class="team-card-body">
      <h2>NASA – Rocket Propulsion Testing Co‑Op</h2>
      <p class="team-meta">Role: Pathways Co‑Op · Dates: Spring 2023, Summer 2023, Spring 2024</p>
      <p>
        As a Rocket Propulsion Test Engineering co-op in NASA’s Pathways program at Stennis Space Center, I worked as a full-time engineer across three rotations focused on cryogenic fluid systems, test stand integration, and data analysis. My work spanned piping and instrumentation design, system-level modeling, and test operations for liquid-oxygen-based rocket propulsion projects.
      </p>
      <ul>
        <li>Spring 2023 – Created piping sketches (PSK), performed RTD protuberance analysis, and designed LOX pipe supports for a new valve test system.</li>
        <li>Summer 2023 – Took on more autonomous PSK development, supported LOX transfers as a transfer engineer, and built Flomaster models and test sequences for a liquid oxygen valve test (LVT).</li>
        <li>Spring 2024 – Completed LVT test data analysis and Cv calculations, updated facilities capability documentation, and contributed to customer-specific thermo-fluids and data analysis tasks.</li>
      </ul>
    </div>
  </section>

  <!-- 2. RAD Lab Internship -->
  <section class="team-card">
    <div class="team-card-media">
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/rad/ball-me.JPG' | relative_url }}"
          alt="RAD Lab 6ft Ball."
          class="team-image team-image-radlab"
          data-team-key="rad-lab"
        >
      </div>
    </div>
    <div class="team-card-body">
      <h2>Robotics, Automation, and Design Lab – Engineering Intern</h2>
      <p class="team-meta">Role: Engineering Intern · Dates: Summer 2024, Fall 2024, Spring 2025, Summer 2025</p>
      <p>
        During four semesters at the RAD Lab, I contributed to the development of the RoboBall robotic platforms, including both the 2-ft and 6-ft diameter systems designed for exploration and reconnaissance in challenging environments. My work focused on real-time data visualization, wireless power transfer, deployable sensing, and system-level integration, progressing from subsystem development to research contribution and publication.
      </p>
      <ul>
        <li>Developed real-time visualization tools and supported mechanical and electrical integration of the 6-ft RoboBall platform</li>
        <li>Designed and integrated a wireless inductive charging system across multiple development iterations.</li>
        <li>Engineered a deployable sensor package for RoboBall III and contributed to a peer-reviewed publication.</li>
      </ul>
    </div>
  </section>

  <!-- NASA Co-Op detail overlay -->
  <div class="team-overlay" id="nasa-coop-overlay" data-team="nasa-coop">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>NASA – Engineering Co‑Op</h2>
        <p class="team-meta">Role: Engineering Co‑Op · Dates: Spring 2023, Summer 2023, Spring 2024</p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/nasa/engine-photo.JPG' | relative_url }}"
          alt="RS-25 Engine."
          class="project-hero-image"
        >

        <!-- Overview -->
        <h3>Overview</h3>
        <p>
          Across three NASA Pathways rotations at Stennis, I moved from helping define a new liquid oxygen valve test system on paper to supporting cryogenic operations and finally closing the loop with post-test data analysis and facility-level documentation. The experience blended thermo-fluids, structural design, and test operations in a way that closely mirrored how real propulsion projects flow from concept to hardware and test.
        </p>

        <h3>Spring 2023 - First Term (Getting Started)</h3>
        <p>
          In my first term, I joined the Rocket Propulsion Test group at the very beginning of a new LOX valve project and saw how requirements turn into real piping and hardware. My work focused on building the initial piping sketch, analyzing instrumentation, and designing pipe supports that will be installed on a live test stand.
        </p>

        <!-- Key Work -->
        <h3>Key Work</h3>
        <ul>
          <li>Generated a detailed piping sketch (PSK) for a liquid oxygen valve test, coordinating with design engineers and test stand operators to capture flow paths, instrumentation, and purge/bleed lines.</li>
          <li>Performed protuberance analysis for a Rosemount RTD using ASME standards and PTC 19.3, selecting an insertion length that met stress, resonance, and response-time requirements.</li>
          <li>Designed and analyzed a LOX pipe support in CREO and AutoPIPE, performing buckling and stress checks (hand calcs and FEA) to meet structural safety margins.</li>
        </ul>

        <!-- Small image gallery -->
        <h3>First term media.</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/nasa/test-stand.jpeg' | relative_url }}"
            alt="NASA Stennis B-2 Test Stand."
            class="project-gallery-img js-lightbox-target"
            data-caption="NASA Stennis B-2 Test Stand."
          >
        </div>

        <!-- Optional: video block -->
        <h3>RS-25 engine test.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/nasa/rs-25-test.MOV' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        
        <h3>Summer 2023 - Second Term (More Autonomy and Operations)</h3>
        <p>
          By my second term, I moved from shadowing to owning more of the design work and also stepped into operations through the technical control center (TCC). I expanded into thermo-fluid system analysis while still building on the piping and test stand understanding from my first rotation.
        </p>

        <!-- Key Work -->
        <h3>Key Work</h3>
        <ul>
          <li>Independently developed PSKs for multiple projects (engine schematics, facility and special test equipment drawings), including stand walk-downs to ensure designs matched real hardware and were technician-friendly to install.</li>
          <li>Shadowed and then acted as a transfer engineer in the TCC, executing a supervised LOX transfer from storage tanks to a customer’s run tank and seeing how design, software, and operations converge on test day.</li>
          <li>Built Flomaster models and test sequences for the LOX Valve Test (LVT), using fluid property tools (REFPROP) and manufacturer Cv curves to simulate different valve profiles and verify component pressure limits and test cases.</li>
        </ul>
        
        <!-- Optional: video block -->
        <h3>Stennis Representative Slide.</h3>
        <img
          class="project-video"
          src="{{ '/assets/images/nasa/PAXC.gif' | relative_url }}"
          alt="Stennis representative slide animated GIF."
        >


        <h3>Spring 2024 - Third Term (Closing the Loop)</h3>
        <p>
          In my final term, I got to see the LOX Valve Test project through full activation and focused heavily on data analysis and site-level documentation. I also supported additional customer projects that tied together fluid dynamics, heat transfer, and real test data processing.
        </p>

        <!-- Key Work -->
        <h3>Key Work</h3>
        <ul>
          <li>Served as a data analysis engineer in the Test Control Center for LVT runs, writing custom Winplot scripts, verifying pre-test “blue lines,” and computing system Cv values from post-test data to compare against manufacturer curves.</li>
          <li>Updated the Facilities Capability Document by walking down each major test stand, confirming current commodity connections, and documenting capabilities for future business development.</li>
          <li>Assisted on customer-specific thermo-fluids and data-analysis tasks, including orifice sizing using heat-transfer/flow calculations and developing scripts to flag out-of-family instrumentation during and after tests.</li>
        </ul>

        <!-- Small image gallery -->
        <h3>Third term images.</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/nasa/LVT-close.jpeg' | relative_url }}"
            alt="LOX Valve Test final build."
            class="project-gallery-img js-lightbox-target"
            data-caption="LOX Valve Test final build."
          >
          <img
            src="{{ '/assets/images/nasa/nasa-selfie.jpeg' | relative_url }}"
            alt="NASA selfie."
            class="project-gallery-img js-lightbox-target"
            data-caption="NASA selfie."
          >
        </div>

        <h3>Overall summary and reflection</h3>
        <p>
          Across all three terms, I was able to watch a major LOX valve project progress from initial PSK and instrumentation sizing, through system modeling and sequence development, all the way to cryogenic test data and performance characterization. That full-cycle exposure, combined with hands-on time in the test control center and on stand walk-downs, made the link between classroom thermo-fluids and real rocket test systems very tangible.
          <br><br>
          Just as importantly, the co-op showed me how dependent successful tests are on communication between design engineers, operators, technicians, and data analysts. The experience solidified that I enjoy working at the intersection of analysis, hardware, and operations, and it gave me a level of confidence and context that I’ll carry into future roles in propulsion and test engineering.
        </p>
      </div>
    </div>
  </div>

  <!-- RAD Lab Internship detail overlay -->
  <div class="team-overlay" id="rad-lab-overlay" data-team="rad-lab">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>RAD Lab – Engineering Intern</h2>
        <p class="team-meta">Role: Engineering Intern · Dates: Summer 2024, Fall 2024, Spring 2025, Summer 2025</p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/rad/ball-team-6.jpeg' | relative_url }}"
          alt="RAD Lab internship project hero image."
          class="project-hero-image"
        >
            <!-- Overview -->
        <h3>Overview</h3>
        <p>
          The RoboBall platforms developed at the RAD Lab are spherical mobile robots intended for exploration, reconnaissance, and sensing in environments where traditional wheeled or legged systems are limited. Two primary variants were developed: a 2-ft diameter platform optimized for agility and rapid deployment, and a 6-ft diameter platform designed to carry larger payloads and extended sensing capabilities. Across four semesters, I contributed to the design, integration, and testing of subsystems spanning sensing, power, and data visualization for both platforms.
                  </p>

        <h3>Summer 2024 - First Term (Visualization & 6-ft RoboBall System Bring-Up)</h3>
        <p>
          In my first semester at the RAD Lab, I focused on developing software tools and supporting the mechanical and electrical integration of the first 6-ft diameter RoboBall platform. This phase emphasized system bring-up, debugging, and establishing reliable workflows for testing and data interpretation across subsystems.
        </p>

        <!-- Key Work -->
        <h3>Key Work</h3>
        <ul>
          <li>Developed real-time data visualization tools using ROS2 and MATLAB to monitor system states and sensor outputs</li>
          <li>Supported mechanical and electrical integration and buildup of the initial 6-ft RoboBall platform</li>
          <li>Assisted with system bring-up and early lab testing to validate integrated subsystems</li>
        </ul>

        <!-- Small image gallery -->
        <h3>First term media.</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/rad/ball-praise.jpeg' | relative_url }}"
            alt="RoboBall III Assembly."
            class="project-gallery-img js-lightbox-target"
            data-caption="RoboBall III Assembly."
          >

           <img
            src="{{ '/assets/images/rad/ball-fam.jpeg' | relative_url }}"
            alt="RoboBall Family."
            class="project-gallery-img js-lightbox-target"
            data-caption="RoboBall Family."
          >
           <img
            src="{{ '/assets/images/rad/RAD-Summer-1.gif' | relative_url }}"
            alt="Summer 1 RAD Lab."
            class="project-gallery-img js-lightbox-target"
            data-caption="Summer 1 RAD Lab."
          >
        </div>

        <!-- Optional: video block -->
        <h3>Roboball III rolling.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/rad/ball-bounce.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        
        <h3>Fall 2024 & Spring 2025 - Second and Third Term (Wireless Inductive Charging System)</h3>
        <p>
          During my second and third semesters, I led the design and iteration of a wireless inductive charging system to enable untethered recharging of the RoboBall platform. This work required balancing power transfer efficiency, alignment tolerance, and integration constraints to support reliable operation during extended testing campaigns.
        </p>

        <!-- Key Work -->
        <h3>Key Work</h3>
        <ul>
          <li>Designed and iterated on a wireless inductive charging module for the RoboBall platform.</li>
          <li>Integrated charging hardware with onboard power electronics and control systems.</li>
          <li>Evaluated charging performance through testing, focusing on efficiency, robustness, and usability.</li>
        </ul>
        
        <!-- Small image gallery -->
        <h3>First term media.</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/rad/ball-on-rev.jpeg' | relative_url }}"
            alt="RoboBall II on REV."
            class="project-gallery-img js-lightbox-target"
            data-caption="RoboBall II on REV."
          >
        </div>

        <!-- Optional: video block -->
        <h3>Roboball III water test.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/rad/ball-roll.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <h3>Roboball III on truck.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/rad/ball-truck.MOV' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>

        <h3>Spring 2025 - Fourth Term (Deployable Sensor Package & Research Publication)</h3>
        <p>
          In my final semester, I focused on system-level design and research contribution through the development of a deployable sensor package for RoboBall III. This system extended mission range and situational awareness by enabling distributed sensing beyond the primary robot, culminating in a peer-reviewed publication.
        </p>

        <!-- Key Work -->
        <h3>Key Work</h3>
        <ul>
          <li>Engineered a deployable sensor package providing GPS localization and visual reconnaissance.</li>
          <li>Integrated sensing, deployment, and communication subsystems into the RoboBall III platform.</li>
          <li>Contributed to system validation, data analysis, and manuscript preparation as a co-author. View publication record at
            <a href="https://orcid.org/0009-0002-2986-3486" target="_blank" rel="noopener noreferrer">
              https://orcid.org/0009-0002-2986-3486
            </a>.
          </li>
        </ul>

        <!-- Small image gallery -->
        <h3>First term media.</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/rad/merica-ball.jpeg' | relative_url }}"
            alt="RoboBall III with flags."
            class="project-gallery-img js-lightbox-target"
            data-caption="RoboBall III with flags."
          >
           <img
            src="{{ '/assets/images/rad/RAD-Summer-2.gif' | relative_url }}"
            alt="Summer 2 slide."
            class="project-gallery-img js-lightbox-target"
            data-caption="Summer 2 slide."
          >
        </div>

        <!-- Optional: video block -->
        <h3>Deployable cubesat.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/rad/cube-sat.MOV' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>

        <h3>Overall summary and reflection</h3>
        <p>
    This multi-semester research/internship experience provided sustained exposure to the full lifecycle of a complex robotic system, from early system bring-up through subsystem iteration and ultimately research-level contribution. Working across software, electrical, mechanical, and sensing domains reinforced the importance of interface definition, incremental validation, and design decisions that account for real-world constraints.
          <br><br>
          Over time, my role evolved from supporting integration and tooling to owning subsystem development and contributing at the system and research level. This experience strengthened my ability to work across disciplines, translate testing feedback into design improvements, and contribute meaningfully to technically rigorous, collaborative engineering efforts.
        </p>
      </div>
    </div>
  </div>
  <!-- Shared large image viewer (global, over everything) -->
  <div class="image-lightbox" id="image-lightbox">
    <div class="image-lightbox-inner">
      <button class="image-lightbox-close" aria-label="Close image">&times;</button>
      <img src="" alt="" class="image-lightbox-img">
      <p class="image-lightbox-caption"></p>
    </div>
  </div>

</div>
