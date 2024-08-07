import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./app.css";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Project from "./pages/projects.js";
import Contact from "./pages/contact.js";
import Cursor from "./components/cursor.js";
import PuffLoader from "react-spinners/PuffLoader";
import Navbar from "./components/navbar.js";
import SmoothScroll from './components/smoothscroll.js'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="preloader flex justify-center items-center h-screen w-screen bg-[#000000] ">
        <PuffLoader color={"#feca18"} loading={loading} size={50} />
      </div>
    );
  }

  return (
    <div>
      <SmoothScroll>
      <BrowserRouter>
        <Cursor />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </SmoothScroll>
    </div>
  );
};

export default App;
