import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service_Card = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    // triggerOnce: true, // Animation triggers only once when it enters the viewport
    threshold: 0.2,    // Start the animation when 20% of the card is in view
  });

  const animationVariant = {
    hidden: { scale: 0 , opacity:0 },
    visible: { scale:1, opacity:1, transition: { duration: 0.1, ease: "easeIn" }  },
  };


  return (
    <motion.div
      ref={ref}
      variants={animationVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="service_card"
    >
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default Service_Card;
