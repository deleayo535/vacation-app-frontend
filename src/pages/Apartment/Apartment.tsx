import "../about/about.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/footer";
import Room from "../../components/section/Room";

function Apartment() {
  return (
    <>
      <Header />
      <div className="About-wrap">
        <div className="About-content">
          <p className="About-span">
            <span>
              <a href="#">Home</a>
            </span>
            <span>Rooms</span>
          </p>
          <h1 className="About-h1">Apartment Room</h1>
        </div>
      </div>
      <Room />
      <Footer />
    </>
  );
}

export default Apartment;
