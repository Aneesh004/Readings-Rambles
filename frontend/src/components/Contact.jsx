import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Navbar from './Navbar';
import Footer from './Footer';

// READER'S POINT

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setIsSubmitting(true);

        // Simulate form submission delay
        setTimeout(() => {
            console.log(data);
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1000); // 1 second delay to mimic a network request
    };

    return (
        <div className={`min-h-screen flex flex-col ${submitted ? 'bg-cover bg-center' : 'bg-blue-50 dark:bg-slate-900'}`}
            style={{
                backgroundImage: submitted ? 'url("https://static.vecteezy.com/system/resources/previews/030/337/265/non_2x/ai-generative-world-smile-day-concept-yellow-smiley-face-background-free-photo.jpg")' : undefined
            }}
        >
            {!submitted && <Navbar />}

            <main className={`flex-grow flex flex-col justify-center items-center p-6 ${submitted ? 'relative' : ''}`}>
                {!submitted ? (
                    <>
                        <h2 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-purple-600 to-pink-600 text-center mb-6">
                            "A good book is the best of friends, the same today and forever." <br /> — Martin Luther
                        </h2>


                        <p className="text-lg text-center mb-6 text-gray-900 dark:text-gray-100">
                            Your insights and experiences with books are invaluable to our community. Share your thoughts to guide others in discovering their next great read! Every review enriches our vibrant community of book lovers.
                        </p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full max-w-lg space-y-6 bg-white p-8 rounded-lg shadow-lg dark:bg-slate-800"
                        >
                            {/* Name */}
                            <div>
                                <label className='block text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200' htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Enter your name'
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-sm text-red-500 dark:text-red-400'>This field is required</span>}
                            </div>
                            {/* Book Name */}
                            <div>
                                <label className='block text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200' htmlFor="bookName">Book Name</label>
                                <input
                                    type="text"
                                    id="bookName"
                                    placeholder='Enter the name of the book'
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                                    {...register("bookName", { required: true })}
                                />
                                {errors.bookName && <span className='text-sm text-red-500 dark:text-red-400'>This field is required</span>}
                            </div>

                            {/* Review */}
                            <div>
                                <label className='block text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200' htmlFor="review">Your Review</label>
                                <textarea
                                    id="review"
                                    placeholder='Share your thoughts on the book'
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                                    rows={6}
                                    {...register("review", { required: true })}
                                />
                                {errors.review && <span className='text-sm text-red-500 dark:text-red-400'>This field is required</span>}
                            </div>
                            {/* Submit Button */}
                            <div className='flex flex-col items-center'>
                                <button
                                    type="submit"
                                    className='w-full max-w-xs bg-blue-500 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-200'
                                    disabled={isSubmitting} // Disable button while submitting
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                                </button>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <Link
                                    to="/"
                                    className='text-blue-500 hover:underline dark:text-blue-400 dark:hover:text-blue-500 transition duration-200 text-lg'
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="text-center absolute inset-0 flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-700 dark:text-gray-300">Thank You for Your Review!</h2>
                        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">We appreciate your feedback and will review it shortly.</p>
                        <Link
                            to="/"
                            className='inline-block bg-gray-500 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700 transition duration-200 mt-4'
                        >
                            Back to Home
                        </Link>
                    </div>
                )}
            </main>

            {!submitted && <Footer />}
        </div>
    );
}

export default Contact;
