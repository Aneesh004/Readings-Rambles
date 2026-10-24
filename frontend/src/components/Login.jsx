import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import api from "../api/client";
import { UseAuth } from "../context/AuthProvider";

function Login() {
  const [, setAuthUser] = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await api.post("/user/login", userInfo);
      if (res.data) {
        toast.success("Logged in successfully");
        setAuthUser(res.data.user);
        const modal = document.getElementById("my_modal_3");
        if (modal && typeof modal.close === "function") {
          modal.close();
        }
      }
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Failed to login. Please try again.");
      }
    }
  };

  return (
    <div className="text-cyan-50">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-800 text-gray-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                const modal = document.getElementById("my_modal_3");
                if (modal && typeof modal.close === "function") modal.close();
              }}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-slate-700 dark:border-slate-600"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none bg-gray-50 dark:bg-slate-700 dark:border-slate-600"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-pink-500 hover:bg-pink-600 disabled:opacity-50 text-white rounded-md px-4 py-2 transition duration-200"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              <p className="text-sm">
                Not Registered?{" "}
                <Link
                  to="/signup"
                  onClick={() => {
                    const modal = document.getElementById("my_modal_3");
                    if (modal && typeof modal.close === "function") modal.close();
                  }}
                  className="underline text-blue-500 cursor-pointer"
                >
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
