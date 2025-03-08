import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to="/">Logo</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link to="/chisiamo" className="text-white hover:text-gray-300">
              Chi Siamo
            </Link>
            <Link to="/starwars" className="text-white hover:text-gray-300">
              Star Wars
            </Link>
            <Link to="/calculator" className="text-white hover:text-gray-300">
              Calculator
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link
              to="/about"
              className="block text-white hover:text-gray-300 p-2"
            >
              About
            </Link>
            <Link
              to="/chisiamo"
              className="block text-white hover:text-gray-300 p-2"
            >
              Chi Siamo
            </Link>
            <Link
              to="/starwars"
              className="block text-white hover:text-gray-300 p-2"
            >
              Star Wars
            </Link>
            <Link
              to="/calculator"
              className="block text-white hover:text-gray-300 p-2"
            >
              Calculator
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
