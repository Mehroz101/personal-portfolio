import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProjectView.css";
import Project1 from "../assets/project1.png"; // Replace with actual image paths
import Project2 from "../assets/project2.jpg"; // Replace with actual image paths
import Project3 from "../assets/project3.jpg";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Reactjs from "../assets/react.png";
import Node from "../assets/nodejs.png";
import Express from "../assets/express.png";
import Mongo from "../assets/mongodb.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Section_Heading from "../components/Section_Heading";
import Skill_card from "../components/Skill_card";
import PricingCard from "../components/Price_Card";
const ProjectView = () => {
  const { id } = useParams();

  const projectData = [
    {
      id: "project1",
      title: "Smart Parking System",
      banner: Project1,
      about:
        "A web-based smart parking solution that helps users find available parking spots in real-time. The platform allows users to book, manage, and pay for parking spaces through an intuitive interface.",
      technologies: ["React", "CSS", "JavaScript"],
      features: [
        "Real-time parking availability",
        "Booking and payment system",
        "User-friendly interface",
      ],
      screenshots: [Project2, Project3],
      liveDemo: "https://smart-parking-demo.com",
      repo: "https://github.com/username/smart-parking",
      challenges:
        "Integrating real-time updates for parking availability and optimizing payment gateway integration.",
      improvements: [
        "Add AI-based predictions for parking availability",
        "Enhance the mobile responsiveness",
      ],
    },
    {
      id: "project2",
      title: "E-Commerce Website",
      banner: "../assets/project2.jpg",
      about:
        "An e-commerce platform designed for a seamless shopping experience, featuring product listings, secure payments, and a user-friendly checkout process.",
      technologies: ["React", "Node.js", "CSS"],
      features: [
        "Product listing and search",
        "Secure payment gateway",
        "Responsive design",
      ],
      screenshots: [
        "../assets/project2_screenshot1.png",
        "../assets/project2_screenshot2.png",
      ],
      liveDemo: "https://ecommerce-demo.com",
      repo: "https://github.com/username/ecommerce-site",
      challenges: "Optimizing performance for large product catalogs.",
      improvements: [
        "Add personalized recommendations",
        "Improve search engine optimization",
      ],
    },
  ];

  const project = projectData.find((proj) => proj.id === id);
  const features = [
    { img: Project1, title: "Feature 1" },
    { img: Project2, title: "Feature 2" },
    { img: Project3, title: "Feature 3" },
  ];
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <div className="projectdetail">
        <section className="hero-section">
          <div className="overlay">
            <div className="hero-content">
              <h1>Project Title</h1>
              <p>Your tagline goes here</p>
              <a href="#pricing" className="btn">
                Get Started
              </a>
            </div>
          </div>
        </section>
        <section className="stats">
          <div className="stats-left">
            <h2 className="stats-heading">Project Insights & Stats</h2>
            <p className="stats-description">
              Discover the key metrics and insights behind the project,
              including its size, components, and development progress. This
              section highlights important figures that showcase the scale and
              impact of the project.
            </p>
            <div className="stat_cards">
              <div className="stat_card">
                <h3>30</h3>
                <span>Projects</span>
              </div>
              <div className="stat_card">
                <h3>3 Years</h3>
                <span>Experience</span>
              </div>
              <div className="stat_card">
                <h3>100</h3>
                <span>Clients</span>
              </div>
              <div className="stat_card">
                <h3>20</h3>
                <span>Awards</span>
              </div>
            </div>
          </div>
          <div className="stats-right">
            <div className="img">
              <img src={Project1} alt="Stats</div> Image" />
            </div>
          </div>
        </section>
        <section className="tech_stack">
          <h2>Tech Stack</h2>
          <div className="tech_stack_list_items">
            <div className="tech-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="tech-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="tech-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="tech-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="tech-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="tech-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
          </div>
        </section>
        <section className="libraries_stack">
          <h2>Libraries I Used</h2>
          <div className="libraries_stack_list_items">
            <div className="libraries-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="libraries-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="libraries-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="libraries-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="libraries-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="libraries-stack-list">
              <div className="img">
                {" "}
                <img src={Reactjs} alt="" />
              </div>
              <p>React</p>
            </div>
          </div>
        </section>
        <section className="video-section">
          <h2>Video Tutorial</h2>
          <div className="video-container">
            <video controls>
              <source src="tutorial-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section className="pages-section">
          <h2>Pages</h2>
          <div className="pages">
            {features.map((feature, index) => (
              <div className="page-box" key={index}>
                <img src={feature.img} alt={feature.title} />
                <h3>{feature.title}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="documentation-section">
          <div className="documentation-left">
            <img src={Project1} alt="Documentation" />
          </div>
          <div className="documentation-right">
            <h2 className="documentation-heading">
              Comprehensive Documentation
            </h2>
            <p className="documentation-description">
              Access detailed guides and resources to get the most out of the
              project. Our comprehensive documentation covers everything from
              setup to advanced features, ensuring you have all the information
              you need for a smooth experience.
            </p>
            <button className="download-button">Download Documentation</button>
          </div>
        </section>
        <section className="pricing-section" id="pricing">
          <PricingCard />
        </section>
      </div>
    </>
  );
};

export default ProjectView;
