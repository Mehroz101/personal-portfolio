import React from "react";
import { Link } from "react-router-dom";

const Project_Card = ({ img, title, description, id }) => {
  return (
    <>
      <div className="project_card">
        <div className="img">
          <img src={img} loading="lazy" alt="" />
        </div>
        <Link to={`/project/${id}`}>
          <div className="text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Project_Card;
