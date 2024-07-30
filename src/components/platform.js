import React from 'react';
import { Link } from "react-router-dom";

const platform = () => {
  return (
    <>
      <div className='flex space-x-5'>
        <Link to="https://www.linkedin.com/in/dhruv-patel-43989822b/">
          <img
            src="./Assets/linkdin.svg"
            alt="linkdin"
            className="w-5 h-5 hover: transition-transform duration-300 hover:-translate-y-2"
          />
        </Link>
        <Link to="https://github.com/Dhruv-patel-1702">
          <img
            src="./Assets/github.svg"
            alt="github"
            className="w-5 h-5 hover:transition-transform duration-300 hover:-translate-y-2"
          />
        </Link>
        <Link to="https://www.instagram.com/dhruv_patel_17_2/">
          <img
            src="./Assets/instagram.svg"
            alt="instagram"
            className="w-5 h-5 hover:transition-transform duration-300 hover:-translate-y-2"
          />
        </Link>
        <Link to="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1344001889235334167">
          <img
            src="./Assets/Figma.svg"
            alt="Figma"
            className="w-5 h-5 hover:transition-transform duration-300 hover:-translate-y-2"
          />
        </Link>
      </div>
    </>
  );
}

export default platform