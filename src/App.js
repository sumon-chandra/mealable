import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar/Navbar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
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
