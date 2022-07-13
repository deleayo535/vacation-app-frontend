import { Row, Col } from "antd";
import React from "react";

import {
  ReconciliationOutlined,
  BankOutlined,
  AuditOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

const style: React.CSSProperties = {
  padding: "0 5px",
  height: "180px",
  width: "200px",
};

const Service = () => (
  <div className="service-container">
    <div>
      <Row gutter={16}>
        <Col className="gutter-row service-icon">
          <div className="icon">
            <span className="icon-span">
              <CoffeeOutlined className="icon-span" />
            </span>
          </div>
          <div style={style} className="">
            <div>
              <h3 className="service-h3">Tea Coffee</h3>
              <p className="service-p">
                A small river named Duden flows by their place and supplies it
                with the necessary
              </p>
            </div>
          </div>
        </Col>
        <Col className="gutter-row service-icon">
          <div className="icon">
            <span className="icon-span">
              <ReconciliationOutlined className="icon-span" />
            </span>
          </div>
          <div style={style} className="">
            <div>
              <h3 className="service-h3">Laundry</h3>
              <p className="service-p">
                A small river named Duden flows by their place and supplies it
                with the necessary
              </p>
            </div>
          </div>
        </Col>
        <Col className="gutter-row service-icon">
          <div className="icon">
            <span className="icon-span">
              <AuditOutlined className="icon-span" />
            </span>
          </div>
          <div style={style} className="">
            <div>
              <h3 className="service-h3">Free Wifi</h3>
              <p className="service-p">
                A small river named Duden flows by their place and supplies it
                with the necessary
              </p>
            </div>
          </div>
        </Col>
        <Col className="gutter-row service-icon">
          <div className="icon">
            <span className="icon-span">
              <BankOutlined className="icon-span" />
            </span>
          </div>
          <div style={style} className="">
            <div>
              <h3 className="service-h3">Ironing</h3>
              <p className="service-p">
                A small river named Duden flows by their place and supplies it
                with the necessary
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>

    <div>
      <Row gutter={16}>
        <Col className="gutter-row service-icon">
          <div className="icon">
            <span className="icon-span">
              <ReconciliationOutlined className="icon-span" />
            </span>
          </div>
          <div style={style} className="">
            <div>
              <h3 className="service-h3">Hot Showers</h3>
              <p className="service-p">
                A small river named Duden flows by their place and supplies it
                with the necessary
              </p>
            </div>
          </div>
        </Col>
        <Col className="gutter-row service-icon">
          <div className="icon">
            <span className="icon-span">
              <BankOutlined className="icon-span" />
            </span>
          </div>
          <div style={style} className="">
            <div>
              <h3 className="service-h3">Air Conditioning</h3>
              <p className="service-p">
                A small river named Duden flows by their place and supplies it
                with the necessary
              </p>
            </div>
          </div>
        </Col>
        <Col className="gutter-row service-icon">
          <div className="icon">
            <span className="icon-span">
              <ReconciliationOutlined className="icon-span" />
            </span>
          </div>
          <div style={style} className="">
            <div>
              <h3 className="service-h3">Kitchen</h3>
              <p className="service-p">
                A small river named Duden flows by their place and supplies it
                with the necessary
              </p>
            </div>
          </div>
        </Col>
        <Col className="gutter-row service-icon">
          <div className="icon">
            <span className="icon-span">
              <BankOutlined className="icon-span" />
            </span>
          </div>
          <div style={style} className="">
            <div>
              <h3 className="service-h3">Lovker</h3>
              <p className="service-p">
                A small river named Duden flows by their place and supplies it
                with the necessary
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Service;
