const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let width, height;
const stars = [];
const STAR_COUNT = 120;

const mouse = { x: null, y: null };

// Tunable physics constants
const CURSOR_RADIUS = 140;
const CURSOR_FORCE = 0.08;
const HOME_FORCE = 0.002;
const DAMPING = 0.92;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

class Star {
  constructor() {
    this.x0 = Math.random() * width;
    this.y0 = Math.random() * height;

    this.x = this.x0;
    this.y = this.y0;

    this.vx = 0;
    this.vy = 0;

    this.r = Math.random() * 1.4 + 0.6;
  }

  update() {
    let ax = 0;
    let ay = 0;

    // Cursor attraction
    if (mouse.x !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.hypot(dx, dy);

      if (dist < CURSOR_RADIUS) {
        const force = (1 - dist / CURSOR_RADIUS) * CURSOR_FORCE;
        ax += (dx / dist) * force;
        ay += (dy / dist) * force;
      }
    }

    // Spring force back to home position
    ax += (this.x0 - this.x) * HOME_FORCE;
    ay += (this.y0 - this.y) * HOME_FORCE;

    // Integrate velocity
    this.vx = (this.vx + ax) * DAMPING;
    this.vy = (this.vy + ay) * DAMPING;

    // Integrate position
    this.x += this.vx;
    this.y += this.vy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

// Initialize stars
for (let i = 0; i < STAR_COUNT; i++) {
  stars.push(new Star());
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  stars.forEach(star => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animate);
}

animate();
