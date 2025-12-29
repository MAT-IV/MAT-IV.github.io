// In a new file assets/js/bigbang.js (and include it after stars.js and orbit.js)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('bigbang-toggle');
  if (!toggle) return;

  let bigBangActive = false;

  toggle.addEventListener('change', () => {
    if (toggle.checked && !bigBangActive) {
      bigBangActive = true;
      startBigBangSequence(() => {
        // After sequence finishes, you can keep Big Bang orbits enabled
      });
    } else if (!toggle.checked && bigBangActive) {
      bigBangActive = false;
      // Optional: reset to normal mode
      resetToNormalMode();
    }
  });
});
