// Locked orbit navigation:
// - Professional Experience & Hobby Builds share one orbit, 180° apart
// - Design Teams & Maker Portfolio share another orbit, 180° apart
// - Resume has its own orbit and can overlap but is always on top

document.addEventListener('DOMContentLoaded', () => {
  const orbitNav = document.querySelector('.orbit-nav');
  const items = Array.from(document.querySelectorAll('.orbit-item'));
  if (!items.length || !orbitNav) return;

  // First item is central (About Me)
  const aboutItem = items[0];
  const otherItems = items.slice(1); // [Resume, Experience, Teams, Projects/Hobby, Maker]

  // Safety check
  if (otherItems.length < 5) {
    console.warn('Expected at least 5 orbit items after About.');
  }

  // Map specific roles by index in otherItems
  const resumeItem         = otherItems[0]; // Resume
  const experienceItem     = otherItems[1]; // Professional Experience
  const teamsItem          = otherItems[2]; // Design Teams
  const hobbyItem          = otherItems[3]; // Hobby Builds
  const makerItem          = otherItems[4]; // Maker Portfolio

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

  // Orbits configuration object
  const orbits = [
    {
      name: 'resume',
      element: resumeItem,
      baseRadius: 150,   // will be scaled in resize()
      radius: 150,
      speed: 0.00013,    // radians per ms (independent)
      angle: Math.random() * Math.PI * 2
    },
    {
      name: 'innerA',
      element: experienceItem,
      baseRadius: 220,
      radius: 220,
      // Inner pair shares base speed
      speed: 0.00008,
      angleOffset: 0,    // will be driven by shared angle
      angle: 0
    },
    {
      name: 'innerB',
      element: hobbyItem,
      baseRadius: 220,
      radius: 220,
      speed: 0.00008,
      angleOffset: Math.PI, // 180° apart from innerA
      angle: Math.PI
    },
    {
      name: 'outerA',
      element: teamsItem,
      baseRadius: 300,
      radius: 300,
      // Outer pair shares base speed (slightly different to inner for natural feel)
      speed: 0.00006,
      angleOffset: 0.5,  // some offset from inner pair
      angle: 0.5
    },
    {
      name: 'outerB',
      element: makerItem,
      baseRadius: 300,
      radius: 300,
      speed: 0.00006,
      angleOffset: Math.PI + 0.5, // 180° from outerA
      angle: Math.PI + 0.5
    }
  ];

  // Responsive radii based on viewport
  function resize() {
    orbitCanvas.width = window.innerWidth;
    orbitCanvas.height = window.innerHeight;
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;

    const minDim = Math.min(window.innerWidth, window.innerHeight);

    const resumeRadius = minDim * 0.22;
    const innerRadius  = minDim * 0.30;
    const outerRadius  = minDim * 0.40;

    orbits.forEach(orbit => {
      if (orbit.name === 'resume') {
        orbit.baseRadius = resumeRadius;
      } else if (orbit.name === 'innerA' || orbit.name === 'innerB') {
        orbit.baseRadius = innerRadius;
      } else if (orbit.name === 'outerA' || orbit.name === 'outerB') {
        orbit.baseRadius = outerRadius;
      }
      orbit.radius = orbit.baseRadius;
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

    // Shared angles for locked pairs
    let innerSharedAngle = 0;
    let outerSharedAngle = 0;

    // First pass: update angles
    orbits.forEach(orbit => {
      if (orbit.name === 'resume') {
        // Resume moves independently
        orbit.angle += orbit.speed * dt;
      } else if (orbit.name === 'innerA') {
        // Compute shared inner angle once
        innerSharedAngle += orbit.speed * dt;
        orbit.angle = innerSharedAngle + (orbit.angleOffset || 0);
      } else if (orbit.name === 'innerB') {
        orbit.angle = innerSharedAngle + (orbit.angleOffset || 0);
      } else if (orbit.name === 'outerA') {
        // Compute shared outer angle once
        outerSharedAngle += orbit.speed * dt;
        orbit.angle = outerSharedAngle + (orbit.angleOffset || 0);
      } else if (orbit.name === 'outerB') {
        orbit.angle = outerSharedAngle + (orbit.angleOffset || 0);
      }

      // Keep within 0–2π
      if (orbit.angle > Math.PI * 2) orbit.angle -= Math.PI * 2;
      if (orbit.angle < 0) orbit.angle += Math.PI * 2;

      // Radius currently fixed at baseRadius; you can add tiny wobble here later if desired
      orbit.radius = orbit.baseRadius;
    });

    // Draw orbit lines
    const drawnRadii = new Set();
    orbits.forEach(orbit => {
      if (!drawnRadii.has(orbit.baseRadius)) {
        drawnRadii.add(orbit.baseRadius);
        octx.beginPath();
        octx.arc(centerX, centerY, orbit.baseRadius, 0, Math.PI * 2);
        octx.stroke();
      }
    });

    // Compute positions
    orbits.forEach(orbit => {
      const x = centerX + orbit.radius * Math.cos(orbit.angle);
      const y = centerY + orbit.radius * Math.sin(orbit.angle);
      orbit.posX = x;
      orbit.posY = y;
    });

    // Place elements
    orbits.forEach(orbit => {
      if (!orbit.element) return;
      const rect = orbit.element.getBoundingClientRect();
      const x = orbit.posX - rect.width / 2;
      const y = orbit.posY - rect.height / 2;
      orbit.element.style.position = 'fixed';
      orbit.element.style.left = `${x}px`;
      orbit.element.style.top = `${y}px`;

      // z-index: resume always on top if overlaps happen
      if (orbit.name === 'resume') {
        orbit.element.style.zIndex = '10';
      } else {
        orbit.element.style.zIndex = '5';
      }
    });

    positionCenterItem();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
