import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Project_Card = ({ img, title, description, id }) => {
  const pathname = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, [pathname]);
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
