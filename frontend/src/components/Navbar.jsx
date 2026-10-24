import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { UseAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser] = UseAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li className="mr-2">
        <Link
          className="text-black font-semibold hover:text-purple-600 dark:hover:text-purple-400 dark:text-white transition-colors duration-200"
          to="/"
        >
          HOME
        </Link>
      </li>
      <li className="mr-2">
        <Link
          className="text-black font-semibold hover:text-purple-600 dark:hover:text-purple-400 dark:text-white transition-colors duration-200"
          to="/course"
        >
          ACTIVITIES
        </Link>
      </li>
      <li className="mr-2">
        <Link
          className="text-black font-semibold hover:text-purple-600 dark:hover:text-purple-400 dark:text-white transition-colors duration-200"
          to="/contact"
        >
          READER'S POINT
        </Link>
      </li>
      <li>
        <Link
          className="text-black font-semibold hover:text-purple-600 dark:hover:text-purple-400 dark:text-white transition-colors duration-200"
          to="/explore"
        >
          EXPLORE
        </Link>
      </li>
    </>
  );

  return (
    <div className="dark:bg-slate-900">
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          sticky
            ? "shadow-md bg-white/90 dark:bg-slate-800/90 backdrop-blur-md dark:text-white"
            : "bg-transparent dark:text-white"
        }`}
      >
        <div className="navbar flex items-center justify-between py-3">
          <div className="navbar-start flex items-center">
            {/* Mobile dropdown */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-1 mr-2"
                aria-label="Toggle navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-white dark:bg-slate-800 rounded-box w-52 space-y-1"
              >
                {navItems}
              </ul>
            </div>

            {/* Brand Logo */}
            <Link
              to="/"
              className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 tracking-tight hover:opacity-90 transition-opacity"
            >
              Readings & Rambles
            </Link>
          </div>

          <div className="navbar-end flex items-center space-x-4">
            <div className="hidden lg:flex items-center">
              <ul className="menu menu-horizontal px-1 space-x-2">
                {navItems}
              </ul>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition duration-200 text-gray-700 dark:text-gray-200"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                // Sun icon for dark mode
                <svg
                  className="h-6 w-6 fill-current text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              ) : (
                // Moon icon for light mode
                <svg
                  className="h-6 w-6 fill-current text-slate-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              )}
            </button>

            {/* Auth Button */}
            {authUser ? (
              <Logout />
            ) : (
              <div>
                <button
                  type="button"
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 duration-200 cursor-pointer font-medium"
                  onClick={() => {
                    const modal = document.getElementById("my_modal_3");
                    if (modal && typeof modal.showModal === "function") {
                      modal.showModal();
                    }
                  }}
                >
                  Login
                </button>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Top spacing spacer */}
      <div className="pt-20"></div>
    </div>
  );
}

export default Navbar;
