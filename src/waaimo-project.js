import home from "./assets/waaimo/home.jpg";
import assessments from "./assets/waaimo/assessments.jpg";
import candidateExperience from "./assets/waaimo/candidate-experience.jpg";

// Role and contributions supplied by Mehroz. Screenshots show public pages.
export const waaimoProject = {
  id: "13",
  title: "Waaimo",
  img: home,
  description:
    "An assessment platform where HR teams and organisations create assessments and candidates complete them. I work across full stack development, deployment management, the admin dashboard, and an anti-cheating module with event-triggered picture capture and assessment-integrity signals.",
  tags: [
    "Waaimo",
    "waaimo.com",
    "Full stack",
    "Deployments",
    "Admin dashboard",
    "Assessments",
    "HR",
    "Anti-cheating",
    "Proctoring",
    "Face visibility",
    "Multiple displays",
    "Tab switching",
  ],
  projectData: {
    id: "13",
    title: "Waaimo",
    banner: home,
    liveDemo: "https://waaimo.com/",
    context: "Full Stack Developer · Deployment management · Ongoing",
    about:
      "Waaimo is an assessment platform that lets HR teams and organisations create assessments for candidates to complete. I work as a full stack developer and manage deployments, with contributions spanning the admin dashboard and assessment-integrity tooling. A key part of my work is the anti-cheating module: capturing pictures when a candidate looks away or their face is not visible, detecting multiple displays, and tracking when candidates switch away from the assessment tab.",
    stackLabel: "ENGINEERING SCOPE",
    technologies: [
      "Full stack development",
      "Deployment management",
      "Admin dashboards",
      "Assessment workflows",
      "Proctoring & integrity signals",
    ].map((title) => ({ title })),
    highlight: {
      label: "ENGINEERING HIGHLIGHT",
      title: "Assessment integrity, with event-triggered evidence.",
      description:
        "I built the anti-cheating module to capture pictures when candidates look away or their face is not visible, detect multiple displays, and identify tab-away events during assessments. These checks provide integrity signals and evidence that can be reviewed alongside a candidate’s responses.",
      outcome:
        "Look-away capture · Face visibility · Multiple displays · Tab-away detection",
    },
    challenges:
      "Supporting assessment creation and candidate attempts while making integrity events visible to administrators. My work connects the assessment experience, the admin dashboard, and anti-cheating checks, alongside managing application deployments.",
    features: [
      "Full stack development for a platform where HR teams and organisations create assessments and candidates complete them.",
      "Built and improved the admin dashboard for assessment operations.",
      "Managed application deployments alongside ongoing development.",
      "Built event-triggered picture capture when a candidate looks away or their face is not visible.",
      "Implemented multiple-display detection and tab-away tracking as part of the anti-cheating module.",
      "Delivered additional assessment-integrity checks to support review of candidate attempts.",
    ],
    pages: [
      { title: "Waaimo — public homepage and platform preview", img: home },
      { title: "Assessment creation — public product page", img: assessments },
      {
        title: "Candidate experience — public product page",
        img: candidateExperience,
      },
    ],
  },
};
