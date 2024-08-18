import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card w-full bg-base-100 shadow-xl hover:scale-105 h-[500px] dark:border">
          <figure className="h-3/4">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>
            <p className="text-sm">{item.name}</p>
            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline">{item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-black cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
