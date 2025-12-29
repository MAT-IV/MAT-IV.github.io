document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('bigbang-toggle');
  const orbitNav = document.querySelector('.orbit-nav');
  const orbitLinesCanvas = document.getElementById('orbit-lines'); // created in orbit.js if you kept that

  if (!toggle) return;

  let bigBangActive = false;

  toggle.addEventListener('change', () => {
    if (toggle.checked && !bigBangActive) {
      bigBangActive = true;

      // Hide current nav/orbits
      if (orbitNav) orbitNav.style.visibility = 'hidden';
      if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'hidden';

      startBigBangSequence(() => {
        // After sequence finishes, show the new orbit layout
        if (orbitNav) orbitNav.style.visibility = 'visible';
        if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';
      });
    } else if (!toggle.checked && bigBangActive) {
      bigBangActive = false;
      resetToNormalMode(); // whatever you do here
      if (orbitNav) orbitNav.style.visibility = 'visible';
      if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';
    }
  });
});



function startBigBangSequence(onComplete) {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const W = canvas.width;
  const H = canvas.height;
  const centerX = W / 2;
  const centerY = H / 2;

  let phase = "fadeInText";
  let phaseStart = performance.now();
  const text = "Welcome to my personal portfolio.";
  let textIndex = 0;

  const particles = [];
  const TARGET_CLUSTER_COUNT = 300;
  let flashAlpha = 0;

  class Particle {
    constructor(x, y, targetX, targetY, speed) {
      this.x = x;
      this.y = y;
      this.tx = targetX;
      this.ty = targetY;
      this.speed = speed;
      this.vx = 0;
      this.vy = 0;
      this.state = "inward"; // or "explode"
    }

    update(dt) {
      if (this.state === "inward") {
        const dx = this.tx - this.x;
        const dy = this.ty - this.y;
        const dist = Math.hypot(dx, dy) || 1;
        const f = this.speed / dist;
        this.vx = dx * f;
        this.vy = dy * f;
        this.x += this.vx * dt;
        this.y += this.vy * dt;
      } else if (this.state === "explode") {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
      }
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }
  }

  function spawnInwardParticles(count) {
    for (let i = 0; i < count; i++) {
      const edge = Math.floor(Math.random() * 4);
      let x, y;
      if (edge === 0) { // top
        x = Math.random() * W;
        y = -20;
      } else if (edge === 1) { // right
        x = W + 20;
        y = Math.random() * H;
      } else if (edge === 2) { // bottom
        x = Math.random() * W;
        y = H + 20;
      } else { // left
        x = -20;
        y = Math.random() * H;
      }
      const speed = 0.15 + Math.random() * 0.25;
      particles.push(new Particle(x, y, centerX, centerY, speed));
    }
  }

  let lastTime = performance.now();

  function loop(now) {
    const dt = now - lastTime;
    lastTime = now;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H);

    if (phase === "fadeInText") {
      // Typewriter effect
      const elapsed = now - phaseStart;
      const charsPerMs = 1 / 40; // ~25 chars/sec
      textIndex = Math.min(text.length, Math.floor(elapsed * charsPerMs));

      ctx.fillStyle = "#fff";
      ctx.font = "20px Helvetica Neue, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text.slice(0, textIndex), centerX, centerY);

      if (textIndex === text.length && elapsed > 2000) {
        phase = "inward";
        phaseStart = now;
        spawnInwardParticles(TARGET_CLUSTER_COUNT);
      }
    } else if (phase === "inward") {
  particles.forEach(p => p.update(dt));
  particles.forEach(p => p.draw(ctx));

  // Count how many are within cluster radius
  const clusterRadius = 50;
  let clusteredCount = 0;
  particles.forEach(p => {
    const dx = p.x - centerX;
    const dy = p.y - centerY;
    if (Math.hypot(dx, dy) < clusterRadius) {
      clusteredCount++;
    }
  });

  const fraction = clusteredCount / particles.length;

  // Draw a central glow that grows with clustered fraction
  const maxGlowRadius = 80;
  const glowRadius = 10 + maxGlowRadius * fraction;
  const glowAlpha = 0.2 + 0.6 * fraction;

  const gradient = ctx.createRadialGradient(
    centerX, centerY, 0,
    centerX, centerY, glowRadius
  );
  gradient.addColorStop(0, `rgba(255,255,255,${glowAlpha})`);
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
  ctx.fill();

  // Only move to explode when ALL particles are in the cluster
  if (clusteredCount === particles.length) {
    phase = "explode";
    phaseStart = now;

    particles.forEach(p => {
      const angle = Math.atan2(p.y - centerY, p.x - centerX) || Math.random() * Math.PI * 2;
      const speed = 0.7 + Math.random() * 0.7;
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed;
      p.state = "explode";
    });
  }
} else if (phase === "explode") {
  particles.forEach(p => p.update(dt));
  particles.forEach(p => p.draw(ctx));

  // White flash overlay
  flashAlpha = Math.min(1, flashAlpha + dt * 0.004);
  ctx.fillStyle = `rgba(255,255,255,${flashAlpha})`;
  ctx.fillRect(0, 0, W, H);

  if (flashAlpha >= 1) {
    phase = "fadeToBlack";
    phaseStart = now;
  }
}


    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

function enableBigBangOrbits() {
  document.body.classList.add('bigbang-orbits');
  // Option 1: only run the new orbit.js as-is
  // Option 2 (if you want to disable the old circular ring):
  // add flags in orbit.js to use Big Bang layout only when this class is present
}

function resetToNormalMode() {
  document.body.classList.remove('bigbang-orbits');
  // You can reload the page or maintain a second orbit layout based on the class
}
