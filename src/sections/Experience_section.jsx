import React from "react";
import Section_Heading from "../components/Section_Heading";
import Experience_card from "../components/Experience_card";

const Experience_section = ({experiencedata}) => {
  const experienceData = [
    {
      years: "2020 - Present",
      title: "Web Developer",
      companyName: "WebTech Smart Solution",
      description:
        "Developing dynamic websites using React, Node.js, and the MERN stack. Focused on building scalable and user-friendly applications.",
    },
    {
      years: "2018 - 2020",
      title: "Frontend Developer",
      companyName: "Tech Innovations",
      description:
        "Worked on front-end development using HTML, CSS, JavaScript, and React to create responsive and interactive web applications.",
    },
    {
      years: "2017 - 2018",
      title: "Intern Developer",
      companyName: "XYZ Technologies",
      description:
        "Assisted in website development and learned foundational coding skills in HTML, CSS, JavaScript, and web frameworks.",
    },
  ];

  return (
    <div className="experiencesection" id="experience">
      <Section_Heading
        title={experiencedata?.heading}
        description={experiencedata?.tagline}
      />
      <div className="experience_cards">
        {experiencedata?.experience?.map((experience, index) => (
          <Experience_card
            key={index}
            years={experience?.startend}
            title={experience?.role}
            companyName={experience?.where}
            description={experience?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience_section;
