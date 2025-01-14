import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import BistroBoss from "./BistroBoss";
import PopularMenu from "./PopularMenu";
import CallUsBanner from "../../components/CallUsBanner";
import Featured from "./Featured";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Category />
      <BistroBoss />
      <PopularMenu />
      <CallUsBanner />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
