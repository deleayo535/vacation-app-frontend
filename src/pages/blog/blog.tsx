import "../about/about.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/footer";
import News from "../../components/sectionD/news";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <Header />
      <div className="About-wrap">
        <div className="About-content">
          <p className="About-span">
            <span>
              <Link to="/home">Home</Link>
            </span>
            <span>Blog</span>
          </p>
          <h1 className="About-h1">Blogs</h1>
        </div>
      </div>
      <News />
      <Footer />
    </>
  );
}

export default Blog;
