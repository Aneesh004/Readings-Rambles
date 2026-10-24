import React from "react";
import { UseAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [, setAuthUser] = UseAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error logging out: " + (error.message || error));
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 hover:bg-red-600 transition-colors duration-200 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
