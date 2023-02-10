import React from "react";
import Banner from "../components/banner/Banner";
import LatestMeal from "../components/latest/LatestMeal";

const Home = () => {
  return (
    <div className=" p-6">
      <Banner />
      <LatestMeal />
    </div>
  );
};

export default Home;
