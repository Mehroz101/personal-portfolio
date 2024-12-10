import React from "react";
import heroImg from "../assets/hero.png";

const Hero_Section = () => {
  return (
    <>
      <div className="hero_section">
        <div className="hero_left">
          <span className="aoa">Aslam Alikum</span>
          <h1 className="tagline">
            I'm Professional <span>MERN Stack Developer</span>
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
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
