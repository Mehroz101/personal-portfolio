import React from "react";

const Education_card = ({ years, degree, university, description }) => {
  return (
    <>
      <div className="education_card">
        <span className="year">{years}</span>
        <h3 className="degree">{degree}</h3>
        <p className="university">{university}</p>
        <p className="description">{description}</p>
      </div>
    </>
  );
};

export default Education_card;
