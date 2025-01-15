import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";

const RootLayout = () => {
  const location = useLocation();
  const noHeaderNoFoter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderNoFoter || <Navbar />}
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

export default RootLayout;
