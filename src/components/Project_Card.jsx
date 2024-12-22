import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project_Card = ({ img, title, description, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it enters the viewport
    threshold: 0.2,    // Start the animation when 20% of the card is in view
  });

  const animationVariant = {
    hidden: { y: 200 , opacity:0 },
    visible: { y:0, opacity:1, transition: { duration: 0.1, ease: "easeIn" }  },
  };
  const pathname = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, [pathname]);
  return (
    <>
      <motion.div
      ref={ref}
      variants={animationVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} className="project_card">
        <div className="img">
          <img src={img} loading="lazy" alt="" />
        </div>
        <Link to={`/project/${id}`}>
          <div className="text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Project_Card;
