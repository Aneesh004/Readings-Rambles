import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  return (<>
  <div className="bg-blue-50 dark:bg-slate-900">
    <Navbar />
    <div className="min-h-screen">
        <Course />
    </div>
    <Footer />
  </div>
  </>
  );
}

export default Courses
