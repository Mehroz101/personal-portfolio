import React from "react";
import Section_Heading from "./Section_Heading";
import Education_card from "./Education_card";

const Education_Section = () => {
  return (
    <>
      <div className="educationsection">
        <Section_Heading
          title="My Education"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas"
        />
        <div className="education_cards">
          <Education_card
            years="2010 - 2015"
            degree="High School"
            university="ABC High School"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas"
          />
          <Education_card
            years="2010 - 2015"
            degree="High School"
            university="ABC High School"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas"
          />
          <Education_card
            years="2010 - 2015"
            degree="High School"
            university="ABC High School"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas"
          />
        </div>
      </div>
    </>
  );
};

export default Education_Section;
