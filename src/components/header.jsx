import React from "react";
import icon from "../assets/icon.svg";

function Header() {
  return (
    <nav className="p-3 bg-gradient-to-b from-gray-800 to-slate-800 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img
            src={icon}
            className="mr-3 h-6 sm:h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Medite
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Header;
