import React, { useEffect, useState } from "react";
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
import { portfolio_data } from "../../public/portfoliodata";
const ProjectView = () => {
  const { id } = useParams();
  const [viewProject, setViewProject] = useState(null);

  useEffect(() => {
    if (id) {
      const viewproject = portfolio_data?.ProjectSection?.project?.filter(
        (item) => item?.id === id
      );
      setViewProject(viewproject[0]);
      console.log(typeof id);
      console.log(viewProject?.projectData?.projectState?.state);
    }
  }, [id]);
  if (!viewProject) {
    return <div>Project not found.</div>;
  }
  const sectionStyle = {
    background: `url(${viewProject?.projectData?.banner}) no-repeat top center/cover`,
  };
  return (
    <>
      <div className="projectdetail">
        <section className="hero-section" style={sectionStyle}>
          <div className="overlay">
            <div className="hero-content">
              <h1>{viewProject?.title}</h1>
              <p>{viewProject?.description}</p>
              <a
                href={viewProject?.projectData?.liveDemo}
                target="_blank"
                className="btn"
              >
                Live Demo
              </a>
            </div>
          </div>
        </section>
        <section className="about_project">
          <h2 className="heading">About the Project</h2>
          <p className="description">{viewProject.projectData.about}</p>
        </section>
        {viewProject?.projectData?.projectState && (
          <section className="stats">
            <div className="stats-left">
              <h2 className="stats-heading">
                {viewProject?.projectData?.projectState?.heading}
              </h2>
              <p className="stats-description">
                {viewProject?.projectData?.projectState?.description}
              </p>
              <div className="stat_cards">
                {viewProject?.projectData?.projectState?.state.map((item) => {
                  return (
                    <div className="stat_card">
                      <h3>{item?.title}</h3>
                      <span>{item?.number}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="stats-right">
              <div className="img">
                <img
                  src={viewProject?.projectData?.projectState?.img}
                  alt="Stats</div> Image"
                />
              </div>
            </div>
          </section>
        )}

        <section className="tech_stack">
          <h2>Tech Stack</h2>
          <div className="tech_stack_list_items">
            {viewProject?.projectData?.technologies?.map((item) => {
              return (
                <div className="tech-stack-list">
                  <div className="img">
                    <img src={item?.img} alt="" />
                  </div>
                  <p>{item?.title}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="libraries_stack">
          <h2>Libraries I Used</h2>
          <div className="libraries_stack_list_items">
            {viewProject?.projectData?.libraries?.map((item) => {
              return (
                <div className="libraries-stack-list">
                  <div className="img">
                    <img src={item?.img} alt="" />
                  </div>
                  <p>{item?.title}</p>
                </div>
              );
            })}
          </div>
        </section>
        {viewProject?.projectData?.videoTutorial && (
          <section className="video-section">
            <h2>Video Tutorial</h2>
            <div className="video-container">
              <video controls>
                <source
                  src={viewProject?.projectData?.videoTutorial}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        )}
        {viewProject?.projectData?.pages && (
          <section className="pages-section">
            <h2>Pages</h2>
            <div className="pages">
              {viewProject?.projectData?.pages?.map((page, index) => (
                <div className="page-box" key={index}>
                  <img src={page?.img} alt={page?.title} />
                  <h3>{page?.title}</h3>
                </div>
              ))}
            </div>
          </section>
        )}
        {viewProject?.projectData?.documentation && (
          <section className="documentation-section">
            <div className="documentation-left">
              <img
                src={viewProject?.projectData?.documentation?.img}
                alt="Documentation"
              />
            </div>
            <div className="documentation-right">
              <h2 className="documentation-heading">
                Comprehensive Documentation
              </h2>
              <p className="documentation-description">
                {viewProject?.projectData?.documentation?.description}
              </p>
              <button
                className="download-button"
                disabled
                style={{
                  cursor: "not-allowed",
                  opacity: "0.5",
                  pointerEvents: "none",
                }}
              >
                Download Documentation
              </button>
            </div>
          </section>
        )}

        <section className="pricing-section" id="pricing">
          {viewProject?.projectData?.pricevalue && (
            <PricingCard
              price={viewProject?.projectData?.pricing}
              pricevalue={viewProject?.projectData?.pricevalue}
            />
          )}
        </section>
      </div>
    </>
  );
};

export default ProjectView;
