// Big Bang mode: fast (~1s) intro animation on the starfield canvas, then reveal orbits

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('bigbang-toggle');
  const orbitNav = document.querySelector('.orbit-nav');

  let orbitLinesCanvas = document.getElementById('orbit-lines');

  if (!toggle) return;

  let bigBangActive = false;

  toggle.addEventListener('change', () => {
    orbitLinesCanvas = document.getElementById('orbit-lines');

    if (toggle.checked && !bigBangActive) {
      bigBangActive = true;

      // Hide normal orbits during animation
      if (orbitNav) orbitNav.style.visibility = 'hidden';
      if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'hidden';

      startBigBangSequence(() => {
        // Ensure orbits are visible after sequence
        if (orbitNav) orbitNav.style.visibility = 'visible';
        if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';
      });
    } else if (!toggle.checked && bigBangActive) {
      bigBangActive = false;
      if (orbitNav) orbitNav.style.visibility = 'visible';
      if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';
    }
  });
});

/**
 * Fast Big Bang sequence:
 * ~300 ms type, ~300 ms cluster, ~300 ms flash, then cut back.
 */
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
  const PARTICLE_COUNT = 200; // fewer particles, faster convergence
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
      this.state = "inward";
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
      if (edge === 0) {
        x = Math.random() * W;
        y = -20;
      } else if (edge === 1) {
        x = W + 20;
        y = Math.random() * H;
      } else if (edge === 2) {
        x = Math.random() * W;
        y = H + 20;
      } else {
        x = -20;
        y = Math.random() * H;
      }

      // Much faster inward speed so clustering happens in ~0.3s
      const speed = 1.0 + Math.random() * 0.5;
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
      // Fast typewriter: whole line in ~0.25–0.3s
      const elapsed = now - phaseStart;
      const charsPerMs = text.length / 280; // full text in ~280 ms
      textIndex = Math.min(text.length, Math.floor(elapsed * charsPerMs));

      ctx.fillStyle = "#fff";
      ctx.font = "20px Helvetica Neue, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text.slice(0, textIndex), centerX, centerY);

      // Small hold after full text: ~150 ms
      if (textIndex === text.length && elapsed > 430) {
        phase = "inward";
        phaseStart = now;
        spawnInwardParticles(PARTICLE_COUNT);
      }

    } else if (phase === "inward") {
      particles.forEach(p => p.update(dt));
      particles.forEach(p => p.draw(ctx));

      const clusterRadius = 60;
      let clusteredCount = 0;

      particles.forEach(p => {
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        if (Math.hypot(dx, dy) < clusterRadius) {
          clusteredCount++;
        }
      });

      const fraction = clusteredCount / particles.length;

      const maxGlowRadius = 90;
      const glowRadius = 10 + maxGlowRadius * fraction;
      const glowAlpha = 0.3 + 0.7 * fraction;

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

      // Allow small tolerance: consider “done” when 95% are clustered
      if (fraction >= 0.95) {
        phase = "explode";
        phaseStart = now;

        particles.forEach(p => {
          const angle = Math.atan2(p.y - centerY, p.x - centerX) || Math.random() * Math.PI * 2;
          const speed = 1.0 + Math.random() * 0.8;
          p.vx = Math.cos(angle) * speed;
          p.vy = Math.sin(angle) * speed;
          p.state = "explode";
        });
      }

    } else if (phase === "explode") {
      particles.forEach(p => p.update(dt));
      particles.forEach(p => p.draw(ctx));

      // Fast white flash: reach full white in ~200 ms
      flashAlpha = Math.min(1, flashAlpha + dt * 0.005);
      ctx.fillStyle = `rgba(255,255,255,${flashAlpha})`;
      ctx.fillRect(0, 0, W, H);

      if (flashAlpha >= 1) {
        // As soon as screen is pure white, reveal orbits under it
        const orbitNav = document.querySelector('.orbit-nav');
        const orbitLinesCanvas = document.getElementById('orbit-lines');
        if (orbitNav) orbitNav.style.visibility = 'visible';
        if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';

        // Immediately end sequence; let normal rendering show through
        if (typeof onComplete === "function") onComplete();

        // Clear canvas to transparent black so starfield/orbits can show
        ctx.clearRect(0, 0, W, H);
        return;
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
