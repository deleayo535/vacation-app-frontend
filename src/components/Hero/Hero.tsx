import "./Hero.css";
import React from "react";
import Forms from "../form/Form";
import Cards from "../Card/Card";

function Hero(props: any) {
  return (
    <div className="hero-wrap grid-container">
      <div className="grid-child">
        <h2 className="text-h2">Welcome to Vacation Rental</h2>
        <h1 className="text-h1">Rent an appartment for your Vacation</h1>
        <button className="btn btn-left">LEARN MORE</button>
        <button className="btn btn-right">CONTACT US</button>
      </div>
      <div className="grid-child">
        <Forms />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}
export default Hero;
