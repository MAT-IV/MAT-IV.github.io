// Orbiting navigation with central About Me and visible orbit lines

document.addEventListener('DOMContentLoaded', () => {
  const orbitNav = document.querySelector('.orbit-nav');
  const items = Array.from(document.querySelectorAll('.orbit-item'));
  if (!items.length || !orbitNav) return;

  const orbits = [];

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
  document.body.appendChild(orbitCanvas);
  const octx = orbitCanvas.getContext('2d');

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  function resize() {
    orbitCanvas.width = window.innerWidth;
    orbitCanvas.height = window.innerHeight;
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
  }
  window.addEventListener('resize', resize);
  resize();

    // ----- Radius configuration (desktop vs mobile) -----
  function getRadiusConfig() {
    const minDim = Math.min(window.innerWidth, window.innerHeight);

    // Use smaller radii on small screens
    if (minDim <= 600) {
      return {
        baseRadius: 80,   // was 130
        radiusStep: 40    // was 60
      };
    } else if (minDim <= 900) {
      return {
        baseRadius: 110,
        radiusStep: 50
      };
    } else {
      return {
        baseRadius: 130,
        radiusStep: 60;
      };
    }
  }

  let { baseRadius, radiusStep } = getRadiusConfig();

  // Recompute radii on resize as well
  window.addEventListener('resize', () => {
    ({ baseRadius, radiusStep } = getRadiusConfig());
  });

  // Assign radius and speed per orbiting item
  const orbits = [];
  otherItems.forEach((item, index) => {
    const radius = baseRadius + index * radiusStep;
    const periodMs = 14000 + index * 3000;
    const speed = (2 * Math.PI) / periodMs;

    orbits.push({
      element: item,
      radius,
      angleOffset: index * (Math.PI / 3),
      speed
    });
  });


  otherItems.forEach((item, index) => {
    const radius = baseRadius + index * radiusStep;
    const periodMs = 14000 + index * 3000;
    const speed = (2 * Math.PI) / periodMs;

    orbits.push({
      element: item,
      radius,
      angleOffset: index * (Math.PI / 3),
      speed
    });
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
      octx.beginPath();
      octx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2);
      octx.stroke();

      const angle = elapsed * orbit.speed + orbit.angleOffset;
            // Recompute live radius from current baseRadius/radiusStep
      const index = otherItems.indexOf(orbit.element);
      const liveRadius = baseRadius + index * radiusStep;

      const px = centerX + liveRadius * Math.cos(angle);
      const py = centerY + liveRadius * Math.sin(angle);


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
