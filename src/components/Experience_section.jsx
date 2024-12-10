import React from "react";
import Section_Heading from "./Section_Heading";
import Experience_card from "./Experience_card";

const Experience_section = () => {
  return (
    <>
      <div className="experiencesection">
        <Section_Heading
          title="My Experience"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas"
        />
        <div className="experience_cards">
          <Experience_card
            years="2010 - 2015"
            title="Web Developement"
            companyName="ABC Company"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas"
          />
          <Experience_card
            years="2010 - 2015"
            title="Web Developement"
            companyName="ABC Company"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas"
          />
          <Experience_card
            years="2010 - 2015"
            title="Web Developement"
            companyName="ABC Company"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas"
          />
        </div>
      </div>
    </>
  );
};

export default Experience_section;
