import React from "react";
import heroImg from "../assets/hero.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="homepage">
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
        <div className="aboutus_section">
          <div className="aboutus_left">
            <span className="tag">About Me</span>
            <h2>
              Hello! I'm David Andrew. I'm Professional Web Designer & Wordpress
              Developer & Freelancer.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              tempora, odit sit in corrupti perferendis error suscipit quo ipsum
              laudantium voluptate a quaerat tempore repudiandae nesciunt
              reiciendis, nam ullam consequuntur!
            </p>
            <div className="social_accounts">
              <span>Follow me:</span>
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
            <div className="about_btns">
              <button className="btn">Hire Me</button>
              <button className="btn">Download CV</button>
            </div>
          </div>
          <div className="aboutus_right">
            <div className="stat_cards">
              <div className="stat_card">
                <h3>Projects</h3>
                <span>30</span>
              </div>
              <div className="stat_card">
                <h3>Experience</h3>
                <span>3 Years</span>
              </div>
              <div className="stat_card">
                <h3>Clients</h3>
                <span>100</span>
              </div>
              <div className="stat_card">
                <h3>Awards</h3>
                <span>20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
