/* ============================================================
   PORTFOLIO — MAIN.JS
   Cursor animation, page routing, gallery logic,
   software bubbles, and resume modal.
   ============================================================ */

// ──────────────────────────────────────────
// CUSTOM CURSOR
// ──────────────────────────────────────────
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

(function animateCursor() {
  cx += (mx - cx) * 0.18;
  cy += (my - cy) * 0.18;
  cursor.style.transform    = `translate(${cx - 6}px, ${cy - 6}px)`;
  cursorDot.style.transform = `translate(${mx - 2}px, ${my - 2}px)`;
  requestAnimationFrame(animateCursor);
})();

// Scale cursor on interactive elements
document.querySelectorAll(
  'a, button, .category-card, .gallery-item, .resume-card, .software-bubble'
).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform += ' scale(1.8)';
  });
  el.addEventListener('mouseleave', () => {});
});


// ──────────────────────────────────────────
// PAGE ROUTING
// ──────────────────────────────────────────
let currentCategory = '';

/**
 * showPage(id)
 * Hides all .page sections and reveals the one with the given id.
 * #home uses display:flex; all others use display:block.
 */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    if (p.tagName === 'SECTION') p.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (!target) return;

  target.style.display = (id === 'home') ? 'flex' : 'block';
  requestAnimationFrame(() => target.classList.add('active'));
  window.scrollTo(0, 0);
}

/**
 * showGallery(category)
 * Sets the gallery heading, populates the grid, then navigates to it.
 */
function showGallery(category) {
  currentCategory = category;
  document.getElementById('gallery-sub').textContent   = category;
  document.getElementById('gallery-title').textContent = category;
  populateGallery(category);
  showPage('gallery');
}

/** backToGallery() — returns the user to the gallery page */
function backToGallery() {
  showPage('gallery');
}


// ──────────────────────────────────────────
// GALLERY DATA
// Edit these arrays to add / rename projects.
// ──────────────────────────────────────────
const galleryData = {
  '3D Work':           ['Abstract Forms', 'Character Sculpt', 'Architectural Viz', 'Motion Sculpture', 'Product Render', 'Environment Study'],
  'Video & Animation': ['Title Sequence', 'Motion Loop', 'Short Film', 'Lyric Video', 'Brand Animation', 'Experimental Cut'],
  'UX / UI Design':    ['Mobile App', 'Web Dashboard', 'Design System', 'Prototype Flow', 'User Research', 'Brand Identity'],
  'Graphic Design':    ['Poster Series', 'Editorial Layout', 'Zine', 'Brand Collateral', 'Type Study', 'Exhibition Design'],
};

/**
 * populateGallery(category)
 * Renders gallery item cards into #gallery-grid for the selected category.
 */
function populateGallery(category) {
  const grid  = document.getElementById('gallery-grid');
  const items = galleryData[category] || Array(6).fill('Project');

  grid.innerHTML = items.map(name => `
    <div class="gallery-item animate-in" onclick="showDetail('${name}', '${category}')">
      <div class="gallery-torn-bg"></div>
      <div class="gallery-item-inner"></div>
      <span class="gallery-item-label">${name}</span>
    </div>
  `).join('');
}

/**
 * showDetail(title, category)
 * Fills in the project-detail page and navigates to it.
 */
function showDetail(title, category) {
  document.getElementById('detail-title').textContent    = title;
  document.getElementById('detail-category').textContent = category;
  document.getElementById('detail-desc').textContent     =
    `This is an in-depth look at "${title}". Describe your creative process here — ` +
    `the concept, the tools, the challenges, and what you learned. ` +
    `Replace this placeholder with a rich description of your actual work ` +
    `and what makes it meaningful to you.`;

  document.getElementById('detail-tags').innerHTML =
    ['Placeholder Tool', category.split(' ')[0], '2024']
      .map(t => `<span class="detail-tag">${t}</span>`)
      .join('');

  showPage('project-detail');
}


// ──────────────────────────────────────────
// SOFTWARE BUBBLES
// Add or remove software names here.
// ──────────────────────────────────────────
const softwares = [
  'Blender', 'After Effects', 'Figma',
  'Illustrator', 'Cinema 4D', 'Photoshop',
  'Premiere', 'DaVinci', 'Procreate',
  'Rhino', 'ZBrush', 'Unity',
];

(function buildSoftwareGrid() {
  const grid = document.getElementById('software-grid');
  if (!grid) return; // only runs on resume page

  grid.innerHTML = softwares.map(s => `
    <div class="software-bubble">
      <div class="software-torn-circle"></div>
      <span class="software-name">${s}</span>
    </div>
  `).join('');
})();


// ──────────────────────────────────────────
// RESUME MODAL
// ──────────────────────────────────────────
function openResumeModal() {
  document.getElementById('resume-modal').classList.add('open');
}

function closeResumeModal() {
  document.getElementById('resume-modal').classList.remove('open');
}

// Close on backdrop click
const modal = document.getElementById('resume-modal');
if (modal) {
  modal.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeResumeModal();
  });
}


// ──────────────────────────────────────────
// INITIAL PAGE LOAD
// ──────────────────────────────────────────
showPage('home');