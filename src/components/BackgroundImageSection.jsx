import React from "react";

const BackgroundImageSection = ({ image, children }) => {
  return (
    <div className="relative w-full">
      {/* Background image */}
      <img
        src={image}
        alt="Background"
        className="absolute top-0 left-0 w-full h-auto -z-10"
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImageSection;
