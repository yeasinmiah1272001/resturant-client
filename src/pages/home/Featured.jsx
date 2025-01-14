import React from "react";
import SectionTitle from "../../components/SectionTitle";
import img1 from "../../assets/home/featured.jpg";
import img2 from "../../assets/home/chef-special.jpg";

const Featured = () => {
  return (
    <div
      className="relative bg-fixed mt-6 h-auto text-white py-10 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        />
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="lg:w-1/2 flex justify-center">
            <img
              className="rounded-lg shadow-lg h-48 "
              src={img2}
              alt="Chef Special"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-300 text-sm mb-4">March 20, 2023</p>
            <h3 className="text-2xl font-semibold mb-4">
              WHERE CAN I GET SOME?
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
