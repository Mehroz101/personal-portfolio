import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Aboutus_Section = ({ aboutdata }) => {
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation for left section
  const animationVariantLeft = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Animation for right section
  const animationVariantRight = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Sequential animation for stat cards
  const animationVariantStatCard = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    }
    
  };

  return (
    <>
      <div className="aboutus_section" id="about">
        {/* Left Section */}
        <motion.div
          ref={refLeft}
          variants={animationVariantLeft}
          initial="hidden"
          animate={inViewLeft ? "visible" : "hidden"}
          className="aboutus_left"
        >
          <span className="tag">{aboutdata?.tag}</span>
          <h2
            className="tagline"
            dangerouslySetInnerHTML={{ __html: aboutdata?.heading }}
          ></h2>
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
        </motion.div>

        {/* Right Section */}
        <div className="aboutus_right">
          <div className="stat_cards">
            <motion.div
              ref={refRight}
              variants={animationVariantRight}
              initial="hidden"
              animate={inViewRight ? "visible" : "hidden"}
              className="stat_card"
            >
              <h3>{aboutdata?.projects}</h3>
              <span>Projects</span>
            </motion.div>

            <motion.div
              variants={animationVariantStatCard}
              initial="hidden"
              animate={inViewRight ? "visible" : "hidden"}
              className="stat_card"
            >
              <h3>{aboutdata?.experience} Years</h3>
              <span>Experience</span>
            </motion.div>

            <motion.div
              variants={animationVariantStatCard}
              initial="hidden"
              animate={inViewRight ? "visible" : "hidden"}
              className="stat_card"
            >
              <h3>{aboutdata?.clients}</h3>
              <span>Clients</span>
            </motion.div>

            <motion.div
              variants={animationVariantStatCard}
              initial="hidden"
              animate={inViewRight ? "visible" : "hidden"}
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
