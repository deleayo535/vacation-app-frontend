import React from "react";

import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Fragment } from "react";
import "./Header.css";
import Lists from "./headerlist";

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
        <Lists
          items={[
            "Home",
            "About",
            "Services",
            "Apartment Room",
            "Blog",
            "Contact",
          ]}
        />
        {/* <ul className="navbar-nav ul">
          <li className="li">Home</li>
          <li className="li">About</li>
          <li className="li">Services</li>
          <li className="li">Apartment Room</li>
          <li className="li">Blog</li>
          <li className="li">Contact</li>
        </ul> */}
      </header>
    </Fragment>
  );
}

export default Header;
