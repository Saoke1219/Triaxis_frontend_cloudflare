import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail/CaseStudyDetail";

import Contact from "./pages/contact/Contact";
import BackToTop from "./components/common/BackToTop";


function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} /> 
         <Route
          path="/case-studies"
          element={<CaseStudies />}
        />

        <Route
          path="/case-studies/:slug"
          element={<CaseStudyDetail />}
        />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;