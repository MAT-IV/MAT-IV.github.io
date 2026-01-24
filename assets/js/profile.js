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
