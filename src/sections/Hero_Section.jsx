import React from "react";
import heroImg from "../assets/hero.png";

const Hero_Section = ({herodata}) => {
  return (
    <>
      <div className="hero_section" id="home">
        <div className="hero_left">
          <span className="aoa">{herodata?.tag}</span>
          
          <h1 className="tagline" dangerouslySetInnerHTML={{ __html: herodata?.heading }}></h1>

          <p>
            {herodata?.tagline}
          </p>
          <div className="hero_btns">
            <button className="btn">Hire Me</button>
            <button className="btn">Download CV</button>
          </div>
        </div>
        <div className="hero_right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero_Section;
