import React, { useRef, useEffect } from "react";
import Navbar from "../components/navbar";

const Home = ({ cursorClasses }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const handleMouseEnter = () => {
    const cursorOutline = document.querySelector(`[data-cursor-outline]`);
    const cursorDot = document.querySelector(`[data-cursor-dot]`);
    if (cursorOutline && cursorDot) {
      cursorOutline.classList.add("hovered-outline");
      cursorDot.classList.add("hovered-dot");
    }
  };

  const handleMouseLeave = () => {
    const cursorOutline = document.querySelector(`[data-cursor-outline]`);
    const cursorDot = document.querySelector(`[data-cursor-dot]`);
    if (cursorOutline && cursorDot) {
      cursorOutline.classList.remove("hovered-outline");
      cursorDot.classList.remove("hovered-dot");
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden font-general-sans text-slate-200">
      <video
        ref={videoRef}
        src="/Assets/5925-187109675_medium.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>
      <Navbar />
      <div className="flex items-center justify-center absolute z-10 w-full h-full overflow-hidden">
        <div>
          <span className="text-7xl font-serif">I'm a </span>
          <span
            className="text-9xl italic"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            DHRUV PATEL
          </span>
          <br />
          <span
            className="text-9xl relative right-40 italic"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            FULL-STACK{" "}
          </span>
          <br />
          <span
            className="text-9xl relative left-48 italic"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            DEVELOPER
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
