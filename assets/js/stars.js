// Starfield background that reacts to cursor

// Grab canvas and context once
const canvas = document.getElementById("starfield");
if (canvas) {
  const ctx = canvas.getContext("2d");

  let width, height;
  const stars = [];
  const STAR_COUNT = 200;

  // Track mouse position; null when off-screen
  const mouse = { x: null, y: null };

  // Physics constants for cursor attraction
  const CURSOR_RADIUS = 140;
  const CURSOR_FORCE = 0.08;
  const HOME_FORCE = 0.002;
  const DAMPING = 0.92;

  // Resize canvas to full window
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // Capture mouse movement
  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Reset mouse when it leaves the window
  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Single star particle with home position and velocity
  class Star {
    constructor() {
      // Home (original) position
      this.x0 = Math.random() * width;
      this.y0 = Math.random() * height;

      // Current state
      this.x = this.x0;
      this.y = this.y0;
      this.vx = 0;
      this.vy = 0;

      // Radius
      this.r = Math.random() * 1.4 + 0.6;
    }

    // Update star physics for one frame
    update() {
      let ax = 0;
      let ay = 0;

      // Attract toward cursor if within radius
      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 0 && dist < CURSOR_RADIUS) {
          const force = (1 - dist / CURSOR_RADIUS) * CURSOR_FORCE;
          ax += (dx / dist) * force;
          ay += (dy / dist) * force;
        }
      }

      // Gentle pull back toward home position
      ax += (this.x0 - this.x) * HOME_FORCE;
      ay += (this.y0 - this.y) * HOME_FORCE;

      // Integrate velocity with damping
      this.vx = (this.vx + ax) * DAMPING;
      this.vy = (this.vy + ay) * DAMPING;

      // Apply velocity
      this.x += this.vx;
      this.y += this.vy;
    }

    // Draw star as a small white circle
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  }

  // Initialize starfield
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(new Star());
  }

  // Animation loop for starfield
  function animate() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach(star => {
      star.update();
      star.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}
