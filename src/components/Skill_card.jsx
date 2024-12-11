import React from "react";

const Skill_card = ({ img, name, percentage }) => {
  return (
    <>
      <div className="skill_card">
        <div className="img">
          <img src={img} alt="HTML Icon" className="skill_icon" />
        </div>
        <h3 className="skill_name">{name}</h3>
        <div className="progress_bar">
          <div className="progress" style={{ width: `${percentage}` }}></div>
        </div>
        <p className="skill_percentage">{percentage}</p>
      </div>
    </>
  );
};

export default Skill_card;
