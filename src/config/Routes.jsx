import { Routes, Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

function Routess() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/aboutMe" element={<AboutMe />} />
    </Routes>
  );
}

export default Routess;
