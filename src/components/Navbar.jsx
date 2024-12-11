import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h1>
          <Link to="/">Mehroz</Link>
        </h1>
      </div>
      <div className="icon" onClick={() => setShowLinks(!showLinks)}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
      <ul className={`nav_links ${showLinks ? "show" : "hide"}`}>
        <li>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="service" smooth={true} duration={500}>
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="education" smooth={true} duration={500}>
            Educations
          </ScrollLink>
        </li>

        <li>
          <ScrollLink to="experience" smooth={true} duration={500}>
            Experience
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="skill" smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="project" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </li>

        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
