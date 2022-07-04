import React from "react";

import { Container, Card, Col, Button } from "react-bootstrap";
import pic1 from "../../xservices1.jpg";

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: "3rem",
    width: "15rem",
  },
  cardImage: {
    width: "15rem",
    objectFit: "cover",
    borderRadius: 10,
  },
};

function CardView() {
  return (
    <>
      <Container>
        <Col md="4">
          <Card style={styles.card}>
            <Card.Img src={pic1} style={styles.cardImage} />
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
