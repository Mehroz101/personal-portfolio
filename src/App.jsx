import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { portfolio_data as data } from "../public/portfoliodata";
import { profile } from "./portfolio-profile";
import "./portfolio.css";
import { aichiefProject } from "./aichief-project";
import { placedProject } from "./placed-project";
const projects = [
  aichiefProject,
  placedProject,
  ...data.ProjectSection.project,
];
const social = data.AboutSection.links;
const nav = ["About", "Experience", "Projects", "Skills", "Education"];
const Arrow = () => (
  <span aria-hidden="true" className="arrow-icon">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  </span>
);
const External = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);
function Effects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = "Mehroz Farooq — Software Engineer";
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="wordmark" aria-label="Mehroz Farooq, home">
          mehroz<span>.</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close ×" : "Menu"}
        </button>
        <nav
          id="navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {nav.map((label) => (
            <Link key={label} to={`/#${label.toLowerCase()}`}>
              {label}
            </Link>
          ))}
          <Link className="nav-contact" to="/#contact">
            Let’s talk <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}
function Heading({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
function Card({ project, index }) {
  return (
    <article className="project-card">
      <Link
        className={`project-image color-${index % 4}`}
        to={`/project/${project.id}`}
        aria-label={`Explore ${project.title}`}
      >
        <img
          src={project.img}
          alt={project.imageAlt || `${project.title} application screenshot`}
          loading="lazy"
          width="1200"
          height="800"
        />
        <span className="project-open" aria-hidden="true">
          ↗
        </span>
      </Link>
      <div className="project-meta">
        <span>PROJECT / {String(index + 1).padStart(2, "0")}</span>
        <span>
          {project.projectData.technologies
            ?.slice(0, 3)
            .map((t) => t.title.replace(/ JS| js/g, ""))
            .join(" · ")}
        </span>
      </div>
      <h3>
        <Link to={`/project/${project.id}`}>
          {project.title}
          <Arrow />
        </Link>
      </h3>
      <p>{project.description.split(" Dummy login:")[0]}</p>
    </article>
  );
}
function Home() {
  return (
    <>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow hero-intro">
            <span className="accent-line" />
            ASSALAM-O-ALAIKUM, I’M MEHROZ
          </p>
          <h1>
            Software engineer.
            <br />
            Building for
            <br />
            <em>the real world.</em>
          </h1>
          <p className="hero-description">
            I’m Mehroz Farooq, a full stack developer in Lahore. I turn complex
            problems into fast, reliable web applications — from the interface
            to the infrastructure.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <External className="text-link" href="/Mehroz_Farooq_Resume.pdf">
              View résumé <Arrow />
            </External>
          </div>
          <div className="hero-social">
            <External href={social.github}>
              GitHub <Arrow />
            </External>
            <External href={social.linkdin}>
              LinkedIn <Arrow />
            </External>
            <span>Lahore, Pakistan · PKT</span>
          </div>
        </div>
        <div className="portrait-area">
          <div className="portrait-frame">
            <span className="portrait-label">
              MEHROZ FAROOQ / FULL STACK DEVELOPER
            </span>
            <img
              src={data.HeroSection.img}
              alt="Mehroz Farooq"
              width="886"
              height="1184"
              fetchPriority="high"
            />
            <span className="portrait-caption">
              Thoughtful code.
              <br />
              Real-world impact.
            </span>
          </div>
          <div className="portrait-note">
            <span aria-hidden="true">✳</span> From the first idea to production.
          </div>
        </div>
      </section>
      <div className="impact-band">
        <div className="wrap impact-grid">
          <div>
            <strong>
              3+ <span>years</span>
            </strong>
            <p>Building production applications</p>
          </div>
          <div>
            <strong>30k+</strong>
            <p>Monthly users at AIChief</p>
          </div>
          <div>
            <strong>
              23s <span>→</span> &lt;500ms
            </strong>
            <p>Critical API response time</p>
          </div>
          <div>
            <strong>10M+</strong>
            <p>Property records cleaned</p>
          </div>
        </div>
      </div>
      <section className="section wrap" id="about">
        <div className="about-grid">
          <div>
            <p className="eyebrow">
              <span>01</span> / A LITTLE ABOUT ME
            </p>
            <h2>
              Good software starts
              <br />
              with understanding
              <br />
              <em>the problem.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              I build across the stack, with a particular interest in
              performance, system design, and the details that make a product
              feel right.
            </p>
            <p>
              Over the past 3+ years, I’ve worked on SaaS marketplaces, business
              platforms, and AI-powered products. My work spans React and
              Next.js interfaces, Node.js backends, databases, caching, and
              background processing.
            </p>
            <p>
              Currently, I’m a Full Stack Developer at Xihawks, working on
              AIChief, and pursuing an MS in Artificial Intelligence at UMT
              Lahore. I enjoy owning features end to end, reviewing code, and
              helping other developers grow.
            </p>
            <External className="text-link" href={social.linkdin}>
              More about my journey <Arrow />
            </External>
          </div>
        </div>
      </section>
      <section className="section section-tint" id="experience">
        <div className="wrap">
          <Heading
            number="02"
            label="WHERE I’VE CONTRIBUTED"
            title="Experience that adds up."
          >
            <External className="text-link" href="/Mehroz_Farooq_Resume.pdf">
              Full résumé <Arrow />
            </External>
          </Heading>
          <div className="timeline">
            {profile.experience.map((job, i) => (
              <article className="timeline-row" key={job.company}>
                <div className="timeline-date">
                  <span
                    className={
                      i === 0 ? "timeline-dot current" : "timeline-dot"
                    }
                  />
                  {job.date}
                  {i === 0 && (
                    <span className="current-label">CURRENT ROLE</span>
                  )}
                </div>
                <div className="timeline-content">
                  <h3>{job.role}</h3>
                  <p className="company">
                    {job.company} <span>· {job.location}</span>
                  </p>
                  {job.projectId && (
                    <Link
                      className="text-link"
                      to={`/project/${job.projectId}`}
                    >
                      Explore {job.projectTitle || "project"} <Arrow />
                    </Link>
                  )}
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap" id="projects">
        <Heading
          number="03"
          label="SELECTED WORK"
          title="Ideas, brought to life."
        >
          <Link className="text-link" to="/projects">
            All {projects.length} projects <Arrow />
          </Link>
        </Heading>
        <div className="project-grid">
          {["11", "12", "9", "10"].map((id, index) => (
            <Card
              project={projects.find((p) => p.id === id)}
              index={index}
              key={id}
            />
          ))}
        </div>
      </section>
      <section className="section section-tint" id="skills">
        <div className="wrap">
          <Heading
            number="04"
            label="MY TOOLKIT"
            title="The right tools. Solid foundations."
          >
            <p className="section-aside">
              Technologies I use to take products
              <br />
              from an idea to production.
            </p>
          </Heading>
          <div className="skills-grid">
            {profile.skills.map((group, i) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-number">0{i + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap" id="education">
        <Heading
          number="05"
          label="ALWAYS LEARNING"
          title="Education & foundations."
        />
        <div className="education-list">
          {data.EducationSection.education.map((item, i) => (
            <article className="education-row" key={item.degree}>
              <span className="education-icon" aria-hidden="true">
                ↗
              </span>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.institute}</p>
                <p className="education-description">{item.description}</p>
              </div>
              <div className="education-date">
                {item.startend}
                {i === 0 && <span className="current-label">IN PROGRESS</span>}
              </div>
            </article>
          ))}
        </div>
        <div className="certification">
          <span className="eyebrow">CERTIFICATION</span>
          <div>
            <h3>Full Stack Web Application Development</h3>
            <p>
              National Vocational & Technical Training Commission · Jan – Jul
              2022
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">
            <span>06</span> / LET’S CONNECT
          </p>
          <h2>
            Have something
            <br />
            <em>in mind?</em>
          </h2>
          <p>
            A product to build, a problem to solve, or an opportunity to
            explore. I’d love to hear about it.
          </p>
          <a className="button button-dark" href={`mailto:${profile.email}`}>
            Start a conversation <Arrow />
          </a>
        </div>
        <div className="contact-details">
          <a href={`mailto:${profile.email}`}>
            <span>EMAIL</span>
            {profile.email}
            <Arrow />
          </a>
          <External href={social.linkdin}>
            <span>LINKEDIN</span>Let’s connect <Arrow />
          </External>
          <External href={social.github}>
            <span>GITHUB</span>See what I’m building <Arrow />
          </External>
          <div>
            <span>BASED IN</span>Lahore, Punjab, Pakistan
          </div>
        </div>
      </div>
    </section>
  );
}
function AllProjects() {
  const [query, setQuery] = useState("");
  const visible = projects.filter((p) =>
    `${p.title} ${p.description} ${p.tags.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <section className="wrap section subpage">
      <Link className="text-link" to="/">
        ← Back home
      </Link>
      <p className="eyebrow">THE PROJECT ARCHIVE</p>
      <h1>
        A few things
        <br />
        I’ve <em>built.</em>
      </h1>
      <p className="lead archive-description">
        From learning platforms to business tools. A collection of my work
        across the stack.
      </p>
      <label className="search-label" htmlFor="project-search">
        Find a project or technology
      </label>
      <input
        className="project-search"
        id="project-search"
        type="search"
        placeholder="Try React, NestJS, or inventory…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="result-count" role="status">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>
      <div className="project-grid">
        {visible.map((p, i) => (
          <Card project={p} index={i} key={p.id} />
        ))}
      </div>
      {!visible.length && (
        <div className="empty-state">
          <h2>No projects found.</h2>
          <p>
            Try another keyword, or{" "}
            <button className="text-link" onClick={() => setQuery("")}>
              show all projects
            </button>
            .
          </p>
        </div>
      )}
    </section>
  );
}
function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [image, setImage] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    setImage(null);
  }, [id]);
  useEffect(() => {
    if (!image) return;
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      trigger.current?.focus();
    };
  }, [image]);
  if (!project) return <NotFound />;
  const d = project.projectData;
  return (
    <div className="wrap section subpage project-detail">
      <Link className="text-link" to="/projects">
        ← All projects
      </Link>
      <p className="eyebrow">PROJECT / {id.padStart(2, "0")}</p>
      <h1>{project.title}</h1>
      {d.context && <p className="project-context">{d.context}</p>}
      <p className="lead">{project.description.split(" Dummy login:")[0]}</p>
      <div className="detail-links">
        {d.liveDemo && (
          <External className="button button-dark" href={d.liveDemo}>
            {d.liveDemo.includes("drive.google.com")
              ? "Watch demo"
              : "Visit live project"}{" "}
            <Arrow />
          </External>
        )}
        {d.repo && (
          <External className="text-link" href={d.repo}>
            Source code <Arrow />
          </External>
        )}
      </div>
      <img
        className="detail-banner"
        src={d.banner || project.img}
        alt={`${project.title} overview`}
        width="1200"
        height="750"
      />
      {d.highlight && (
        <section
          className="engineering-highlight"
          aria-labelledby="engineering-highlight-title"
        >
          <p className="eyebrow">{d.highlight.label}</p>
          <h2 id="engineering-highlight-title">{d.highlight.title}</h2>
          <p>{d.highlight.description}</p>
          <p className="highlight-outcome">{d.highlight.outcome}</p>
        </section>
      )}
      <div className="detail-columns">
        <div>
          <p className="eyebrow">THE OVERVIEW</p>
          <h2>About the project</h2>
          <p>{d.about}</p>
          {d.challenges && (
            <>
              <h3>The challenge</h3>
              <p>{d.challenges}</p>
            </>
          )}
          {d.features?.length > 0 && (
            <>
              <h3>Key features</h3>
              <ul className="feature-list">
                {d.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <aside>
          <p className="eyebrow">BUILT WITH</p>
          <ul className="technology-list">
            {d.technologies?.map((t) => (
              <li key={t.title}>{t.title}</li>
            ))}
          </ul>
        </aside>
      </div>
      {d.pages?.length > 0 && (
        <section className="gallery-section">
          <h2>A closer look.</h2>
          <p>Select a screenshot to view it in full.</p>
          <div className="gallery-grid">
            {d.pages.map((page, i) => (
              <button
                className="gallery-item"
                key={`${page.title}-${i}`}
                onClick={(e) => {
                  trigger.current = e.currentTarget;
                  setImage(page);
                }}
              >
                <img
                  src={page.img}
                  alt={page.title}
                  loading="lazy"
                  width="1200"
                  height="750"
                />
                <span>
                  {page.title}
                  <Arrow />
                </span>
              </button>
            ))}
          </div>
        </section>
      )}
      {image && (
        <dialog
          className="image-dialog"
          ref={dialog}
          aria-label={image.title}
          onClose={() => setImage(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) dialog.current.close();
          }}
        >
          <button
            className="dialog-close"
            aria-label="Close screenshot"
            onClick={() => dialog.current.close()}
          >
            ×
          </button>
          <img src={image.img} alt={image.title} />
          <p>{image.title}</p>
        </dialog>
      )}
      <Link className="text-link" to="/projects">
        ← Back to all projects
      </Link>
    </div>
  );
}
function NotFound() {
  return (
    <section className="wrap section subpage">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>A wrong turn.</h1>
      <p>This page doesn’t exist. Let’s get you back to the good stuff.</p>
      <Link className="button button-dark" to="/">
        Back home <Arrow />
      </Link>
    </section>
  );
}
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Effects />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer wrap">
        <Link className="wordmark" to="/">
          mehroz<span>.</span>
        </Link>
        <p>© {new Date().getFullYear()} Mehroz Farooq</p>
        <a className="text-link" href="#main">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
