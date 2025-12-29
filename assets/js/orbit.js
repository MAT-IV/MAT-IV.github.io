// Orbiting navigation with central "About Me" and visible orbit lines

document.addEventListener('DOMContentLoaded', () => {
  const orbitNav = document.querySelector('.orbit-nav');
  const items = Array.from(document.querySelectorAll('.orbit-item'));
  if (!items.length || !orbitNav) return;

  const orbits = [];

  // Identify About Me item as central
  const aboutItem = items[0]; // first link is About Me
  const otherItems = items.slice(1);

  // Create canvas overlay for orbit lines (under labels but above starfield)
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

  // Resize orbit canvas to full window
  function resize() {
    orbitCanvas.width = window.innerWidth;
    orbitCanvas.height = window.innerHeight;
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
  }
  window.addEventListener('resize', resize);
  resize();

  // Assign radius and speed per orbiting item
  const baseRadius = 130;
  const radiusStep = 60;

  otherItems.forEach((item, index) => {
    const radius = baseRadius + index * radiusStep;
    const periodMs = 14000 + index * 3000; // different orbit speeds
    const speed = (2 * Math.PI) / periodMs;

    orbits.push({
      element: item,
      radius,
      angleOffset: index * (Math.PI / 3),
      speed
    });
  });

  // Center the About Me item on the central point
  function positionCenterItem() {
    if (!aboutItem) return;
    const rect = aboutItem.getBoundingClientRect();
    const x = centerX - rect.width / 2;
    const y = centerY - rect.height / 2;
    aboutItem.style.left = `${x}px`;
    aboutItem.style.top = `${y}px`;
  }

  let start = null;

  // Animation loop for orbits
  function animate(now) {
    if (!start) start = now;
    const elapsed = now - start;

    // Clear orbit lines canvas
    octx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);
    octx.strokeStyle = 'rgba(255,255,255,0.25)';
    octx.lineWidth = 1;

    // Draw each orbit and position its item
    orbits.forEach(orbit => {
      // Draw thin orbit line
      octx.beginPath();
      octx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2);
      octx.stroke();

      // Compute planet position on orbit
      const angle = elapsed * orbit.speed + orbit.angleOffset;
      const px = centerX + orbit.radius * Math.cos(angle);
      const py = centerY + orbit.radius * Math.sin(angle);

      const rect = orbit.element.getBoundingClientRect();
      const x = px - rect.width / 2;
      const y = py - rect.height / 2;
      orbit.element.style.left = `${x}px`;
      orbit.element.style.top = `${y}px`;
    });

    // Keep About Me fixed at the center
    positionCenterItem();

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
