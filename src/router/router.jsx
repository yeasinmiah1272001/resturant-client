import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import RootLayout from "../layout/RootLayout";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";

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
    ],
  },
]);
