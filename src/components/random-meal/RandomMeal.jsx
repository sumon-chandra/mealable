import React, { useEffect, useState } from "react";

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRandomMeal(data.meals));
  }, []);
  return (
    <div>
      {randomMeal.forEach((meal) => {
        <p>{meal.strArea}</p>;
      })}
    </div>
  );
};

export default RandomMeal;
