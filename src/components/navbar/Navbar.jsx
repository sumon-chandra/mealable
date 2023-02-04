import React from "react";
import ToggleBtn from "./ToggleBtn";
import NavbarLink from "./NavbarLink";
import logo from "../../img/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-slate-50 border-gray-600 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container md:w-3/4 flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Mealable Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Mealable
          </span>
        </a>
        <ToggleBtn />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavbarLink text="Home" href="#" aria-current="page" />
            <NavbarLink text="About" href="#" />
            <NavbarLink text="Category" href="#" />
            <NavbarLink text="Meals" href="#" />
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
