import React from "react";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  return (
    <Link
      to={category.strCategory}
      className="flex justify-between items-center bg-white p-4 shadow-lg rounded-lg cursor-pointer hover:scale-[1.01]"
    >
      <h3 className="text-center font-bold text-2xl">{category.strCategory}</h3>
      <img
        src={category.strCategoryThumb}
        className="w-24 xl:w-56"
        alt="Category Thumb"
      />
    </Link>
  );
}
