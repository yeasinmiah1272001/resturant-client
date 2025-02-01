import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log("singleData", item);
  return (
    <div>
      <SectionTitle heading={"Update Items"} />
    </div>
  );
};

export default UpdateItem;
