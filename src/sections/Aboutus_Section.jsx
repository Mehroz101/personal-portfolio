import React from "react";
import { Link } from "react-router-dom";

const Aboutus_Section = ({aboutdata}) => {
  return (
    <>
      <div className="aboutus_section" id="about">
        <div className="aboutus_left">
          <span className="tag">{aboutdata?.tag}</span>
          <h2 className="tagline" dangerouslySetInnerHTML={{ __html: aboutdata?.heading }}></h2>
{/* 
          <h2>
            Hello! I'm <span> Mehroz Farooq</span>. I'm Professional Web
            Developer & specialized in <span>MERN Stack</span>
          </h2> */}
          <p>
            {aboutdata?.para}
          </p>
          <div className="social_accounts">
            <span>Follow me:</span>
            <div className="links">
              <Link to={aboutdata?.links?.facebook}>
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to={aboutdata?.links?.instagram}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to={aboutdata?.links?.linkdin}>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to={aboutdata?.links?.github}>
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
          <div className="about_btns">
            <button className="btn">Hire Me</button>
            <button className="btn">Download CV</button>
          </div>
        </div>
        <div className="aboutus_right">
          <div className="stat_cards">
            <div className="stat_card">
              <h3>{aboutdata?.projects}</h3>
              <span>Projects</span>
            </div>
            <div className="stat_card">
              <h3>{aboutdata?.experience} Years</h3>
              <span>Experience</span>
            </div>
            <div className="stat_card">
              <h3>{aboutdata?.clients}</h3>
              <span>Clients</span>
            </div>
            <div className="stat_card">
              <h3>{aboutdata?.award}</h3>
              <span>Awards</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus_Section;
