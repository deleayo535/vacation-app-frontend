import { Fragment } from "react";

import { Container, Grid, Card, Col, Button } from "react-bootstrap";
import pic1 from "../../xservices1.jpg";

const styles = {
  card: {
    display: "block",
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    padding: "3rem",
    width: "20rem",
    height: "24rem",
    textAlign: "center",
    boxShadow: "0px 10px 27px -9px",
  },
  cardImage: {
    width: "15rem",
    objectFit: "cover",
    borderRadius: "0.2rem",
  },

  cardText: {
    fontWeight: 400,
    color: "gray",
    fontSize: "14px",
    lineHeight: 1.8,
    fontFamily: "Playfair Display",
    marginBottom: "0.8rem",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
  },

  cardTitle: {
    fontWeight: 400,
    fontSize: "26px",
    color: "#000000",
    fontFamily: "serif",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginnBottom: "0.5rem",
  },

  containerSize: {
    dislay: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 20px,
  },
};

function CardView() {
  return (
    <Fragment style={styles.containerSize}>
      <Container>
        <Col>
          <Card style={styles.card}>
            <Card.Img src={pic1} style={styles.cardImage} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Map Direction</Card.Title>
              <Card.Text style={styles.cardText}>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <Container>
        <Col>
          <Card style={styles.card}>
            <Card.Img src={pic1} style={styles.cardImage} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Map Direction</Card.Title>
              <Card.Text style={styles.cardText}>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <Container>
        <Col>
          <Card style={styles.card}>
            <Card.Img src={pic1} style={styles.cardImage} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Map Direction</Card.Title>
              <Card.Text style={styles.cardText}>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </Fragment>
  );
}
export default CardView;
