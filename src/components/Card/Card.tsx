import { Card, Row, Col, Button } from "antd";
import React from "react";
import "./Card.css";
import pic1 from "../../xservices1.jpg";
import pic2 from "../../xservices2.jpg";
import pic3 from "../../xservices3.jpg";

const { Meta } = Card;

const Cards: React.FC = () => (
  <div className="site-card-wrapper cardCon">
    <Row gutter={16}>
      <Col span={8}>
        <Card
          bordered={true}
          hoverable
          style={{ width: 380 }}
          cover={<img alt="pics" src={pic1} />}
          className="card"
        >
          <div>
            <h2 className="cardTitle">Map Direction</h2>
            <p className="cardText">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <Button className="cardButton">Read More</Button>
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          bordered={true}
          hoverable
          style={{ width: 380 }}
          cover={<img alt="pics" src={pic2} />}
          className="card"
        >
          <div>
            <h2 className="cardTitle">Accomodation Services</h2>
            <p className="cardText">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <Button className="cardButton">Read More</Button>
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          bordered={true}
          hoverable
          style={{ width: 380 }}
          cover={<img alt="pics" src={pic3} />}
          className="card"
        >
          <div>
            <h2 className="cardTitle">Great Experience</h2>
            <p className="cardText">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <Button className="cardButton">Read More</Button>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Cards;
