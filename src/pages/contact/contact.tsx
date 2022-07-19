import "../about/about.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Header />
      <div className="About-wrap">
        <div className="About-content">
          <p className="About-span">
            <span>
              <Link to="/home">Home</Link>
            </span>
            <span>Contact</span>
          </p>
          <h1 className="About-h1">Contact Us</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
