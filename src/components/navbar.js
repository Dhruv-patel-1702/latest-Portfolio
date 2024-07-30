import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setNavbarVisible(currentScrollY < scrollY || currentScrollY === 0);
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        className={`flex justify-between items-center h-16 fixed top-0 left-0 w-full z-20 font-general-sans transition-transform duration-300 ${
          navbarVisible
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        } bg-black shadow-md`}
      >
        <div className="logoname flex items-center justify-between w-full md:w-auto px-4">
          <h2 className="text-lg text-white font-bold">Dhruv Patel</h2>
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: menuOpen ? "rotate(0deg)" : "rotate(90deg)" }}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4 pr-4 text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About me</Link>
          <Link to="/service">Services</Link>
          <Link to="/project">Projects</Link>
          <Link to="/contact">Contact me</Link>
        </div>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 w-4/5 h-full bg-[#161616] shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-30 md:hidden`}
      >
        <nav className="flex justify-center items-center h-screen">
          <ul className="flex flex-col items-start space-y-20 pl-6 text-white text-sm">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About me
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/project" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
