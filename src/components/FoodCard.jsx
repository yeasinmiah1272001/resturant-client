import React from "react";

const FoodCard = ({ items }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="overflow-hidden relative rounded-t-lg">
        <img
          className="object-cover  w-full h-48 transform group-hover:scale-105 transition-transform duration-300"
          src={items.image}
          alt={items.name}
          height={192}
          width={300}
        />
        <span className="absolute bg-black text-white right-3 border  duration-300 border-gray-500 px-2 rounded-md p-1 top-3">
          344
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 truncate">
          {items.name}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {items.recipe}
        </p>
        <button className="mt-4 px-4 py-2 w-full border border-gray-300 text-black rounded-md text-sm font-medium hover:bg-gray-600 transition duration-300 hover:text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
