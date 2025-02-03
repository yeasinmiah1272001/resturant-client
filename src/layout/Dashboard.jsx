import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaUserShield,
  FaPlusSquare,
  FaTasks,
  FaUsers,
  FaHome,
  FaUtensils,
  FaEnvelope,
  FaRegCalendarCheck,
  FaShoppingBag,
  FaCommentDots,
  FaClipboardCheck,
  FaBookmark,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useCarts from "../hooks/useCarts";

const Dashboard = () => {
  const [carts] = useCarts();
  const [isAdmin] = useAdmin();
  // console.log("isadmin", isAdmin);
  return (
    <div className="flex h-screen">
      {/* Left side navigation */}
      <div className="w-1/4 bg-yellow-500 text-black p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-6">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminhome"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaUserShield size={20} />
                  <span>Admin Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/additems"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaPlusSquare size={20} />
                  <span>Add Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageitems"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaTasks size={20} />
                  <span>Manage Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaUsers size={20} />
                  <span>All Users</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/userhome"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaHome size={20} />
                  <span>User Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaRegCalendarCheck size={20} />
                  <span>Reservation</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/carts"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaShoppingBag size={20} />
                  <span>My Carts {carts.length}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymenthistory"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaCommentDots size={20} />
                  <span>Payment History</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/orders"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaClipboardCheck size={20} />
                  <span>Orders</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/booking"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold flex items-center space-x-2"
                      : "hover:text-blue-400 flex items-center space-x-2"
                  }
                >
                  <FaBookmark size={20} />
                  <span>My Booking</span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider divider-accent"></div>
          {/* shared navlinks */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2"
                  : "hover:text-blue-400 flex items-center space-x-2"
              }
            >
              <FaHome size={20} />
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
              <FaUtensils size={20} />
              <span>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold flex items-center space-x-2"
                  : "hover:text-blue-400 flex items-center space-x-2"
              }
            >
              <FaEnvelope size={20} />
              <span>Contact</span>
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
