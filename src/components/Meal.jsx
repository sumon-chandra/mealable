import React from "react";

const Meal = ({ meal }) => {
  return (
    <div>
      <h1>Meal: {meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt="" />
    </div>
  );
};

export default Meal;
