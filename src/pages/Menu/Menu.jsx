import React from "react";
import img1 from "../../assets/menu/menu-bg.jpg";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu Page</title>
      </Helmet>
      <Cover
        image={img1}
        title={"Our Menu"}
        description={"world your like to try dish"}
      />
    </div>
  );
};

export default Menu;
