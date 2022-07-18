import { Button } from "antd";
import "./footer.css";

import {
  TwitterOutlined,
  FacebookFilled,
  InstagramFilled,
  HeartFilled,
} from "@ant-design/icons";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrap">
          <div className="footer-div">
            <h2 className="footer-h2">Vacation Rental</h2>
            <p className="footer-p">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <p className="footer-p" style={{ color: "#fd7792" }}>
              Read more
            </p>
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
            <button className="footer-but">APARTMENT</button>
            <button className="footer-but">HOME</button>
            <button className="footer-but">VACATION</button>
            <button className="footer-but">RENTAL</button>
            <button className="footer-but">RENT</button>
            <button className="footer-but">HOUSE</button>
            <button className="footer-but">PLACE</button>
            <button className="footer-but">DRINKS</button>
          </div>
          <div className="footer-div">
            <h2 className="footer-h2">Subcribe</h2>
            <div>
              <h2 className="footer-h2">Follow us</h2>
              <div className="footer-icon">
                <TwitterOutlined className="icon-li" />
                <FacebookFilled className="icon-li" />
                <InstagramFilled />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-wrap footer-bottom">
        <div className="footer-p">
          Copyright ©2022 All rights reserved | This template is made with{" "}
          <HeartFilled />
        </div>
        <div>
          <ul className="footer-wrap">
            <li className="footer-li footer-last">Terms</li>
            <li className="footer-li footer-last">Privacy</li>
            <li className="footer-li footer-last">Compliances</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
