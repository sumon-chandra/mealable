import React from "react";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  return (
    <Link
      to={category.strCategory}
      className="flex justify-between items-center bg-slate-50 border  hover:scale-[1.02] ease-in-out duration-300 border-gray-200 rounded-lg shadow-xl cursor-pointer p-4"
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
