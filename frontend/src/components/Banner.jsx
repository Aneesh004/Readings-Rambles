import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  // --- Dynamic Date Logic for Calendar Header ---
  const today = new Date();
  // Set the target to the next month from the current date
  const nextMonthDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const calendarMonthName = nextMonthDate.toLocaleString('default', { month: 'long' });
  const calendarYear = nextMonthDate.getFullYear();

  return (
    <>
      {/* --- Existing Hero Banner --- */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row dark:bg-slate-900 dark:text-white">
        {/* Text Content Section */}
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-32">
          <div className='space-y-8'>
            <h1 className='text-4xl md:text-5xl text-black font-bold dark:text-white'>
              A Curated Space for the {' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Inquisitive Reader
              </span>
            </h1>
            <p className='text-lg text-slate-700 dark:text-slate-300'>
              At <strong>Readings & Rambles</strong>, we believe stories are gateways to new perspectives. Explore a thoughtfully curated collection of timeless classics, compelling fiction, and insightful narratives. Join a community dedicated to the art of reading and the joy of discovery.
            </p>
            <div>
              <Link to="/about-us" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold tracking-wide">
                Learn more about our mission &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-20">
          <img 
            src="/banner.png" 
            className='w-[90%] md:w-full h-auto' 
            alt="A collection of classic and modern books" 
          />
        </div>
      </div>
      {/* --- End of Existing Hero Banner --- */}


      {/* --- Two-Club Section --- */}
      <div className="dark:bg-slate-900 dark:text-white pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
              Find Your Circle
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Tiny Tales Club */}
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col text-left">
              <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">
                Tiny Tales Club
              </h3>
              <div className="mt-3 text-slate-600 dark:text-slate-300 flex-grow space-y-4">
                <p>Does your child see reading as a solitary chore? Let's change that perspective.</p>
                <p>Our Guild is built on the idea that reading is a skill best learned and enjoyed with friends. We provide a structured, supportive environment where members tackle exciting books together, boosting their confidence and turning reading into a rewarding team effort.</p>
                <blockquote className="border-l-2 border-slate-300 dark:border-slate-600 pl-3 italic text-slate-500">"Building confident readers, together."</blockquote>
              </div>
              <div className="mt-6">
                <a href="https://forms.gle/BSrxuqzfkGaPJvV18" className="font-semibold text-teal-500 hover:text-teal-600 dark:hover:text-teal-300">Join the Community &rarr;</a>
              </div>
            </div>
            {/* Card 2: Readers’ Circle */}
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col text-left">
              <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400">
                Readers’ Circle
              </h3>
              <div className="mt-3 text-slate-600 dark:text-slate-300 flex-grow space-y-4">
                <p>Love books, but tired of reading alone? Crave intellectual conversation but find it hard to schedule?</p>
                <p>Our Forum is the solution. <strong>Readings & Rambles</strong> hosts this virtual space for adults to engage in meaningful discussions about compelling literature, without the hassle of a commute. We welcome everyone—from seasoned literary enthusiasts to those just looking to read more.</p>
                <blockquote className="border-l-2 border-slate-300 dark:border-slate-600 pl-3 italic text-slate-500">"A great book deserves a great conversation."</blockquote>
              </div>
              <div className="mt-6">
                <a href="https://forms.gle/BSrxuqzfkGaPJvV18" className="font-semibold text-amber-500 hover:text-amber-600 dark:hover:text-amber-300">Join the Community &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- End of Two-Club Section --- */}


      {/* --- Monthly Calendar Section with Auto-Updating Month --- */}
      <div className="dark:bg-slate-900 dark:text-white pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
              Our Monthly Calendar
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Turn the page with us! We have a fantastic lineup of events for {calendarMonthName}. Join our community for lively discussions, new authors, and shared discoveries!
            </p>
          </div>
          
          {/* Events List */}
          <div className="space-y-12 max-w-4xl mx-auto text-left">
            {/* Event 1 */}
            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">3rd {calendarMonthName} {calendarYear}</h3>
              <p className="text-lg font-semibold text-black dark:text-white">
                <strong>Classic Literature (Deep Dive):</strong> The Great Gatsby by F. Scott Fitzgerald
              </p>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                A nuanced exploration of the American Dream, wealth, and illusion. We'll dissect Fitzgerald's iconic prose, symbolism, and the enduring relevance of its characters.
              </p>
              <div className="mt-3 space-y-1 text-slate-500 dark:text-slate-400 font-medium">
                <p>8:00 PM - 9:30 PM IST</p>
                <p>On Google Meet</p>
              </div>
            </div>

            {/* Event 2 */}
            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">17th {calendarMonthName} {calendarYear}</h3>
              <p className="text-lg font-semibold text-black dark:text-white">
                <strong>Contemporary Fiction (Read-along):</strong> 'Project Hail Mary' by Andy Weir
              </p>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                An exhilarating journey through space and science. Join us to discuss the novel's brilliant problem-solving, witty humor, and the touching themes of friendship and sacrifice.
              </p>
              <div className="mt-3 space-y-1 text-slate-500 dark:text-slate-400 font-medium">
                <p>9:00 PM - 10:30 PM IST</p>
                <p>On Google Meet</p>
              </div>
            </div>

            {/* Event 3 */}
            <div>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">31st {calendarMonthName} {calendarYear}</h3>
              <p className="text-lg font-semibold text-black dark:text-white">
                <strong>International Short Story (Analysis):</strong> 'The Elephant Vanishes' by Haruki Murakami
              </p>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                Delve into the surreal and mysterious world of Murakami. This session will focus on analyzing the themes of loss, memory, and the bizarre in modern life.
              </p>
              <div className="mt-3 space-y-1 text-slate-500 dark:text-slate-400 font-medium">
                <p>8:30 PM - 9:30 PM IST</p>
                <p>On Google Meet</p>
              </div>
            </div>
            <div className="text-center mt-16">
              <a 
                href="https://forms.gle/BSrxuqzfkGaPJvV18" 
                className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* --- End of Monthly Calendar Section --- */}
    </>
  );
}

export default Banner;