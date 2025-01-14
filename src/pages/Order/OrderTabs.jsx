import React from "react";
import FoodCard from "../../components/FoodCard";
import Container from "../../components/Container";

const OrderTabs = ({ items }) => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <FoodCard items={item} key={item._id} />
      ))}
    </Container>
  );
};

export default OrderTabs;
