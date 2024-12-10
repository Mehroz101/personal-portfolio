import React from "react";

const Experience_card = ({ years, title, companyName, description }) => {
  return (
    <>
      <div className="experience_card">
        <span className="years">{years}</span>
        <h3 className="title">{title}</h3>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    </>
  );
};

export default Experience_card;
