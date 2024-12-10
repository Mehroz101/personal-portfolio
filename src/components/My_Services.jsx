import React from "react";
import Service_Card from "./Service_Card";
import Section_Heading from "./Section_Heading";

const My_Services = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      description:
        "I create responsive and dynamic websites with the latest technologies.",
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Front-End Development",
      description:
        "Specialized in building interactive user interfaces with React and modern JavaScript.",
    },
    {
      icon: "fa-solid fa-database",
      title: "Back-End Development",
      description:
        "Building robust back-end solutions using Node.js, Express, and MongoDB.",
    },
    {
      icon: "fa-solid fa-mobile-alt",
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile applications with React Native for a seamless experience.",
    },
    {
      icon: "fa-solid fa-paint-brush",
      title: "UI/UX Design",
      description:
        "Crafting user-centered designs with an emphasis on usability and aesthetics.",
    },
    {
      icon: "fa-solid fa-cogs",
      title: "Web App Optimization",
      description:
        "Optimizing web applications for speed, performance, and SEO.",
    },
  ];

  return (
    <div className="myservices">
      <Section_Heading
        title="My Services"
        description="I offer a variety of web and mobile development services, tailored to help businesses achieve their goals through innovative and efficient solutions."
      />
      <div className="myservices_cards">
        {services.map((service, index) => (
          <Service_Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default My_Services;
