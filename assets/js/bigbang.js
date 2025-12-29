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
  const PARTICLE_COUNT = 300;     // keep original amount
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

  // ONLY CHANGE: faster inward speeds, rest of phases unchanged
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

      // Faster inward motion: bump speeds up, but not crazy high
      const speed = 0.6 + Math.random() * 0.5;  // original was ~0.15–0.4
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
      // Use your original typing timing here
      const elapsed = now - phaseStart;
      const charsPerMs = 1 / 40;
      textIndex = Math.min(text.length, Math.floor(elapsed * charsPerMs));

      ctx.fillStyle = "#fff";
      ctx.font = "20px Helvetica Neue, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text.slice(0, textIndex), centerX, centerY);

      if (textIndex === text.length && elapsed > 2000) {
        phase = "inward";
        phaseStart = now;
        spawnInwardParticles(PARTICLE_COUNT);
      }

    } else if (phase === "inward") {
      particles.forEach(p => p.update(dt));
      particles.forEach(p => p.draw(ctx));

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

      if (clusteredCount === particles.length) {
        phase = "explode";
        phaseStart = now;

        particles.forEach(p => {
          const angle = Math.atan2(p.y - centerY, p.x - centerX) || Math.random() * Math.PI * 2;
          const speed = 0.7 + Math.random() * 0.7; // keep original explosion feel
          p.vx = Math.cos(angle) * speed;
          p.vy = Math.sin(angle) * speed;
          p.state = "explode";
        });
      }

    } else if (phase === "explode") {
      particles.forEach(p => p.update(dt));
      particles.forEach(p => p.draw(ctx));

      flashAlpha = Math.min(1, flashAlpha + dt * 0.004);
      ctx.fillStyle = `rgba(255,255,255,${flashAlpha})`;
      ctx.fillRect(0, 0, W, H);

      if (flashAlpha >= 1) {
        const orbitNav = document.querySelector('.orbit-nav');
        const orbitLinesCanvas = document.getElementById('orbit-lines');
        if (orbitNav) orbitNav.style.visibility = 'visible';
        if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'visible';

        // Optional: keep your quick fade or remove it.
        // Here we keep the instant cut back (no extra fade).
        if (typeof onComplete === "function") onComplete();
        ctx.clearRect(0, 0, W, H);
        return;
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
