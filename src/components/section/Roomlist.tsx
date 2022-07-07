import React from "react";
import "./Room.css";

const Roomlist: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul className="room-li">
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Roomlist;
