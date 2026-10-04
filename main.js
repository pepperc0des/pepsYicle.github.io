/* ===== EDIT YOUR CONTENT HERE ===== */

/* What shows where you haven't added your own image yet (see assets/README.md):
     "placeholder" = a dashed box labelled with the file name to use
     "coded"       = my coded version (textured letter tiles, drawn flowers and butterflies, geometric covers) */
const FALLBACK = {
  letters: "placeholder", // the nine PortfoLIo title tiles
  art: "placeholder", // tulips, lavender, butterflies and the torn paper patch
  projects: "placeholder", // project covers and project images
};
const ME = {
  name: "Yi",
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
    t: "Fern & Field",
    d: "Brand",
    y: 2026,
    r: "Identity, packaging",
    c: ["#0A7136", "#EDEDED", "#229B36"],
    k: 0,
    p: "A botanical identity system for a small-batch tea company: logo, label system and shelf-ready packaging.",
  },
  {
    t: "Long Way Home",
    d: "Photo",
    y: 2025,
    r: "Photography, editing",
    c: ["#1A1A1A", "#229B36", "#EDEDED"],
    k: 1,
    p: "A film photo series on trail towns, shot on 35mm and sequenced as a printed zine.",
  },
  {
    t: "Canopy App",
    d: "Digital",
    y: 2026,
    r: "UX/UI, prototyping",
    c: ["#0A715C", "#EDEDED", "#1A1A1A"],
    k: 2,
    p: "Mobile app concept for logging outdoor walks, from research to a clickable prototype.",
  },
  {
    t: "Slow Motion",
    d: "Motion",
    y: 2025,
    r: "Animation, sound",
    c: ["#116006", "#EDEDED", "#229B36"],
    k: 3,
    p: "A 45-second title sequence built from geometric shapes that grow like vines.",
  },
  {
    t: "Spinning Records",
    d: "Print",
    y: 2024,
    r: "Editorial, illustration",
    c: ["#34791B", "#1A1A1A", "#EDEDED"],
    k: 4,
    p: "Poster and sleeve series for a local vinyl night, printed in two-colour risograph.",
  },
  {
    t: "Grounded Social",
    d: "Brand",
    y: 2026,
    r: "Strategy, content",
    c: ["#EDEDED", "#229B36", "#1A1A1A"],
    k: 5,
    p: "A social content system that turns one brand story into a month of consistent posts.",
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
const EXP = [
  [
    "Freelance Designer",
    "Self-employed · 2024 to present",
    "Brand, digital and media projects for small businesses and creators.",
  ],
  [
    "Design Intern",
    "Studio Name · 2025",
    "Supported social content, layout and photo editing for client campaigns.",
  ],
];
const EDU = [
  ["B.A. in Design", "University Name · 2022 to 2026", "Focus on visual communication and media."],
];
const SKILLS = [
  "Brand identity",
  "Social strategy",
  "Layout & type",
  "Photography",
  "Motion graphics",
  "UX/UI",
  "Prototyping",
  "Figma",
  "Adobe Suite",
  "Storytelling",
];
/* ================================== */