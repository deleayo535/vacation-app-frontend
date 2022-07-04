import React from "react";

import { Container, Card, Row, Col, Button } from "react-bootstrap";
import pic1 from "../../xservices1.jpg";

function CardView() {
  return (
    <>
      <Container>
        <Col md="4">
          <Card style={{ width: "18rem" }}>
            <Card.Img src={pic1} />
            <Card.Body>
              <Card.Title>Map Direction</Card.Title>
              <Card.Text>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </Card.Text>
              <Button variant="primary">Map Direction</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}
export default CardView;
