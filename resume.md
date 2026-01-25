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
    <a href="/assets/resume/Mauricio_Trevino_Resume.pdf"
       class="resume-download"
       target="_blank"
       rel="noopener">
      Download PDF
    </a>
  </p>

  <!-- Responsive PDF viewer -->
  <div class="pdf-container">
    <iframe
      src="/assets/resume/Mauricio_Trevino_Resume.pdf#view=FitH"
      title="Resume PDF viewer"
      loading="lazy"
    ></iframe>
  </div>
</div>
