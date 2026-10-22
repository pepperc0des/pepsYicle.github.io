/* ======================================================================
   1. CONTENT: the part you edit (name, links, projects, image paths)
   ====================================================================== */

/* Where your images live. If you rename or move a file, change its path here.
   A name that is not listed is looked up as assets/<name>.png or .jpg. */
const FILES = {
  hero: "assets/temp_port_image.png",

  // PortfoLIo title tiles, in reading order
  "letter-1": "assets/Letter_P@4x.png",
  "letter-2": "assets/Letter_O_001@4x.png",
  "letter-3": "assets/Letter_R@4x.png",
  "letter-4": "assets/Letter_T@4x.png",
  "letter-5": "assets/Letter_F@4x.png",
  "letter-6": "assets/Letter_O_002@4x.png",
  "letter-7": "assets/Letter_L@4x.png",
  "letter-8": "assets/Letter_I@4x.png",
  "letter-9": "assets/Letter_O_003@4x.png",

  // decor illustrations (used by DECOR below and by the sprig on inner pages)
  bush: "assets/leafy-bush.svg",
  fern: "assets/fern_frond.svg",
  tulip: "assets/tulip.svg",
  lavender: "assets/lavender.svg",
  eucalyptus: "assets/eucalyptus.svg",
  daisy: "assets/daisy.svg",
  berries: "assets/berry-sprig.svg",
  wreath: "assets/wreath.svg",
  butterfly: "assets/Group 1.svg",

  // project covers
  "work-british-shorthair-adopt-ad": "projects/British Shorthair Adopt Ad (1).jpg",
  "work-maine-coon-adopt-ad": "projects/Maine Coon Adopt Ad (1).jpg",
  "work-ragdoll-adopt-ad": "projects/Ragdoll Adopt Ad (1).jpg",
  "work-isometric-room": "projects/Isometric_Room.jpg",
  "work-sky-high-diner-menu": "projects/DMUY1123_fa25_YiLi_menu_final.jpg",
  "work-sky-high-diner-menu-1": "projects/DMUY1123_fa25_YiLi_menu_sketch.jpg",
  "work-sky-high-diner-menu-2": "projects/DMUY1123_fa25_YiLi_menu_sketch_v2.jpg",
  "work-sky-high-diner-menu-3": "projects/DMUY1123_fa25_YiLi_menu_draft.jpg",
  "work-rock-paper-scissors": "projects/DMUY1123_fa25_Yi_Li_wireframe.png",
  "work-rock-paper-scissors-1": "projects/DMUY1123_fa_Yi_Li_draft.png",
  "work-rock-paper-scissors-2": "projects/DMUY1123_fa25_Yi_Li_flowchart.png",
  "work-rock-paper-scissors-3": "projects/DMUY1123_fa25_Yi_Li_wireframe w_ arrows.png",
  // extra images for a project page grid, for example:
  // "work-isometric-room-1": "projects/Isometric_Room_detail.jpg",
};

/* What shows while an image is missing:
     "placeholder" = a dashed box labelled with the file name
     "coded"       = a drawn stand-in (title tiles, tulip, lavender, butterfly, project covers) */
const FALLBACK = {
  letters: "placeholder",
  art: "placeholder",
  projects: "placeholder",
};

/* The homepage garden. Plants stand on the bottom edge of the page.
     slot  a key from FILES          side / at  which edge, and how far in from it
     h     height in px              tilt       lean in degrees
     wide  only on screens >= 1500px (keeps laptops uncluttered) */
const DECOR = [
  { slot: "bush", side: "left", at: "-2%", h: 270 },
  { slot: "fern", side: "left", at: "8%", h: 220, tilt: 3 },
  { slot: "tulip", side: "left", at: "15%", h: 165, tilt: -3, wide: true },
  { slot: "eucalyptus", side: "right", at: "-1%", h: 290 },
  { slot: "daisy", side: "right", at: "7%", h: 175, tilt: 3 },
  { slot: "lavender", side: "right", at: "13%", h: 205, tilt: -4, wide: true },
];

const ME = {
  name: "Yi Li",
  statement: "Strategic visuals and stories that stick.",
  email: "yilicareer06@gmail.com",
  links: [
    ["Instagram", "https://instagram.com/"],
    ["LinkedIn", "https://www.linkedin.com/in/yili536"],
  ],
};

/* Hobby bubbles: [label, colour, note shown when tapped] */
const HOBBIES = [
  ["Working out", "#0A7136", "Discipline I carry into every project."],
  ["Hiking", "#34791B", "Where I reset and collect ideas."],
  ["Video games", "#1A1A1A", "Worlds built with sharp UI and story."],
  ["Editor", "#116006", "Cutting things down until they land."],
  ["Photography", "#0A715C", "Framing, light, patience."],
  ["Eating out", "#229B36", "Always chasing a good menu and a better room."],
];
const DEFAULT_NOTE = "";

const WORK = [
  {
    t: "British Shorthair Adopt Ad",
    d: "Graphic Design",
    y: 2026,
    r: "Graphic design",
    c: ["#0A7136", "#EDEDED", "#229B36"],
    k: 0,
    big: true,
    p: "An adoption advertisement design. Add the goal, audience and process here.",
  },
  {
    t: "Maine Coon Adopt Ad",
    d: "Graphic Design",
    y: 2026,
    r: "Graphic design",
    c: ["#116006", "#EDEDED", "#229B36"],
    k: 1,
    p: "An adoption advertisement design. Add the goal, audience and process here.",
  },
  {
    t: "Ragdoll Adopt Ad",
    d: "Graphic Design",
    y: 2024,
    r: "Graphic design",
    c: ["#0A715C", "#EDEDED", "#1A1A1A"],
    k: 2,
    p: "An adoption advertisement design. Add the goal, audience and process here.",
  },
  {
    t: "Isometric Room",
    d: "Illustration",
    y: 2024,
    r: "Illustration",
    c: ["#34791B", "#1A1A1A", "#EDEDED"],
    k: 3,
    p: "An isometric room illustration. Add the tools, concept and process here.",
  },
  
  {
    t: "Sky High Diner Menu",
    d: "Graphic Design",
    y: 2025,
    r: "Graphic design, 3D illustration",
    c: ["#0A715C", "#EDEDED", "#229B36"],
    k: 4,
    big: true,
    s: [
      ["Overview", `A playful kids' menu for Sky High Diner, an airplane-themed diner at an international airport. 
        Every dish has an aviation pun for a name, and the layout is built so a child can understand it and a parent can order from it quickly.
        The goal was to make a menu that is fun to look at and easy to understand for both kids and parents`],
      ["Tools",  `I used InDesign for the majority of the design, the layout, the typography and the checkered background. I used Blender for the 3D food models and the Sky High Diner bottle.`],
      ["Process", `From left to right at the bottom of the page, I started with a plain layout to settle the content: 
        main dishes, sides, drinks and ice cream, with each dish's description and price. At the same time,
        I established a rough draft of the font hierarchy by the levels of importantance on a menu. In the second round I had an idea of incorporating some form of art and 
        I went with 3D models to spice it up and move away from the traditional 2D artstyle most kids' menus have,
        I placed the rendered food objects according to where they lie on the menu. So the 3D ice cream model would be placed in the ice cream section of the menu and the hot dog and burger 
        would be placed respectively in the main dishes section. In the third round, I gave the menu its final shape: the bubbly typography, the clouds to go along with the airport theme,
        more 3D art placed strategically, and even included a logo for the diner as suggested by the title and imprinted on the Milk bottle. For the final piece, I thought the spacing could be way better
        with how the dishes are laid out on the menu with the placement of the 3D models. So I created individual boxes for each dish category and align the text as they fit. I added a blue checkered background to fit the "diner" vibe
        and I added a border to give the menu more characteristics and to act as clouds, fitting the airport theme.`],
      ["Outcome", `The final render keeps the whole menu readable while still feeling playful and kid-friendly, and the food renders do most of the selling. 
        One thing I would do differently if I stared this project again is keeping the consistency with the typography of the dish categories and the title of the menu. 
        Though they are both bubbly, the title is transparent while the dish category is filled in. Another thing I would do different is having a better contrast between the
        menu boxes and the background. Right now, in some parts of the boxes, it looks as if it blends into the background rather than being it's separate shape. So I'm thinking of 
        changing the color of the boxes or perhaps giving it an dark outline to highlight the boxes.`],
    ],
  },
  {
    t: "Rock Paper Scissors",
    d: "Graphic Design",
    y: "2025",
    r: "Graphic design, UX/UI",
    c: ["#34791B", "#1A1A1A", "#EDEDED"],
    k: 5,
    video: "projects/DMUY1123_fa25_Yi_Li_rps.mov_",
    big: true,
    s: [
      ["Overview", `A design for a conceptual rock paper scissors game app. This is a prototype, a test version of an app. 
        Players should be able to use it easily with clicks, swipes, shakes, or taps without explicit written instructions. `],
      ["Tools", `I used a pixel art software called Pixquare to create the rock, paper, scissor assets as well as the red and blue background.
        For the wireframing and flowchart, I used Figma and importing my assets from Pixquare. Lastly I used Adobe After Effects for post production work
        for the app demo video.`],
      ["Process", `I started by mapping the whole game with a simple flowchart: Welcome, Pair with Partner, then either a successful pairing or a pairing error that loops back to try again. 
        From there each player chooses rock, paper or scissors, waits for the opponent, and sees the result. Keeping the flow this short meant a round could start in a few taps. 
        I then designed each step as a mobile screen: an home screen with a Play button, a QR-code scan screen for finding an opponent, a "Scan Failed" screen with a 
        Try again button, a versus screen once players are paired, a profile with stats, and the choose screen. For the results I designed all nine outcomes 
        (win, lose and tie, each with rock, paper and scissors), so every combination gets its own screen. The look is built around the idea of two 
        players facing off: the screen splits diagonally into red for the opponent and blue for you, with a pixel font and a grainy texture to give 
        it a retro arcade feel. The same split carries through every screen so players always know which side is theirs.`],
      ["Outcome", `The result is a complete, playable prototype of a two-player rock paper scissors game, with pairing, choosing, waiting and results all connected. 
        The video above shows the prototype in use.`],
    ]
  },
];

/* Project page sections. Give one project its own by adding  s: [["Heading", "Text"], ...]  to it above. */
const sections = (w) =>
  w.s || [
    ["Overview", w.p],
    ["The challenge", "Describe the brief here: who it was for and what needed to change."],
    ["Process", "Walk through research, sketches, iterations and the key decisions."],
    ["Outcome", "Share the results, what you learned, and where the work lives now."],
  ];

/* Resume page: the PDF (download button + preview). Optionally add assets/resume.png as the preview picture. */
const RESUME_PDF = "assets/Yi_Li_Resume_Updated.pdf";
const SKILLS = [
  ["Fg", "Figma"],
  ["Ai", "Illustrator"],
  ["Ps", "Photoshop"],
  ["Pr", "Premiere Pro"],
  ["Ae", "After Effects"],
  ["Ht", "HTML/CSS"],
  ["Js", "JavaScript"],
  ["Re", "React"],
  ["Bl", "Blender"],
];

/* ======================================================================
   2. HELPERS
   ====================================================================== */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const app = $("#app");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

const slug = (work) =>
  work.t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/* ======================================================================
   3. ASSETS: finds your images and swaps them in
   ====================================================================== */

const EXTENSIONS = ["png", "jpg"];
const assets = {}; // slot name -> URL, filled in by loadAsset()

const TITLE_SLOTS = Array.from({ length: 9 }, (_, i) => `letter-${i + 1}`);
const WORK_SLOTS = WORK.flatMap((w) => [
  `work-${slug(w)}`,
  ...[1, 2, 3, 4, 5, 6].map((n) => `work-${slug(w)}-${n}`),
]);
const SLOTS = [
  ...new Set([
    ...Object.keys(FILES),
    ...DECOR.map((d) => d.slot),
    ...TITLE_SLOTS,
    ...WORK_SLOTS,
    "title", // optional: one picture of the whole PortfoLIo title
    "resume", // optional: picture of your resume used as the preview
  ]),
];

/* Tries each candidate URL in turn and records the first one that loads */
function loadAsset(name) {
  const candidates = FILES[name] ? [FILES[name]] : EXTENSIONS.map((ext) => `assets/${name}.${ext}`);
  return new Promise((resolve) => {
    const tryNext = () => {
      const url = candidates.shift();
      if (!url) return resolve();
      const img = new Image();
      img.onload = () => {
        assets[name] = encodeURI(url);
        resolve();
      };
      img.onerror = tryNext;
      img.src = encodeURI(url);
    };
    tryNext();
  });
}

/* A dashed, labelled box that stands in for an image you haven't added yet */
const placeholder = (label, cls = "", style = "") =>
  `<span class="ph-slot ${cls}" style="${style}" role="img" aria-label="Placeholder: ${label}"><b>${label}</b></span>`;

/* An image from /assets, a drawn stand-in, or a placeholder (see FALLBACK) */
function art(slot, cls = "", style = "") {
  if (assets[slot]) {
    const bob = slot === "butterfly" ? " bob" : "";
    return `<img class="${cls} art${bob}" style="${style}" src="${assets[slot]}" alt="" aria-hidden="true">`;
  }
  if (FALLBACK.art === "coded") return CODED[slot]?.(cls, style) ?? "";
  return placeholder((FILES[slot] || `${slot}.png`).split("/").pop(), cls, style);
}

const cover = (work) => {
  const slot = `work-${slug(work)}`;
  if (assets[slot]) return `<img class="cover" src="${assets[slot]}" alt="${work.t}">`;
  if (FALLBACK.projects === "coded") return codedCover(work.c, work.k);
  return placeholder(`${slot}.jpg`, "ph-fill");
};

/* ======================================================================
   4. CODED STAND-INS: drawn versions used when FALLBACK is "coded"
   ====================================================================== */

const watercolor = (style) => `style="filter:url(#wc);${style}"`;

/* Geometric project cover: [background, shape, accent] and a shape number */
function codedCover([a, b, d], k) {
  const shapes = [
    `<circle cx="130" cy="150" r="80" fill="${b}"/><rect x="180" y="60" width="130" height="130" fill="${d}"/>`,
    `<rect x="60" y="50" width="120" height="160" fill="${b}"/><rect x="150" y="90" width="120" height="160" fill="${d}" opacity=".85"/>`,
    `<rect x="90" y="40" width="130" height="220" rx="26" fill="${b}"/><circle cx="155" cy="210" r="14" fill="${d}"/>`,
    `<path d="M40 240 Q120 60 200 150 T360 40" stroke="${b}" stroke-width="14" fill="none"/><circle cx="360" cy="40" r="24" fill="${d}"/>`,
    `<circle cx="200" cy="150" r="100" fill="${d}"/><circle cx="200" cy="150" r="60" fill="${a}"/><circle cx="200" cy="150" r="14" fill="${b}"/>`,
    `<path d="M200 40 L330 250 H70 Z" fill="${b}"/><circle cx="90" cy="70" r="30" fill="${d}"/>`,
  ];
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Project artwork">
    <rect width="400" height="300" fill="${a}"/>${shapes[k % shapes.length]}</svg>`;
}

function codedLavender(cls, style) {
  const buds = Array.from({ length: 8 }, (_, i) => {
    const left = 30 + i * 11;
    const right = 36 + i * 11;
    const [c1, c2] = i % 2 ? ["#0A715C", "#116006"] : ["#116006", "#0A715C"];
    return `<ellipse cx="23" cy="${left}" rx="5.5" ry="9" transform="rotate(-25 23 ${left})" fill="${c1}"/>
      <ellipse cx="37" cy="${right}" rx="5.5" ry="9" transform="rotate(25 37 ${right})" fill="${c2}"/>`;
  }).join("");
  return `<svg class="${cls}" ${watercolor(style)} viewBox="0 0 60 200" aria-hidden="true">
    <path d="M30 200C29 150 31 100 30 30" stroke="#34791B" stroke-width="2.5" fill="none"/>
    <path d="M30 200C10 170 6 150 8 130C22 140 30 165 30 200Z" fill="#229B36" opacity=".8"/>
    <path d="M30 200C50 175 54 160 52 142C38 150 30 170 30 200Z" fill="#0A7136" opacity=".8"/>
    ${buds}<ellipse cx="30" cy="20" rx="4.5" ry="10" fill="#0A715C"/></svg>`;
}

const codedTulip = (cls, style) => `<svg class="${cls}" ${watercolor(style)} viewBox="0 0 70 200" aria-hidden="true">
  <path d="M35 200C34 150 36 110 35 70" stroke="#34791B" stroke-width="3" fill="none"/>
  <path d="M35 200C8 170 4 120 12 90C30 110 38 150 35 200Z" fill="#229B36" opacity=".85"/>
  <path d="M35 200C62 180 68 140 60 112C44 128 34 160 35 200Z" fill="#34791B" opacity=".85"/>
  <path d="M14 36C14 18 22 8 26 6L35 22L44 6C48 8 56 18 56 36C56 60 46 74 35 74C24 74 14 60 14 36Z" fill="#0A7136"/>
  <path d="M26 6C30 30 30 56 35 74C22 70 16 56 14 36C14 22 20 10 26 6Z" fill="#116006" opacity=".6"/></svg>`;

function codedButterfly(cls, style) {
  const wing = `<g class="wing"><path d="M60 50C42 2 4 8 8 40C11 62 42 62 60 50Z" fill="#0A715C"/><path d="M60 52C42 60 22 96 42 94C56 92 61 72 60 52Z" fill="#116006"/><circle cx="26" cy="36" r="6" fill="#EDEDED" opacity=".45"/></g>`;
  return `<svg class="${cls} bob" ${watercolor(style)} viewBox="0 0 120 100" aria-hidden="true">
    ${wing}<g transform="translate(120 0) scale(-1 1)">${wing}</g>
    <ellipse cx="60" cy="52" rx="2.6" ry="18" fill="#1A1A1A"/>
    <path d="M59 36C54 26 50 24 48 22M61 36C66 26 70 24 72 22" stroke="#1A1A1A" stroke-width="1.2" fill="none"/></svg>`;
}

/* Stand-ins by slot name (only these three exist; other slots fall back to nothing) */
const CODED = { tulip: codedTulip, lavender: codedLavender, butterfly: codedButterfly };

/* Title tiles: [letter, tile colour, text colour, tilt in degrees, torn-edge shape 0-2] */
const TITLE_TILES = [
  ["P", "#116006", "#EDEDED", -1.5, 0],
  ["o", "#229B36", "#1A1A1A", 1, 1],
  ["r", "#0A715C", "#EDEDED", -1, 2],
  ["t", "#34791B", "#EDEDED", 1.5, 1],
  ["f", "#229B36", "#1A1A1A", -1, 0],
  ["o", "#116006", "#EDEDED", 1, 2],
  ["L", "#0A7136", "#EDEDED", -1.5, 1],
  ["I", "#229B36", "#1A1A1A", 1, 0],
  ["o", "#34791B", "#EDEDED", -1, 2],
];

function titleHTML() {
  if (assets.title) return `<span class="title-img"><img src="${assets.title}" alt="PortfoLIo"></span>`;

  return TITLE_TILES.map(([char, bg, fg, tilt, edge], i) => {
    const slot = `letter-${i + 1}`;
    if (assets[slot]) return `<img class="title-letter" src="${assets[slot]}" alt="" aria-hidden="true">`;
    if (FALLBACK.letters !== "coded") {
      return `<span class="ph-slot ph-letter" aria-hidden="true"><i>${char}</i><b>${slot}</b></span>`;
    }
    return `<span class="title-tile edge-${edge}" aria-hidden="true" style="background-color:${bg};color:${fg};transform:rotate(${tilt}deg)">${char}</span>`;
  }).join("");
}

/* ======================================================================
   5. PAGES: home, work, project, resume, contact
   ====================================================================== */

/* ---------- home ---------- */

const photoHTML = () =>
  assets.hero
    ? `<img class="cover" src="${assets.hero}" alt="${ME.name}">`
    : `<div class="photo-empty">
         <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
           <circle cx="200" cy="210" r="110" fill="#0A715C"/>
           <circle cx="290" cy="330" r="70" fill="#229B36" opacity=".8"/>
           <rect x="60" y="300" width="110" height="110" fill="#0A7136"/>
         </svg>
         <label class="noprint"><input type="file" accept="image/*"><span>Add your photo</span></label>
       </div>`;

/* Lets someone pick a photo from their computer when no hero image is in /assets */
// function wirePhotoUpload() {
//   $(".photo input")?.addEventListener("change", (event) => {
//     const file = event.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = () => {
//       $(".photo").innerHTML = `<img class="cover" src="${reader.result}" alt="${ME.name}">`;
//     };
//     reader.readAsDataURL(file);
//   });
// }

const pillText = (bg) => (bg === "#229B36" ? "#1A1A1A" : "#fff");

const pillsHTML = () =>
  HOBBIES.map(
    ([label, color]) =>
      `<button type="button" class="pill" style="background:${color};color:${color}" aria-pressed="false">
         <span style="color:${pillText(color)}">${label}</span>
       </button>`,
  ).join("");

/* Plants along the bottom edge; each one gets its position from the DECOR list */
const gardenHTML = () =>
  `<div class="garden" aria-hidden="true">${DECOR.map(
    ({ slot, side, at, h, tilt = 0, wide }, i) =>
      art(
        slot,
        wide ? "plant wide-only" : "plant",
        `${side}:${at}; --h:${h}px; --tilt:${tilt}deg; --delay:${(-i * 1.7).toFixed(1)}s`,
      ),
  ).join("")}</div>`;

function homePage() {
  app.innerHTML = `
    <section class="landing">
      ${gardenHTML()}
      <div class="hero">
        <div class="hero-text">
          <h1 class="title" aria-label="PortfoLIo">${titleHTML()}</h1>
          <p class="lead">${ME.statement}</p>
          <div class="btns">
            <a class="btn" href="#/work">See my work</a>
            <a class="btn ghost" href="#/contact">Get in touch</a>
          </div>
        </div>
        <div class="frame">
          ${art("wreath", "frame-wreath")}
          <div class="photo">${photoHTML()}</div>
          ${art("berries", "frame-berries")}
          ${art("butterfly", "frame-butterfly")}
        </div>
      </div>
      <div class="field">${pillsHTML()}</div>
      <p class="note" aria-live="polite"></p>
    </section>`;

  // wirePhotoUpload();
  startBubbles();
}

/* ---------- work: horizontal gallery ---------- */

/* Small sprig in the top-right corner of the inner pages */
const sprigHTML = () =>
  `<div class="sprig" aria-hidden="true">${art("berries", "sprig-plant")}${art("butterfly", "sprig-butterfly")}</div>`;

let activeFilter = "All";

function workPage() {
  const categories = ["All", ...new Set(WORK.map((w) => w.d))];
  const projects = WORK.filter((w) => activeFilter === "All" || w.d === activeFilter);
  const featured = projects.filter((w) => w.big);
  const more = projects.filter((w) => !w.big);

  const miniCard = (w) => `<a class="mini" href="#/work/${slug(w)}">
      <div class="tile">${cover(w)}</div>
      <h3>${w.t}</h3>
      <p class="meta">${w.d}, ${w.y}</p>
    </a>`;

  app.innerHTML = `
    ${sprigHTML()}
    <div class="page-h">
      <h2>Selected work</h2>
      <p class="page-sub">Scroll sideways through projects across brand, digital, photo, motion and print.</p>
    </div>
    <div class="tabs" role="group" aria-label="Filter by discipline">
      ${categories
        .map(
          (c) => `<button type="button" class="tab" data-category="${c}" aria-pressed="${activeFilter === c}">${c}</button>`,
        )
        .join("")}
    </div>
    ${
      featured.length
        ? `<h3 class="shelf-h">Featured</h3>
    <div class="track" tabindex="0" aria-label="Featured projects, scroll horizontally">
      ${featured
        .map(
          (w) => `<a class="hcard" href="#/work/${slug(w)}">
            <div class="tile">${cover(w)}</div>
            <h3>${w.t}</h3>
            <p class="meta">${w.d}, ${w.y}</p>
          </a>`,
        )
        .join("")}
    </div>
    <div class="ctrl noprint">
      <button type="button" class="arrow" aria-label="Scroll left">←</button>
      <div class="bar"><i style="width:20%"></i></div>
      <button type="button" class="arrow" aria-label="Scroll right">→</button>
    </div>`
        : ""
    }
    ${
      more.length
        ? `<h3 class="shelf-h more">More projects</h3>
    <div class="mini-grid">${more.map(miniCard).join("")}</div>`
        : ""
    }`;

   const track = $(".track");
  if (track) {
    const progress = $(".bar i");
    const [prev, next] = $$(".arrow");
    const page = (direction) =>
      track.scrollBy({
        left: direction * track.clientWidth * 0.7,
        behavior: reduceMotion ? "auto" : "smooth",
      });

    prev.onclick = () => page(-1);
    next.onclick = () => page(1);
    track.addEventListener("scroll", () => {
      const max = track.scrollWidth - track.clientWidth;
      progress.style.width = `${20 + (max > 0 ? track.scrollLeft / max : 0) * 80}%`;
    });
    enableWheelScroll(track);
  }

  $$(".tab").forEach((tab) => {
    tab.onclick = () => {
      activeFilter = tab.dataset.category;
      workPage();
    };
  });
}
/* Lets the mouse wheel scroll a horizontal track.
   - Each wheel notch eases toward its target instead of jumping.
   - Scroll-snap is switched off once the wheel is used (CSS .free-scroll), otherwise
     the row would snap back to the nearest card after every small notch.
   - At either end the wheel goes back to scrolling the page, so you never get stuck.
   Trackpads that already scroll sideways are left alone. */
function enableWheelScroll(track) {
  let target = 0;
  let frame = 0;
  const maxScroll = () => track.scrollWidth - track.clientWidth;

  const glide = () => {
    const distance = target - track.scrollLeft;
    if (Math.abs(distance) < 1) {
      track.scrollLeft = target;
      frame = 0;
      return;
    }
    // browsers round scrollLeft to whole pixels, so always move at least 1px
    track.scrollLeft += Math.sign(distance) * Math.max(1, Math.abs(distance) * 0.18);
    frame = requestAnimationFrame(glide);
  };

  track.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return; // zoom, or native sideways scroll
      const delta = event.deltaMode === 1 ? event.deltaY * 40 : event.deltaY; // Firefox reports lines
      const atStart = track.scrollLeft <= 0 && delta < 0;
      const atEnd = track.scrollLeft >= maxScroll() - 1 && delta > 0;
      if (!delta || atStart || atEnd) return; // let the page scroll instead

      event.preventDefault();
      track.classList.add("free-scroll");
      if (!frame) target = track.scrollLeft;
      target = Math.min(maxScroll(), Math.max(0, target + delta));

      if (reduceMotion) track.scrollLeft = target;
      else if (!frame) frame = requestAnimationFrame(glide);
    },
    { passive: false },
  );
}

/* ---------- project ---------- */

/* Extra project images, or three stand-ins when you haven't added any */
function gallery(work) {
  const photos = [1, 2, 3, 4, 5, 6].map((n) => assets[`work-${slug(work)}-${n}`]).filter(Boolean);
  if (photos.length) {
    return photos.map((src) => `<div class="tile"><img class="cover" src="${src}" alt=""></div>`).join("");
  }
  if (FALLBACK.projects !== "coded") {
    return [1, 2, 3]
      .map((n) => `<div class="tile">${placeholder(`work-${slug(work)}-${n}.jpg`, "ph-fill")}</div>`)
      .join("");
  }
  const [a, b, d] = work.c;
  return [[b, a, d], [d, b, a], [a, d, b]]
    .map((colors, i) => `<div class="tile">${codedCover(colors, work.k + i + 1)}</div>`)
    .join("");
}

/* Click a project image to see it full size */
function enableLightbox() {
  const images = $$(".prj .tile img");
  if (!images.length) return;

  let box = $("#lightbox");
  if (!box) {
    box = document.createElement("dialog");
    box.id = "lightbox";
    box.innerHTML = `<button type="button" class="lb-close" aria-label="Close">×</button><img alt="">`;
    box.addEventListener("click", () => box.close()); // click anywhere to close (Esc works too)
    document.body.append(box);
  }
  const big = $("img", box);

  images.forEach((img) => {
    const open = () => {
      big.src = img.src;
      big.alt = img.alt;
      box.showModal();
    };
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", "View larger");
    img.addEventListener("click", open);
    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

const videoHTML = (work) =>
  work.video
    ? `<div class="vid"><video src="${encodeURI(work.video)}" controls playsinline preload="metadata"></video></div>`
    : "";

function projectPage(projectSlug) {
  const index = WORK.findIndex((w) => slug(w) === projectSlug);
  if (index < 0) {
    app.innerHTML = `<div class="page-h"><h2>Project not found</h2><p class="page-sub"><a href="#/work">Back to all work</a></p></div>`;
    return;
  }
  const work = WORK[index];
  const upNext = WORK[(index + 1) % WORK.length];

  app.innerHTML = `
    ${sprigHTML()}
    <div class="prj">
      <a class="back" href="#/work">Back to work</a>
      <h1 class="ptitle">${work.t}</h1>
      <div class="pmeta">
        <div><span>Discipline</span>${work.d}</div>
        <div><span>Year</span>${work.y}</div>
        <div><span>Role</span>${work.r}</div>
      </div>
      <div class="tile">${cover(work)}</div>
      ${videoHTML(work)}
      ${sections(work)
        .map(([heading, text]) => `<div class="rs"><h2>${heading}</h2><p>${text}</p></div>`)
        .join("")}
      <div class="pgal">${gallery(work)}</div>
      <a class="next" href="#/work/${slug(upNext)}">Next project: ${upNext.t}</a>
    </div>`;

    enableLightbox();
}

/* ---------- resume ---------- */

function resumePage() {
  const preview = assets.resume
    ? `<img src="${assets.resume}" alt="Preview of my resume">`
      : `<object data="${RESUME_PDF}#toolbar=0&navpanes=0&view=FitH" type="application/pdf">
         <p class="rfallback">Preview not available here. <a href="${RESUME_PDF}" target="_blank" rel="noopener">Open the PDF</a></p>
       </object>`;

  app.innerHTML = `
    <div class="resume-head">
      <h2>Resume</h2>
      <a class="btn noprint" href="${RESUME_PDF}" target="_blank" rel="noopener" download>Download / Print PDF</a>
    </div>
    <div class="resume">
      <div class="rframe"><div class="rpage">${preview}</div></div>
      <section class="skills" aria-labelledby="skills-title">
        <h3 id="skills-title">Skills</h3>
        <ul>
          ${SKILLS.map(([abbr, name]) => `<li><span class="dot" aria-hidden="true">${abbr}</span><span>${name}</span></li>`).join("")}
        </ul>
      </section>
    </div>`;
}

/* ---------- contact ---------- */

function contactPage() {
  app.innerHTML = `
    ${sprigHTML()}
    <div class="page-h">
      <h2>Let's make something together</h2>
      <p class="page-sub">Tell me about your project. I reply within two working days.</p>
    </div>
    <div class="contact">
      <div>
        <label for="name">Name</label><input id="name" autocomplete="name">
        <label for="email">Email</label><input id="email" type="email" autocomplete="email">
        <label for="message">Message</label><textarea id="message" rows="6"></textarea>
        <button type="button" class="btn" id="send">Send message</button>
      </div>
      <div class="links">
        <a href="mailto:${ME.email}">${ME.email}</a>
        ${ME.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`).join("")}
      </div>
    </div>`;

  /* Opens the visitor's email app with the message filled in */
  $("#send").onclick = () => {
    const name = $("#name").value;
    const email = $("#email").value;
    const message = $("#message").value;
    const subject = encodeURIComponent(`Hello from ${name || "your portfolio"}`);
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
    location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
  };
}

/* ======================================================================
   6. BUBBLES: draggable, drifting hobby pills
   ====================================================================== */

let bubbleFrame = 0;

function startBubbles() {
  const field = $(".field");
  const pills = $$(".pill", field);
  const note = $(".note");
  let selected = -1;
  const cruise = reduceMotion ? 0.15 : 0.4; 

  /* One physics body per pill, spread out with golden-ratio offsets */
  const bodies = pills.map((_, i) => ({
    x: ((i * 0.618 + 0.05) % 1) * Math.max(100, field.clientWidth - 160),
    y: ((i * 0.382 + 0.12) % 1) * Math.max(100, field.clientHeight - 60),
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    dragging: false,
    travelled: 0, // how far the pointer moved, to tell a tap from a drag
    lastX: 0,
    lastY: 0,
  }));

  const select = (i) => {
    selected = selected === i ? -1 : i;
    pills.forEach((pill, j) => {
      pill.classList.toggle("on", j === selected);
      pill.setAttribute("aria-pressed", j === selected);
    });
    note.textContent = selected >= 0 ? HOBBIES[selected][2] : DEFAULT_NOTE;
  };

  pills.forEach((pill, i) => {
    const body = bodies[i];
    const release = () => {
      if (!body.dragging) return;
      body.dragging = false;
      if (body.travelled < 5) select(i); // barely moved: treat it as a tap
    };

    pill.addEventListener("pointerdown", (event) => {
      Object.assign(body, { dragging: true, travelled: 0, lastX: event.clientX, lastY: event.clientY });
      pill.setPointerCapture(event.pointerId);
    });
    pill.addEventListener("pointermove", (event) => {
      if (!body.dragging) return;
      const dx = event.clientX - body.lastX;
      const dy = event.clientY - body.lastY;
      body.x += dx;
      body.y += dy;
      body.vx = dx * 0.6; // carry the throw into the drift
      body.vy = dy * 0.6;
      body.travelled += Math.abs(dx) + Math.abs(dy);
      body.lastX = event.clientX;
      body.lastY = event.clientY;
    });
    pill.addEventListener("pointerup", release);
    pill.addEventListener("pointercancel", release);
    pill.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select(i);
      }
    });
  });

  const separateOverlaps = () => {
    for (let a = 0; a < pills.length; a++) {
      for (let b = a + 1; b < pills.length; b++) {
        const A = bodies[a];
        const B = bodies[b];
        const dx = A.x + pills[a].offsetWidth / 2 - (B.x + pills[b].offsetWidth / 2);
        const dy = A.y + pills[a].offsetHeight / 2 - (B.y + pills[b].offsetHeight / 2);
        const overlapX = (pills[a].offsetWidth + pills[b].offsetWidth) / 2 - Math.abs(dx);
        const overlapY = (pills[a].offsetHeight + pills[b].offsetHeight) / 2 - Math.abs(dy);
        if (overlapX <= 0 || overlapY <= 0) continue;

        /* push along whichever direction needs the smaller shove */
        if (overlapX < overlapY) {
          const push = (overlapX / 2) * (dx < 0 ? -1 : 1);
          if (!A.dragging) A.x += push;
          if (!B.dragging) B.x -= push;
          [A.vx, B.vx] = [B.vx, A.vx];
        } else {
          const push = (overlapY / 2) * (dy < 0 ? -1 : 1);
          if (!A.dragging) A.y += push;
          if (!B.dragging) B.y -= push;
          [A.vy, B.vy] = [B.vy, A.vy];
        }
      }
    }
  };

  const tick = () => {
    bodies.forEach((body, i) => {
      const pill = pills[i];

      if (!body.dragging) {
        body.x += body.vx;
        body.y += body.vy;

        /* a flicked pill slows down, but never below cruising speed, so it can't rest in a corner */
        const current = Math.hypot(body.vx, body.vy);
        const target = Math.max(cruise, current * 0.992);
        if (current > 0) {
          body.vx *= target / current;
          body.vy *= target / current;
        } else {
          const angle = Math.random() * Math.PI * 2;
          body.vx = Math.cos(angle) * cruise;
          body.vy = Math.sin(angle) * cruise;
        }
      }

      /* bounce off the edges of the field */
      const maxX = Math.max(0, field.clientWidth - pill.offsetWidth);
      const maxY = Math.max(0, field.clientHeight - pill.offsetHeight);
      if (body.x < 0) [body.x, body.vx] = [0, Math.abs(body.vx)];
      if (body.x > maxX) [body.x, body.vx] = [maxX, -Math.abs(body.vx)];
      if (body.y < 0) [body.y, body.vy] = [0, Math.abs(body.vy)];
      if (body.y > maxY) [body.y, body.vy] = [maxY, -Math.abs(body.vy)];
    });

    separateOverlaps();

    bodies.forEach((body, i) => {
      pills[i].style.transform = `translate(${body.x}px, ${body.y}px)`;
    });
    bubbleFrame = requestAnimationFrame(tick);
  };

  /* wait one frame so the page has its real size before the pills are spread out */
  requestAnimationFrame(() => {
    bodies.forEach((body, i) => {
      body.x = ((i * 0.618 + 0.05) % 1) * Math.max(100, field.clientWidth - 160);
      body.y = ((i * 0.382 + 0.12) % 1) * Math.max(100, field.clientHeight - 60);
    });
    tick();
  });
}

/* ======================================================================
   7. ROUTER and light/dark toggle
   ====================================================================== */

function route() {
  cancelAnimationFrame(bubbleFrame);

  const [section, projectSlug] = (location.hash.replace(/^#\//, "") || "home").split("/");
  if (section === "work" && projectSlug) projectPage(projectSlug);
  else if (section === "work") workPage();
  else if (section === "resume") resumePage();
  else if (section === "contact") contactPage();
  else homePage();

  $$("nav a").forEach((link) => {
    if (link.dataset.r === section) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  window.scrollTo(0, 0);
}

addEventListener("hashchange", route);
Promise.all(SLOTS.map(loadAsset)).then(() => {
  console.info("Custom assets found:", Object.keys(assets));
  route();
});

/* ---------- light / dark toggle ---------- */

const themeButton = $("#theme");
const isDark = () =>
  document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
const updateThemeLabel = () => (themeButton.textContent = isDark() ? "Light mode" : "Dark mode");

themeButton.onclick = () => {
  document.documentElement.dataset.theme = isDark() ? "light" : "dark";
  updateThemeLabel();
};
updateThemeLabel();