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


// Generic helper to wire a card image to an overlay
function attachTeamOverlay(triggerSelector, overlayId) {
  const trigger = document.querySelector(triggerSelector);
  const overlay = document.getElementById(overlayId);
  if (!trigger || !overlay) return;

  const closeBtn = overlay.querySelector('.team-overlay-close');

  // Open overlay on card image click
  trigger.addEventListener('click', () => {
    overlay.classList.add('is-visible');
  });

  // Close on X
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('is-visible');
    });
  }

  // Close when clicking the dark background
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('is-visible');
    }
  });
}

// Wire up all team overlays
document.addEventListener('DOMContentLoaded', () => {
  attachTeamOverlay('.team-image-formula', 'formula-overlay');
  attachTeamOverlay('.team-image-aero-23-24', 'aero-23-24-overlay');
  attachTeamOverlay('.team-image-aero-22-23', 'aero-22-23-overlay');
  attachTeamOverlay('.team-image-aero-21-22', 'aero-21-22-overlay');
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
