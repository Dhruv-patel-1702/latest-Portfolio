import React, { useEffect } from "react";
import "./index.css";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Service from "./pages/service.js";
import Project from "./pages/projects.js";
import Contact from "./pages/contact.js";

const App = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    if (cursorDot && cursorOutline) {
      const handleMouseMove = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 400, fill: "forwards" }
        );
      };
      window.addEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </div>
  );
};

export default App;
