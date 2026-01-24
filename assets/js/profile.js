// Click-to-expand profile photo

document.addEventListener('DOMContentLoaded', () => {
  const profile = document.getElementById('profile-photo');
  if (!profile) return;

  profile.addEventListener('click', () => {
    profile.classList.toggle('expanded');
  });
});
