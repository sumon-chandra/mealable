import React from "react";
import { Outlet } from "react-router-dom";

export default function MealsLayout() {
  return (
    <div className="pt-4">
      <h1 className="text-center text-2xl ">Find best meal for you !!</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
        laudantium tempore saepe, maxime nostrum reprehenderit aperiam quam
        delectus corrupti voluptatem.
      </p>
      <div className="my-12">
        <Outlet />
      </div>
    </div>
  );
}
