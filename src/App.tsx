import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Room from "./components/section/Room";
import Testimonial from "./components/Feedback/Testimonial";
import Feed from "./components/Feedback/feeds";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Room />
      <Testimonial />
    </div>
  );
}

export default App;
