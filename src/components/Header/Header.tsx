// import {
//   TwitterOutlined,
//   FacebookOutlined,
//   InstagramOutlined,
// } from "@ant-design/icons";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="wrap">
        <div>afolabi4luv98@gmail.com</div>
        {/* <div>
          <TwitterOutlined />
          <FacebookOutlined />
          <InstagramOutlined />
        </div> */}
      </div>
      <header className="header">
        <h1 className="header-h1">
          <span style={{ color: "black" }}>Vacation</span>
          <span style={{ color: "#fd7792" }}>Rental</span>
        </h1>
        {/* <Lists
          items={[
            "Home",
            "About",
            "Services",
            "Apartment Room",
            "Blog",
            "Contact",
          ]}
        /> */}
        <ul className="navbar-nav ul">
          <li className="li">
            <Link to="/home">Home</Link>
          </li>
          <li className="li">
            <Link to="/about">About</Link>
          </li>
          <li className="li">
            <Link to="/serve">Services</Link>
          </li>
          <li className="li">
            <Link to="/room">Apartment Room</Link>
          </li>
          <li className="li">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
