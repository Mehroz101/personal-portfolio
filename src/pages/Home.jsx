import React from "react";
import Hero_Section from "../sections/Hero_Section";
import Aboutus_Section from "../sections/Aboutus_Section";
import My_Services from "../sections/My_Services";
import Education_Section from "../sections/Education_Section";
import Experience_section from "../sections/Experience_section";
import Skill_Section from "../sections/Skill_Section";
import Project_Section from "../sections/Project_Section";
import Contact_Section from "../sections/Contact_Section";
import Footer from "../components/Footer";
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
