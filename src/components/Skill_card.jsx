import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skill_card = ({ img, name, percentage, learning }) => {
  // Using useInView to trigger animations when the card enters the viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the card is in view
  });

  // Animation variants for the card
  const animationVariant = {
    hidden: { scale: 0, opacity: 0 }, // Initial hidden state
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.1, ease: "easeIn" }, // Animation duration and easing
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={animationVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`skill_card ${learning ? "animate_progress" : ""}`} // Add conditional class for learning
    >
      <div className="img">
        <img
          src={img}
          alt={`${name} Icon`}
          loading="lazy"
          className="skill_icon"
        />
      </div>
      <h3 className="skill_name">{name}</h3>
      <div className="progress_bar">
        {/* Apply shimmer animation only if learning is true */}
        <div
          className={`progress ${learning ? "shimmer" : ""}`}
          style={{ width: `${percentage}` }}
        ></div>
      </div>
      <p className="skill_percentage">{percentage}</p>
    </motion.div>
  );
};

export default Skill_card;
