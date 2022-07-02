import { Button } from "antd";
import React from "react";
import "./Card.css";

function Card() {
  return (
    <div>
      <div className="img" />
      <div>
        <h3>Map Direction</h3>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
        <p>
          <Button>Read more</Button>
        </p>
      </div>
    </div>
  );
}

export default Card;
