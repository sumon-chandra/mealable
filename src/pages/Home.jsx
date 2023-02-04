import React from "react";
import MealList from "../components/meals/MealList";
import CategoryList from "../components/categories/CategoryList";
import RandomMeal from "../components/random-meal/RandomMeal";

const Home = () => {
  return (
    <div className="container md:w-3/4 mx-auto">
      <MealList />
      <CategoryList />
      <RandomMeal />
    </div>
  );
};

export default Home;
