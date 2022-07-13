import { Button } from "antd";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-div">
          <h2 className="footer-h2">Vacation Rental</h2>
          <p className="footer-p">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <p>Read more</p>
        </div>
        <div className="footer-div">
          <h2 className="footer-h2">Services</h2>
          <ul className="footer-li">
            <li className="footer-li">Map Direction</li>
            <li className="footer-li">Accomodation Services</li>
            <li className="footer-li">Great Experience</li>
            <li className="footer-li">Perfect central location</li>
          </ul>
        </div>
        <div className="footer-div">
          <h2 className="footer-h2">Tag cloud</h2>
          <Button size="large" className="footer-but">
            APARTMENT
          </Button>
          <Button size="large" className="footer-but">
            HOME
          </Button>
          <Button size="large" className="footer-but">
            VACATION
          </Button>
          <Button size="large" className="footer-but">
            RENTAL
          </Button>
          <Button size="large" className="footer-but">
            RENT
          </Button>
          <Button size="large" className="footer-but">
            HOUSE
          </Button>
          <Button size="large" className="footer-but">
            PLACE
          </Button>
          <Button size="large" className="footer-but">
            DRINKS
          </Button>
        </div>
        <div className="footer-div">
          <h2 className="footer-h2">Subcribe</h2>
          <div>
            <h2 className="footer-h2">Follow us</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
