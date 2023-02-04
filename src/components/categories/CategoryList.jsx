import React, { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
