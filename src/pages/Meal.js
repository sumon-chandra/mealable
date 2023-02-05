import React, { useEffect, useState } from "react";

const mealsURL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
const Meal = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(mealsURL)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2 className="text-green-700">Meal List !!</h2>
      {meals.map((meal) => (
        <h1 className="text-4xl font-bold">Meal: {meal.strMeal}</h1>
      ))}
    </div>
  );
};

export default Meal;
