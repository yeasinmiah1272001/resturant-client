import React from "react";
import SectionTitle from "../../components/SectionTitle";
import AdminHome from "./AdminHome";

const UserHome = () => {
  return (
    <div>
      <SectionTitle heading={"User Home"} />
      <AdminHome />
    </div>
  );
};

export default UserHome;
