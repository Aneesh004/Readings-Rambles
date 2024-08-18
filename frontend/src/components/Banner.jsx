import React from 'react';

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-[-20px] mb-0 dark:bg-slate-900 dark:text-white">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className='space-y-12'>
            <h1 className='text-6xl text-black font-bold dark:text-white'>
              Where <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>curiosity</span> meets constant <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>discovery</span>
            </h1>
            <p className='text-black dark:text-white'>
              Ever lusted over a book but had to control yourself because it was too expensive?<br /><br />
              Fear not! <strong>Readings & Rambles</strong> is here to fulfill your literary desires. While knowledge is beyond value, books do come with a price but here, we deliver the finest gems from the world of literature at prices that feel like a treasure unearthed. Your passion for reading deserves nothing less than the extraordinary, and we're here to make sure you never have to hold back.
            </p>
            <label className="bg-blue-50 input input-bordered flex items-center gap-2" style={{ border: '1px solid black' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow text-black m-2" placeholder="Email" />
            </label>
            <button className="btn mt-[-10px] btn-secondary">Submit</button>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center">
          <img src="/banner.png" className='w-90% h-auto ml-20' alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;
