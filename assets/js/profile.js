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
