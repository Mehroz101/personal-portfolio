import home from "./assets/aichief/home.jpg";
import directory from "./assets/aichief/directory.jpg";
import toolDetail from "./assets/aichief/tool-detail.jpg";

// Stack and contributions supplied by Mehroz; career metrics from his résumé.
export const aichiefProject = {
  id: "11",
  title: "AIChief",
  img: home,
  description:
    "An AI-tools discovery and SaaS marketplace. At Xihawks, I build full stack features, dashboards, payment integrations, and performance improvements, including a daily engagement-metrics algorithm that avoids storing generated increments in the database.",
  tags: [
    "AIChief",
    "Xihawks",
    "Next.js",
    "MongoDB",
    "Node.js",
    "Express",
    "Redis",
    "BullMQ",
    "Stripe",
    "PayPal",
    "SimilarWeb API",
    "React Hook Form",
    "Redux",
    "Core Web Vitals",
    "SEO",
  ],
  projectData: {
    id: "11",
    title: "AIChief",
    banner: home,
    liveDemo: "https://aichief.com/",
    context: "Full Stack Developer · Xihawks · Nov 2025 — Present",
    about:
      "AIChief is an AI-tools discovery and SaaS marketplace. As a Full Stack Developer at Xihawks, I contribute across a Next.js frontend and a Node.js/Express backend with MongoDB, Redis, and BullMQ. My work includes user and admin dashboards, multistep forms, listing and ranking systems, subscription management, analytics, payment integrations, production bug fixes, and Core Web Vitals and SEO improvements. During the period covered by my résumé, the platform scaled to 30,000+ monthly users and 10,000+ daily API requests across 12,000+ listed tools.",
    highlight: {
      label: "ENGINEERING HIGHLIGHT",
      title: "Daily engagement metrics, without storing generated increments.",
      description:
        "I designed an algorithm that derives daily increments for views, upvotes, and bookmarks from real data at calculation time, avoiding database storage of those generated increments. This lets the application calculate changing engagement metrics without persisting every calculated update.",
      outcome:
        "Real-data inputs · Daily calculations · No database writes for generated increments",
    },
    technologies: [
      "Next.js",
      "MongoDB",
      "Node.js",
      "Express",
      "Redis",
      "BullMQ",
      "Stripe",
      "PayPal",
      "SimilarWeb API",
      "React Hook Form",
      "Redux",
    ].map((title) => ({ title })),
    challenges:
      "Balancing a growing catalog and request volume with reliable payments, maintainable dashboards, and a fast, discoverable frontend. I used Redis caching and BullMQ background jobs, fixed production bugs including Stripe 3D Secure checkout failures, and improved Core Web Vitals and SEO.",
    features: [
      "Designed an algorithm to calculate daily view, upvote, and bookmark increments from real data without storing the generated increments in MongoDB.",
      "Built and improved user dashboards, admin dashboards, forms, and multistep workflows using React Hook Form and Redux.",
      "Developed tool listing, ranking, subscription management, analytics, and user journey tracking systems.",
      "Worked on Stripe and PayPal payment integrations and resolved Stripe 3D Secure checkout failures.",
      "Implemented Redis caching, BullMQ background jobs, cron jobs, and SimilarWeb API integrations.",
      "Improved Core Web Vitals and SEO; built ownership verification using meta tags, HTML files, scripts, and business email, plus a backlink module.",
      "Fixed production bugs, reviewed pull requests, mentored developers, and collaborated with management on product planning.",
    ],
    pages: [
      { title: "AIChief — public homepage", img: home },
      { title: "AI tools directory", img: directory },
      { title: "Tool detail and review page", img: toolDetail },
    ],
  },
};
