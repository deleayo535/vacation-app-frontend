import { Card, Row, Col, Button } from "antd";
import React from "react";
import pic1 from "../../xservices1.jpg";
import pic2 from "../../xservices2.jpg";
import pic3 from "../../xservices3.jpg";

const { Meta } = Card;

const Cards: React.FC = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: 340 }}
          cover={<img alt="pics" src={pic1} />}
        >
          <Meta
            title="Map Direction"
            description="Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic."
          />
          <Button>Read More</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: 340 }}
          cover={<img alt="example" src={pic2} />}
        >
          <Meta
            title="Accomodation Services"
            description="Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic."
          />
          <Button>Read More</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: 340 }}
          cover={<img alt="example" src={pic3} />}
        >
          <Meta
            title="Great Experience"
            description="Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic."
          />
          <Button>Read More</Button>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Cards;
