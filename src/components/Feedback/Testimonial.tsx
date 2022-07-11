import "./testimonial.css";
import "../section/Room.css";
import { Row, Col } from "antd";

const style: React.CSSProperties = {
  background: "#fff",
  padding: "15px 0",
  margin: "0 50px",
  height: "250px",
  width: "350px",
};

const Testimonial: React.FC = () => {
  return (
    <>
      <div className="section">
        <h2 className="heading-section">Happy Clients & Feedbacks</h2>
      </div>
      <div className="section feedback">
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <div style={style}>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>Rodel Golez</p>
              <p>Businesswoman</p>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Testimonial;
