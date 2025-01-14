import React from "react";

import img from "../../assets/home/chef-special.jpg";
import Container from "../../components/Container";
import Cover from "../../shared/Cover";

const BistroBoss = () => {
  return (
    <Container>
      <Cover
        image={img}
        title={"Bistro Boss"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      />
    </Container>
  );
};

export default BistroBoss;
