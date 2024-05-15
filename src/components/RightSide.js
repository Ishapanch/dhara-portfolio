import React from "react";
import Home from "./Home";
import MenuBar from "./MenuBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import News from "./News";
import Contact from "./Contact";

export default function RightSide() {
  return (
    <BrowserRouter>
    <MenuBar />
    <div class="rightpart">
      <div class="rightpart_in">
       
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
       
      </div>
    </div>
    </BrowserRouter>
  );
}
