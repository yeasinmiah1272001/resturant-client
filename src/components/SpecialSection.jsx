import React from "react";

const SpecialSection = ({ title, description, image }) => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center h-64 flex items-center justify-center text-center mt-4"
      style={{
        backgroundImage: `url(${image})`, // Use the dynamic image as background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative w-1/2 bg-white bg-opacity-90 px-6 py-4 shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default SpecialSection;
