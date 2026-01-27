---
layout: default
title: Resume
permalink: /resume/
---

<div class="main-content">

  <!-- Header row: ship on far left, title centered -->
  <div class="resume-header">
    <div class="resume-header-left">
      <a href="{{ '/' | relative_url }}"
         class="back-ship back-ship-resume"
         aria-label="Back to main orbit"
         onclick="skipBigBangAndGoHome(event);">
        <img src="{{ '/assets/images/back-ship/x-wing.png' | relative_url }}" alt="">
      </a>
    </div>

    <h1 class="resume-header-title">Resume</h1>

    <div class="resume-header-right"></div>
  </div>

  <p>
    <a href="/assets/resume/Mauricio Trevino Resume.pdf"
       class="resume-download"
       target="_blank"
       rel="noopener">
      Download PDF
    </a>
  </p>

  <!-- Responsive resume image viewer (replaces PDF iframe) -->
  <div class="pdf-container">
    <img
      src="{{ '/assets/resume/Mauricio Trevino Resume.png' | relative_url }}"
      alt="Resume for Mauricio Treviño"
      class="resume-image"
    />
  </div>
</div>
