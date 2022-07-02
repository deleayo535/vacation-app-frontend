import "./Hero.css";
import React from "react";

function Hero(props: any) {
  return (
    <div className="hero-wrap">
      <h2>Welcome to Vacation Rental</h2>
      <h1>Rent an appartment for your Vacation</h1>
      <button className="btn btn-left">LEARN MORE</button>
      <button className="btn btn-right">CONTACT US</button>
    </div>
  );
}
export default Hero;
