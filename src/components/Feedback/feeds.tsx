import { Card, Row, Col } from "antd";
import React from "react";
import "./testimonial.css";
import "../section/Room.css";

const style: React.CSSProperties = {
  background: "#fff",
  padding: "15px 0",
  margin: "0 0 0 50px",
  height: "240px",
  width: "380px",
};

const Feed = (props: {
  image: any;
  text: string;
  name: string;
  position: string;
}) => (
  <Row gutter={16}>
    <Col className="gutter-row" span={8}>
      <div style={style} className="testimonial-container">
        <img src={props.image} className="testimonial-img" />
        <div>
          <p className="testimonial-text">{props.text}</p>
          <p className="testimonial-name">{props.name}</p>
          <p className="testimonial-position">{props.position}</p>
        </div>
      </div>
    </Col>
    {/* <Col className="gutter-row" span={8}>
            <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={8}>
            <div style={style}>col-6</div>
          </Col> */}
  </Row>
);

export default Feed;
