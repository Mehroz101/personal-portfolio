import React, { useState } from "react";
import Section_Heading from "../components/Section_Heading";
import Project_Card from "../components/Project_Card";
import "../styles/AllProjects.css";
import Project1 from "../assets/project1.png"; // Replace with actual image paths
import Project2 from "../assets/project2.jpg"; // Replace with actual image paths
import Project3 from "../assets/project3.jpg";

const AllProjects = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    "React",
    "Node.js",
    "CSS",
    "JavaScript",
    "Tailwind",
    "GitHub",
    "Express",
    "MongoDB",
  ];
  const projects = [
    {
      img: Project1,
      title: "Smart Parking System",
      description:
        "A web-based smart parking solution that helps users find available parking spots in real-time. The platform allows users to book, manage, and pay for parking spaces through an intuitive interface.",
      id: "project1",
      tags: ["React", "CSS", "JavaScript", "Tailwind"],
    },
    {
      img: Project2,
      title: "E-Commerce Website",
      description:
        "An e-commerce platform designed for a seamless shopping experience, featuring product listings, secure payments, and a user-friendly checkout process. Built with React and Node.js.",
      id: "project2",
      tags: ["Node.js", "CSS", "Tailwind", "GitHub"],
    },
    {
      img: Project3,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing web development skills, including projects, skills, and experience. Built with React and styled using custom CSS and Tailwind CSS for responsive design.",
      id: "project3",
      tags: ["React", "CSS", "Tailwind", "Express", "MongoDB"],
    },
    {
      img: Project1,
      title: "Smart Parking System",
      description:
        "A web-based smart parking solution that helps users find available parking spots in real-time. The platform allows users to book, manage, and pay for parking spaces through an intuitive interface.",
      id: "project4",
      tags: ["CSS", "JavaScript", "Tailwind", "MongoDB"],
    },
    {
      img: Project2,
      title: "E-Commerce Website",
      description:
        "An e-commerce platform designed for a seamless shopping experience, featuring product listings, secure payments, and a user-friendly checkout process. Built with React and Node.js.",
      id: "project5",
      tags: ["Node.js", "CSS", "Tailwind", "Express"],
    },
    {
      img: Project3,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing web development skills, including projects, skills, and experience. Built with React and styled using custom CSS and Tailwind CSS for responsive design.",
      id: "project6",
      tags: ["React", "Tailwind", "Express", "MongoDB"],
    },
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const filteredProjects = selectedFilters.length
    ? projects.filter((project) =>
        selectedFilters.every((filter) => project.tags.includes(filter))
      )
    : projects;

  return (
    <div>
      <div className="allprojectsection">
        <Section_Heading
          title="My Projects"
          description="Check out my projects"
        />
        <div className="allprojects">
          <div className="project_filters">
            {filters.map((filter) => (
              <span
                key={filter}
                className={`filter_item ${
                  selectedFilters.includes(filter) ? "active" : ""
                }`}
                onClick={() => toggleFilter(filter)}
              >
                {filter}
              </span>
            ))}
          </div>
          <div className="projects">
            {filteredProjects.map((project) => (
              <>
                <Project_Card
                  key={project.id}
                  img={project.img}
                  title={project.title}
                  description={project.description}
                  id={project.id}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
