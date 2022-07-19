import "./testimonial.css";
import "../section/Room.css";
import Feed from "./feeds";
import items from "./items";

import React from "react";

const Testimonial: React.FC = () => {
  const Feeds = items.map((item) => {
    return (
      <Feed
        image={item.image}
        name={item.name}
        text={item.text}
        position={item.position}
      />
    );
  });
  return (
    <>
      <div className="section">
        <h2 className="heading-section">Happy Clients & Feedbacks</h2>
      </div>
      <div className="section testimonial">{Feeds}</div>
    </>
  );
};

export default Testimonial;
