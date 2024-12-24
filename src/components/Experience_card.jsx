import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience_card = ({ years, title, companyName, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it enters the viewport
    threshold: 0.2,    // Start the animation when 20% of the card is in view
  });

  const animationVariant = {
    hidden: { scale: 0 , opacity:0 },
    visible: { scale:1, opacity:1, transition: { duration: 0.1, ease: "easeIn" }  },
  };
  return (
    <>
      <motion.div
      ref={ref}
      variants={animationVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} className="experience_card">
        <span className="years">{years}</span>
        <h3 className="title">{title}</h3>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </motion.div>
    </>
  );
};

export default Experience_card;
