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

<script src="{{ '/assets/js/stars.js' | relative_url }}"></script>
<script src="{{ '/assets/js/orbit.js' | relative_url }}"></script>
<script src="{{ '/assets/js/bigbang.js' | relative_url }}"></script>
<script src="{{ '/assets/js/profile.js' | relative_url }}"></script>
<script src="{{ '/assets/js/teams.js' | relative_url }}"></script>
