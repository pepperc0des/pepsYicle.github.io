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
  '3D Work':           ['Salt Keychain', 'Character Sculpt', 'Architectural Viz', 'Motion Sculpture', 'Product Render', 'Environment Study'],
  'Video & Animation': ['Title Sequence', 'Motion Loop', 'Short Film', 'Lyric Video', 'Brand Animation', 'Experimental Cut'],
  'Projects':    ['Ubiq Spatial Media App', 'Playing Cards', 'Airport Kid\'s Diner', 'Prototype Flow', 'Rock Paper Scissors', 'Brand Identity'],
  'Designs':    ['Adoption Poster Series', 'Labubu Login Page', 'Zine', 'Brand Collateral', 'Type Study', 'Exhibition Design'],
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

  // ── ADD YOUR PROJECTS HERE ──
  const projects = {
    'Adoption Poster Series': {
      description: 'This was one of my first projects I did to crawl into the field of graphic design. ' +
      'I created a series of adoption posters for different cat breeds as a tribute to my love for cats and dream of having on myself.' +
      'I made each poster via Canva and used a combination of stock images to create a visually appealing design. I used color schemes that' +
      'complemented the cat breeds and added text that highlighted their unique characteristics. The goal of this project was to create a' +
      'series of posters that would encourage people to adopt cats and raise awareness about the importance of animal welfare.', 
      tags: ['Canva', '2024'],
      images: {
        main: 'assets/Ragdoll Adopt Ad (1).jpg',
        a:    'assets/Maine Coon Adopt Ad (1).jpg',
        b:    'assets/British Shorthair Adopt Ad (1).jpg',
      }
    },
    'Another Project': {
      description: 'Description for your second project.',
      tags: ['Figma', 'UX', '2025'],
      images: {
        main: 'assets/project2-main.jpg',
        a:    'assets/project2-a.jpg',
        b:    'assets/project2-b.jpg',
      }
    },
  };

  const project = projects[title];

  document.getElementById('detail-title').textContent    = title;
  document.getElementById('detail-category').textContent = category;
  document.getElementById('detail-desc').textContent     = project.description;
  document.getElementById('detail-tags').innerHTML       =
  project.tags.map(t => `<span class="detail-tag">${t}</span>`).join('');

  // Swap in your real images
  const imgs = document.querySelectorAll('.detail-img-fill');
  imgs[0].style.backgroundImage    = `url('${project.images.main}')`;
  imgs[0].style.backgroundSize     = 'contain';
  imgs[0].style.backgroundRepeat   = 'no-repeat';
  imgs[0].style.backgroundPosition = 'center';
  imgs[0].style.cursor             = 'pointer';
  imgs[0].onclick                  = () => openImgOverlay(project.images.main);

  imgs[1].style.backgroundImage = `url('${project.images.a}')`;
  imgs[1].style.backgroundSize  = 'contain';
  imgs[1].style.backgroundRepeat = 'no-repeat';
  imgs[1].style.backgroundPosition = 'center';
  imgs[1].style.cursor          = 'pointer';
  imgs[1].onclick               = () => openImgOverlay(project.images.a);

  imgs[2].style.backgroundImage = `url('${project.images.b}')`;
  imgs[2].style.backgroundSize  = 'contain';
  imgs[2].style.backgroundRepeat = 'no-repeat';
  imgs[2].style.backgroundPosition = 'center';
  imgs[2].style.cursor          = 'pointer';
  imgs[2].onclick               = () => openImgOverlay(project.images.b);

  showPage('project-detail');
}
  
// ── Image Lightbox ──
function openImgOverlay(src) {
  document.getElementById('img-overlay-src').src = src;
  document.getElementById('img-overlay').classList.add('open');
}

function closeImgOverlay() {
  document.getElementById('img-overlay').classList.remove('open');
}

// Close on backdrop click
document.getElementById('img-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeImgOverlay();
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeResumeModal();
    closeImgOverlay();
  }
});

// ──────────────────────────────────────────
// SOFTWARE BUBBLES
// Add or remove software names here.
// ──────────────────────────────────────────
const softwares = [
  'Blender', 'After Effects', 'Figma',
  'Illustrator', 'InDesign', 'Photoshop',
  'Premiere', 'DaVinci', 'Procreate',
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