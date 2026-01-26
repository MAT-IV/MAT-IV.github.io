// Helper: lock body scroll when overlays/lightboxes are open
function setBodyScrollLocked(locked) {
  document.body.style.overflow = locked ? 'hidden' : '';
}

// Click-to-expand profile photo in a centered overlay
document.addEventListener('DOMContentLoaded', () => {
  const thumb = document.getElementById('profile-photo');
  const overlay = document.getElementById('profile-overlay');

  if (thumb && overlay) {
    thumb.addEventListener('click', () => {
      overlay.classList.add('is-visible');
      setBodyScrollLocked(true);
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('is-visible');
        setBodyScrollLocked(false);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
        overlay.classList.remove('is-visible');
        setBodyScrollLocked(false);
      }
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

// NEW: generic team overlay wiring using data-team-key / data-team
function initTeamOverlays() {
  const overlaySelector = '.team-overlay';
  const overlays = document.querySelectorAll(overlaySelector);

  function openOverlay(teamKey) {
    const overlay = document.querySelector(`${overlaySelector}[data-team="${teamKey}"]`);
    if (!overlay) return;
    overlay.classList.add('is-visible');
    setBodyScrollLocked(true);
  }

  function closeOverlay(overlay) {
    overlay.classList.remove('is-visible');
    setBodyScrollLocked(false);
  }

  // Card hero images – open overlay, NOT lightbox
  document.querySelectorAll('.team-image').forEach(img => {
    const teamKey = img.dataset.teamKey;
    if (!teamKey) return;
    img.addEventListener('click', () => {
      openOverlay(teamKey);
    });
  });

  // Close buttons + backdrop
  overlays.forEach(overlay => {
    const closeBtn = overlay.querySelector('.team-overlay-close');

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeOverlay(overlay);
      });
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeOverlay(overlay);
      }
    });
  });

  // ESC key closes whichever overlay is open
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(overlay => {
        if (overlay.classList.contains('is-visible')) {
          closeOverlay(overlay);
        }
      });
    }
  });
}

// Shared lightbox for all development images in any project-gallery
function initImageLightbox() {
  // If you keep the old id, change this to 'formula-image-lightbox'
  const lightbox = document.getElementById('image-lightbox') || document.getElementById('formula-image-lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.image-lightbox-img');
  const lightboxCaption = lightbox.querySelector('.image-lightbox-caption');
  const lightboxClose = lightbox.querySelector('.image-lightbox-close');

  function openLightboxFromImage(img) {
    if (!lightboxImg) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    if (lightboxCaption) {
      lightboxCaption.textContent = img.dataset.caption || img.alt || '';
    }
    lightbox.classList.add('is-visible');
    setBodyScrollLocked(true);
  }

  function closeLightbox() {
    lightbox.classList.remove('is-visible');
    setBodyScrollLocked(false);
  }

  // Attach click handler to every dev image that should open the lightbox
  document.querySelectorAll('.project-gallery .js-lightbox-target').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation(); // don't close the team overlay beneath
      openLightboxFromImage(img);
    });
  });

  // Close on X
  if (lightboxClose) {
    lightboxClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  // Close when clicking the dark background
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-visible')) {
      closeLightbox();
    }
  });
}

// Wire up all team overlays + lightbox
document.addEventListener('DOMContentLoaded', () => {
  initTeamOverlays();
  initImageLightbox();
});

function openOverlayFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  // Find a team image with matching data-team-key
  const img = document.querySelector(`.team-image[data-team-key="${hash}"]`);
  if (!img) return;

  // Slight delay to ensure overlays are initialized
  setTimeout(() => {
    img.click();
  }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
  initTeamOverlays();
  initImageLightbox();
  openOverlayFromHash();
});

