import "./Hero.css";
import React from "react";
import Forms from "../form/Form";
import Cards from "../Card/Card";
import cart from "../Card/cart";
import { Row } from "antd";

function Hero() {
  const cards = cart.map((item) => {
    return (
      <Row>
        <Cards
          coverimage={item.coverimage}
          title={item.title}
          text={item.text}
          button={item.button}
        />
      </Row>
    );
  });
  return (
    <>
      <div className="hero-container">
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
        </div>
        <div className="cardCon">
          <div className="card-list">{cards}</div>
        </div>
      </div>
    </>
  );
}
export default Hero;
