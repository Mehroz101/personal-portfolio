import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Aboutus_Section = ({ aboutdata }) => {
  const [ref, inView] = useInView({
    // triggerOnce: true, // Animation triggers only once when it enters the viewport
    threshold: 0.2, // Start the animation when 20% of the card is in view
  });

  const animationVariant = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.1, ease: "easeIn" },
    },
  };
  const animationVariantLeft = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.1, ease: "easeIn" },
    },
  };
  return (
    <>
      <div className="aboutus_section" id="about">
        <motion.div
              ref={ref}
              variants={animationVariantLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"} className="aboutus_left">
          <span className="tag">{aboutdata?.tag}</span>
          <h2
            className="tagline"
            dangerouslySetInnerHTML={{ __html: aboutdata?.heading }}
          ></h2>
          {/* 
          <h2>
            Hello! I'm <span> Mehroz Farooq</span>. I'm Professional Web
            Developer & specialized in <span>MERN Stack</span>
          </h2> */}
          <p>{aboutdata?.para}</p>
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
              <Link to={aboutdata?.links?.whatsapp}>
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>
          {/* <div className="about_btns">
            <button className="btn">Hire Me</button>
            <button className="btn">Download CV</button>
          </div> */}
        </motion.div>
        <div className="aboutus_right">
          <div className="stat_cards">
            <motion.div
              ref={ref}
              variants={animationVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="stat_card"
            >
              <h3>{aboutdata?.projects}</h3>
              <span>Projects</span>
            </motion.div>
            <motion.div
              ref={ref}
              variants={animationVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="stat_card"
            >
              <h3>{aboutdata?.experience} Years</h3>
              <span>Experience</span>
            </motion.div>
            <motion.div
              ref={ref}
              variants={animationVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="stat_card"
            >
              <h3>{aboutdata?.clients}</h3>
              <span>Clients</span>
            </motion.div>
            <motion.div
              ref={ref}
              variants={animationVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="stat_card"
            >
              <h3>{aboutdata?.award}</h3>
              <span>Awards</span>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus_Section;
