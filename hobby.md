---
layout: default
title: Hobby Builds
permalink: /hobby/
---

<div class="main-content">

  <!-- Header row: ship on far left, title centered -->
  <div class="page-header">
    <div class="page-header-left">
      <a href="{{ '/' | relative_url }}"
         class="back-ship back-ship-hobby"
         aria-label="Back to main orbit"
         onclick="skipBigBangAndGoHome(event);">
        <img src="{{ '/assets/images/back-ship/Enterprise.png' | relative_url }}" alt="">
      </a>
    </div>

    <h1 class="page-header-title">Hobby Builds</h1>

    <div class="page-header-right"></div>
  </div>

  <p>
    This gallery highlights a few of my favorite hobby projects. Select an image to view more details and supporting media.
  </p>

  <!-- 1. FPV Drone Builds -->
  <section class="team-card">
    <div class="team-card-media">
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/hobby/fpv-drone-hero.jpg' | relative_url }}"
          alt="Custom-built FPV drone on a workbench."
          class="team-image team-image-hobby-fpv"
          data-team-key="hobby-fpv"
        >
      </div>
    </div>
    <div class="team-card-body">
      <h2>FPV Drone Builds</h2>
      <p class="team-meta">Started: June 2020</p>
      <p>
        I build and tune FPV drones for freestyle flying and casual aerial filming.
      </p>
      <ul>
        <li>Assembled and wired multiple 5-inch, 6S lipo builds using off-the-shelf and custom components.</li>
        <li>Tuned PID and filter settings in Betaflight to balance responsiveness, stability, and propwash handling.</li>
        <li>Iterated on frame layouts, antenna placement, and GoPro mounting to improve durability and video quality.</li>
      </ul>
    </div>
  </section>

  <!-- 2. 1959 Antique Film Camera Photography -->
  <section class="team-card">
    <div class="team-card-media">
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/hobby/film-camera-hero.jpg' | relative_url }}"
          alt="1959 antique film camera with developed prints."
          class="team-image team-image-hobby-film"
          data-team-key="hobby-film"
        >
      </div>
    </div>
    <div class="team-card-body">
      <h2>1959 Graflex Super Graphic 4x5 Large Format Camera</h2>
      <p class="team-meta">Started: February 2023</p>
      <p>
        I shoot 4x5 large format film photographs using a 1959 film camera. Click the image to see more of my work!
      </p>
      <ul>
        <li>Restored and calibrated a 1950s-era camera, including light seals and basic shutter maintinence.</li>
        <li>Experimented with different film stocks, exposure settings, and composition styles.</li>
        <li>Scanned and organized select images into digital collections for sharing and archival.</li>
      </ul>
    </div>
  </section>

  <!-- 3. 3D Print Builds -->
  <section class="team-card">
    <div class="team-card-media">
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/hobby/3d-print-hero.jpg' | relative_url }}"
          alt="3D-printed parts and assemblies on a desk."
          class="team-image team-image-hobby-3dprint"
          data-team-key="hobby-3dprint"
        >
      </div>
    </div>
    <div class="team-card-body">
      <h2>3D Print Projects</h2>
      <p class="team-meta">Started: May 2018</p>
      <p>
        I use 3D printing for functional prototypes, small fixtures, and more recently artwork. I am currently using a Bambu-Labs X1C with AMS, but started out with a Creality Ender-5.
      </p>
      <ul>
        <li>Designed and printed custom brackets, camera mounts, and small fixtures from scratch in CAD.</li>
        <li>Tuned print settings (material, infill, supports) to balance strength, weight, and surface finish.</li>
        <li>Iterated quickly on prototypes based on fit checks and real-world use feedback.</li>
      </ul>
    </div>
  </section>

  <!-- FPV Drone overlay -->
  <div class="team-overlay" id="hobby-fpv-overlay" data-team="hobby-fpv">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>FPV Drone Builds</h2>
        <p class="team-meta">Category: FPV & RC · Status: Active Hobby</p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/hobby/fpv-drone-hero.jpg' | relative_url }}"
          alt="Custom-built FPV drone on a workbench."
          class="project-hero-image"
        >

        <h3>Overview</h3>
        <p>
          I build FPV drones from individual components, handling frame selection, electronics layout, soldering, firmware setup, and tuning. The goal is a reliable freestyle platform that can handle aggressive flying while capturing clean HD footage.
        </p>

        <h3>Build highlights</h3>
        <ul>
          <li>Configured flight controllers, ESCs, motors, VTX, and receivers for multiple quad formats (5&quot; freestyle, cinewhoop, and micro quads).</li>
          <li>Developed clean wiring and strain-relief schemes to reduce mid-air failures and simplify maintenance.</li>
          <li>Used blackbox logs and DVR footage to refine PID, filter, and rate settings for different flying styles.</li>
        </ul>

        <h3>Build gallery</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/hobby/fpv-closeup.jpg' | relative_url }}"
            alt="Close-up of FPV drone stack and wiring."
            class="project-gallery-img js-lightbox-target"
            data-caption="Close-up of FPV drone stack and wiring."
          >
          <img
            src="{{ '/assets/images/hobby/fpv-outdoor.jpg' | relative_url }}"
            alt="FPV drone ready for flight outdoors."
            class="project-gallery-img js-lightbox-target"
            data-caption="FPV drone ready for flight outdoors."
          >
          <img
            src="{{ '/assets/images/hobby/fpv-workbench.jpg' | relative_url }}"
            alt="FPV build in progress on the workbench."
            class="project-gallery-img js-lightbox-target"
            data-caption="FPV build in progress on the workbench."
          >
        </div>

        <!-- Optional: FPV DVR clip -->
        <h3>Flight footage</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/hobby/fpv-flight.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>

        <h3>Why it matters</h3>
        <p>
          FPV building combines electronics, mechanical layout, and control tuning in a tight feedback loop. It has sharpened my practical wiring, troubleshooting, and configuration skills while giving me a hands-on way to explore control and stability in a real-world system.
        </p>
      </div>
    </div>
  </div>

  <!-- Film camera overlay -->
  <div class="team-overlay" id="hobby-film-overlay" data-team="hobby-film">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>1959 Antique Film Camera</h2>
        <p class="team-meta">Category: Analog Photography · Status: Ongoing</p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/hobby/film-camera-hero.jpg' | relative_url }}"
          alt="1959 film camera with developed photos."
          class="project-hero-image"
        >

        <h3>Overview</h3>
        <p>
          I use a 1959 film camera to explore analog photography, focusing on manual exposure, composition, and understanding how the mechanical side of the camera influences each frame.
        </p>

        <h3>Camera and workflow</h3>
        <ul>
          <li>Inspected and refreshed light seals, verified shutter speeds, and tested film advance for consistent operation.</li>
          <li>Shot different film stocks to learn how contrast, grain, and color rendering change with exposure and development.</li>
          <li>Scanned negatives and curated a small set of favorite images for digital viewing and printing.</li>
        </ul>

        <h3>Sample photographs</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/hobby/film-photo-1.jpg' | relative_url }}"
            alt="Sample photograph taken on the 1959 camera."
            class="project-gallery-img js-lightbox-target"
            data-caption="Sample photograph taken on the 1959 camera."
          >
          <img
            src="{{ '/assets/images/hobby/film-photo-2.jpg' | relative_url }}"
            alt="Black-and-white street scene shot on film."
            class="project-gallery-img js-lightbox-target"
            data-caption="Black-and-white street scene shot on film."
          >
          <img
            src="{{ '/assets/images/hobby/film-photo-3.jpg' | relative_url }}"
            alt="Landscape photo captured on vintage film stock."
            class="project-gallery-img js-lightbox-target"
            data-caption="Landscape photo captured on vintage film stock."
          >
        </div>

        <h3>Why it matters</h3>
        <p>
          Shooting film forces me to slow down and think through exposure and composition before pressing the shutter. It has given me a better intuition for light, contrast, and framing that carries over into digital photography and visual design work.
        </p>
      </div>
    </div>
  </div>

  <!-- 3D print overlay -->
  <div class="team-overlay" id="hobby-3dprint-overlay" data-team="hobby-3dprint">
    <div class="team-overlay-inner">
      <button class="team-overlay-close" aria-label="Close details">&times;</button>

      <div class="team-overlay-content">
        <h2>3D Print Projects</h2>
        <p class="team-meta">Category: CAD & Prototyping · Status: Ongoing</p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/hobby/3d-print-hero.jpg' | relative_url }}"
          alt="Multiple 3D-printed parts and assemblies."
          class="project-hero-image"
        >

        <h3>Overview</h3>
        <p>
          I use 3D printing to turn quick CAD concepts into physical parts, from brackets and mounts to small tools and visual prototypes. Most projects are driven by a specific need or experiment.
        </p>

        <h3>Print highlights</h3>
        <ul>
          <li>Designed custom FPV GoPro mounts, landing gear, and cable guides tailored to specific frames and hardware.</li>
          <li>Printed organizers and fixtures to clean up workspaces, protect gear, and support repeatable testing setups.</li>
          <li>Experimented with different filaments, layer heights, and infill patterns for functional vs. aesthetic parts.</li>
        </ul>

        <h3>Print gallery</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/hobby/3d-print-part-1.jpg' | relative_url }}"
            alt="Custom 3D-printed FPV camera mount."
            class="project-gallery-img js-lightbox-target"
            data-caption="Custom 3D-printed FPV camera mount."
          >
          <img
            src="{{ '/assets/images/hobby/3d-print-part-2.jpg' | relative_url }}"
            alt="3D-printed organizers and small fixtures."
            class="project-gallery-img js-lightbox-target"
            data-caption="3D-printed organizers and small fixtures."
          >
          <img
            src="{{ '/assets/images/hobby/3d-print-part-3.jpg' | relative_url }}"
            alt="Close-up of 3D-printed mechanical prototype."
            class="project-gallery-img js-lightbox-target"
            data-caption="Close-up of 3D-printed mechanical prototype."
          >
        </div>

        <h3>Why it matters</h3>
        <p>
          3D printing closes the loop between CAD and hardware for me. It has improved the way I think about tolerances, assembly, and iteration speed whenever I’m designing parts that have to actually be built and used.
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
