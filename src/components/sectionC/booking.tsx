import React from "react";
import { Button } from "antd";
import "./booking.css";

function Booking() {
  return (
    <div className="Booking-wrap">
      <div className="Booking-content">
        <h2 className="Booking-h2">Ready to get started</h2>
        <p className="Booking-p">
          It’s safe to book online with us! Get your dream stay in clicks or
          drop us a line with your questions.
        </p>
        <Button type="primary" className="Booking-but">
          Book Now
        </Button>
        <Button type="primary">Contact Us</Button>
      </div>
    </div>
  );
}

export default Booking;
