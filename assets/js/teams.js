// Design Teams overlay logic

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('team-overlay');
  const overlayContent = document.getElementById('team-overlay-content');
  const closeBtn = overlay ? overlay.querySelector('.team-overlay-close') : null;

  if (!overlay || !overlayContent || !closeBtn) return;

  // Map team IDs to HTML content strings
  const teamDetails = {
    'formula-fsae': `
      <h2>Formula SAE IC – Aerodynamics</h2>
      <p class="team-meta">Role: Full Car Aerodynamics · Season: 2024–2025</p>
      <img src="{{ '/assets/images/team-formula-aero.jpg' | relative_url }}" alt="Formula SAE IC racecar with aerodynamic package" class="project-hero-image">
      <h3>Overview</h3>
      <p>
        (Put your expanded overview here: competition context, car concept, and overall aero objectives.)
      </p>
      <h3>Responsibilities</h3>
      <ul>
        <li>Performed full-vehicle CFD analyses under pitch, roll, and yaw to guide aero geometry.</li>
        <li>Supported design for manufacturability and integration of carbon fiber aero components.</li>
        <li>Participated in on-track testing to correlate simulation with vehicle behavior.</li>
      </ul>
      <h3>Results</h3>
      <p>
        (Describe key performance improvements and competition outcome in more detail.)
      </p>
    `,
    'aero-2023-2024': `
      <h2>SAE Aero Design – Team Lead (2023–2024)</h2>
      <p class="team-meta">Role: Team Lead · Season: 2023–2024</p>
      <img src="{{ '/assets/images/team-aero-2023-2024.jpeg' | relative_url }}" alt="SAE Aero Design aircraft 2023–2024" class="project-hero-image">
      <h3>Overview</h3>
      <p>(Expanded description for this season.)</p>
      <h3>Responsibilities</h3>
      <ul>
        <li>...</li>
      </ul>
      <h3>Results</h3>
      <p>(...</p>
    `,
    'aero-2022-2023': `
      <h2>SAE Aero Design – Design Lead (2022–2023)</h2>
      <p class="team-meta">Role: Design Lead · Season: 2022–2023</p>
      <img src="{{ '/assets/images/team-aero-2022-2023.jpeg' | relative_url }}" alt="SAE Aero Design aircraft 2022–2023" class="project-hero-image">
      <h3>Overview</h3>
      <p>(Expanded description for this season.)</p>
      <h3>Responsibilities</h3>
      <ul>
        <li>...</li>
      </ul>
      <h3>Results</h3>
      <p>(...</p>
    `,
    'aero-2021-2022': `
      <h2>SAE Aero Design – Team Member (2021–2022)</h2>
      <p class="team-meta">Role: Team Member · Season: 2021–2022</p>
      <img src="{{ '/assets/images/team-aero-2021-2022.JPG' | relative_url }}" alt="SAE Aero Design aircraft 2021–2022" class="project-hero-image">
      <h3>Overview</h3>
      <p>(Expanded description for this season.)</p>
      <h3>Responsibilities</h3>
      <ul>
        <li>...</li>
      </ul>
      <h3>Results</h3>
      <p>(...</p>
    `
  };

  // Open overlay when clicking a team image
  document.querySelectorAll('.team-card-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('data-team');
      if (!id || !teamDetails[id]) return;
      overlayContent.innerHTML = teamDetails[id];
      overlay.classList.add('is-visible');
    });
  });

  // Close overlay on close button or clicking background
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('is-visible');
  });

  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('is-visible');
    }
  });
});
