import React from "react";
import Service_Card from "./Service_Card";
import Section_Heading from "./Section_Heading";

const My_Services = () => {
  return (
    <>
      <div className="myservices">
        <Section_Heading
          title="My Services"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit quisquam, quas consectetur adipisicing elit quisquam, quas consectetur adipisicing elit quisquam, quas"
        />
        <div className="myservices_cards">
          <Service_Card
            icon="fa-solid fa-code"
            title="Web Developement"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
          />
          <Service_Card
            icon="fa-solid fa-code"
            title="Web Developement"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
          />
          <Service_Card
            icon="fa-solid fa-code"
            title="Web Developement"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
          />
          <Service_Card
            icon="fa-solid fa-code"
            title="Web Developement"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
          />
          <Service_Card
            icon="fa-solid fa-code"
            title="Web Developement"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
          />
          <Service_Card
            icon="fa-solid fa-code"
            title="Web Developement"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas."
          />
        </div>
      </div>
    </>
  );
};

export default My_Services;
