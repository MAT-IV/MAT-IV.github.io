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

  // Set up orbits with varied speeds and stronger phase offsets
  const orbits = otherItems.map((item, index) => {
    const radius = baseRadiusDefault + index * radiusStepDefault;

    // Base period and a bit of randomness so they don't sync perfectly
    const basePeriodMs = 14000;
    const periodJitter = 2500 * (Math.random() - 0.5); // ±1.25s
    const periodMs = basePeriodMs + index * 3000 + periodJitter;

    const speed = (2 * Math.PI) / periodMs;

    // Stagger angles so items are spaced around the circle
    const angleOffset = index * (2 * Math.PI / otherItems.length);

    return {
      element: item,
      radius,
      angleOffset,
      speed,
      angle: 0
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

  let lastTime = null;

  function animate(now) {
    if (lastTime === null) lastTime = now;
    const dt = now - lastTime;
    lastTime = now;

    octx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);
    octx.strokeStyle = 'rgba(255,255,255,0.25)';
    octx.lineWidth = 1;

    // Update angles and positions
    orbits.forEach(orbit => {
      orbit.angle = now * orbit.speed + orbit.angleOffset;

      const px = centerX + orbit.radius * Math.cos(orbit.angle);
      const py = centerY + orbit.radius * Math.sin(orbit.angle);

      orbit.posX = px;
      orbit.posY = py;
    });

    // Simple anti-overlap: if two projected positions are very close,
    // nudge their angles apart a bit.
    const minDistance = 70; // pixels between centers
    for (let i = 0; i < orbits.length; i++) {
      for (let j = i + 1; j < orbits.length; j++) {
        const a = orbits[i];
        const b = orbits[j];

        const dx = a.posX - b.posX;
        const dy = a.posY - b.posY;
        const dist = Math.hypot(dx, dy) || 1;

        if (dist < minDistance) {
          const push = (minDistance - dist) / minDistance;

          // Nudge their angles in opposite directions
          const nudge = 0.002 * push; // small step so it still feels organic
          a.angle += nudge;
          b.angle -= nudge;

          // Recompute positions after the nudge
          a.posX = centerX + a.radius * Math.cos(a.angle);
          a.posY = centerY + a.radius * Math.sin(a.angle);
          b.posX = centerX + b.radius * Math.cos(b.angle);
          b.posY = centerY + b.radius * Math.sin(b.angle);
        }
      }
    }

    // Draw orbits and place elements
    orbits.forEach(orbit => {
      // Draw orbit line
      octx.beginPath();
      octx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2);
      octx.stroke();

      const rect = orbit.element.getBoundingClientRect();
      const x = orbit.posX - rect.width / 2;
      const y = orbit.posY - rect.height / 2;
      orbit.element.style.left = `${x}px`;
      orbit.element.style.top = `${y}px`;
    });

    positionCenterItem();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
