import React from "react";
import Banner from "../components/banner/Banner";
import LatestMeal from "../components/latest/LatestMeal";
import Categories from "./category/Categories";

const Home = () => {
  return (
    <div className=" p-6">
      <Banner />
      <LatestMeal />
      <Categories />
    </div>
  );
};

export default Home;
