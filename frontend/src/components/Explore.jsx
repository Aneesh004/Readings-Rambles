import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Explore() {
  const [bookName, setBookName] = useState("");
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleInputChange = (e) => {
    setBookName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bookName.trim()) return;

    setLoading(true);
    setSearched(true);

    const searchUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(
      bookName.trim()
    )}`;

    try {
      const response = await fetch(searchUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const book = data.docs && data.docs.length > 0 ? data.docs[0] : null;

      if (book) {
        const coverUrl = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : null;
        const author = book.author_name ? book.author_name.join(", ") : "Unknown";
        const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(
          book.title
        )}+${encodeURIComponent(author)}`;

        setBookDetails({
          title: book.title,
          author,
          year: book.first_publish_year || "Unknown",
          coverUrl,
          amazonUrl: amazonSearchUrl,
        });
      } else {
        setBookDetails(null);
      }
    } catch (error) {
      console.error("Error fetching book details:", error);
      setBookDetails(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-50 dark:bg-slate-900 min-h-screen flex flex-col text-gray-900 dark:text-white">
      <Navbar />

      <main className="flex-grow max-w-screen-xl container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="text-center max-w-2xl mb-8">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Explore Books & Authors
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
            Search millions of titles via the Open Library database. Find published years, covers, and store links in an instant.
          </p>
        </div>

        <div className="w-full max-w-xl bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={bookName}
              onChange={handleInputChange}
              placeholder="Enter a book title or author..."
              className="flex-grow px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-medium rounded-xl px-6 py-3 transition duration-200"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <span className="loading loading-spinner loading-lg text-purple-600"></span>
            </div>
          )}

          {!loading && bookDetails && (
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {bookDetails.title}
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-300 mt-1">
                By <span className="font-semibold">{bookDetails.author}</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                First Published: {bookDetails.year}
              </p>

              {bookDetails.coverUrl && (
                <img
                  src={bookDetails.coverUrl}
                  alt={bookDetails.title}
                  className="mt-4 max-w-xs mx-auto rounded-lg shadow-md border border-gray-200 dark:border-slate-700 max-h-72 object-contain"
                />
              )}

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={bookDetails.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-5 py-2.5 rounded-lg transition duration-200 shadow"
                >
                  Find on Amazon ↗
                </a>
              </div>
            </div>
          )}

          {!loading && searched && !bookDetails && (
            <div className="mt-8 text-center text-gray-500 dark:text-gray-400 py-6">
              No matching books found. Please try a different title or keyword.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Explore;
