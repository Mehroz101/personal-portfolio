import home from "./assets/placed/home.jpg";
import features from "./assets/placed/features.jpg";
import guides from "./assets/placed/guides.jpg";
import community from "./assets/placed/community.jpg";

// Role and contributions confirmed by Mehroz; screenshots show public pages.
export const placedProject = {
  id: "12",
  title: "Placed",
  img: home,
  description:
    "A career and job-search platform. As a Next.js developer on an international team, I integrated content-generation APIs that produce videos, PDFs, and questions from user-provided links, text, and samples.",
  tags: [
    "Placed",
    "placed.today",
    "Next.js",
    "API integration",
    "Content generation",
    "Videos",
    "PDF",
    "Questions",
    "International team",
  ],
  projectData: {
    id: "12",
    title: "Placed",
    banner: home,
    liveDemo: "https://placed.today/",
    context: "Next.js Developer · International development team",
    about:
      "I worked on placed.today as a Next.js developer, collaborating with an international team of developers. My contribution focused on integrating APIs for content generation: turning user-provided links, text, and samples into videos, PDF documents, and questions. The current public site introduces career and job-search support, a short assessment, career guides, and a community waitlist. The screenshots below document these public pages.",
    technologies: ["Next.js", "API integration", "Content-generation APIs"].map(
      (title) => ({ title }),
    ),
    highlight: {
      label: "MY CONTRIBUTION",
      title: "From user inputs to generated learning content.",
      description:
        "Integrated APIs into the Next.js application to generate videos, PDFs, and questions from links, text, and samples supplied by users, while collaborating with an international team of developers.",
      outcome: "Links, text & samples → Videos, PDFs & questions",
    },
    features: [
      "Worked as a Next.js developer within an international, multi-developer team.",
      "Integrated APIs that generate content from user-provided links, text, and samples.",
      "Connected generation workflows for video content, PDF documents, and questions.",
    ],
    pages: [
      { title: "Placed — public homepage and assessment", img: home },
      { title: "Career platform features", img: features },
      { title: "Community and member stories", img: community },
      { title: "Public career guides", img: guides },
    ],
  },
};
