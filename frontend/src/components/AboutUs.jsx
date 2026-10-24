import React from 'react';
import Navbar from './Navbar';  
import Footer from './Footer';  

function AboutUs() {
  return (
    <div className="bg-blue-50 dark:bg-slate-900 text-black dark:text-white">
      <Navbar />

      <main className="max-w-screen-5xl container mx-auto md:px-20 px-4 py-12">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Welcome to Readings and Rambles. We connect book lovers from all walks of life. Whether you're an avid reader or just beginning, our platform fosters meaningful connections and engaging literary discussions. Join our community and embark on a journey of discovery with us.
          </p>
        </section>

        <section className="mt-8 text-center">
          <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Our Vision
          </h2>
          <p className="mt-0 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At Readings and Rambles, we believe every book opens a new world. Our mission is to enrich your reading experience and connect you with like-minded individuals.
          </p>
          <p className="mt-0 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We provide a vibrant space for book enthusiasts to gather, explore diverse genres, and engage in lively discussions. Additionally, we host both online and offline meetings for discussion groups, allowing our members to interact and deliberate on literary works in various formats.
          </p>
          <p className="mt-0 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We welcome readers of all ages—from young adventurers to seasoned bibliophiles—and offer a selection of stories to inspire and entertain young minds.
          </p>
          <p className="mt-0 text-lg text-gray-700 dark:text-gray-300 font-semibold leading-relaxed">
            <a
              href="https://forms.gle/BSrxuqzfkGaPJvV18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition duration-200"
            >
              Join us
            </a> to discover new reads, share your thoughts, and be part of a community that celebrates the joy of reading.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
