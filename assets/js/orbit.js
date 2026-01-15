// Orbiting navigation with central About Me and visible orbit lines

document.addEventListener('DOMContentLoaded', () => {
  const orbitNav = document.querySelector('.orbit-nav');
  const items = Array.from(document.querySelectorAll('.orbit-item'));
  if (!items.length || !orbitNav) return;

  // First item is central (About Me)
  const aboutItem = items[0];
  const otherItems = items.slice(1);

  // Canvas for orbit lines
  const orbitCanvas = document.createElement('canvas');
  orbitCanvas.id = 'orbit-lines';
  orbitCanvas.style.position = 'fixed';
  orbitCanvas.style.inset = '0';
  orbitCanvas.style.zIndex = '2';
  orbitCanvas.style.pointerEvents = 'none';
  orbitCanvas.style.display = 'none'; // Big Bang will turn this on
  document.body.appendChild(orbitCanvas);
  const octx = orbitCanvas.getContext('2d');

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  // Compute radius config based on viewport size
  function getRadiusConfig() {
    const minDim = Math.min(window.innerWidth, window.innerHeight);

    if (minDim <= 600) {
      // Small phones
      return { baseRadius: 80, radiusStep: 40 };
    } else if (minDim <= 900) {
      // Large phones / small tablets
      return { baseRadius: 110, radiusStep: 50 };
    } else {
      // Desktop
      return { baseRadius: 130, radiusStep: 60 };
    }
  }

  let { baseRadius, radiusStep } = getRadiusConfig();

  // Resize handler: update canvas size, center, and radius config
  function resize() {
    orbitCanvas.width = window.innerWidth;
    orbitCanvas.height = window.innerHeight;
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;

    ({ baseRadius, radiusStep } = getRadiusConfig());
  }
  window.addEventListener('resize', resize);
  resize();

  // Build orbit objects ONCE; we will recompute live radius per frame
  const orbits = otherItems.map((item, index) => {
    const periodMs = 14000 + index * 3000;
    const speed = (2 * Math.PI) / periodMs;
    return {
      element: item,
      index,
      angleOffset: index * (Math.PI / 3),
      speed
    };
  });

  function positionCenterItem() {
    if (!aboutItem) return;
    const rect = aboutItem.getBoundingClientRect();
    const x = centerX - rect.width / 2;
    const y = centerY - rect.height / 2;
    aboutItem.style.left = `${x}px`;
    aboutItem.style.top = `${y}px`;
  }

  let start = null;

  function animate(now) {
    if (!start) start = now;
    const elapsed = now - start;

    octx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);
    octx.strokeStyle = 'rgba(255,255,255,0.25)';
    octx.lineWidth = 1;

    orbits.forEach(orbit => {
      // Live radius for this item based on current viewport size
      const radius = baseRadius + orbit.index * radiusStep;

      // Draw orbit line
      octx.beginPath();
      octx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      octx.stroke();

      // Position item on orbit
      const angle = elapsed * orbit.speed + orbit.angleOffset;
      const px = centerX + radius * Math.cos(angle);
      const py = centerY + radius * Math.sin(angle);

      const rect = orbit.element.getBoundingClientRect();
      const x = px - rect.width / 2;
      const y = py - rect.height / 2;
      orbit.element.style.left = `${x}px`;
      orbit.element.style.top = `${y}px`;
    });

    positionCenterItem();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
