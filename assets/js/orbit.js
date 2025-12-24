const orbitItems = document.querySelectorAll('.orbit-item');
const radius = 180; // distance from center
const speed = 0.002; // radians per ms
let start = null;

function animateOrbit(timestamp) {
  if (!start) start = timestamp;
  const elapsed = timestamp - start;

  orbitItems.forEach((item, index) => {
    const angle = elapsed * speed + (index * (2 * Math.PI / orbitItems.length));
    const x = window.innerWidth/2 + radius * Math.cos(angle);
    const y = window.innerHeight/2 + radius * Math.sin(angle);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
  });

  requestAnimationFrame(animateOrbit);
}

animateOrbit();
