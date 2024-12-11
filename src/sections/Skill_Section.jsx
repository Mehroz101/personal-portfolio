import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Reactjs from "../assets/react.png";
import Node from "../assets/nodejs.png";
import Express from "../assets/express.png";
import Mongo from "../assets/mongodb.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Section_Heading from "../components/Section_Heading";
import Skill_card from "../components/Skill_card";

const Skill_Section = () => {
  const skills = [
    { img: HTML, name: "HTML", percentage: "90%" },
    { img: CSS, name: "CSS", percentage: "90%" },
    { img: JavaScript, name: "JavaScript", percentage: "80%" },
    { img: Reactjs, name: "React", percentage: "80%" },
    { img: Node, name: "Node.js", percentage: "70%" },
    { img: Express, name: "Express", percentage: "70%" },
    { img: Mongo, name: "MongoDB", percentage: "70%" },
    { img: Tailwind, name: "Tailwind", percentage: "80%" },
    { img: Github, name: "GitHub", percentage: "80%" },
  ];

  return (
    <div>
      <div className="skillsection" id="skill">
        <Section_Heading
          title="My Skills"
          description="Technologies I have expertise in"
        />
        <div className="skill_cards">
          {skills.map((skill, index) => (
            <Skill_card
              key={index}
              img={skill.img}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill_Section;
