import React from "react";

const Meal = ({ meal }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Meal: {meal.strMeal}</h1>
      {/* <img src={meal.strMealThumb} alt="" /> */}
    </div>
  );
};

export default Meal;
