import React, { useRef, useEffect } from "react";
import Navbar from "../components/navbar";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden font-general-sans text-white">
      <video
        ref={videoRef}
        src="/Assets/5925-187109675_medium.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>
      <Navbar />
      <div className="flex items-center justify-center absolute z-10 w-full h-full ">
        <div>
          <h1 className="text-9xl "> <span className="text-7xl font-serif italic">I'm a</span> DHRUV PATEL</h1>
          <h2 className="text-10xl">FULL-STACK </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
