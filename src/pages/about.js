import React from "react";
import Platform from "../components/platform";

const about = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full h-screen text-white">
          <div className="lg:flex justify-center items-center mt-36 gap-x-16">
            <div className="flex justify-center">
              <img
                src="./Assets/AvatarAndIcons-removebg-preview.png"
                className="w-64 h-64"
                alt="About img"
              />
            </div>
            <div className="text-xl py-8 text-center">
              <h2 className="text-2xl font-normal lg:text-xl">Hi there, I'm </h2>
              <h1 className="text-5xl">Dhruv Patel</h1>
              <h3 className="pt-5">find me in : </h3>
              <dir className="flex justify-center pt-3">
                <Platform />
              </dir>
            </div>
          </div>
          <div className="flex justify-center items-center text-white mt-8">
            <div className="text-pretty px-6 text-sm w-2/4">
              <p className="leading-6">
                Hi, I’m Dhruv Patel 😊. As a web developer and UI/UX designer,
                I’m passionate about creating websites that are both functional
                and visually appealing 🌟. With experience in React.js, HTML,
                CSS, and JavaScript, I specialize in building dynamic web
                applications 🚀. Currently, I’m gaining hands-on experience as a
                full-stack developer intern at Strideck, where I work on both
                the frontend and backend, learning and growing with each
                project. I love tackling new challenges and am committed to
                delivering exceptional user experiences ✨. Explore my projects
                on GitHub to see what I’ve been working on! 🔍 shortly
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
