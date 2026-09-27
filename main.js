/* ---------------- DATA ---------------- */
const projects = [
  {
    id:'northwind-coffee', accent:'coral', title:'Northwind Coffee', category:'branding', year:'2025',
    role:'Brand Identity, Packaging', tools:'Illustrator, Photoshop',
    blurb:'A full identity system for a small-batch roaster, built around a mark that works as well stamped on a burlap sack as it does on a delivery van.',
    body:[
      "Northwind came to us with a strong product and no visual language to match it. We started from the roasting process itself — the way beans darken in stages — and used that as the basis for a tonal palette that shifts across the product line.",
      "The wordmark borrows its slight forward lean from the tilt of a pour-over kettle. It's paired with a single-color stamp mark that holds up at the size of a coffee bag label or a five-story mural, which the client used for their roastery's street-facing wall six months after launch."
    ],
    highlights:[
      "Roast-stage palette applied consistently across bags, cups and signage",
      "Single-color stamp mark scales from a label to a building-sized mural",
      "Guidelines handed off let the client's print shop reproduce it without review"
    ],
    color:'blue'
  },
  {
    id:'fauna-app', accent:'teal', title:'Fauna', category:'product', year:'2025',
    role:'Product Design, Design System', tools:'Figma, Framer',
    blurb:'A plant-identification app redesigned from the ground up, with a component library built to survive three more years of feature requests.',
    body:[
      "Fauna's original app had grown feature by feature for four years with no system behind it. Before touching a single screen, we audited every existing pattern and rebuilt the product on a token-based design system so future features would inherit consistency instead of fighting it.",
      "The camera-first identification flow was the core of the redesign — we cut the steps from capture to result from six taps to two, and used motion only where it communicates state, like a scan completing or a match being found."
    ],
    highlights:[
      "Identification flow shortened from six taps to two",
      "Full token-based design system shipped alongside the redesign",
      "Motion used only to communicate state changes, not for decoration"
    ],
    color:'blue'
  },
  {
    id:'glass-studio', accent:'marigold', title:'Glass Studio', category:'branding', year:'2024',
    role:'Identity, Art Direction', tools:'Illustrator, InDesign',
    blurb:'Identity and print system for an architectural photography studio, designed to stay quiet and let the work carry the page.',
    body:[
      "Glass Studio shoots buildings, not products, so the brief was to design an identity that disappears next to the photography. We landed on a single condensed typeface used at only two sizes, and let generous white space do the work a logo usually does.",
      "The system extends into a print portfolio and a set of proposal templates the studio's five photographers use directly, without needing a designer involved for every new pitch."
    ],
    highlights:[
      "One typeface, two sizes — kept intentionally quiet next to the photography",
      "Proposal templates let five photographers self-serve new pitches",
      "Print portfolio extended the identity without a second design pass"
    ],
    color:'blue'
  },
  {
    id:'transit-os', accent:'coral', title:'Transit OS', category:'product', year:'2024',
    role:'UX Research, Interaction Design', tools:'Figma, Maze',
    blurb:'A dispatcher console for a regional transit authority, redesigned after six weeks of shadowing dispatchers on live shifts.',
    body:[
      "The existing dispatch software required operators to cross-reference four separate screens during a service disruption. We spent six weeks observing live shifts before changing anything, and found that the real bottleneck wasn't information density — it was that related information lived in unrelated places.",
      "The redesign consolidates route status, vehicle location, and driver messaging into a single working view, with disruption handling built as a guided flow rather than a form to fill in under pressure."
    ],
    highlights:[
      "Six weeks of shift-shadowing informed the redesign before any screens changed",
      "Four separate screens consolidated into one working view",
      "Disruption handling rebuilt as a guided flow instead of a form"
    ],
    color:'blue'
  },
  {
    id:'loop-reel', accent:'teal', title:'Loop Reel', category:'motion', year:'2024',
    role:'Motion Design, Animation', tools:'After Effects, Cinema 4D',
    blurb:'A set of looping brand animations for a music festival\'s social channels, designed to work silently in a scrolling feed.',
    body:[
      "Most of this work is watched with the sound off, mid-scroll, for under two seconds before a decision to keep watching gets made. Every loop was built around a single clear motion idea readable in that window, rather than a sequence that needs time to pay off.",
      "The set shipped as fourteen loops sharing one motion vocabulary, so the festival's channel felt consistent even when a different loop ran every day for two weeks."
    ],
    highlights:[
      "Every loop reads as one clear idea inside a two-second, sound-off window",
      "Fourteen loops shipped sharing a single motion vocabulary",
      "A new loop ran daily for two weeks without breaking visual consistency"
    ],
    color:'blue'
  },
  {
    id:'verdant-market', accent:'marigold', title:'Verdant Market', category:'branding', year:'2023',
    role:'Brand Identity, Signage', tools:'Illustrator, Photoshop',
    blurb:'Identity and wayfinding for an indoor market hall, built to be produced cheaply by whoever is running the sign shop that week.',
    body:[
      "Verdant's signage needed to be reproducible by whichever vendor was on hand — no specialty printing, no die-cuts. The system uses one stencil-friendly typeface and a two-color palette that photocopies without loss, so new vendor signage stays on-brand without a design review.",
      "Eighteen months after launch, the market's own tenants are producing new signs from the toolkit without involving the original studio, which was the actual measure of success for this project."
    ],
    highlights:[
      "Two-color, stencil-friendly system designed to survive a photocopier",
      "No specialty printing or die-cuts required from any vendor",
      "Tenants producing on-brand signage on their own 18 months post-launch"
    ],
    color:'blue'
  },
];

const categories = [
  {id:'all', label:'All work'},
  {id:'branding', label:'Branding'},
  {id:'product', label:'Product Design'},
  {id:'motion', label:'Motion'},
];

const hobbies = [
  {label:'Film photography', top:'10%', left:'6%', tone:'coral'},
  {label:'Ceramics', top:'62%', left:'4%', tone:'marigold'},
  {label:'Trail running', top:'14%', left:'56%', tone:'plum'},
  {label:'Vinyl digging', top:'68%', left:'42%', tone:'coral'},
  {label:'Cooking', top:'40%', left:'26%', tone:'marigold'},
  {label:'Sketchbooks', top:'58%', left:'76%', tone:'plum'},
];

const software = [
  {abbr:'Fg', name:'Figma'},
  {abbr:'Ai', name:'Illustrator'},
  {abbr:'Ps', name:'Photoshop'},
  {abbr:'Pr', name:'Premiere Pro'},
  {abbr:'Ae', name:'After Effects'},
  {abbr:'Cc', name:'CapCut'},
  {abbr:'Bl', name:'Blender'},
  {abbr:'My', name:'Maya'},
  {abbr:'Js', name:'JavaScript'},
];

/* ---------------- SVG HELPERS (abstract per-project marks) ---------------- */
function svgShape(kind){
  const white = '#ffffff';
  const shapes = {
    circle: `<svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice"><circle cx="300" cy="90" r="70" fill="${white}" opacity="0.9"/><rect x="30" y="150" width="180" height="140" rx="18" fill="${white}" opacity="0.25"/></svg>`,
    grid: `<svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice"><rect x="40" y="40" width="90" height="90" fill="${white}" opacity="0.9"/><rect x="150" y="40" width="90" height="90" fill="${white}" opacity="0.4"/><rect x="40" y="150" width="90" height="90" fill="${white}" opacity="0.4"/><rect x="150" y="150" width="90" height="90" fill="${white}" opacity="0.9"/></svg>`,
    lines: `<svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice"><rect x="0" y="60" width="400" height="14" fill="${white}" opacity="0.85"/><rect x="0" y="150" width="260" height="14" fill="${white}" opacity="0.5"/><rect x="0" y="240" width="330" height="14" fill="${white}" opacity="0.7"/></svg>`,
    triangle: `<svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice"><polygon points="200,50 340,270 60,270" fill="${white}" opacity="0.85"/></svg>`,
    stack: `<svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice"><rect x="60" y="60" width="280" height="60" rx="10" fill="${white}" opacity="0.9"/><rect x="60" y="140" width="280" height="60" rx="10" fill="${white}" opacity="0.55"/><rect x="60" y="220" width="180" height="60" rx="10" fill="${white}" opacity="0.3"/></svg>`,
    burst: `<svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice"><circle cx="120" cy="200" r="110" fill="${white}" opacity="0.15"/><circle cx="120" cy="200" r="70" fill="${white}" opacity="0.35"/><circle cx="120" cy="200" r="30" fill="${white}" opacity="0.9"/></svg>`
  };
  return shapes[kind] || shapes.circle;
}
const shapeMap = {
  'northwind-coffee':'circle', 'fauna-app':'grid', 'glass-studio':'lines',
  'transit-os':'stack', 'loop-reel':'burst', 'verdant-market':'triangle'
};