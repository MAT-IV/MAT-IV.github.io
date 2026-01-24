// Click-to-expand profile photo in a centered overlay

document.addEventListener('DOMContentLoaded', () => {
  const thumb = document.getElementById('profile-photo');
  const overlay = document.getElementById('profile-overlay');

  if (!thumb || !overlay) return;

  // Open overlay on click of the small photo
  thumb.addEventListener('click', () => {
    overlay.classList.add('is-visible');
  });

  // Close overlay when clicking anywhere on it
  overlay.addEventListener('click', () => {
    overlay.classList.remove('is-visible');
  });
});

// Helper: set flag to skip Big Bang intro, then go home
window.skipBigBangAndGoHome = function (event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  try {
    sessionStorage.setItem('skipBigBang', 'true');
  } catch (e) {
    // ignore storage issues, just navigate
  }
  window.location.href = '/';
};
