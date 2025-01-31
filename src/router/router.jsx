import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import RootLayout from "../layout/RootLayout";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../layout/Dashboard";
import Carts from "../pages/Dashboard/Carts";
import OrderPage from "../pages/Dashboard/OrderPage";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";
import AllUsers from "../pages/Dashboard/AllUsers";
import Additems from "../pages/Dashboard/Additems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "carts",
        element: <Carts />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
      // admin related
      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <Additems />
          </AdminRoute>
        ),
      },
    ],
  },
]);
