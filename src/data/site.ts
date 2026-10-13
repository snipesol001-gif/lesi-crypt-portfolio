/* ------------------------------------------------------------------
   Central site data. All public copy lives here so the exact
   wording stays in one place and is easy to edit later.
------------------------------------------------------------------- */

// TODO: replace with a verified number of years before launch.
// Example: "3"
export const YEARS_IN_WEB3 = "4+";

export const SITE = {
  title: "Lesi Crypt | Web3 Community Manager & Operator",
  url: "https://lesicrypt.com",
  email: "olamilesi22@gmail.com",
  xHandle: "@lesi_crypt",
  xUrl: "https://x.com/lesi_crypt",
  telegramHandle: "@lesi_crypt",
  telegramUrl: "https://t.me/lesi_crypt",
  websiteLabel: "lesicrypt.com",
  websiteUrl: "https://lesicrypt.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Proof of Work", href: "#proof-of-work" },
  { label: "Currently Building", href: "#currently-building" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  status: "Available for select engagements",
  headline: "BIG LESI",
  subline: "Building Consistency Over Time.",
  roles: [
    "Space Host",
    "Community Manager",
    "Project Manager",
    "Content Writer",
  ],
  body: "Web3 builder, community leader and operator. I grow strong communities, host conversations that matter, and ship projects end to end for founders who want more than noise.",
  pfpTag: "Consistency, not hype.",
  stats: [
    { value: "30+", label: "Communities" },
    { value: "25+", label: "Founders" },
    { value: YEARS_IN_WEB3, label: "In Web3" },
  ],
};

export const TICKER_ITEMS = [
  "Space Hosting",
  "KOL",
  "Content Writing",
  "Project Managing",
  "Moderating",
  "Marketing",
  "Community Building",
] as const;

export const ABOUT = {
  label: "About.",
  heading: "A quiet operator in a loud industry.",
  paragraphs: [
    "I'm Lesi Crypt, a Web3 builder, community leader and crypto enthusiast. Since 2023 I've been in the trenches: growing communities, hosting spaces, coordinating teams, and turning early-stage projects into ecosystems people actually want to belong to.",
    "My approach is simple: show up, execute, repeat. No shortcuts, no performance. Just steady work that compounds, for the founders I partner with and the communities I steward.",
  ],
};

export const SERVICES = [
  {
    title: "Space Hosting",
    description:
      "Live X Spaces that turn strangers into believers. Moderated, produced and paced for real conversation, not filler.",
  },
  {
    title: "Community Management",
    description:
      "From Discord to X, I build the systems and rituals that keep a community engaged, informed and moving in one direction.",
  },
  {
    title: "Project Management",
    description:
      "Roadmaps, sprints, cross-team coordination. I keep founders focused on outcomes and ship the work between the milestones.",
  },
  {
    title: "Content Writing",
    description:
      "Threads, articles, launch copy and narrative. Clear writing that positions your project the way it deserves.",
  },
];

export const PROOF_PROJECTS = [
  {
    name: "LOVE Coin",
    handle: "@LOVECoin12X",
    role: "Community & Growth Contributor",
    image: "/images/logo-love-coin.png",
    imageAlt:
      "LOVE Coin logo, a gold coin engraved with the word LOVE and a heart detail",
    description:
      "Contributed to the growth of the LOVE ecosystem by strengthening community engagement, onboarding new members, and amplifying awareness across social platforms during an active build phase.",
    bullets: [
      "Community onboarding & moderation",
      "Growth & awareness campaigns",
      "Cross-platform engagement",
    ],
  },
  {
    name: "Educational X Spaces",
    role: "Space Host & Moderator",
    image: "/images/lesi-pfp.png",
    imageAlt:
      "Portrait of Big Lesi in a black hoodie and jacket, wearing a silver Big Lesi chain",
    description:
      "Hosted and moderated a series of project-focused X Spaces, increasing community participation, driving informative conversations and promoting partner updates.",
    bullets: [
      "Weekly Spaces production",
      "Guest coordination & moderation",
      "Community growth via consistent hosting",
    ],
  },
  {
    name: "DARO DeFi",
    handle: "@daro_defi",
    role: "Project Manager",
    image: "/images/logo-daro-defi.png",
    imageAlt:
      "DARO DeFi logo, an orange geometric emblem inside a circular badge",
    description:
      "Oversaw project growth and execution: coordinating teams across departments, supporting marketing strategy, tracking milestones and building strategic partnerships.",
    bullets: [
      "Roadmap & milestone tracking",
      "Cross-team coordination",
      "Marketing & partnerships support",
    ],
  },
];

export const BUILDING_PROJECTS = [
  {
    name: "Quantum Token (QTM)",
    role: "Project Manager / Community Builder",
    image: "/images/logo-quantum.png",
    imageAlt:
      "Quantum Token logo, a white cat with blue eyes encircled by a glowing ring",
    description:
      "An innovative DeFi ecosystem combining quantum-inspired mechanics with blockchain. Focused on sustainable tokenomics, community-driven development, cross-chain infrastructure, staking, governance and long-term ecosystem growth.",
    bullets: [
      "Community Growth",
      "Project Management",
      "Community Strategy",
      "Team Coordination",
      "Product Feedback",
      "Growth Planning",
    ],
    tags: [
      "Ethereum",
      "DeFi",
      "Staking",
      "Cross-chain",
      "Governance",
      "Web3",
    ],
    links: [
      { label: "Visit Website", href: "https://qtmtoken.com" },
      { label: "Visit X", href: "https://x.com/QuantumDefiQTM" },
    ],
  },
  {
    name: "ParlayIt (PARLAY)",
    role: "Project Manager / Community Growth",
    image: "/images/logo-parlayit.png",
    imageAlt:
      "ParlayIt logo, a gradient letter P inside a circular ring",
    description:
      "A Web3 sports prediction ecosystem transforming traditional parlays into ownable digital assets. Combining NFT ownership, competitive strategy, sports communities and GameFi mechanics into one premium experience.",
    bullets: [
      "Community Strategy",
      "Growth",
      "Project Management",
      "Marketing Coordination",
      "User Feedback",
      "Community Development",
    ],
    tags: ["NFT", "GameFi", "SportsFi", "Web3", "Community"],
    links: [
      { label: "Visit Website", href: "https://parlayit.io" },
      { label: "Visit X", href: "https://x.com/Parlayit_io" },
    ],
  },
];

export const X_QUOTES = [
  {
    quote:
      "Building takes time, and real communities are built through consistency.",
    href: "https://x.com/lesi_crypt/status/2109192278182940696",
  },
  {
    quote: "Real value is built through consistency, not noise.",
    href: "https://x.com/lesi_crypt/status/2109207384875008435",
  },
];

export const CONTACT = {
  label: "Contact.",
  heading: "Let's build something worth remembering.",
  body: "If you need someone who can grow your community, host your spaces and keep your project moving, let's talk.",
  ctaLabel: "Let's Work Together",
  ctaHref: "mailto:olamilesi22@gmail.com",
};

export const CONTACT_METHODS = [
  {
    label: "Email",
    value: "olamilesi22@gmail.com",
    href: "mailto:olamilesi22@gmail.com",
  },
  { label: "X", value: "@lesi_crypt", href: "https://x.com/lesi_crypt" },
  { label: "Telegram", value: "@lesi_crypt", href: "https://t.me/lesi_crypt" },
  { label: "Website", value: "lesicrypt.com", href: "https://lesicrypt.com" },
];


export const FOOTER_SOCIAL = [
  { label: "X", href: "https://x.com/lesi_crypt" },
  { label: "Telegram", href: "https://t.me/lesi_crypt" },
  { label: "Email", href: "mailto:olamilesi22@gmail.com" },
];

export const FOOTER_COPYRIGHT =
  "© 2026 Lesi Crypt. Building consistency over time.";

export const SOCIAL_LINKS = [
  { label: "X", handle: "@lesi_crypt", href: "https://x.com/lesi_crypt" },
  { label: "Telegram", handle: "@lesi_crypt", href: "https://t.me/lesi_crypt" },
  {
    label: "Email",
    handle: "olamilesi22@gmail.com",
    href: "mailto:olamilesi22@gmail.com",
  },
];