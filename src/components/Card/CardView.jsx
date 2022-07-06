import { Fragment } from "react";

import { Container, Card, Col, Button } from "react-bootstrap";
import pic1 from "../../xservices1.jpg";
import pic2 from "../../xservices2.jpg";
import pic3 from "../../xservices3.jpg";

const styles = {
  container: {
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr",
    gridGap: "10px",
    position: "absolute",
    width: "30%",
    boxSizing: "border-box !important",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    padding: "2rem",
    width: "18rem",
    height: "24rem",
    textAlign: "center",
    margin: "1.5rem",
    boxShadow: "0px 10px 27px -9px",
  },

  cardImage: {
    width: "14rem",
    objectFit: "center",
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
    marginnBottom: "0.4rem",
  },

  // containerSize: {
  //   dislay: "grid",
  //   gridTemplateColumns: "1fr 1fr 1fr",
  //   gridGap: "20px",
  // },
};

function CardView() {
  return (
    <Fragment style={styles.container}>
      <Container className="grid-child">
        <Col>
          <Card style={styles.card}>
            <Card.Img
              src={pic1}
              style={styles.cardImage}
              class="card-img-top"
              alt="Card image cap"
            />
            <Card.Body class="card-block">
              <Card.Title style={styles.cardTitle}>Map Direction</Card.Title>
              <Card.Text style={styles.cardText}>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </Card.Text>
              <Button variant="secondary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <Container className="grid-child">
        <Col>
          <Card style={styles.card}>
            <Card.Img src={pic2} style={styles.cardImage} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>
                Accomodation Services
              </Card.Title>
              <Card.Text style={styles.cardText}>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <Container className="grid-child">
        <Col>
          <Card style={styles.card}>
            <Card.Img src={pic3} style={styles.cardImage} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Great Experience</Card.Title>
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
