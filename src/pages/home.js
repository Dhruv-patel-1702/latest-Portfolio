import React, { useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import About from "./about.js";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.from(".box", {
        opacity: 0,
        y: 100,
        duration: 1,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
    <>
      <div className="w-full h-screen overflow-hidden font-general-sans text-white">
        <video
          ref={videoRef}
          src="/Assets/5925-187109675_medium.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover "
        ></video>
        <Navbar />
        <div className="box flex items-center justify-center w-full h-screen px-2">
          <div className="text-center">
            <span
              className="text-3xl font-serif"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              I'm a
            </span>
            <h1 className="text-4xl leading-snug" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Dhruv Patel <br /> Full-Stack Developer · UI/UXDesign
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
        <div className="box flex absolute bottom-28">
          <p className="text-lg">[ Scroll down ]</p>
          <img
            src="./Assets/scrolldown.svg"
            alt="scroll"
            className="w-4 ml-2"
          />
        </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
