import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setSubmitted(true);
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 text-gray-800 p-6'>
            {!submitted ? (
                <>
                    <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900">Contact Us</h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full max-w-2xl space-y-6 bg-slate-50 p-8 rounded-lg shadow-lg"
                    >
                        {/* Name */}
                        <div >
                            <label className='block text-lg font-semibold mb-2' htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder='Enter your name'
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Email */}
                        <div>
                            <label className='block text-lg font-semibold mb-2' htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder='Enter your email'
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Message */}
                        <div>
                            <label className='block text-lg font-semibold mb-2' htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                placeholder='Write your message here'
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-200 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                                rows={6}
                                {...register("message", { required: true })}
                            />
                            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Submit Button */}
                        <div className='flex flex-col items-center'>
                            <button
                                type="submit"
                                className='w-full max-w-sm bg-blue-500 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-200'
                            >
                                Submit
                            </button>
                        </div>
                        <div className='flex justify-center mt-4'>
                            <Link
                                to="/"
                                className='text-blue-500 hover:underline transition duration-200 text-lg'
                            >
                                Back to Home
                            </Link>
                        </div>
                    </form>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-700">Thank You!</h2>
                    <p className="text-lg mb-6">We appreciate your message.</p>
                    <Link
                        to="/"
                        className='inline-block bg-blue-500 text-white font-semibold text-lg rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-200'
                    >
                        Home
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Contact;
