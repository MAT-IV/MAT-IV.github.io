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
         class="back-ship back-ship-teams"
         aria-label="Back to main orbit"
         onclick="skipBigBangAndGoHome(event);">
        <img src="{{ '/assets/images/back-ship/ship-teams.png' | relative_url }}" alt="">
      </a>
    </div>

    <h1 class="page-header-title">Experience</h1>

    <div class="page-header-right"></div>
  </div>

  <p>
    This page highlights my most significant professional experiences, including my NASA Co‑Op and my RAD Lab internship. Select an image to view more detail, development images, and results for each role.
  </p>

  <!-- 1. NASA Co-Op -->
  <section class="team-card">
    <div class="team-card-media">
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/experience/nasa-coop-hero.jpg' | relative_url }}"
          alt="NASA facility and aircraft."
          class="team-image team-image-nasa"
          data-team-key="nasa-coop"
        >
      </div>
    </div>
    <div class="team-card-body">
      <h2>NASA – Engineering Co‑Op</h2>
      <p class="team-meta">Role: Engineering Co‑Op · Dates: <!-- e.g. Summer 2024 – Spring 2025 --></p>
      <p>
        Briefly describe your NASA Co‑Op here: team or branch, primary mission focus, and how your work contributed (e.g., flight testing, structural analysis, CFD, systems integration).
      </p>
      <ul>
        <li>High‑level responsibility or project bullet.</li>
        <li>Another key technical or ownership bullet.</li>
        <li>A result, outcome, or impact bullet.</li>
      </ul>
    </div>
  </section>

  <!-- 2. RAD Lab Internship -->
  <section class="team-card">
    <div class="team-card-media">
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/experience/rad-lab-hero.jpg' | relative_url }}"
          alt="RAD Lab experimental setup or hardware."
          class="team-image team-image-radlab"
          data-team-key="rad-lab"
        >
      </div>
    </div>
    <div class="team-card-body">
      <h2>RAD Lab – Engineering Intern</h2>
      <p class="team-meta">Role: Engineering Intern · Dates: <!-- e.g. Summer 2023 --></p>
      <p>
        Briefly describe your RAD Lab internship: what the lab focuses on, your main project area, and how your work fit into the broader research or product goals.
      </p>
      <ul>
        <li>High‑level responsibility or project bullet.</li>
        <li>Another key technical or ownership bullet.</li>
        <li>A result, outcome, or impact bullet.</li>
      </ul>
    </div>
  </section>

  <!-- NASA Co-Op detail overlay -->
  <div class="team-overlay" id="nasa-coop-overlay" data-team="nasa-coop">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>NASA – Engineering Co‑Op</h2>
        <p class="team-meta">Role: Engineering Co‑Op · Dates: <!-- e.g. Summer 2024 – Spring 2025 --></p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/experience/nasa-coop-hero.jpg' | relative_url }}"
          alt="NASA Co‑Op project hero image."
          class="project-hero-image"
        >

        <!-- Overview -->
        <h3>Overview</h3>
        <p>
          Longer overview of your NASA Co‑Op: directorate/center, the program or project you supported, high‑level objectives, and how your work fit into those objectives.
        </p>

        <h3>Responsibilities</h3>
        <ul>
          <li>Responsibility 1 with some technical detail (e.g., analysis method, tool, or test type).</li>
          <li>Responsibility 2 (e.g., design, integration, data reduction, scripting, or documentation).</li>
          <li>Responsibility 3 emphasizing ownership, collaboration, or cross‑disciplinary work.</li>
        </ul>

        <!-- Small image gallery -->
        <h3>Development images</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/experience/nasa-dev-1.jpg' | relative_url }}"
            alt="NASA development image 1."
            class="project-gallery-img js-lightbox-target"
            data-caption="NASA development image 1."
          >
          <img
            src="{{ '/assets/images/experience/nasa-dev-2.jpg' | relative_url }}"
            alt="NASA development image 2."
            class="project-gallery-img js-lightbox-target"
            data-caption="NASA development image 2."
          >
          <img
            src="{{ '/assets/images/experience/nasa-dev-3.jpg' | relative_url }}"
            alt="NASA development image 3."
            class="project-gallery-img js-lightbox-target"
            data-caption="NASA development image 3."
          >
        </div>

        <!-- Optional: video block -->
        <h3>Visualization or testing</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/experience/nasa-video.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>

        <h3>Results</h3>
        <p>
          Summarize key outcomes: what you delivered, improvements or insights gained, and any recognition, publications, or tangible impact from your work.
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
        <p class="team-meta">Role: Engineering Intern · Dates: <!-- e.g. Summer 2023 --></p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/experience/rad-lab-hero.jpg' | relative_url }}"
          alt="RAD Lab internship project hero image."
          class="project-hero-image"
        >

        <!-- Overview -->
        <h3>Overview</h3>
        <p>
          Longer overview of your RAD Lab work: lab purpose, main project or experiment, and your role in the research or development effort.
        </p>

        <h3>Responsibilities</h3>
        <ul>
          <li>Responsibility 1 (e.g., experiment design, test stand work, data acquisition, or model development).</li>
          <li>Responsibility 2 with specific tools, software, or hardware you used.</li>
          <li>Responsibility 3 highlighting collaboration, iteration, or problem‑solving.</li>
        </ul>

        <!-- Small image gallery -->
        <h3>Development images</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/experience/rad-dev-1.jpg' | relative_url }}"
            alt="RAD Lab development image 1."
            class="project-gallery-img js-lightbox-target"
            data-caption="RAD Lab development image 1."
          >
          <img
            src="{{ '/assets/images/experience/rad-dev-2.jpg' | relative_url }}"
            alt="RAD Lab development image 2."
            class="project-gallery-img js-lightbox-target"
            data-caption="RAD Lab development image 2."
          >
          <img
            src="{{ '/assets/images/experience/rad-dev-3.jpg' | relative_url }}"
            alt="RAD Lab development image 3."
            class="project-gallery-img js-lightbox-target"
            data-caption="RAD Lab development image 3."
          >
        </div>

        <!-- Optional: video block -->
        <h3>Experiment or demo</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/experience/rad-video.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>

        <h3>Results</h3>
        <p>
          Summarize what you achieved: validated designs, data products, tools or scripts you built, or how your work advanced the lab’s objectives.
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
