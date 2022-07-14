import "../about/about.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/footer";

function Contact() {
  return (
    <>
      <Header />
      <div className="About-wrap">
        <div className="About-content">
          <p className="About-span">
            <span>
              <a href="#">Home</a>
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
