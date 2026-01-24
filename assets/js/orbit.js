// Orbiting navigation with central About Me and responsive, phase-locked orbits

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

  // Helper: pair indices to lock phases (0 with last, 1 with next, etc.)
  function buildPairs(count) {
    const pairs = [];
    for (let i = 0; i < count; i++) {
      const j = (i + Math.floor(count / 2)) % count;
      if (i < j) pairs.push([i, j]);
    }
    return pairs;
  }

  // Initial base values (will be recalculated responsively in resize())
  const baseRadiusDefault = 130;
  const radiusStepDefault = 60;

  const count = otherItems.length;
  const pairs = buildPairs(count); // e.g., for 4: [0,2] and [1,3]

  // Set up orbits: same angular speed inside a pair, strong phase offset between pairs
  const orbits = otherItems.map((item, index) => {
    const radius = baseRadiusDefault + index * radiusStepDefault;

    // Base period per pair, plus slight jitter per item to keep it organic
    const pairIndex = pairs.findIndex(p => p.includes(index));
    const basePeriodMs = 12000 + (pairIndex >= 0 ? pairIndex * 3000 : 0);
    const periodJitter = 1500 * (Math.random() - 0.5); // ±0.75s
    const periodMs = basePeriodMs + periodJitter;

    const speed = (2 * Math.PI) / periodMs;

    // Phase: pairs are separated by 90° or 180° depending on how many pairs exist
    const totalPairs = pairs.length || 1;
    const phaseBetweenPairs = (2 * Math.PI) / totalPairs;

    let basePhase = 0;
    if (pairIndex >= 0) {
      basePhase = pairIndex * phaseBetweenPairs;
    }

    // Within the pair, offset the second member by half a turn so they never stack
    let intraPairPhase = 0;
    if (pairIndex >= 0) {
      const [a, b] = pairs[pairIndex];
      if (index === b) intraPairPhase = Math.PI;
    }

    const angleOffset = basePhase + intraPairPhase;

    return {
      element: item,
      radius,
      speed,
      angleOffset,
      angle: 0,
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

  function animate(now) {
    octx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);
    octx.strokeStyle = 'rgba(255,255,255,0.25)';
    octx.lineWidth = 1;

    // Update angles and positions
    orbits.forEach(orbit => {
      // All items keep their own speed, but pairs share similar speed by construction
      orbit.angle = now * orbit.speed + orbit.angleOffset;

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
