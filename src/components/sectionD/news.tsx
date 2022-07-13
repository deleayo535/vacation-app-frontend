import { Card, Row } from "antd";
import "./news.css";

import img1 from "../images/ximage1.jpg";
import img2 from "../images/ximage2.jpg";
import img3 from "../images/ximage3.jpg";

function News() {
  return (
    <div className="News-log">
      <div className="News-wrap">
        <div className="News-container">
          <h2 className="News-h2">Latest news from our blog</h2>
          <p className="News-p">NEWS & BLOG</p>
        </div>
      </div>
      <div className="Card-wrap">
        <Row className="Card">
          <Card
            bordered={true}
            hoverable
            style={{ width: 400 }}
            cover={<img alt="img1" src={img1} className="Card-img" />}
          >
            <div className="Card-detail">
              <h2 className="Card-title">
                Work Hard, Party Hard in a Luxury Chalet in the Alps
              </h2>
              <p className="Card-text">January 30, 2020 Admin 3</p>
              <p className="Card-p">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </Card>
        </Row>
        <Row>
          <Card
            bordered={true}
            hoverable
            className="Card"
            style={{ width: 400 }}
            cover={<img alt="img1" src={img2} className="Card-img" />}
          >
            <div className="Card-detail">
              <h2 className="Card-title">
                Work Hard, Party Hard in a Luxury Chalet in the Alps
              </h2>
              <p className="Card-text">January 30, 2020 Admin 3</p>
              <p className="Card-p">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </Card>
        </Row>
        <Row>
          <Card
            bordered={true}
            hoverable
            className="Card"
            style={{ width: 400 }}
            cover={<img alt="img1" src={img3} className="Card-img" />}
          >
            <div className="Card-detail">
              <h2 className="Card-title">
                Work Hard, Party Hard in a Luxury Chalet in the Alps
              </h2>
              <p className="Card-text">January 30, 2020 Admin 3</p>
              <p className="Card-p">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </Card>
        </Row>
      </div>
    </div>
  );
}

export default News;
