import React from "react";
import heroImg from "../assets/hero.png";

const Hero_Section = ({ herodata }) => {
  return (
    <>
      <div className="hero_section" id="home">
        <div className="hero_left">
          <span className="aoa">{herodata?.tag}</span>

          <h1
            className="tagline"
            dangerouslySetInnerHTML={{ __html: herodata?.heading }}
          ></h1>

          <p>{herodata?.tagline}</p>
          <div className="hero_btns">
            <a href={herodata?.whatsapplink} className="btn">Hire Me</a>
            <a href={herodata?.CVlink} className="btn">Download CV</a>
          </div>
        </div>
        <div className="hero_right">
          <img src={herodata?.img} loading="lazy" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero_Section;
