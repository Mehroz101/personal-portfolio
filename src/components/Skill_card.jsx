import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Skill_card = ({ img, name, percentage }) => {
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
      animate={inView ? "visible" : "hidden"}
       className="skill_card">
        <div className="img">
          <img
            src={img}
            alt="HTML Icon"
            loading="lazy"
            className="skill_icon"
          />
        </div>
        <h3 className="skill_name">{name}</h3>
        <div className="progress_bar">
          <div className="progress" style={{ width: `${percentage}` }}></div>
        </div>
        <p className="skill_percentage">{percentage}</p>
      </motion.div>
    </>
  );
};

export default Skill_card;
