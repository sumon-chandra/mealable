import React from "react";

const Category = ({ category }) => {
  return (
    <div className="bg-green-50 shadow-md hover:shadow-xl cursor-pointer p-2 m-2 flex gap-1 justify-between items-center">
      <h3 className="text-lg  md:text-xl font-bold">{category.strCategory}</h3>
      <img src={category.strCategoryThumb} className="w-1/3" alt="" />
    </div>
  );
};

export default Category;
