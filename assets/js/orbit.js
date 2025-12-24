document.addEventListener('DOMContentLoaded', () => {
  const orbitItems = document.querySelectorAll('.orbit-item');
  const radius = 180; // orbit radius
  const speed = 0.002; // radians/ms
  let start = null;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  function animateOrbit(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;

    orbitItems.forEach((item, index) => {
      const angle = elapsed * speed + (index * (2 * Math.PI / orbitItems.length));
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
    });

    requestAnimationFrame(animateOrbit);
  }

  animateOrbit();

  // Optional: recalc center on resize
  window.addEventListener('resize', () => {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
  });
});
