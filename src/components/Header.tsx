import React from "react";

import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Fragment } from "react";
import "./Header.css";

function Header() {
  return (
    <Fragment>
      <div className="wrap">
        <div>afolabi4luv98@gmail.com</div>
        <div>
          <TwitterOutlined />
          <FacebookOutlined />
          <InstagramOutlined />
        </div>
      </div>
      <header className="header">
        <h1 className="content">Vacation Rental</h1>
        <ul className="navbar-nav">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Apartment Room</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </header>
    </Fragment>
  );
}

export default Header;
