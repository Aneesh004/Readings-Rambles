import React from "react";

function Cards({ item }) {
  if (!item) return null;

  return (
    <div className="my-3 p-2">
      <div className="card w-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col h-[460px]">
        {/* Book Image */}
        <figure className="relative w-full h-64 bg-slate-100 dark:bg-slate-700 overflow-hidden flex items-center justify-center p-4">
          <img
            src={item.image || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60"}
            alt={item.title || item.name || "Book Cover"}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60";
            }}
          />
          {item.category && (
            <span className="absolute top-3 right-3 badge badge-secondary text-xs font-semibold px-2.5 py-1">
              {item.category}
            </span>
          )}
        </figure>

        {/* Card Body */}
        <div className="card-body p-5 flex flex-col justify-between flex-grow text-gray-900 dark:text-white">
          <div>
            <h2 className="card-title text-lg font-bold line-clamp-1">
              {item.title || item.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
              {item.name || item.title}
            </p>
          </div>

          <div className="card-actions flex justify-between items-center mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
            <span className="font-semibold text-sm text-purple-600 dark:text-purple-400">
              {item.price === "Free" || !item.price ? "Free" : `$${item.price}`}
            </span>
            <span className="text-xs bg-slate-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full font-medium">
              Featured
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
