// Simple circular orbits for all menu items

document.addEventListener('DOMContentLoaded', () => {
  const items = Array.from(document.querySelectorAll('.orbit-item'));
  if (!items.length) return;

  // First item is central (About Me)
  const centerItem = items[0];
  const orbitingItems = items.slice(1);

  // Position center item once per frame
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  const bodies = orbitingItems.map((el, index) => {
    return {
      element: el,
      angle: (index / orbitingItems.length) * Math.PI * 2, // spread around circle
      speed: 0.00006 + index * 0.00001,                    // slightly different speeds
      radiusBase: 200,
      radius: 200
    };
  });

  function resize() {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;

    const minDim = Math.min(window.innerWidth, window.innerHeight);
    const baseRadius = minDim * 0.28;   // distance for first orbiting item
    const step = minDim * 0.06;         // step between items

    bodies.forEach((body, i) => {
      body.radiusBase = baseRadius + i * step;
      body.radius = body.radiusBase;
    });
  }

  window.addEventListener('resize', resize);
  resize();

  function positionCenter() {
    if (!centerItem) return;
    const rect = centerItem.getBoundingClientRect();
    const x = centerX - rect.width / 2;
    const y = centerY - rect.height / 2;
    centerItem.style.left = `${x}px`;
    centerItem.style.top = `${y}px`;
  }

  let lastTime = null;

  function animate(now) {
    if (lastTime === null) lastTime = now;
    const dt = now - lastTime;
    lastTime = now;

    // Update angles
    bodies.forEach(body => {
      body.angle += body.speed * dt;
      const twoPi = Math.PI * 2;
      if (body.angle > twoPi) body.angle -= twoPi;
      if (body.angle < 0) body.angle += twoPi;
    });

    // Position each orbiting item
    bodies.forEach(body => {
      const x = centerX + body.radius * Math.cos(body.angle);
      const y = centerY + body.radius * Math.sin(body.angle);
      const rect = body.element.getBoundingClientRect();
      body.element.style.position = 'fixed';
      body.element.style.left = `${x - rect.width / 2}px`;
      body.element.style.top = `${y - rect.height / 2}px`;
      body.element.style.zIndex = '5';
    });

    positionCenter();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
