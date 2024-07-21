import React, { useEffect } from "react";

const Cursor = () => {
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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default Cursor;
