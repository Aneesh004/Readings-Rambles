import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import api from "../api/client";

function Course() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get("/book");
        if (Array.isArray(response.data) && response.data.length > 0) {
          setBooks(response.data);
        } else {
          throw new Error("No data returned from backend");
        }
      } catch (error) {
        console.warn("Backend fetch failed, attempting local fallback:", error.message);
        try {
          const fallback = await fetch("/list.json");
          const data = await fallback.json();
          setBooks(data);
        } catch (fallbackErr) {
          console.error("Fallback load failed:", fallbackErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
      <div className="mt-20 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {new Date().getFullYear()} READING CHALLENGE
        </h1>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          Welcome to the <span className="font-bold">Reading Challenge</span>! Explore our handpicked selection of inspiring books. Join our vibrant community, enjoy exclusive updates, and discover your next great literary adventure!
        </p>
      </div>

      <div className="mt-12 bg-slate-200 dark:bg-slate-800 text-gray-900 dark:text-gray-100 p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          How to Participate?
        </h2>
        <ol className="mt-6 text-base md:text-lg list-decimal list-inside space-y-4 max-w-4xl mx-auto">
          <li>
            <strong>Join the Challenge:</strong> Sign in for the Reading Challenge to unlock recommendations and connect with our reading community.
          </li>
          <li>
            <strong>Connect & Discuss:</strong> Dive into community discussions, meetups, and literary circles.{" "}
            <Link to="/contact" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
              Click here to write your review and share your thoughts.
            </Link>
          </li>
          <li>
            <strong>Share Your Journey:</strong> Share your reading milestones on social media with #LitChallenge.
          </li>
        </ol>
      </div>

      {/* Book Cards */}
      <div className="mt-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((item) => (
              <Cards key={item._id || item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Course;
