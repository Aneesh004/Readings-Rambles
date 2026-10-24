import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../api/client";
import Cards from "./Cards";

function Freebook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/book");
        if (Array.isArray(res.data) && res.data.length > 0) {
          const freeBooks = res.data.filter((item) => item.category === "Free");
          setBooks(freeBooks.length > 0 ? freeBooks : res.data);
        } else {
          throw new Error("No data returned from backend");
        }
      } catch (error) {
        console.warn("Backend books fetch failed, attempting local fallback:", error.message);
        try {
          const fallback = await fetch("/list.json");
          const data = await fallback.json();
          const freeBooks = data.filter((item) => item.category === "Free");
          setBooks(freeBooks);
        } catch (fallbackErr) {
          console.error("Fallback load failed:", fallbackErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: books.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: books.length > 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
      <div className="pt-8">
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Recommendations of the Month!
          </span>
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-300">
          Dive into our vibrant picks for this month and uncover exceptional reads that will spark your imagination. Let our colorful recommendations guide you to your next great literary journey.
        </p>
      </div>

      <div className="py-10">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : books.length > 0 ? (
          <Slider {...settings}>
            {books.map((item) => (
              <Cards item={item} key={item._id || item.id} />
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500 py-10">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;