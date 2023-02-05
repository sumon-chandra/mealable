import React from "react";
import Category from "./Category";
import Meal from "./Meal";

const Home = () => {
  return (
    <div className="container md:w-10/12 mx-auto">
      <Meal />
      <Category />
    </div>
  );
};

export default Home;
