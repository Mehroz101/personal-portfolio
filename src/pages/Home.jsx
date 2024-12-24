import React, { useEffect, useState } from "react";
import Hero_Section from "../sections/Hero_Section";
import Aboutus_Section from "../sections/Aboutus_Section";
import My_Services from "../sections/My_Services";
import Education_Section from "../sections/Education_Section";
import Experience_section from "../sections/Experience_section";
import Skill_Section from "../sections/Skill_Section";
import Project_Section from "../sections/Project_Section";
import Contact_Section from "../sections/Contact_Section";
import Footer from "../components/Footer";
import { portfolio_data } from "../../public/portfoliodata";
const Home = () => {
  const [data,setData]= useState([])
  useEffect(()=>{
    setData(portfolio_data)
  },[])
  return (
    <>
      <div className="homepage">
        <Hero_Section herodata={data?.HeroSection} />
        <Aboutus_Section aboutdata={data?.AboutSection}/>
        <My_Services servicedata={data?.ServiceSection} />
        <Education_Section educationdata={data?.EducationSection} />
        <Experience_section experiencedata={data?.ExperienceSection} />
        <Skill_Section skilldata={data?.SkillSection} />
        <Project_Section projectdata={data?.ProjectSection} />
        <Contact_Section />
      </div>

    </>
  );
};

export default Home;
