import React from "react";
import "./Header.css";

const Lists: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul className="navbar-nav ul">
      {props.items.map((item) => (
        <li className="li" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Lists;
