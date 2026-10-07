/* ======================================================================
   CONTENT: edit your name, hobbies, projects and file paths here
   ====================================================================== */
 
/* ===== EDIT YOUR CONTENT HERE ===== */
 
/* What shows where you haven't added your own image yet (see assets/README.md):
     "placeholder" = a dashed box labelled with the file name to use
     "coded"       = my coded version (textured letter tiles, drawn flowers and butterflies, geometric covers) */
/* Where your files live in the repo. If you rename or move a file, change its path here.
   Anything not listed is looked for as assets/<name>.png or .jpg (see assets/README.md). */
const FILES = {
  hero: "assets/temp_port_image.png",
  "letter-1": "assets/Letter_P@4x.png",
  "letter-2": "assets/Letter_O_001@4x.png",
  "letter-3": "assets/Letter_R@4x.png",
  "letter-4": "assets/Letter_T@4x.png",
  "letter-5": "assets/Letter_F@4x.png",
  "letter-6": "assets/Letter_O_002@4x.png",
  "letter-7": "assets/Letter_L@4x.png",
  "letter-8": "assets/Letter_I@4x.png",
  "letter-9": "assets/Letter_O_003@4x.png",
  "work-british-shorthair-adopt-ad": "projects/British Shorthair Adopt Ad (1).jpg",
  "work-maine-coon-adopt-ad": "projects/Maine Coon Adopt Ad (1).jpg",
  "work-ragdoll-adopt-ad": "projects/Ragdoll Adopt Ad (1).jpg",
  "work-isometric-room": "projects/Isometric_Room.jpg",
  // extra project images (shown in the grid on a project page), for example:
  // "work-isometric-room-1": "projects/Isometric_Room_detail.jpg",
};
 
const FALLBACK = {
  letters: "placeholder", // the nine PortfoLIo title tiles
  art: "placeholder", // tulips, lavender, butterflies and the torn paper patch
  projects: "placeholder", // project covers and project images
};
const ME = {
  name: "Yi Li",
  statement: "Strategic visuals and stories that stick.",
  email: "yilicareer06@gmail.com",
  links: [
    ["Instagram", "https://instagram.com/"],
    ["LinkedIn", "https://linkedin.com/"],
  ],
};
const HOBBIES = [
  ["Working out", "#0A7136"],
  ["Hiking", "#34791B"],
  ["Video games", "#1A1A1A"],
  ["Editor", "#116006"],
  ["Photography", "#0A715C"],
  ["Eating out", "#229B36"],
];
const NOTES = {
  "Working out": "Discipline I carry into every project.",
  Hiking: "Where I reset and collect ideas.",
  "Video games": "Worlds built with sharp UI and story.",
  Editor: "Cutting things down until they land.",
  Photography: "Framing, light, patience.",
  "Eating out": "Always chasing a good menu and a better room.",
};
const WORK = [
  {
    t: "British Shorthair Adopt Ad",
    d: "Graphic Design",
    y: 2026,
    r: "Graphic design",
    c: ["#0A7136", "#EDEDED", "#229B36"],
    k: 0,
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
    y: 2026,
    r: "Graphic design",
    c: ["#0A715C", "#EDEDED", "#1A1A1A"],
    k: 2,
    p: "An adoption advertisement design. Add the goal, audience and process here.",
  },
  {
    t: "Isometric Room",
    d: "Illustration",
    y: 2026,
    r: "Illustration",
    c: ["#34791B", "#1A1A1A", "#EDEDED"],
    k: 3,
    p: "An isometric room illustration. Add the tools, concept and process here.",
  },
];
/* Give a project its own sections by adding  s: [["Heading","Text"], ...]  to it above. */
const SECS = (w) =>
  w.s || [
    ["Overview", w.p],
    ["The challenge", "Describe the brief here: who it was for and what needed to change."],
    ["Process", "Walk through research, sketches, iterations and the key decisions."],
    ["Outcome", "Share the results, what you learned, and where the work lives now."],
  ];
/* Resume page: add your resume as assets/resume.pdf (the download button)
   and a picture of it as assets/resume.png (the preview). Edit the software list below. */
const RESUME_PDF = "assets/Yi_Li_Resume_Updated.pdf";
const SOFTWARE = [
  ["Fg", "Figma"],
  ["Ai", "Illustrator"],
  ["Ps", "Photoshop"],
  ["Pr", "Premiere Pro"],
  ["Ae", "After Effects"],
  ["Ht", "HTML/CSS"],
  ["Js", "JavaScript"],
  ["Re", "React"],
];
/* ================================== */
 
/* ======================================================================
   CORE: shared helpers
   ====================================================================== */
 
/* Shared helpers: DOM shortcuts, motion preference, slugs */
 
const $ = (s, r = document) => r.querySelector(s);
const app = $("#app");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const slug = (w) =>
  w.t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const WC = 'style="filter:url(#wc)"';
const DEFAULT_NOTE = "Drag the bubbles around. Tap one to learn more.";
 
/* ======================================================================
   ILLUSTRATIONS: coded art and title tiles
   ====================================================================== */
 
/* Coded illustrations (used when no custom image is found in /assets) */
 
/* ---------- illustrations ---------- */
function tile([a, b, d], k) {
  const S = [
    `<circle cx="130" cy="150" r="80" fill="${b}"/><rect x="180" y="60" width="130" height="130" fill="${d}"/>`,
    `<rect x="60" y="50" width="120" height="160" fill="${b}"/><rect x="150" y="90" width="120" height="160" fill="${d}" opacity=".85"/>`,
    `<rect x="90" y="40" width="130" height="220" rx="26" fill="${b}"/><circle cx="155" cy="210" r="14" fill="${d}"/>`,
    `<path d="M40 240 Q120 60 200 150 T360 40" stroke="${b}" stroke-width="14" fill="none"/><circle cx="360" cy="40" r="24" fill="${d}"/>`,
    `<circle cx="200" cy="150" r="100" fill="${d}"/><circle cx="200" cy="150" r="60" fill="${a}"/><circle cx="200" cy="150" r="14" fill="${b}"/>`,
    `<path d="M200 40 L330 250 H70 Z" fill="${b}"/><circle cx="90" cy="70" r="30" fill="${d}"/>`,
  ];
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Project artwork">
      <rect width="400" height="300" fill="${a}"/>${S[k % 6]}</svg>`;
}
function lav(cls) {
  let buds = "";
  for (let i = 0; i < 8; i++) {
    const y1 = 30 + i * 11,
      y2 = 36 + i * 11;
    buds += `<ellipse cx="23" cy="${y1}" rx="5.5" ry="9" transform="rotate(-25 23 ${y1})" fill="${i % 2 ? "#0A715C" : "#116006"}"/><ellipse cx="37" cy="${y2}" rx="5.5" ry="9" transform="rotate(25 37 ${y2})" fill="${i % 2 ? "#116006" : "#0A715C"}"/>`;
  }
  return `<svg class="${cls}" ${WC} viewBox="0 0 60 200" aria-hidden="true">
      <path d="M30 200C29 150 31 100 30 30" stroke="#34791B" stroke-width="2.5" fill="none"/>
      <path d="M30 200C10 170 6 150 8 130C22 140 30 165 30 200Z" fill="#229B36" opacity=".8"/>
      <path d="M30 200C50 175 54 160 52 142C38 150 30 170 30 200Z" fill="#0A7136" opacity=".8"/>${buds}<ellipse cx="30" cy="20" rx="4.5" ry="10" fill="#0A715C"/>
      </svg>`;
}
const tulip = (cls) => `<svg class="${cls}" ${WC} viewBox="0 0 70 200" aria-hidden="true">
      <path d="M35 200C34 150 36 110 35 70" stroke="#34791B" stroke-width="3" fill="none"/>
      <path d="M35 200C8 170 4 120 12 90C30 110 38 150 35 200Z" fill="#229B36" opacity=".85"/>
      <path d="M35 200C62 180 68 140 60 112C44 128 34 160 35 200Z" fill="#34791B" opacity=".85"/>
      <path d="M14 36C14 18 22 8 26 6L35 22L44 6C48 8 56 18 56 36C56 60 46 74 35 74C24 74 14 60 14 36Z" fill="#0A7136"/>
      <path d="M26 6C30 30 30 56 35 74C22 70 16 56 14 36C14 22 20 10 26 6Z" fill="#116006" opacity=".6"/>
      </svg>`;
function butterfly(cls) {
  const W = `<g class="wing"><path d="M60 50C42 2 4 8 8 40C11 62 42 62 60 50Z" fill="#0A715C"/><path d="M60 52C42 60 22 96 42 94C56 92 61 72 60 52Z" fill="#116006"/><circle cx="26" cy="36" r="6" fill="#EDEDED" opacity=".45"/></g>`;
  return `<svg class="${cls} bfl" ${WC} viewBox="0 0 120 100" aria-hidden="true">${W}<g transform="translate(120 0) scale(-1 1)">${W}</g>
      <ellipse cx="60" cy="52" rx="2.6" ry="18" fill="#1A1A1A"/>
      <path d="M59 36C54 26 50 24 48 22M61 36C66 26 70 24 72 22" stroke="#1A1A1A" stroke-width="1.2" fill="none"/>
      </svg>`;
}
/* ransom-note title: [letter, tile colour, text colour, tilt, edge shape] */
const RN = [
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
const ransom = () =>
  RN.map(([c, bg, fg, r, p], i) =>
    A[`letter-${i + 1}`]
      ? `<img class="rn-img" src="${A[`letter-${i + 1}`]}" alt="" aria-hidden="true">`
      : FALLBACK.letters !== "coded"
        ? `<span class="ph-slot ph-letter" aria-hidden="true"><i>${c}</i><b>letter-${i + 1}</b></span>`
        : `<span aria-hidden="true" class="rn p${p}" style="background-color:${bg};color:${fg};transform:rotate(${r}deg)">${c}</span>`,
  ).join("");
const PAPER = Array(14)
  .fill(HOBBIES.map((h) => h[0].toLowerCase()).join("  ·  "))
  .join("  ·  ");
 
/* ======================================================================
   ASSETS: finds your images and swaps them in
   ====================================================================== */
 
/* ---------- your own assets (optional) ----------
   Drop image files into the  assets/  folder using the names listed in assets/README.md.
   Anything found replaces the coded version automatically; anything missing falls back to the coded one. */
const EXTS = ["png", "jpg"],
  A = {};
const probe = (name) =>
  new Promise((res) => {
    const urls = FILES[name] ? [encodeURI(FILES[name])] : EXTS.map((e) => `assets/${name}.${e}`);
    let i = 0;
    const next = () => {
      if (i >= urls.length) return res();
      const im = new Image(),
        url = urls[i++];
      im.onload = () => {
        A[name] = url;
        res();
      };
      im.onerror = next;
      im.src = url;
    };
    next();
  });
const SLOTS = [
  "hero",
  "title",
  "paper",
  "resume",
  "tulip-1",
  "tulip-2",
  "lavender-1",
  "lavender-2",
  "butterfly-1",
  "butterfly-2",
  ...RN.map((_, i) => `letter-${i + 1}`),
  ...WORK.flatMap((w) => [
    `work-${slug(w)}`,
    ...[1, 2, 3, 4, 5, 6].map((n) => `work-${slug(w)}-${n}`),
  ]),
];
/* Dashed, labelled box that stands in for an image you haven't added yet */
const placeholder = (file, cls = "") =>
  `<span class="ph-slot ${cls}" role="img" aria-label="Placeholder: ${file}"><b>${file}</b></span>`;
const art = (slot, cls, fallback) =>
  A[slot]
    ? `<img class="${cls} art${slot.startsWith("butterfly") ? " bfl" : ""}" src="${A[slot]}" alt="" aria-hidden="true">`
    : FALLBACK.art === "coded"
      ? fallback
      : placeholder(`${slot}.png`, cls);
const cover = (w) =>
  A[`work-${slug(w)}`]
    ? `<img class="cover" src="${A[`work-${slug(w)}`]}" alt="${w.t}">`
    : FALLBACK.projects === "coded"
      ? tile(w.c, w.k)
      : placeholder(`work-${slug(w)}.jpg`, "ph-fill");
 
/* ======================================================================
   PAGES: landing, work, project, resume, contact
   ====================================================================== */
 
/* Pages: landing, work, project, resume, contact */
 
/* ---------- pages ---------- */
const sprig = () =>
  `<div class="sprig" aria-hidden="true">${art("lavender-1", "sp1", lav("sp1"))}${art("butterfly-1", "sp2", butterfly("sp2"))}</div>`;
 
function gallery(w) {
  const imgs = [1, 2, 3, 4, 5, 6].map((n) => A[`work-${slug(w)}-${n}`]).filter(Boolean),
    [a, b, d] = w.c;
  if (imgs.length)
    return imgs
      .map((src) => `<div class="tile"><img class="cover" src="${src}" alt=""></div>`)
      .join("");
  if (FALLBACK.projects !== "coded")
    return [1, 2, 3]
      .map((n) => `<div class="tile">${placeholder(`work-${slug(w)}-${n}.jpg`, "ph-fill")}</div>`)
      .join("");
  return `<div class="tile">${tile([b, a, d], w.k + 1)}</div><div class="tile">${tile([d, b, a], w.k + 2)}</div><div class="tile">${tile([a, d, b], w.k + 3)}</div>`;
}
const paperHTML = () =>
  A.paper
    ? `<div class="paper paper-img" aria-hidden="true"><img src="${A.paper}" alt=""></div>`
    : FALLBACK.art === "coded"
      ? `<div class="paper" aria-hidden="true"><span>${PAPER}</span></div>`
      : `<div class="paper paper-ph" aria-hidden="true">${placeholder("paper.png", "ph-fill")}</div>`;
const titleHTML = () =>
  A.title ? `<span class="title-img"><img src="${A.title}" alt="PortfoLIo"></span>` : ransom();
 
function homePage() {
  const pills = HOBBIES.map(
    ([h, c]) =>
      `<button type="button" class="pill" style="background:${c};color:${c}" aria-pressed="false"><span style="color:${c === "#229B36" ? "#1A1A1A" : "#fff"}">${h}</span></button>`,
  ).join("");
  app.innerHTML = `<section class="landing"><div class="hero"><div>
    <h1 class="rn-h" aria-label="PortfoLIo">${titleHTML()}</h1><p class="lead">${ME.statement}</p>
    <div class="btns"><a class="btn" href="#/work">See my work</a><a class="btn ghost" href="#/contact">Get in touch</a></div></div>
    <div class="pwrap">${paperHTML()}${art("butterfly-1", "bf1", butterfly("bf1"))}
      <div class="photo">${
        A.hero
          ? `<img class="cover" src="${A.hero}" alt="${ME.name}">`
          : `<div class="ph"><svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><circle cx="200" cy="210" r="110" fill="#0A715C"/><circle cx="290" cy="330" r="70" fill="#229B36" opacity=".8"/><rect x="60" y="300" width="110" height="110" fill="#0A7136"/></svg>
      <label class="noprint"><input type="file" accept="image/*"><span>Add your photo</span></label></div>`
      }</div></div></div>
    <div class="deco" aria-hidden="true">${art("tulip-1", "d1", tulip("d1"))}${art("lavender-1", "d2", lav("d2"))}${art("tulip-2", "d3", tulip("d3"))}${art("lavender-2", "d4", lav("d4"))}${art("butterfly-2", "bf2", butterfly("bf2"))}</div>
    <div class="field">${pills}</div><p class="note" aria-live="polite">${DEFAULT_NOTE}</p></section>`;
  $(".photo input")?.addEventListener("change", (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      $(".photo").innerHTML = `<img src="${r.result}" alt="${ME.name}">`;
    };
    r.readAsDataURL(f);
  });
  startBubbles();
}
 
/* work: horizontal scroll gallery */
let filter = "All";
function workPage() {
  const cats = ["All", ...new Set(WORK.map((w) => w.d))];
  const list = WORK.filter((w) => filter === "All" || w.d === filter);
  app.innerHTML = `${sprig()}<div class="page-h"><h2>Selected work</h2><p class="page-sub">Scroll sideways through projects across brand, digital, photo, motion and print.</p></div>
    <div class="tabs" role="group" aria-label="Filter by discipline">${cats.map((c) => `<button type="button" class="tab" data-c="${c}" aria-pressed="${filter === c}">${c}</button>`).join("")}</div>
    <div class="track" tabindex="0" aria-label="Projects, scroll horizontally">${list.map((w) => `<a class="hcard" href="#/work/${slug(w)}"><div class="tile">${cover(w)}</div><h3>${w.t}</h3><p class="meta">${w.d}, ${w.y}</p></a>`).join("")}</div>
    <div class="ctrl noprint"><button type="button" class="arrow" aria-label="Scroll left">←</button><div class="bar"><i style="width:20%"></i></div><button type="button" class="arrow" aria-label="Scroll right">→</button></div>`;
  const tr = $(".track"),
    bar = $(".bar i"),
    [prev, next] = app.querySelectorAll(".arrow");
  const go = (d) =>
    tr.scrollBy({ left: d * tr.clientWidth * 0.7, behavior: reduce ? "auto" : "smooth" });
  prev.onclick = () => go(-1);
  next.onclick = () => go(1);
  tr.addEventListener("scroll", () => {
    const m = tr.scrollWidth - tr.clientWidth;
    bar.style.width = 20 + (m > 0 ? tr.scrollLeft / m : 0) * 80 + "%";
  });
  app.querySelectorAll(".tab").forEach(
    (b) =>
      (b.onclick = () => {
        filter = b.dataset.c;
        workPage();
      }),
  );
}
 
function projectPage(s) {
  const i = WORK.findIndex((w) => slug(w) === s);
  if (i < 0) {
    app.innerHTML = `<div class="page-h"><h2>Project not found</h2><p class="page-sub"><a href="#/work">Back to all work</a></p></div>`;
    return;
  }
  const w = WORK[i],
    nx = WORK[(i + 1) % WORK.length],
    [a, b, d] = w.c;
  app.innerHTML = `${sprig()}<div class="prj"><a class="back" href="#/work">Back to work</a><h1 class="ptitle">${w.t}</h1>
    <div class="pmeta"><div><span>Discipline</span>${w.d}</div><div><span>Year</span>${w.y}</div><div><span>Role</span>${w.r}</div></div>
    <div class="tile">${cover(w)}</div>
    ${SECS(w)
      .map(([h, x]) => `<div class="rs"><h2>${h}</h2><p>${x}</p></div>`)
      .join("")}
    <div class="pgal">${gallery(w)}</div>
    <a class="next" href="#/work/${slug(nx)}">Next project: ${nx.t}</a></div>`;
}
 
function resumePage() {
  const preview = A.resume
    ? `<img src="${A.resume}" alt="Preview of my resume">`
    : `<object data="${RESUME_PDF}#toolbar=0&navpanes=0" type="application/pdf"><p class="rfallback">Preview not available here. <a href="${RESUME_PDF}" target="_blank" rel="noopener">Open the PDF</a></p></object>`;
  app.innerHTML = `<div class="resume-head">
      <h2>Resume</h2>
      <a class="btn noprint" href="${RESUME_PDF}" target="_blank" rel="noopener" download>Download / Print PDF</a>
    </div>
    <div class="resume">
      <div class="rframe"><div class="rpage">${preview}</div></div>
      <section class="software" aria-labelledby="sw">
        <h3 id="sw">Software</h3>
        <ul>${SOFTWARE.map(([abbr, name]) => `<li><span class="dot" aria-hidden="true">${abbr}</span><span>${name}</span></li>`).join("")}</ul>
      </section>
    </div>`;
}
 
function contactPage() {
  app.innerHTML = `${sprig()}<div class="page-h"><h2>Let's make something together</h2><p class="page-sub">Tell me about your project. I reply within two working days.</p></div>
    <div class="contact"><div><label for="n">Name</label><input id="n" autocomplete="name"><label for="m">Email</label><input id="m" type="email" autocomplete="email">
    <label for="g">Message</label><textarea id="g" rows="6"></textarea><button type="button" class="btn" id="send">Send message</button></div>
    <div class="links"><a href="mailto:${ME.email}">${ME.email}</a>${ME.links.map(([l, u]) => `<a href="${u}" target="_blank" rel="noopener">${l}</a>`).join("")}</div></div>`;
  $("#send").onclick = () => {
    const n = $("#n").value,
      m = $("#m").value,
      g = $("#g").value;
    location.href = `mailto:${ME.email}?subject=${encodeURIComponent("Hello from " + (n || "your portfolio"))}&body=${encodeURIComponent(g + "\n\n" + n + " (" + m + ")")}`;
  };
}
 
/* ======================================================================
   BUBBLES: draggable hobby pills
   ====================================================================== */
 
/* draggable, drifting hobby bubbles */
let raf = 0;
function startBubbles() {
  const box = $(".field"),
    els = [...box.querySelectorAll(".pill")],
    note = $(".note");
  const W = () => box.clientWidth,
    H = () => box.clientHeight;
  let on = -1;
  const st = els.map((_, i) => ({
    x: ((i * 0.618 + 0.05) % 1) * Math.max(100, W() - 160),
    y: ((i * 0.382 + 0.12) % 1) * Math.max(100, H() - 60),
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    drag: false,
    moved: 0,
    px: 0,
    py: 0,
  }));
  const toggle = (i) => {
    on = on === i ? -1 : i;
    els.forEach((e, j) => {
      e.classList.toggle("on", j === on);
      e.setAttribute("aria-pressed", j === on);
    });
    note.textContent = on >= 0 ? NOTES[HOBBIES[on][0]] : DEFAULT_NOTE;
  };
  els.forEach((e, i) => {
    const s = st[i];
    e.addEventListener("pointerdown", (ev) => {
      s.drag = true;
      s.px = ev.clientX;
      s.py = ev.clientY;
      s.moved = 0;
      e.setPointerCapture(ev.pointerId);
    });
    e.addEventListener("pointermove", (ev) => {
      if (!s.drag) return;
      const dx = ev.clientX - s.px,
        dy = ev.clientY - s.py;
      s.x += dx;
      s.y += dy;
      s.vx = dx * 0.6;
      s.vy = dy * 0.6;
      s.moved += Math.abs(dx) + Math.abs(dy);
      s.px = ev.clientX;
      s.py = ev.clientY;
    });
    e.addEventListener("pointerup", () => {
      s.drag = false;
      if (s.moved < 5) toggle(i);
    });
    e.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        toggle(i);
      }
    });
  });
  const loop = () => {
    st.forEach((s, i) => {
      const e = els[i];
      if (!s.drag && !reduce) {
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.996;
        s.vy *= 0.996;
        if (Math.hypot(s.vx, s.vy) < 0.2) {
          s.vx += (Math.random() - 0.5) * 0.06;
          s.vy += (Math.random() - 0.5) * 0.06;
        }
      }
      const mx = W() - e.offsetWidth,
        my = H() - e.offsetHeight;
      if (s.x < 0) {
        s.x = 0;
        s.vx = Math.abs(s.vx);
      }
      if (s.x > mx) {
        s.x = mx;
        s.vx = -Math.abs(s.vx);
      }
      if (s.y < 0) {
        s.y = 0;
        s.vy = Math.abs(s.vy);
      }
      if (s.y > my) {
        s.y = my;
        s.vy = -Math.abs(s.vy);
      }
      e.style.transform = `translate(${s.x}px,${s.y}px)`;
    });
    raf = requestAnimationFrame(loop);
  };
  loop();
}
 
/* ======================================================================
   MAIN: routing and light/dark toggle
   ====================================================================== */
 
/* ---------- router ---------- */
function route() {
  cancelAnimationFrame(raf);
  const h = location.hash.replace("#/", "") || "home",
    top = h.split("/")[0];
  if (top === "work" && h.includes("/")) projectPage(h.slice(5));
  else if (top === "work") workPage();
  else if (top === "resume") resumePage();
  else if (top === "contact") contactPage();
  else homePage();
  document
    .querySelectorAll("nav a")
    .forEach((a) =>
      a.dataset.r === top
        ? a.setAttribute("aria-current", "page")
        : a.removeAttribute("aria-current"),
    );
  window.scrollTo(0, 0);
}
addEventListener("hashchange", route);
Promise.all(SLOTS.map(probe)).then(() => {
  console.info("Custom assets found:", Object.keys(A));
  route();
});
 
/* ---------- light / dark toggle ---------- */
const themeBtn = $("#theme");
const isDark = () =>
  document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
const label = () => (themeBtn.textContent = isDark() ? "Light mode" : "Dark mode");
themeBtn.onclick = () => {
  document.documentElement.dataset.theme = isDark() ? "light" : "dark";
  label();
};
label();