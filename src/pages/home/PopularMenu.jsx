import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import MenuItem from "../../shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((item) => item.category === "popular");
  return (
    <Container>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {popularItem.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
    </Container>
  );
};

export default PopularMenu;
