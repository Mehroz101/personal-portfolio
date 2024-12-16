import React from "react";
import Section_Heading from "../components/Section_Heading";
import Education_card from "../components/Education_card";

const Education_Section = ({educationdata}) => {
  const educationData = [
    {
      years: "2015 - 2019",
      degree: "Bachelor of Science in Information Technology",
      university: "Bahauddin Zakariya University",
      description:
        "Focused on web development, database management, and software engineering.",
    },
    {
      years: "2013 - 2015",
      degree: "Intermediate in Computer Science",
      university: "ABC College",
      description:
        "Studied foundational programming, mathematics, and computer science concepts.",
    },
    {
      years: "2010 - 2013",
      degree: "Matriculation in Science",
      university: "XYZ School",
      description: "Basic education in science, mathematics, and English.",
    },
  ];

  return (
    <div className="educationsection" id="education">
      <Section_Heading
        title={educationdata?.heading}
        description={educationdata?.tagline}
      />
      <div className="education_cards">
        {educationdata?.education?.map((education, index) => (
          <Education_card
            key={index}
            years={education?.startend}
            degree={education?.degree}
            university={education?.institute}
            description={education?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Education_Section;
