import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Services from "./Services";
import Faq from "./Faq";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route end path="/" element={<Home />} />
        <Route end path="/portfolio" element={<Portfolio />} />
        <Route end path="/about" element={<About />} />
        <Route end path="/contact" element={<Contact />} />
        <Route end path="/faq" element={<Faq />} />
        <Route end path="/service" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
