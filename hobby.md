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
          src="{{ '/assets/images/hobby/fpv/drone-3.jpeg' | relative_url }}"
          alt="Custom-built FPV drone."
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
          src="{{ '/assets/images/hobby/film/camera.JPG' | relative_url }}"
          alt="1959 antique film camera."
          class="team-image team-image-hobby-film"
          data-team-key="hobby-film"
        >
      </div>
    </div>
    <div class="team-card-body">
      <h2>1959 Graflex Super Graphic 4x5 Large Format Camera</h2>
      <p class="team-meta">Started: December 2023</p>
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
          src="{{ '/assets/images/hobby/3d/printer.jpeg' | relative_url }}"
          alt="3D-Printer Bambu X1C on a desk."
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
        <p class="team-meta">Category: FPV & RC</p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/hobby/fpv/drone-1.png' | relative_url }}"
          alt="Drone #1 build."
          class="project-hero-image"
        >

        <h3>Overview</h3>
        <p>
          I build FPV drones from individual COTS components, handling frame selection, electronics layout, soldering, firmware setup, and tuning. The goal is a reliable freestyle platform that can handle aggressive flying while capturing clean footage via a mounted GoPro.
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
            src="{{ '/assets/images/hobby/fpv/wiring-fpv.PNG' | relative_url }}"
            alt="Wiring diagram of flight controller."
            class="project-gallery-img js-lightbox-target"
            data-caption="Wiring diagram of flight controller."
          >
          <img
            src="{{ '/assets/images/hobby/fpv/drone-build.jpeg' | relative_url }}"
            alt="Mid drone build. Sorry mom for taking up the table."
            class="project-gallery-img js-lightbox-target"
            data-caption="Mid drone build. Sorry mom for taking up the table."
          >
          <img
            src="{{ '/assets/images/hobby/fpv/drone-3.jpeg' | relative_url }}"
            alt="FPV build #2."
            class="project-gallery-img js-lightbox-target"
            data-caption="FPV build #2."
          >
        </div>

        <!-- Optional: FPV DVR clip -->
        <h3>Raw flight footage from headset.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/hobby/fpv/raw.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        
        <h3>Flight videos.</h3>
        <video
          class="project-video"
          src="{{ '/assets/images/hobby/fpv/drone-chase.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <video
          class="project-video"
          src="{{ '/assets/images/hobby/fpv/orbit-drone.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <video
          class="project-video"
          src="{{ '/assets/images/hobby/fpv/flyby.MP4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <video
          class="project-video"
          src="{{ '/assets/images/hobby/fpv/up-away.mp4' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <video
          class="project-video"
          src="{{ '/assets/images/hobby/fpv/drone-orbit.MOV' | relative_url }}"
          autoplay
          muted
          loop
          playsinline
        ></video>

        <h3>Why I did it.</h3>
        <p>
          FPV drone building combines electronics, mechanical layout, and control tuning in a tight feedback loop. It has allowed me to practive my wiring, troubleshooting, and configuration skills while giving me a hands-on way to explore control and stability in a real-world system.
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
        <p class="team-meta">Category: Analog Photography</p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/hobby/film/setup-out.jpeg' | relative_url }}"
          alt="Film photos take work."
          class="project-hero-image"
        >

        <h3>Overview</h3>
        <p>
          I use a 1959 film camera to explore analog photography, focusing on manual exposure, composition, and understanding how the mechanical side of the camera influences each frame.
        </p>

        <h3>Sample photographs</h3>
        <div class="project-gallery">
          <img
            src="{{ '/assets/images/hobby/film/b-2.JPG' | relative_url }}"
            alt="NASA Stennis B-2 Test Stand."
            class="project-gallery-img js-lightbox-target"
            data-caption="NASA Stennis B-2 Test Stand."
          >
          <img
            src="{{ '/assets/images/hobby/film/a-1.jpg' | relative_url }}"
            alt="NASA Stennis A-1 Test Stand."
            class="project-gallery-img js-lightbox-target"
            data-caption="NASA Stennis A-1 Test Stand."
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
        <p class="team-meta">Category: Prototyping & Artwork</p>

        <!-- Hero image -->
        <img
          src="{{ '/assets/images/hobby/3d/mask.jpeg' | relative_url }}"
          alt="3D printed mask in printer."
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
            src="{{ '/assets/images/hobby/3d/tars.jpeg' | relative_url }}"
            alt="First ever 3D print, TARS from Interstellar."
            class="project-gallery-img js-lightbox-target"
            data-caption="First ever 3D print, TARS from Interstellar."
          >
          <img
            src="{{ '/assets/images/hobby/3d/gopro-mount.jpeg' | relative_url }}"
            alt="3D-printed GoPro mount for FPV drone."
            class="project-gallery-img js-lightbox-target"
            data-caption="3D-printed GoPro mount for FPV drone."
          >
          <img
            src="{{ '/assets/images/hobby/3d/car.jpeg' | relative_url }}"
            alt="Close-up of 3D-printed Formula SAE car prototype."
            class="project-gallery-img js-lightbox-target"
            data-caption="Close-up of 3D-printed Formula SAE car prototype."
          >
          <img
            src="{{ '/assets/images/hobby/3d/wall-art.jpeg' | relative_url }}"
            alt="Largest print to date. 350 print hrs on a Kumiko style wall art."
            class="project-gallery-img js-lightbox-target"
            data-caption="Largest print to date. 350 hrs on a Kumiko style wall art."
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
