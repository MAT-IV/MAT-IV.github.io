// Helper: lock body scroll when overlays/lightboxes are open
function setBodyScrollLocked(locked) {
  if (locked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
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

/* ===== Team overlays (Design Teams page) ===== */
/* New wiring using data-team-key & data-team */
function initTeamOverlays() {
  const overlaySelector = '.team-overlay';
  const openButtons = document.querySelectorAll('.js-team-open');
  const heroImages = document.querySelectorAll('.js-team-hero');
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

  // Buttons in each card
  openButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const teamKey = button.dataset.teamKey;
      if (!teamKey) return;
      openOverlay(teamKey);
    });
  });

  // Hero image click in each card
  heroImages.forEach(img => {
    img.addEventListener('click', () => {
      const teamKey = img.dataset.teamKey;
      if (!teamKey) return;
      openOverlay(teamKey);
    });
  });

  // Close buttons and clicking the dark backdrop
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
}

/* ===== Shared image lightbox (used inside overlays) ===== */
function initImageLightbox() {
  const lightbox = document.querySelector('.image-lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.image-lightbox-img');
  const lightboxCaption = lightbox.querySelector('.image-lightbox-caption');
  const closeBtn = lightbox.querySelector('.image-lightbox-close');

  function openLightbox(src, alt, caption) {
    if (!lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || alt || '';
    }
    lightbox.classList.add('is-visible');
    lightbox.setAttribute('aria-hidden', 'false');
    setBodyScrollLocked(true);
  }

  function closeLightbox() {
    lightbox.classList.remove('is-visible');
    lightbox.setAttribute('aria-hidden', 'true');
    setBodyScrollLocked(false);
  }

  // Any image with .js-lightbox-target opens the lightbox
  document.querySelectorAll('.js-lightbox-target').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation(); // don't trigger overlay backdrop
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt');
      const caption = img.dataset.caption;
      openLightbox(src, alt, caption);
    });
  });

  // Close on X
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
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

// Init team overlays + lightbox after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTeamOverlays();
  initImageLightbox();
});
