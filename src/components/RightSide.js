import React from "react";
import Home from "./Home";
import MenuBar from "./MenuBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

export default function RightSide() {
  return (
    <BrowserRouter>
    <MenuBar />
    <div class="rightpart">
      <div class="rightpart_in">
       
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
       
      </div>
    </div>
    </BrowserRouter>
  );
}
