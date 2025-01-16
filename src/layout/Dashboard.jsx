import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaBox, FaUser, FaHome, FaPlus } from "react-icons/fa"; // Importing React Icons

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Left side navigation */}
      <div className="w-1/4 bg-yellow-500 text-white p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/dashboard/carts"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2"
                  : "hover:text-blue-400 flex items-center space-x-2"
              }
            >
              <FaShoppingCart size={20} /> {/* Cart Icon */}
              <span> My Carts</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/order"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2"
                  : "hover:text-blue-400 flex items-center space-x-2"
              }
            >
              <FaBox size={20} /> {/* Orders Icon */}
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2"
                  : "hover:text-blue-400 flex items-center space-x-2"
              }
            >
              <FaUser size={20} /> {/* Profile Icon */}
              <span>Profile</span>
            </NavLink>
          </li>
          <div className="divider divider-accent"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2"
                  : "hover:text-blue-400 flex items-center space-x-2"
              }
            >
              <FaHome size={20} /> {/* Orders Icon */}
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2"
                  : "hover:text-blue-400 flex items-center space-x-2"
              }
            >
              <FaPlus size={20} /> {/* Orders Icon */}
              <span>Menu</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right side content */}
      <div className="flex-1 bg-gray-100 p-10 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
