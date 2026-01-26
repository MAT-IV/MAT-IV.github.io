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
    A visual wall of some of my favorite projects. Selecting an image takes you to the detailed view for that project.
  </p>

  <div class="maker-grid">

    <!-- Formula SAE IC (Design Teams page) -->
    <a class="maker-item" href="{{ '/teams/#formula-ic' | relative_url }}">
      <img
        src="{{ '/assets/images/maker/maker-formula.jpg' | relative_url }}"
        alt="Formula SAE IC racecar."
      >
      <span>Formula SAE IC</span>
    </a>

    <!-- SAE Aero 23–24 -->
    <a class="maker-item" href="{{ '/teams/#aero-23-24' | relative_url }}">
      <img
        src="{{ '/assets/images/maker/maker-aero-23-24.jpg' | relative_url }}"
        alt="SAE Aero 2023–2024 aircraft."
      >
      <span>SAE Aero 2023–2024</span>
    </a>

    <!-- SAE Aero 22–23 -->
    <a class="maker-item" href="{{ '/teams/#aero-22-23' | relative_url }}">
      <img
        src="{{ '/assets/images/maker/maker-aero-22-23.jpg' | relative_url }}"
        alt="SAE Aero 2022–2023 aircraft."
      >
      <span>SAE Aero 2022–2023</span>
    </a>

    <!-- SAE Aero 21–22 -->
    <a class="maker-item" href="{{ '/teams/#aero-21-22' | relative_url }}">
      <img
        src="{{ '/assets/images/maker/maker-aero-21-22.jpg' | relative_url }}"
        alt="SAE Aero 2021–2022 aircraft."
      >
      <span>SAE Aero 2021–2022</span>
    </a>

    <!-- NASA (Experience page) -->
    <a class="maker-item" href="{{ '/experience/#nasa-coop' | relative_url }}">
      <img
        src="{{ '/assets/images/maker/maker-nasa.jpg' | relative_url }}"
        alt="RS-25 test or valve stand at Stennis."
      >
      <span>NASA Pathways</span>
    </a>

    <!-- RAD Lab (Experience page) -->
    <a class="maker-item" href="{{ '/experience/#rad-lab' | relative_url }}">
      <img
        src="{{ '/assets/images/maker/maker-radlab.jpg' | relative_url }}"
        alt="RoboBall platform in RAD Lab."
      >
      <span>RAD Lab RoboBall</span>
    </a>

    <!-- FPV (Hobby page) -->
    <a class="maker-item" href="{{ '/hobby/#hobby-fpv' | relative_url }}">
      <img
        src="{{ '/assets/images/maker/maker-fpv.jpg' | relative_url }}"
        alt="Custom FPV drone."
      >
      <span>FPV Drones</span>
    </a>

    <!-- Astrophotography (Hobby page) -->
    <a class="maker-item" href="{{ '/hobby/#hobby-astro' | relative_url }}">
      <img
        src="{{ '/assets/images/maker/maker-astro.jpg' | relative_url }}"
        alt="Deep-sky astrophotography image."
      >
      <span>Astrophotography</span>
    </a>

    <!-- Misc builds (Hobby page) -->
    <a class="maker-item" href="{{ '/hobby/#hobby-misc' | relative_url }}">
      <img
        src="{{ '/assets/images/maker/maker-misc.jpg' | relative_url }}"
        alt="Assorted small projects."
      >
      <span>Misc Builds</span>
    </a>

  </div>
</div>
