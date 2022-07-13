import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Room from "./components/section/Room";
import Testimonial from "./components/Feedback/Testimonial";
import Feed from "./components/Feedback/feeds";
import Recommend from "./components/sectionB/recommend";
import Booking from "./components/sectionC/booking";
import News from "./components/sectionD/news";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Room />
      <Testimonial />
      <Recommend />
      <Booking />
      <News />
    </div>
  );
}

export default App;
