---
layout: default
title: About
permalink: /about/
---

<div class="main-content">

  <!-- Header row: ship on far left, title centered -->
  <div class="page-header">
    <div class="page-header-left">
      <a href="{{ '/' | relative_url }}"
         class="back-ship back-ship-about"
         aria-label="Back to main orbit"
         onclick="skipBigBangAndGoHome(event);">
        <img src="{{ '/assets/images/back-ship/Endurance.png' | relative_url }}" alt="">
      </a>
    </div>

    <h1 class="page-header-title">About Me</h1>

    <div class="page-header-right"></div>
  </div>

  <!-- Intro / welcome -->
  <p>
    Howdy! Welcome to my personal portfolio. This site brings together my work across propulsion testing, robotics, competitive design teams, and hobby projects that keep me building and learning.
  </p>

  <!-- Bio block -->
  <section class="team-card">
    <div class="team-card-media">
      <div class="project-gallery">
        <img
          src="{{ '/assets/images/profile.jpg' | relative_url }}"
          alt="Professional NASA portrait of Mauricio Trevino."
          class="team-image"
        >
      </div>
    </div>

    <div class="team-card-body">
      <h2>Mauricio Trevino</h2>
      <p class="team-meta">Mechanical Engineer · Space Studies Graduate Student</p>
      <p>
        I am a mechanical engineer currently pursuing a Professional Science Master’s in Space Studies at Rice University, with a focus on engineering and management. My goal is to pair strong technical foundations with leadership and systems-level decision making to contribute effectively to the space industry.
      </p>
      <p>
        I graduated Summa Cum Laude with Engineering Honors from Texas A&amp;M University with a B.S. in Mechanical Engineering. During my undergraduate studies, I worked as a NASA Pathways Co‑Op at the John C. Stennis Space Center, where I supported rocket engine testing operations through system design support, test planning, and data analysis. I also conducted research in the Robotics, Automation, and Design (RAD) Lab, developing and integrating sensing systems for novel spherical mobile robots.
      </p>
      <p>
        In parallel, I was actively involved in competitive engineering design teams, including Formula SAE IC and SAE Aero Design, where I applied advanced simulation tools and hands-on fabrication techniques to deliver high-performing vehicle and aircraft designs. Across coursework, research, and team-based projects, I focus on building technically sound, testable systems, with an emphasis on real-world performance and reliability. Enjoy!
      </p>
    </div>
  </section>

<!--Expense Report Link -->
<p style="margin-top: 2.5rem; opacity: 0.45; font-size: 0.8rem; text-align: center;">
    <a href="{{ '/ledger/' | relative_url }}" style="color: inherit; text-decoration: none; border-bottom: 1px dotted rgba(255,255,255,0.4);">Ledger</a>
  </p>
  
</div>
