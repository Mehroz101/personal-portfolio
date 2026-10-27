import { Link } from "react-router-dom";

const details = {
  13: {
    category: "ASSESSMENT PLATFORM",
    role: "Full Stack Developer · Deployment management",
    summary:
      "Building assessment workflows, an admin dashboard, and integrity monitoring for HR teams and organisations.",
    focus: ["Assessments", "Admin dashboards", "Proctoring"],
  },
  11: {
    category: "AI DISCOVERY & SAAS",
    role: "Full Stack Developer · Xihawks",
    summary:
      "Developing listings, dashboards, payments, and performance improvements for a growing AI-tools marketplace.",
    focus: ["Next.js", "Node.js", "MongoDB", "Redis"],
  },
  12: {
    category: "CAREER & JOB-SEARCH PLATFORM",
    role: "Next.js Developer · International team",
    summary:
      "Integrating APIs that turn user-provided links, text, and samples into videos, PDFs, and questions.",
    focus: ["Next.js", "API integration", "Content generation"],
  },
};
function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}

export default function ProjectList({ projects, headingLevel = 3 }) {
  const featured = projects.filter((project) => details[project.id]);
  const archive = projects.filter((project) => !details[project.id]);
  const Title = `h${headingLevel}`;
  return (
    <div className="project-collection">
      {featured.length > 0 && (
        <div className="featured-projects">
          {featured.map((project, index) => {
            const meta = details[project.id];
            return (
              <article className="featured-project" key={project.id}>
                <Link
                  className={`featured-preview featured-color-${index % 3}`}
                  to={`/project/${project.id}`}
                  aria-label={`Explore ${project.title}`}
                >
                  <img
                    src={project.img}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    width="1440"
                    height="1000"
                  />
                  <span className="featured-preview-action">
                    Explore project <Arrow />
                  </span>
                </Link>
                <div className="featured-copy">
                  <p className="eyebrow">
                    {String(index + 1).padStart(2, "0")} / {meta.category}
                  </p>
                  <Title>
                    <Link to={`/project/${project.id}`}>
                      {project.title} <Arrow />
                    </Link>
                  </Title>
                  <p className="featured-role">{meta.role}</p>
                  <p className="featured-summary">{meta.summary}</p>
                  <ul
                    className="featured-tags"
                    aria-label={`${project.title} focus`}
                  >
                    {meta.focus.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="featured-links">
                    <Link className="text-link" to={`/project/${project.id}`}>
                      View project <Arrow />
                    </Link>
                    {project.projectData.liveDemo && (
                      <a
                        className="text-link secondary-link"
                        href={project.projectData.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit website <Arrow />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
      {archive.length > 0 && (
        <section className="project-archive" aria-label="Other projects">
          <div className="archive-heading">
            <Title>Other projects</Title>
            <p>{archive.length} more things I’ve built.</p>
          </div>
          <div className="archive-columns" aria-hidden="true">
            <span>PROJECT</span>
            <span>WHAT IT DOES</span>
            <span>MAIN STACK</span>
          </div>
          <ul className="archive-list">
            {archive.map((project) => (
              <li className="archive-row" key={project.id}>
                <Link
                  className="archive-project-name"
                  to={`/project/${project.id}`}
                >
                  {project.title} <Arrow />
                </Link>
                <p className="archive-project-summary">
                  {project.description.split(" Dummy login:")[0]}
                </p>
                <p className="archive-project-stack">
                  <span className="sr-only">Main stack: </span>
                  {project.projectData.technologies
                    ?.slice(0, 3)
                    .map((technology) =>
                      technology.title.replace(/ JS| js/g, ""),
                    )
                    .join(" · ") || project.tags.slice(0, 3).join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
