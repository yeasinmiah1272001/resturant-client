import React from "react";

const Cover = ({ title, description, image }) => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center h-[400px] flex items-center justify-center text-center mt-4"
      style={{
        backgroundImage: `url(${image})`, // Use the dynamic image as background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative w-1/2 bg-slate-500 bg-opacity-70 text-white px-2 py-14 shadow-lg rounded-md">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

export default Cover;
