import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education_card = ({ years, degree, university, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it enters the viewport
    threshold: 0.2, // Start the animation when 20% of the card is in view
  });

  const animationVariant = {
    hidden: { scale: 0, opacity: 0, y: 200 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: "easeIn" },
    },
  };
  return (
    <>
      <motion.div
        ref={ref}
        variants={animationVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="education_card"
      >
        <span className="year">{years}</span>
        <h3 className="degree">{degree}</h3>
        <p className="university">{university}</p>
        <p className="description">{description}</p>
      </motion.div>
    </>
  );
};

export default Education_card;
