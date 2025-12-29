// In a new file assets/js/bigbang.js (and include it after stars.js and orbit.js)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('bigbang-toggle');
  if (!toggle) return;

  let bigBangActive = false;

  toggle.addEventListener('change', () => {
    if (toggle.checked && !bigBangActive) {
      bigBangActive = true;
      startBigBangSequence(() => {
        // After sequence finishes, you can keep Big Bang orbits enabled
      });
    } else if (!toggle.checked && bigBangActive) {
      bigBangActive = false;
      // Optional: reset to normal mode
      resetToNormalMode();
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

      const clustered = particles.filter(p => {
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        return Math.hypot(dx, dy) < 40;
      }).length;

      if (clustered > TARGET_CLUSTER_COUNT * 0.7) {
        phase = "explode";
        phaseStart = now;

        // Give outward velocities
        particles.forEach(p => {
          const angle = Math.atan2(p.y - centerY, p.x - centerX);
          const speed = 0.6 + Math.random() * 0.5;
          p.vx = Math.cos(angle) * speed;
          p.vy = Math.sin(angle) * speed;
          p.state = "explode";
        });
      }
      // Also draw text faintly if you like
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
    } else if (phase === "fadeToBlack") {
      const elapsed = now - phaseStart;
      const fade = Math.min(1, elapsed / 1000);
      ctx.fillStyle = "#000";
      ctx.globalAlpha = fade;
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1;

      if (fade >= 1) {
        // Hand off to the new orbit layout
        enableBigBangOrbits();
        if (typeof onComplete === "function") onComplete();
        return; // stop loop; main starfield/orbit will take over
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
