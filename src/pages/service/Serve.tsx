import "../about/about.css";
import Header from "../../components/Header/Header";

function Serve() {
  return (
    <>
      <Header />
      <div className="About-wrap">
        <div className="About-content">
          <p className="About-span">
            <span>
              <a href="#">Home</a>
            </span>
            <span>Services</span>
          </p>
          <h1 className="About-h1">Services</h1>
        </div>
      </div>
    </>
  );
}

export default Serve;
