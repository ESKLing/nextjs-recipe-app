"use client";

import Link from "next/link";
import NavLinks from "./navlinks";
import { useState } from "react";
import clsx from "clsx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">E Ling</Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* Desktop view */}
      <div className="hidden w-full lg:block flex-grow lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavLinks />
        </div>
      </div>
      {/* Mobile view */}
      <div
        className={clsx(
          "w-full block lg:hidden flex-grow lg:items-center lg:w-auto",
          isMenuOpen === false && "hidden"
        )}
      >
        <div className="text-sm lg:flex-grow">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
