import React from "react";
import menubg from "../../assets/menu/menu-bg.jpg";
import desertbg from "../../assets/menu/dessert-bg.jpeg";
import pizzabg from "../../assets/menu/pizza-bg.jpg";
import saladbg from "../../assets/menu/salad-bg.jpg";
import soupbg from "../../assets/menu/soup-bg.jpg";

import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offerd = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div className="mt-4">
      <Helmet>
        <title>Menu Page</title>
      </Helmet>
      <Cover
        image={menubg}
        title={"Our Menu"}
        description={"world your like to try dish"}
      />

      <section>
        {/*========= offerd item start======== */}
        <div>
          <SectionTitle
            subHeading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          />
          <MenuCategory items={offerd} />
        </div>
        {/*============ offerd item end=========== */}

        {/*========= desrts start============ */}
        <div>
          <Cover
            image={desertbg}
            title={"Deserts"}
            description={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          <MenuCategory items={dessert} />
        </div>
        {/*============= desrts end============*/}

        {/*========= pizza start============ */}
        <div>
          <Cover
            image={pizzabg}
            title={"Pizza"}
            description={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          <MenuCategory items={pizza} />
        </div>
        {/*============= pizza end============*/}

        {/*=========salad start============ */}
        <div>
          <Cover
            image={saladbg}
            title={"Salads"}
            description={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          <MenuCategory items={salad} />
        </div>
        {/*=============salad end============*/}

        {/*=========suoups start============ */}
        <div>
          <Cover
            image={soupbg}
            title={"Soups"}
            description={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          <MenuCategory items={soup} />
        </div>
        {/*=============soups end============*/}
      </section>
    </div>
  );
};

export default Menu;
