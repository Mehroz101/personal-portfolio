import React from "react";

const Section_Heading = ({ title, description }) => {
  return (
    <>
      <div className="sectionheading_top">
        <h2>{title}</h2>
        <div className="underline"></div>
        <p className="text">{description}</p>
      </div>
    </>
  );
};

export default Section_Heading;
