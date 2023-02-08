import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Category from "./pages/Category";
import MealsLayout from "./layouts/MealsLayout";
import Meals, { mealsLoader } from "./pages/meal/Meals";
import MealDetails, { mealDetailsLoader } from "./pages/meal/MealDetails";
import NotFound from "./pages/NotFound";
import MealsError from "./pages/meal/MealsError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="category" element={<Category />} />
      <Route path="meals" element={<MealsLayout />}>
        <Route index element={<Meals />} loader={mealsLoader} />
        <Route
          path=":mealName"
          element={<MealDetails />}
          loader={mealDetailsLoader}
          errorElement={<MealsError />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
