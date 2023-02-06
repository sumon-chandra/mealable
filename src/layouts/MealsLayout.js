import React from "react";
import { Outlet } from "react-router-dom";

export default function MealsLayout() {
  return (
    <div className="">
      <h1>Meals</h1>
      <p>
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
