import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function ReviewUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000); 
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate('/'); 
      }, 4000);  

      return () => clearTimeout(timer); 
    }
  }, [submitted, navigate]);

  return (
    <div className="bg-blue-50 dark:bg-slate-900 text-black dark:text-white">
      <Navbar />

      <main className="max-w-screen-5xl container mx-auto md:px-20 px-4 py-12">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300">
            Review Us
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            We want to hear from you! Tell us about your overall experience with Readings and Rambles and let us know how we can make it even better. Your feedback is essential in helping us improve and create a more engaging space for all book lovers.
          </p>
        </section>

        <section className="mt-12 max-w-3xl mx-auto">
          {!submitted ? (
            <>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 text-center">
                Share Your Thoughts
              </h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800"
                    required
                  />
                  <textarea
                    placeholder="Message"
                    rows="6"
                    className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                  disabled={isSubmitting} 
                >
                  Send
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
             <h2 className="text-4xl font-extrabold mb-6 text-gray-700 dark:text-gray-300">Thank You for Your Feedback!</h2>
             <br />
              <h3 className="text-2xl font-extrabold mb-6 text-gray-700 dark:text-gray-300">Redirecting to the Home Page...</h3>
              
              <div className="flex justify-center items-center h-32">
                <div className="w-12 h-12 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ReviewUs;
