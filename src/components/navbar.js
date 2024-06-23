import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between h-32 items-center absolute top-0 left-0 w-full z-20 font-general-sans">
      <div className="logoname flex justify-center">
        <h1 className="text-3xl text-white border-2 border-white relative left-24 px-6 py-2 rounded-full">
          Dhruv Patel
        </h1>
        <p className=" text-white relative left-24 bottom-1 ">DP</p>
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
