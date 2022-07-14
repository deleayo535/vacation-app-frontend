import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Lists: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul className="navbar-nav ul">
      {props.items.map((item) => (
        <li className="li" key={item}>
          <Link to="">{item}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Lists;
