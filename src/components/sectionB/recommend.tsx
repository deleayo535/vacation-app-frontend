import React from "react";
import "./recommend.css";
import Service from "./services";
import img from "../images/xabout.jpg";

function Recommend() {
  return (
    <div className="recomment-container">
      <div className="recomment-div">
        <img src={img} className="recomment-img" />
        <h2 className="recomment-h2">The most recommended vacation rental</h2>
        <p className="recomment-p">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth. Even the all-powerful
          Pointing has no control about the blind texts it is an almost
          unorthographic life One day however a small line of blind text by the
          name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>
      </div>
      <div className="recomment-div">
        <h2 className="recomment-h1">What we offer</h2>
        <p className="recomment-p">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <Service />
      </div>
    </div>
  );
}

export default Recommend;
