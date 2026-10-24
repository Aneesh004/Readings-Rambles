import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import api from "../api/client";
import { UseAuth } from "../context/AuthProvider";

function Signup() {
  const [, setAuthUser] = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await api.post("/user/signup", userInfo);
      if (res.data) {
        toast.success("Account created successfully");
        setAuthUser(res.data.user);
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100 dark:bg-slate-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 relative border border-slate-200 dark:border-slate-700">
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
        >
          ✕
        </Link>
        <h3 className="font-bold text-2xl mb-6 text-gray-900 dark:text-white">
          Create an Account
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:ring-2 focus:ring-pink-500"
              {...register("fullname", { required: "Name is required" })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                {errors.fullname.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:ring-2 focus:ring-pink-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:ring-2 focus:ring-pink-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-pink-500 hover:bg-pink-600 disabled:opacity-50 text-white font-medium rounded-md px-6 py-2 transition duration-200"
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                className="underline text-blue-500 cursor-pointer font-medium"
                onClick={() => {
                  const modal = document.getElementById("my_modal_3");
                  if (modal && typeof modal.showModal === "function") {
                    modal.showModal();
                  }
                }}
              >
                Login
              </button>
            </p>
          </div>
        </form>
        <Login />
      </div>
    </div>
  );
}

export default Signup;
