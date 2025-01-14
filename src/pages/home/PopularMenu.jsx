import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import MenuItem from "../../shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  console.log("menu", menu);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <Container>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {menu.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
    </Container>
  );
};

export default PopularMenu;
