import React from "react";

const Service_Card = ({ icon, title, description }) => {
  return (
    <>
      <div className="service_card">
        <div className="icon">
          <i class={icon}></i>
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Service_Card;
