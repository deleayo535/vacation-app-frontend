import "./about.css";
import "../../components/Hero/Hero.css";
import Header from "../../components/Header/Header";
import Cards from "../../components/Card/Card";
import cart from "../../components/Card/cart";
import { Row } from "antd";
import Testimonial from "../../components/Feedback/Testimonial";
import Recommend from "../../components/sectionB/recommend";
import Footer from "../../components/footer/footer";

function About() {
  const cards = cart.map((item) => {
    return (
      <Row>
        <Cards
          coverimage={item.coverimage}
          title={item.title}
          text={item.text}
          button={item.button}
        />
      </Row>
    );
  });
  return (
    <>
      <Header />
      <div className="About-wrap">
        <div className="About-content">
          <p className="About-span">
            <span>
              <a href="#">Home</a>
            </span>
            <span>About us</span>
          </p>
          <h1 className="About-h1">About Us</h1>
        </div>
      </div>
      <div className="card-list">{cards}</div>
      <Testimonial />
      <Recommend />
      <Footer />
    </>
  );
}

export default About;
