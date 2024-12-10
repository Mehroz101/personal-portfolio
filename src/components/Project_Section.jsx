import React from "react";
import Section_Heading from "./Section_Heading";
import Project_Card from "./Project_Card";
import Project1 from "../assets/project1.png"; // Replace with actual image paths
import Project2 from "../assets/project2.jpg"; // Replace with actual image paths
import Project3 from "../assets/project3.jpg"; // Replace with actual image paths

const Project_Section = () => {
  const projects = [
    {
      img: Project1,
      title: "Smart Parking System",
      description:
        "A web-based smart parking solution that helps users find available parking spots in real-time. The platform allows users to book, manage, and pay for parking spaces through an intuitive interface.",
      id: "project1",
    },
    {
      img: Project2,
      title: "E-Commerce Website",
      description:
        "An e-commerce platform designed for a seamless shopping experience, featuring product listings, secure payments, and a user-friendly checkout process. Built with React and Node.js.",
      id: "project2",
    },
    {
      img: Project3,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing web development skills, including projects, skills, and experience. Built with React and styled using custom CSS and Tailwind CSS for responsive design.",
      id: "project3",
    },
  ];

  return (
    <div className="projectsection">
      <Section_Heading
        title="My Projects"
        description="Here are some of the key projects I have worked on, showcasing my skills in web development and problem-solving."
      />
      <div className="project_cards">
        {projects.map((project, index) => (
          <Project_Card
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            id={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Project_Section;
