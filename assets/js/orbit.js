// Minimal circular orbits for all menu items (no getBoundingClientRect)

document.addEventListener('DOMContentLoaded', () => {
  const items = Array.from(document.querySelectorAll('.orbit-item'));
  if (!items.length) return;

  // First item is central (About)
  const centerItem = items[0];
  const orbitingItems = items.slice(1);

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

    const bodies = orbitingItems.map((el, index) => {
    const startAngle = (index / orbitingItems.length) * Math.PI * 2;
    return {
      element: el,
      angle: startAngle,
      initialAngle: startAngle,
      speed: 0.00006 + index * 0.00001,
      radius: 200
    };
  });

// Allow Big Bang to reset orbits back to their original starting angles
  window.resetOrbitsToInitial = function () {
    bodies.forEach(body => {
      body.angle = body.initialAngle;
    });
  };


  function resize() {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;

    const minDim = Math.min(window.innerWidth, window.innerHeight);
    const baseRadius = minDim * 0.25;
    const step = minDim * 0.06;
    const maxRadius = minDim * 0.42;

    bodies.forEach((body, i) => {
      const r = Math.min(baseRadius + i * step, maxRadius);
      body.radius = r;
    });
  }

  window.addEventListener('resize', resize);
  resize();

  function positionCenter() {
    if (!centerItem) return;
    centerItem.style.position = 'fixed';
    centerItem.style.left = '50%';
    centerItem.style.top = '50%';
    centerItem.style.transform = 'translate(-50%, -50%)';
  }

  let lastTime = null;

  function animate(now) {
    if (lastTime === null) lastTime = now;
    const dt = now - lastTime;
    lastTime = now;

    bodies.forEach(body => {
      body.angle += body.speed * dt;
      const twoPi = Math.PI * 2;
      if (body.angle > twoPi) body.angle -= twoPi;
      if (body.angle < 0) body.angle += twoPi;

      const x = centerX + body.radius * Math.cos(body.angle);
      const y = centerY + body.radius * Math.sin(body.angle);

      body.element.style.position = 'fixed';
      body.element.style.left = `${x}px`;
      body.element.style.top = `${y}px`;
      body.element.style.transform = 'translate(-50%, -50%)';
      body.element.style.zIndex = '5';
    });

    positionCenter();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
