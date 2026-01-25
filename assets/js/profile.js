// Click-to-expand profile photo in a centered overlay
document.addEventListener('DOMContentLoaded', () => {
  const thumb = document.getElementById('profile-photo');
  const overlay = document.getElementById('profile-overlay');

  if (thumb && overlay) {
    thumb.addEventListener('click', () => {
      overlay.classList.add('is-visible');
    });

    overlay.addEventListener('click', () => {
      overlay.classList.remove('is-visible');
    });
  }
});

// Helper: set flag to skip Big Bang intro, then go home
window.skipBigBangAndGoHome = function (event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  try {
    sessionStorage.setItem('skipBigBang', 'true');
  } catch (e) {
    // ignore storage issues
  }
  window.location.href = '/';
};


// Formula image -> open details overlay on Teams page
document.addEventListener('DOMContentLoaded', () => {
  const formulaImg = document.querySelector('.team-image-formula');
  const formulaOverlay = document.getElementById('formula-overlay');
  if (!formulaImg || !formulaOverlay) return;

  const closeBtn = formulaOverlay.querySelector('.team-overlay-close');

  // Open overlay on click
  formulaImg.addEventListener('click', () => {
    formulaOverlay.classList.add('is-visible');
  });

  // Close overlay on close button
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      formulaOverlay.classList.remove('is-visible');
    });
  }

  // Close overlay when clicking the dark background
  formulaOverlay.addEventListener('click', (e) => {
    if (e.target === formulaOverlay) {
      formulaOverlay.classList.remove('is-visible');
    }
  });
});

// Lightbox for Development images inside Formula popup
document.addEventListener('DOMContentLoaded', () => {
  const formulaOverlay = document.getElementById('formula-overlay');
  if (!formulaOverlay) return;

  const gallery = formulaOverlay.querySelector('.project-gallery');
  const lightbox = document.getElementById('formula-image-lightbox');
  if (!gallery || !lightbox) return;

  const lightboxImg = lightbox.querySelector('.image-lightbox-img');
  const lightboxCaption = lightbox.querySelector('.image-lightbox-caption');
  const lightboxClose = lightbox.querySelector('.image-lightbox-close');

  // Open lightbox when a gallery image is clicked
  gallery.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLImageElement)) return;

    lightboxImg.src = target.src;
    lightboxImg.alt = target.alt;
    lightboxCaption.textContent = target.alt;

    lightbox.classList.add('is-visible');
  });

  // Close on X
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('is-visible');
  });

  // Close when clicking the dark background
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('is-visible');
    }
  });
});
