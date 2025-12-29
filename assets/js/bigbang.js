// Big Bang mode: intro animation on the starfield canvas, then reveal orbits

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('bigbang-toggle');
  const orbitNav = document.querySelector('.orbit-nav');
  const orbitLinesCanvas = document.getElementById('orbit-lines'); // created by orbit.js

  if (!toggle) return;

  let bigBangActive = false;

  // Handle toggle changes
  toggle.addEventListener('change', () => {
    if (toggle.checked && !bigBangActive) {
      bigBangActive = true;

      // Hide normal orbits and labels during animation
      if (orbitNav) orbitNav.style.visibility = 'hidden';
      if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'hidden';

      startBigBangSequence(() => {
        // After animation: show orbits again
        if (orbitNav) orbitNav.style.visibility = 'visible';
        if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';
      });
    } else if (!toggle.checked && bigBangActive) {
      // If you want a "reset" when turning off
      bigBangActive = false;
      if (orbitNav) orbitNav.style.visibility = 'visible';
      if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';
      // You could optionally re-run animation here if toggled off/on again
    }
  });
});

/**
 * Runs the Big Bang animation sequence on the starfield canvas:
 * 1) Type out intro text.
 * 2) White particles fly inward from edges to the center.
 * 3) Central glow grows as particles cluster.
 * 4) All particles explode outward + white flash.
 * 5) Fade to black and call onComplete.
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
  const PARTICLE_COUNT = 300;
  let flashAlpha = 0;

  // Simple particle that moves either inward or in explosion
  class Particle {
    constructor(x, y, targetX, targetY, speed) {
      this.x = x;
      this.y = y;
      this.tx = targetX;
      this.ty = targetY;
      this.speed = speed;
      this.vx = 0;
      this.vy = 0;
      this.state = "inward"; // "inward" or "explode"
    }

    // Update particle motion based on current state
    update(dt) {
      if (this.state === "inward") {
        // Move toward center (target)
        const dx = this.tx - this.x;
        const dy = this.ty - this.y;
        const dist = Math.hypot(dx, dy) || 1;
        const f = this.speed / dist;
        this.vx = dx * f;
        this.vy = dy * f;
        this.x += this.vx * dt;
        this.y += this.vy * dt;
      } else if (this.state === "explode") {
        // Continue in explosion direction
        this.x += this.vx * dt;
        this.y += this.vy * dt;
      }
    }

    // Draw particle as small white dot
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }
  }

  /**
   * Spawn particles along screen edges, all targeting the center.
   */
  function spawnInwardParticles(count) {
    for (let i = 0; i < count; i++) {
      const edge = Math.floor(Math.random() * 4);
      let x, y;
      if (edge === 0) {          // top edge
        x = Math.random() * W;
        y = -20;
      } else if (edge === 1) {   // right edge
        x = W + 20;
        y = Math.random() * H;
      } else if (edge === 2) {   // bottom edge
        x = Math.random() * W;
        y = H + 20;
      } else {                   // left edge
        x = -20;
        y = Math.random() * H;
      }
      const speed = 0.4 + Math.random() * 0.4;
      particles.push(new Particle(x, y, centerX, centerY, speed));
    }
  }

  let lastTime = performance.now();

  // Main animation loop for Big Bang
  function loop(now) {
    const dt = now - lastTime;
    lastTime = now;

    // Clear to black each frame
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H);

    if (phase === "fadeInText") {
      // Typewriter effect for intro text
      const elapsed = now - phaseStart;
      const charsPerMs = 1 / 40; // ~25 chars/sec
      textIndex = Math.min(text.length, Math.floor(elapsed * charsPerMs));

      ctx.fillStyle = "#fff";
      ctx.font = "20px Helvetica Neue, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text.slice(0, textIndex), centerX, centerY);

      // After full text is shown for a bit, start inward particles
      if (textIndex === text.length && elapsed > 2000) {
        phase = "inward";
        phaseStart = now;
        spawnInwardParticles(PARTICLE_COUNT);
      }

    } else if (phase === "inward") {
      // Update and draw inward particles
      particles.forEach(p => p.update(dt));
      particles.forEach(p => p.draw(ctx));

      const clusterRadius = 50;
      let clusteredCount = 0;

      // Count how many particles have reached the central cluster
      particles.forEach(p => {
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        if (Math.hypot(dx, dy) < clusterRadius) {
          clusteredCount++;
        }
      });

      const fraction = clusteredCount / particles.length;

      // Draw a central glow that grows as more particles cluster
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

      // Only trigger explosion once ALL particles are in the cluster radius
      if (clusteredCount === particles.length) {
        phase = "explode";
        phaseStart = now;

        // Give each particle an outward direction from center
        particles.forEach(p => {
          const angle = Math.atan2(p.y - centerY, p.x - centerX) || Math.random() * Math.PI * 2;
          const speed = 0.7 + Math.random() * 0.7;
          p.vx = Math.cos(angle) * speed;
          p.vy = Math.sin(angle) * speed;
          p.state = "explode";
        });
      }

    } else if (phase === "explode") {
  // Update and draw explosion
  particles.forEach(p => p.update(dt));
  particles.forEach(p => p.draw(ctx));

  // White flash over the screen
  flashAlpha = Math.min(1, flashAlpha + dt * 0.004);
  ctx.fillStyle = `rgba(255,255,255,${flashAlpha})`;
  ctx.fillRect(0, 0, W, H);

  // Once flash is full white, immediately reveal orbits underneath
  if (flashAlpha >= 1) {
    // Show orbits while the screen is still white
    const orbitNav = document.querySelector('.orbit-nav');
    const orbitLinesCanvas = document.getElementById('orbit-lines');
    if (orbitNav) orbitNav.style.visibility = 'visible';
    if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';

    // Option A: quick fade from white to black (very short)
    phase = "fadeToBlack";
    phaseStart = now;
  }
}


} else if (phase === "fadeToBlack") {
  const elapsed = now - phaseStart;
  const fade = Math.min(1, elapsed / 200); // 0.2s fade
  ctx.fillStyle = "#000";
  ctx.globalAlpha = fade;
  ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 1;

  if (fade >= 1) {
    if (typeof onComplete === "function") onComplete();
    return;
  }
}



    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
