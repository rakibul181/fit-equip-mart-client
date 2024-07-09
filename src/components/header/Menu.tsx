import { useState } from "react";
import Search from "./Search";
import LoginTogolContent from "./LoginTogolContent";

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center py-4 px-4 sm:px-8 bg-white shadow-md">
        <div className="text-3xl font-bold font-anton">
          <a href="/">
            FIT<span className="text-primary ">EQUIP</span> Mart
          </a>
        </div>

        {/* Search Bar for Mobile */}
        <div className="relative md:hidden  mx-4">
          <Search />
          <button className="absolute right-0 top-0 mt-2 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
              />
            </svg>
          </button>
        </div>

        {/* Menu Toggle for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`md:flex ${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg p-4 sm:p-0">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* Search Bar for Larger Screens */}
        <div className="hidden md:block relative mr-4">
          <Search />
          <button className="absolute right-0 top-0 mt-2 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
              />
            </svg>
          </button>
        </div>

        {/* Conditional User Options */}
        <div className="hidden sm:flex gap-4 ">
          {isLoggedIn ? (
            <LoginTogolContent/>
          ) : (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Menu;
