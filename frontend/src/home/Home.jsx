import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-blue-50 dark:bg-slate-900 min-h-screen text-gray-900 dark:text-white transition-colors duration-200">
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  );
}

export default Home;
