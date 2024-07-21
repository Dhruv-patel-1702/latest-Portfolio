import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setNavbarVisible(false); // Scrolling down
      } else {
        setNavbarVisible(true); // Scrolling up
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div
      className={`flex justify-between h-32 items-center fixed top-0 left-0 w-full z-10 font-general-sans transition-transform duration-300 ${
        navbarVisible
          ? "transform translate-y-0"
          : "transform -translate-y-full"
      }`}
    >
      <div className="logoname flex justify-center">
        <h2 className="text-3xl text-white border-2 border-white relative left-24 px-6 py-2 rounded-full">
          Dhruv Patel
        </h2>
        <p className="text-white relative left-24 bottom-1">DP</p>
      </div>
      <div className="relative right-24">
        <ul className="flex text-white gap-x-16 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
