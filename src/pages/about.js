import React from "react";
import Platform from "../components/platform";

const about = () => {
  return (
    <>

      <div className="flex justify-center items-center w-full h-screen text-white">
        <div className="flex justify-center items-center  w-2/3 space-x-28">
          <div>
            <img
              src="./Assets/AvatarAndIcons-removebg-preview.png"
              className="w-96 h-96"
              alt="About img"
            />
          </div>
          <div className="text-2xl space-y-2">
            <h1 className="text-2xl mb-4">~About me</h1>
            <h2 className="text-6xl font-normal">Hi there, I'm </h2>
            <h1 className="text-8xl">Dhruv Patel</h1>
            <dir className="ml-1 pt-6">
              <Platform />
            </dir>
          </div>
        </div>
      </div>

    <div className="flex justify-center items-center text-white">
    <div className="text-center  w-2/3 text-2xl">
        <p className="leading-10">Hi, I’m Dhruv Patel 😊. As a web developer and UI/UX designer, I’m passionate about creating websites that are both functional and visually appealing 🌟. With experience in React.js, HTML, CSS, and JavaScript, I specialize in building dynamic web applications 🚀. Currently, I’m gaining hands-on experience as a full-stack developer intern at Strideck, where I work on both the frontend and backend, learning and growing with each project 🛠️. I love tackling new challenges and am committed to delivering exceptional user experiences ✨. Explore my projects on GitHub to see what I’ve been working on! 🔍 shortly</p>
      </div>
    </div>

    </>
  );
};

export default about;
