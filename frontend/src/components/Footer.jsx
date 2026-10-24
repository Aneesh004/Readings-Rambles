import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr className="border-gray-200 dark:border-gray-800" />
      <footer className="footer footer-center bg-blue-50 text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
        <nav className="flex flex-wrap justify-center gap-6 dark:bg-slate-900 dark:text-white">
          <Link
            className="text-black font-medium hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors"
            to="/about-us"
          >
            About Us
          </Link>
          <Link
            className="text-black font-medium hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors"
            to="/contact"
          >
            Reader's Point
          </Link>
          <Link
            className="text-black font-medium hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors"
            to="/review-us"
          >
            Review Us
          </Link>
          <Link
            className="text-black font-medium hover:text-purple-600 dark:text-white dark:hover:text-purple-400 transition-colors"
            to="/PrivacyPolicy"
          >
            Privacy Policy
          </Link>
        </nav>

        <aside>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Copyright © {new Date().getFullYear()} Readings & Rambles - All Rights Reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
