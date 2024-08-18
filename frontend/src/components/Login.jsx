import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className='text-cyan-50'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-n text-red-500'>
                                This field is required</span>}
                        </div>
                        {/* password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type="password"
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className=' text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* button and signup text */}
                        <div className='flex justify-between items-center mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>
                                Login
                            </button>
                            <p className="ml-4">Not Registered?{" "}
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
