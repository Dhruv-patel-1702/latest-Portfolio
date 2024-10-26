import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.innerWidth >= 640);
    };

    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 400, fill: "forwards" }
        );
      }
    };

    if (isVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <>
          <div className="cursor-dot" data-cursor-dot></div>
          <div className="cursor-outline" data-cursor-outline></div>
        </>
      )}
    </>
  );
};

export default Cursor;
