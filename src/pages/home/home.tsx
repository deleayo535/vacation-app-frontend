import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Room from "../../components/section/Room";
import Testimonial from "../../components/Feedback/Testimonial";
import Recommend from "../../components/sectionB/recommend";
import Booking from "../../components/sectionC/booking";
import News from "../../components/sectionD/news";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Room />
      <Testimonial />
      <Recommend />
      <Booking />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
