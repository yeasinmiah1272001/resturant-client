import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCarts from "../hooks/useCarts";

const FoodCard = ({ items }) => {
  const { name, image, price, _id } = items;
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [carts, refetch] = useCarts();

  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  const location = useLocation();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuItem: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added success`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please log in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="bg-white rounded-lg  border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
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
          {items.price}
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
        <button
          onClick={() => handleAddToCart(items)}
          className="mt-4 px-4 py-2 w-full border border-gray-300 text-black rounded-md text-sm font-medium hover:bg-gray-600 transition duration-300 hover:text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
