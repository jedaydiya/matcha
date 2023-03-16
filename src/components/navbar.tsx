import React, { useState, FC } from "react";
import { Coffee } from "@phosphor-icons/react";
const NavigationBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white-800 shadow-md">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Coffee size={50} weight="duotone" color="#74A12E" />
            <a className="text-3xl">Matcha Studio</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </a>
              <a className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </a>
              <a className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none  focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
