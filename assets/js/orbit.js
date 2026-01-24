// Orbiting navigation with central About Me, with varied speeds and radial wobble

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

  // Set up orbits: slower inner orbits, faster outer orbits
  const count = otherItems.length;
  const orbits = otherItems.map((item, index) => {
    const radius = baseRadiusDefault + index * radiusStepDefault;

    // Speed scaling: inner = slower, outer = faster
    // scale factor from ~0.6 for inner to ~1.4 for outer
    const t = (index + 1) / (count + 1);
    const speedScale = 0.6 + t * 0.8;

    const basePeriodMs = 14000;
    const periodMs = basePeriodMs / speedScale;

    const speed = (2 * Math.PI) / periodMs;

    // Start angles spaced around the circle
    const angleOffset = index * (2 * Math.PI / count);

    // Each orbit gets its own radial wobble phase and amplitude
    const wobblePhase = Math.random() * Math.PI * 2;
    const wobbleAmplitude = 6 + Math.random() * 8; // 6–14px

    return {
      element: item,
      baseRadius: radius,
      radius: radius,
      speed,
      angle: angleOffset,
      wobblePhase,
      wobbleAmplitude,
      posX: 0,
      posY: 0
    };
  });

  function resize() {
    orbitCanvas.width = window.innerWidth;
    orbitCanvas.height = window.innerHeight;
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;

    const minDim = Math.min(window.innerWidth, window.innerHeight);
    const baseRadius = minDim * 0.22;
    const radiusStep = minDim * 0.12;
    const maxRadius = minDim * 0.45;

    orbits.forEach((orbit, index) => {
      const r = baseRadius + index * radiusStep;
      orbit.baseRadius = Math.min(r, maxRadius);
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

  // Emergency-only soft separation: only acts when items are very close
  function emergencySeparate() {
    const minDistance = 64;   // desired minimum distance between centers
    const maxNudge = 0.002;   // smaller than before to preserve orbit feel

    for (let i = 0; i < orbits.length; i++) {
      for (let j = i + 1; j < orbits.length; j++) {
        const a = orbits[i];
        const b = orbits[j];

        const dx = a.posX - b.posX;
        const dy = a.posY - b.posY;
        const dist = Math.hypot(dx, dy) || 1;

        if (dist < minDistance) {
          const overlap = (minDistance - dist) / minDistance; // 0–1
          const nudge = maxNudge * overlap;

          const angleDiff = ((b.angle - a.angle) + Math.PI * 2) % (Math.PI * 2);

          if (angleDiff < Math.PI) {
            b.angle += nudge;
            a.angle -= nudge;
          } else {
            a.angle += nudge;
            b.angle -= nudge;
          }
        }
      }
    }
  }

  let lastTime = null;

  function animate(now) {
    if (lastTime === null) lastTime = now;
    const dt = now - lastTime;
    lastTime = now;

    octx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);
    octx.strokeStyle = 'rgba(255,255,255,0.25)';
    octx.lineWidth = 1;

    // Update angles
    orbits.forEach(orbit => {
      orbit.angle += orbit.speed * dt;
      if (orbit.angle > Math.PI * 2) orbit.angle -= Math.PI * 2;
      if (orbit.angle < 0) orbit.angle += Math.PI * 2;
    });

    // Radial wobble based on time
    const time = now * 0.001; // seconds
    orbits.forEach(orbit => {
      const wobble = Math.sin(time + orbit.wobblePhase) * orbit.wobbleAmplitude;
      orbit.radius = orbit.baseRadius + wobble;
    });

    // First positions
    orbits.forEach(orbit => {
      orbit.posX = centerX + orbit.radius * Math.cos(orbit.angle);
      orbit.posY = centerY + orbit.radius * Math.sin(orbit.angle);
    });

    // Emergency separation if they get too close
    emergencySeparate();

    // Recompute positions after nudges
    orbits.forEach(orbit => {
      orbit.posX = centerX + orbit.radius * Math.cos(orbit.angle);
      orbit.posY = centerY + orbit.radius * Math.sin(orbit.angle);
    });

    // Draw orbits and place elements
    orbits.forEach(orbit => {
      octx.beginPath();
      octx.arc(centerX, centerY, orbit.baseRadius, 0, Math.PI * 2);
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
