import axios from "axios";

// Default to environment variable VITE_API_URL, fallback to localhost for development
// or Render deployed URL for production
const baseURL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? "https://bookstore-backend-f3z4.onrender.com"
    : "http://localhost:4001");

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
