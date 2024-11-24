import React from "react";
import { Link } from "react-router-dom";
const projects = () => {
  return (
    <div>
      <Link to="https://busease.vercel.app/">
        <div className="flex items-center justify-center h-screen">
          <img
            src="./Assets/Busease.jpg"
            alt="Busease"
            className="w-4/6 rounded-2xl"
          />
        </div>
      </Link>
    </div>
  );
};

export default projects;
