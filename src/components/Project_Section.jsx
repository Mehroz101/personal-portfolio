import React from "react";
import Section_Heading from "./Section_Heading";
import Project_Card from "./Project_Card";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
const Project_Section = () => {
  return (
    <>
      <div className="projectsection">
        <Section_Heading
          title="My Projects"
          description="Projects I have worked on"
        />
        <div className="project_cards">
          <Project_Card
            img={Project1}
            title="Project 1"
            description="Project 1"
            id="project1"
          />
          <Project_Card
            img={Project2}
            title="Project 2"
            description="Project 2"
            id="project2"
          />
          <Project_Card
            img={Project3}
            title="Project 3"
            description="Project 3"
            id="project3"
          />
          <Project_Card
            img={Project2}
            title="Project 2"
            description="Project 2"
            id="project2"
          />
        </div>
      </div>
    </>
  );
};

export default Project_Section;
