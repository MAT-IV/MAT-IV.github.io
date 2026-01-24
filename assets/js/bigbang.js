// Big Bang intro: auto-plays on first load, replayable via top-right button
let hasPlayedInitialBigBang = false;


document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('bigbang-play');
  const orbitNav = document.querySelector('.orbit-nav');

  if (!playButton || !orbitNav) return;

  // Ensure orbits are hidden at initial page load
  orbitNav.style.visibility = 'hidden';
  const initialOrbitLines = document.getElementById('orbit-lines');
  if (initialOrbitLines) initialOrbitLines.style.visibility = 'hidden';

    // Auto-play once on initial load (with text)
  runBigBang({ withText: true }, () => {
    hasPlayedInitialBigBang = true;
  });

  // Replay on button click (no text)
  playButton.addEventListener('click', () => {
    const orbitLinesCanvas = document.getElementById('orbit-lines');
    orbitNav.style.visibility = 'hidden';
    if (orbitLinesCanvas) orbitLinesCanvas.style.visibility = 'hidden';

    runBigBang({ withText: false }, () => {
      // After replay, keep orbits visible
    });
  });

});

/**
 * Runs the Big Bang animation, then shows orbits at the white flash.
 */
function runBigBang(options, onComplete) {
  const withText = options && options.withText;
  const canvas = document.getElementById("starfield");
  if (!canvas) {
    if (typeof onComplete === 'function') onComplete();
    return;
  }
  const ctx = canvas.getContext("2d");

  const W = canvas.width = window.innerWidth;
  const H = canvas.height = window.innerHeight;
  const centerX = W / 2;
  const centerY = H / 2;

  let phase = withText ? "fadeInText" : "inward";
  let phaseStart = performance.now();

  const text = "Welcome to my personal portfolio.";
  let textIndex = 0;


  const particles = [];
  const PARTICLE_COUNT = 300;
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

  // Spawn particles uniformly on a large ring around center
  function spawnInwardParticles(count) {
    const radius = Math.max(W, H) * 0.7;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // Faster inward motion only
      const speed = 0.6 + Math.random() * 0.5;
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
      const elapsed = now - phaseStart;
      const charsPerMs = text.length / 1500; // ~1.5s typing
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
          const speed = 0.7 + Math.random() * 0.7;
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

        // If this is a replay (no text), reset orbits to their original starting angles
        if (!withText && typeof window.resetOrbitsToInitial === 'function') {
          window.resetOrbitsToInitial();
        }

        if (typeof onComplete === "function") onComplete();
        ctx.clearRect(0, 0, W, H);
        return;
      }

    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
