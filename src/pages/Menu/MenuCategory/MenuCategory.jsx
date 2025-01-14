import React from "react";
import MenuItem from "../../../shared/MenuItem";
import Container from "../../../components/Container";

const MenuCategory = ({ items }) => {
  return (
    <Container className="grid md:grid-cols-2 gap-6">
      {items.map((item) => (
        <MenuItem item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default MenuCategory;
