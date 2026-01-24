// Orbiting navigation with central About Me and responsive orbit radii

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

  // Initial base values (will be recalculated responsively in resize())
  const baseRadiusDefault = 130;
  const radiusStepDefault = 60;

  const orbits = otherItems.map((item, index) => {
    const radius = baseRadiusDefault + index * radiusStepDefault;
    const periodMs = 14000 + index * 3000;
    const speed = (2 * Math.PI) / periodMs;
    return {
      element: item,
      radius,
      angleOffset: index * (Math.PI / 3),
      speed
    };
  });

  function resize() {
    orbitCanvas.width = window.innerWidth;
    orbitCanvas.height = window.innerHeight;
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;

    // Responsive radii: based on smaller viewport dimension
    const minDim = Math.min(window.innerWidth, window.innerHeight);
    const baseRadius = minDim * 0.22;   // ~22% of smaller side
    const radiusStep = minDim * 0.12;   // ~12% step between orbits
    const maxRadius = minDim * 0.45;    // clamp to keep items on-screen

    orbits.forEach((orbit, index) => {
      const r = baseRadius + index * radiusStep;
      orbit.radius = Math.min(r, maxRadius);
    });
  }

  window.addEventListener('resize', resize);
  resize();

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
      // Draw orbit line
      octx.beginPath();
      octx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2);
      octx.stroke();

      // Position item on orbit
      const angle = elapsed * orbit.speed + orbit.angleOffset;
      const px = centerX + orbit.radius * Math.cos(angle);
      const py = centerY + orbit.radius * Math.sin(angle);

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
