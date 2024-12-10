import React from "react";
import Section_Heading from "./Section_Heading";
import Experience_card from "./Experience_card";

const Experience_section = () => {
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
        title="My Experience"
        description="I have experience in web development, specializing in the MERN stack. I’ve worked with diverse teams and developed user-centric applications."
      />
      <div className="experience_cards">
        {experienceData.map((experience, index) => (
          <Experience_card
            key={index}
            years={experience.years}
            title={experience.title}
            companyName={experience.companyName}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience_section;
