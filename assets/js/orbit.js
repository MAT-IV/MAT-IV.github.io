document.addEventListener('DOMContentLoaded', () => {
  const orbitItems = document.querySelectorAll('.orbit-item');
  if (!orbitItems.length) return;

  const radius = 180;      // orbit radius in px
  const speed = 0.002;     // radians per ms
  let start = null;

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  function updateCenter() {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
  }

  function animateOrbit(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;

    orbitItems.forEach((item, index) => {
      const angle = elapsed * speed + (index * (2 * Math.PI / orbitItems.length));

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // Position the item so its center sits on the orbit
      const rect = item.getBoundingClientRect();
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;

      item.style.left = `${x - halfW}px`;
      item.style.top = `${y - halfH}px`;
    });

    requestAnimationFrame(animateOrbit);
  }

  updateCenter();
  requestAnimationFrame(animateOrbit);

  window.addEventListener('resize', () => {
    updateCenter();
  });
});
