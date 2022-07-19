import Home from "./pages/home/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Apartment from "./pages/Apartment/Apartment";
import Serve from "./components/sectionB/services";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/serve" element={<Serve />} />
        <Route path="/room" element={<Apartment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
