// Orbiting navigation with central About Me and non-overlapping orbits

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

  // Set up orbits with slightly different speeds and initial angles
  const orbits = otherItems.map((item, index) => {
    const radius = baseRadiusDefault + index * radiusStepDefault;

    const basePeriodMs = 14000;
    const periodJitter = 2000 * (Math.random() - 0.5); // ±1s
    const periodMs = basePeriodMs + index * 2500 + periodJitter;

    const speed = (2 * Math.PI) / periodMs;

    // Start angles spaced around the circle
    const angleOffset = index * (2 * Math.PI / otherItems.length);

    return {
      element: item,
      radius,
      speed,
      angle: angleOffset,
      angleBaseOffset: angleOffset,
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

  // Ensure a minimum angular separation between any two items each frame
  function enforceAngularSeparation() {
    if (orbits.length < 2) return;

    const minAngleSep = (Math.PI / 6); // 30 degrees

    // Sort by current angle for stable adjustment
    const sorted = [...orbits].sort((a, b) => a.angle - b.angle);

    for (let i = 0; i < sorted.length; i++) {
      const current = sorted[i];
      const next = sorted[(i + 1) % sorted.length];

      let diff = next.angle - current.angle;
      if (diff <= 0) diff += 2 * Math.PI;

      if (diff < minAngleSep) {
        const needed = minAngleSep - diff;
        // Push the "next" item forward a bit
        next.angle += needed;
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

    // Update angles according to speed
    orbits.forEach(orbit => {
      orbit.angle += orbit.speed * dt;
      // Keep angle within 0–2π
      if (orbit.angle > Math.PI * 2) orbit.angle -= Math.PI * 2;
      if (orbit.angle < 0) orbit.angle += Math.PI * 2;
    });

    // Enforce separation in angle space
    enforceAngularSeparation();

    // Compute positions
    orbits.forEach(orbit => {
      const px = centerX + orbit.radius * Math.cos(orbit.angle);
      const py = centerY + orbit.radius * Math.sin(orbit.angle);

      orbit.posX = px;
      orbit.posY = py;
    });

    // Draw orbits and place elements
    orbits.forEach(orbit => {
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
