import React from "react";
import { Link } from "react-router-dom";

const Aboutus_Section = () => {
  return (
    <>
      <div className="aboutus_section" id="about">
        <div className="aboutus_left">
          <span className="tag">About Me</span>
          <h2>
            Hello! I'm <span> Mehroz Farooq</span>. I'm Professional Web
            Developer & specialized in <span>MERN Stack</span>
          </h2>
          <p>
            I’m a passionate web and software developer dedicated to creating
            innovative and user-friendly digital experiences. With expertise in
            the latest technologies, I focus on delivering high-quality
            solutions tailored to client needs. My goal is to help businesses
            thrive through creative and functional websites and applications
            that leave a lasting impact.
          </p>
          <div className="social_accounts">
            <span>Follow me:</span>
            <div className="links">
              <Link to="https://www.facebook.com/">
                <i class="fa-brands fa-facebook"></i>
              </Link>
              <Link to="https://www.instagram.com/">
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link to="https://www.linkedin.com/">
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              <Link to="https://github.com/">
                <i class="fa-brands fa-github"></i>
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
              <h3>30</h3>
              <span>Projects</span>
            </div>
            <div className="stat_card">
              <h3>3 Years</h3>
              <span>Experience</span>
            </div>
            <div className="stat_card">
              <h3>100</h3>
              <span>Clients</span>
            </div>
            <div className="stat_card">
              <h3>20</h3>
              <span>Awards</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus_Section;
