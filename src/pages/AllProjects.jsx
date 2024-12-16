import React, { useEffect, useState } from "react";
import Section_Heading from "../components/Section_Heading";
import Project_Card from "../components/Project_Card";
import "../styles/AllProjects.css";
import { portfolio_data } from "../../public/portfoliodata";

const AllProjects = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    // Safeguard initialization
    const tags = portfolio_data?.tags || [];
    const projects = portfolio_data?.ProjectSection?.project || [];
    setFilters(tags);
    setAllProjects(projects);
    setFilterProjects(projects); // Initialize with all projects
    console.log("Projects loaded: ", projects);
  }, []);

  useEffect(() => {
    const filteredProjects =
      selectedFilters.length > 0
        ? allProjects.filter((project) =>
            selectedFilters.every((filter) => project.tags.includes(filter))
          )
        : allProjects;
  
    setFilterProjects(filteredProjects);
  }, [selectedFilters, allProjects]);
  
  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

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
            {filterProjects.map((project) => (
              <Project_Card
                key={project.id}
                img={project?.img}
                title={project?.title}
                description={project.description}
                id={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
