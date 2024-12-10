import React from "react";
import "../styles/Home.css";
import Hero_Section from "../components/Hero_Section";
import Aboutus_Section from "../components/Aboutus_Section";
import My_Services from "../components/My_Services";
import Education_Section from "../components/Education_Section";
import Experience_section from "../components/Experience_section";
import Skill_Section from "../components/Skill_Section";
import Project_Section from "../components/Project_Section";
import Contact_Section from "../components/Contact_Section";
const Home = () => {
  return (
    <>
      <div className="homepage">
        <Hero_Section />
        <Aboutus_Section />
        <My_Services />
        <Education_Section />
        <Experience_section />
        <Skill_Section />
        <Project_Section />
        <Contact_Section />
      </div>
    </>
  );
};

export default Home;
