// Big Bang mode: intro animation on the starfield canvas, then reveal orbits

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('bigbang-toggle');
  const orbitNav = document.querySelector('.orbit-nav');

  // orbit-lines canvas is created by orbit.js after DOMContentLoaded
  let orbitLinesCanvas = document.getElementById('orbit-lines');

  if (!toggle) return;

  let bigBangActive = false;

  // Handle toggle changes for Big Bang mode
  toggle.addEventListener('change', () => {
    // Refresh orbit lines reference in case it was created later
    orbitLinesCanvas = document.getElementById('orbit-lines');

    if (toggle.checked && !bigBangActive) {
      bigBangActive = true;

      // Hide normal orbits and labels during animation
      if (orbitNav) orbitNav.style.visibility = 'hidden';
      if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'hidden';

      // Run the Big Bang sequence
      startBigBangSequence(() => {
        // After animation completes fully, ensure orbits are visible
        if (orbitNav) orbitNav.style.visibility = 'visible';
        if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';
      });
    } else if (!toggle.checked && bigBangActive) {
      // Turning Big Bang off; make sure orbits are visible
      bigBangActive = false;
      if (orbitNav) orbitNav.style.visibility = 'visible';
      if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';
    }
  });
});

/**
 * Runs the Big Bang animation sequence on the starfield canvas:
 * 1) Type out intro text.
 * 2) White particles fly inward from edges to the center (faster).
 * 3) Central glow grows as particles cluster.
 * 4) All particles explode outward + white flash.
 * 5) While screen is pure white, show orbit layout underneath.
 * 6) Optional quick fade to black, then call onComplete and stop.
 */
function startBigBangSequence(onComplete) {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const W = canvas.width;
  const H = canvas.height;
  const centerX = W / 2;
  const centerY = H / 2;

  // Phase state machine
  let phase = "fadeInText";
  let phaseStart = performance.now();

  const text = "Welcome to my personal portfolio.";
  let textIndex = 0;

  const particles = [];
  const PARTICLE_COUNT = 300;
  let flashAlpha = 0;

  // Simple particle that moves inward then explodes outward
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

    // Update particle motion based on its state
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
        // Continue along explosion direction
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
   * Spawn particles along the four edges of the screen,
   * aimed toward the center.
   * Speeds are higher than before to make clustering faster.
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

      // Faster inward speed for quicker clustering
      const speed = 0.4 + Math.random() * 0.4;
      particles.push(new Particle(x, y, centerX, centerY, speed));
    }
  }

  let lastTime = performance.now();

  // Main animation loop for the Big Bang effect
  function loop(now) {
    const dt = now - lastTime;
    lastTime = now;

    // Clear entire canvas to black
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H);

    if (phase === "fadeInText") {
      // --- Phase 1: Typewriter intro text ---
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
      // --- Phase 2: Particles fly inward toward center ---
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
      // --- Phase 3: Explosion + white flash ---
      particles.forEach(p => p.update(dt));
      particles.forEach(p => p.draw(ctx));

      // White flash overlay
      flashAlpha = Math.min(1, flashAlpha + dt * 0.004);
      ctx.fillStyle = `rgba(255,255,255,${flashAlpha})`;
      ctx.fillRect(0, 0, W, H);

      if (flashAlpha >= 1) {
        // Screen is now fully white.

        // Reveal orbits NOW (under the white screen) so there is no visible gap.
        const orbitNav = document.querySelector('.orbit-nav');
        const orbitLinesCanvas = document.getElementById('orbit-lines');
        if (orbitNav) orbitNav.style.visibility = 'visible';
        if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';

        // Move to quick fade-to-black phase
        phase = "fadeToBlack";
        phaseStart = now;
      }

    } else if (phase === "fadeToBlack") {
      // --- Phase 4: Quick fade from white back to black ---
      const elapsed = now - phaseStart;
      const fade = Math.min(1, elapsed / 200); // 0.2 second fade
      ctx.fillStyle = "#000";
      ctx.globalAlpha = fade;
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1;

      if (fade >= 1) {
        // End of Big Bang sequence
        if (typeof onComplete === "function") onComplete();
        return; // stop Big Bang loop; normal starfield continues
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
