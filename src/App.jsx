import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ForInvesters from "./pages/ForInvesters";
import Blogs from "./pages/Blogs";
import { useEffect } from "react";
import ForBrands from "./pages/ForBrands";
import SingleBlogPage from "./pages/SingleBlogPage";
import Resell from "./pages/Resell";
import About from "./pages/About";
import RealState from "./pages/RealState";
import Events from "./pages/Events";

// import { useEffect } from "react";
// const { pathname } = useLocation();

// useEffect(() => {
//   window.scrollTo({ top: 0, behavior: "auto" });
// }, [pathname]);

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forinvestors" element={<ForInvesters />} />
        <Route path="/forbrands" element={<ForBrands />} />
        <Route path="/resell" element={<Resell />} />
        <Route path="/realestate" element={<RealState />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        {/* <Route
          path="/singleblogpage/:title/:desc/:img/:date/:by"
          element={<SingleBlogPage />}
        /> */}
        <Route path="/singleblogpage/:data" element={<SingleBlogPage />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
