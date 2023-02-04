import React, { useEffect, useState } from "react";
import Meal from "./Meal";

const mealsURL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
const MealList = () => {
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
        <Meal meal={meal} key={meal.idMeal} />
      ))}
    </div>
  );
};

export default MealList;
