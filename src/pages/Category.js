import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
      {categories.map((category) => (
        <div className="bg-green-50 shadow-md hover:shadow-xl cursor-pointer p-2 m-2 flex gap-1 justify-between items-center">
          <h3 className="text-lg  md:text-xl font-bold">
            {category.strCategory}
          </h3>
          <img src={category.strCategoryThumb} className="w-1/3" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Category;
