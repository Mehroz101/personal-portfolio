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
import Section_Heading from "./Section_Heading";
import Skill_card from "./Skill_card";
const Skill_Section = () => {
  return (
    <div>
      <div class="skillsection">
        <Section_Heading
          title="My Skills"
          description="Technologies I have expertise in"
        />
        <div className="skill_cards">
          <Skill_card img={HTML} name="HTML" percentage="90%" />
          <Skill_card img={CSS} name="CSS" percentage="90%" />
          <Skill_card img={JavaScript} name="JavaScript" percentage="80%" />
          <Skill_card img={Reactjs} name="React" percentage="80%" />
          <Skill_card img={Node} name="Node" percentage="70%" />
          <Skill_card img={Express} name="Express" percentage="70%" />
          <Skill_card img={Mongo} name="MongoDB" percentage="70%" />
          <Skill_card img={Tailwind} name="Tailwind" percentage="80%" />
          <Skill_card img={Github} name="Github" percentage="80%" />
        </div>
      </div>
    </div>
  );
};

export default Skill_Section;
