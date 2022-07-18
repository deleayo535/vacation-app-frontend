import "./Room.css";
import Roomlist from "./Roomlist";
import { StarFilled } from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import pic4 from "../images/xroom-1.jpg";
import pic5 from "../images/xroom-2.jpg";
import pic6 from "../images/xroom-3.jpg";
import pic7 from "../images/xroom-4.jpg";
import React, { useState } from "react";
import { log } from "console";

function Room() {
  const handleMouseEnter = (e: any) => {
    e.target.style.background = "#fd7792";
  };

  const handleMouseLeave = (e: any) => {
    e.target.style.background = "";
  };

  return (
    <div className="section-head">
      <div className="section">
        <h2 className="heading-section">Apartment Room</h2>
      </div>

      <Row>
        <Col span={6} order={1}>
          <img src={pic4} width={340} height={380} alt="suite img" />
        </Col>
        <Col span={6} order={2} className="room">
          <div>
            <p>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
            </p>
            <h3 className="room-h3">Suite Room</h3>
            <Roomlist
              items={[
                "Max: 3 Persons",
                "Size: 45 m2",
                "View: Sea View",
                "Bed: 1",
              ]}
            />
            <Button size="large" className="bt">
              View Room Details
            </Button>
          </div>
        </Col>
        <Col span={6} order={3}>
          <img src={pic5} width={340} height={380} alt="suite img" />
        </Col>
        <Col span={6} order={4} className="room">
          <div>
            <p>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
            </p>
            <h3 className="room-h3">Standard Room</h3>
            <Roomlist
              items={[
                "Max: 3 Persons",
                "Size: 45 m2",
                "View: Sea View",
                "Bed: 1",
              ]}
            />
            <Button size="large" className="bt">
              View Room Details
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={6} order={2}>
          <img src={pic6} width={340} height={380} alt="suite img" />
        </Col>
        <Col span={6} order={1} className="room">
          <div>
            <p>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
            </p>
            <h3 className="room-h3">Family Room</h3>
            <Roomlist
              items={[
                "Max: 3 Persons",
                "Size: 45 m2",
                "View: Sea View",
                "Bed: 1",
              ]}
            />
            <Button size="large" className="bt">
              View Room Details
            </Button>
          </div>
        </Col>
        <Col span={6} order={4}>
          <img src={pic7} width={340} height={380} alt="suite img" />
        </Col>
        <Col span={6} order={3} className="room">
          <div>
            <p>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
              <span className="room-p">
                <StarFilled />
              </span>
            </p>
            <h3 className="room-h3">Deluxe Room</h3>
            <Roomlist
              items={[
                "Max: 3 Persons",
                "Size: 45 m2",
                "View: Sea View",
                "Bed: 1",
              ]}
            />
            <Button size="large" className="bt">
              View Room Details
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Room;
