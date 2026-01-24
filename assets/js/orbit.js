// Locked orbit navigation:
// - Professional Experience & Hobby Builds: same orbit, 180° apart
// - Design Teams & Maker Portfolio: same orbit, 180° apart, offset from inner
// - Resume: independent orbit, can overlap but always on top

document.addEventListener('DOMContentLoaded', () => {
  const orbitNav = document.querySelector('.orbit-nav');
  const items = Array.from(document.querySelectorAll('.orbit-item'));
  if (!items.length || !orbitNav) return;

  // 0: About (center), then:
  // 1: Resume
  // 2: Professional Experience
  // 3: Design Teams
  // 4: Hobby Builds
  // 5: Maker Portfolio
  const aboutItem      = items[0];
  const resumeItem     = items[1];
  const experienceItem = items[2];
  const teamsItem      = items[3];
  const hobbyItem      = items[4];
  const makerItem      = items[5];

  // Canvas for orbit lines
  const orbitCanvas = document.createElement('canvas');
  orbitCanvas.id = 'orbit-lines';
  orbitCanvas.style.position = 'fixed';
  orbitCanvas.style.inset = '0';
  orbitCanvas.style.zIndex = '2';
  orbitCanvas.style.pointerEvents = 'none';
  orbitCanvas.style.display = 'none'; // Big Bang can turn this on
  document.body.appendChild(orbitCanvas);
  const octx = orbitCanvas.getContext('2d');

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  // Shared angles for the locked pairs (persist across frames)
  let innerAngle = Math.random() * Math.PI * 2; // for experience + hobby
  let outerAngle = Math.random() * Math.PI * 2; // for teams + maker

  // Speeds (radians per ms)
  const resumeSpeed = 0.00013;
  const innerSpeed  = 0.00008;
  const outerSpeed  = 0.00006;

  // Individual state
  const state = {
    resume: {
      element: resumeItem,
      angle: Math.random() * Math.PI * 2,
      radiusBase: 150,
      radius: 150,
      z: 10
    },
    experience: {
      element: experienceItem,
      radiusBase: 220,
      radius: 220,
      z: 5
    },
    hobby: {
      element: hobbyItem,
      radiusBase: 220,
      radius: 220,
      z: 5
    },
    teams: {
      element: teamsItem,
      radiusBase: 300,
      radius: 300,
      z: 5
    },
    maker: {
      element: makerItem,
      radiusBase: 300,
      radius: 300,
      z: 5
    }
  };

  function resize() {
    orbitCanvas.width = window.innerWidth;
    orbitCanvas.height = window.innerHeight;
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;

    const minDim = Math.min(window.innerWidth, window.innerHeight);
    const rResume = minDim * 0.22;
    const rInner  = minDim * 0.30;
    const rOuter  = minDim * 0.40;

    if (state.resume) {
      state.resume.radiusBase = rResume;
      state.resume.radius = rResume;
    }
    if (state.experience && state.hobby) {
      state.experience.radiusBase = rInner;
      state.experience.radius = rInner;
      state.hobby.radiusBase = rInner;
      state.hobby.radius = rInner;
    }
    if (state.teams && state.maker) {
      state.teams.radiusBase = rOuter;
      state.teams.radius = rOuter;
      state.maker.radiusBase = rOuter;
      state.maker.radius = rOuter;
    }
  }

  window.addEventListener('resize', resize);
  resize();

  function positionCenterItem() {
    if (!aboutItem) return;
    const rect = aboutItem.getBoundingClientRect();
    const x = centerX - rect.width / 2;
    const y = centerY - rect.height / 2;
    aboutItem.style.left = `${x}px`;
    aboutItem.style.top = `${y}px`;
  }

  let lastTime = null;

  function animate(now) {
    if (lastTime === null) lastTime = now;
    const dt = now - lastTime;
    lastTime = now;

    octx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);
    octx.strokeStyle = 'rgba(255,255,255,0.25)';
    octx.lineWidth = 1;

    // Advance angles
    innerAngle += innerSpeed * dt;
    outerAngle += outerSpeed * dt;
    state.resume.angle += resumeSpeed * dt;

    // Normalize angles
    const twoPi = Math.PI * 2;
    if (innerAngle > twoPi) innerAngle -= twoPi;
    if (outerAngle > twoPi) outerAngle -= twoPi;
    if (state.resume.angle > twoPi) state.resume.angle -= twoPi;

    // Draw orbit circles once
    const radiiDrawn = new Set();
    [state.resume, state.experience, state.teams].forEach(o => {
      if (!o) return;
      if (radiiDrawn.has(o.radiusBase)) return;
      radiiDrawn.add(o.radiusBase);
      octx.beginPath();
      octx.arc(centerX, centerY, o.radiusBase, 0, twoPi);
      octx.stroke();
    });

    // Compute positions for each element
    const positions = [];

    // Resume (independent)
    if (state.resume.element) {
      const r = state.resume.radius;
      const a = state.resume.angle;
      const x = centerX + r * Math.cos(a);
      const y = centerY + r * Math.sin(a);
      positions.push({
        element: state.resume.element,
        x,
        y,
        z: state.resume.z
      });
    }

    // Inner pair: experience + hobby (180° apart)
    if (state.experience.element && state.hobby.element) {
      const r = state.experience.radius;
      const a1 = innerAngle;
      const a2 = innerAngle + Math.PI;

      positions.push({
        element: state.experience.element,
        x: centerX + r * Math.cos(a1),
        y: centerY + r * Math.sin(a1),
        z: state.experience.z
      });
      positions.push({
        element: state.hobby.element,
        x: centerX + r * Math.cos(a2),
        y: centerY + r * Math.sin(a2),
        z: state.hobby.z
      });
    }

    // Outer pair: teams + maker (180° apart, offset)
    if (state.teams.element && state.maker.element) {
      const r = state.teams.radius;
      const offset = 0.5; // radians offset from inner orbit for natural spacing
      const a1 = outerAngle + offset;
      const a2 = outerAngle + offset + Math.PI;

      positions.push({
        element: state.teams.element,
        x: centerX + r * Math.cos(a1),
        y: centerY + r * Math.sin(a1),
        z: state.teams.z
      });
      positions.push({
        element: state.maker.element,
        x: centerX + r * Math.cos(a2),
        y: centerY + r * Math.sin(a2),
        z: state.maker.z
      });
    }

    // Apply positions
    positions.forEach(pos => {
      const el = pos.element;
      const rect = el.getBoundingClientRect();
      el.style.position = 'fixed';
      el.style.left = `${pos.x - rect.width / 2}px`;
      el.style.top = `${pos.y - rect.height / 2}px`;
      el.style.zIndex = String(pos.z);
    });

    positionCenterItem();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
