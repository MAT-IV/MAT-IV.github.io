const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let width, height;
const stars = [];
const STAR_COUNT = 400;
const mouse = { x: null, y: null };

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

class Star {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.2;
    this.vy = (Math.random() - 0.5) * 0.2;
    this.r = Math.random() * 1.5 + 0.5;
  }

  update() {
    if (mouse.x !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        const force = (150 - dist) / 150;
        this.vx += (dx / dist) * force * 0.04;
        this.vy += (dy / dist) * force * 0.04;
      }
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push(new Star());
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  stars.forEach(s => {
    s.update();
    s.draw();
  });
  requestAnimationFrame(animate);
}

animate();
