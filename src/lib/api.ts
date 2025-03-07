import axios from "axios";
import { logError } from "./logger";

// Set the base URL for the API
const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.example.com";

// Create an Axios instance with default settings
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add an interceptor to attach the Authorization token to requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Get JWT token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        logError(error, "API Request Error");
        return Promise.reject(error)
    }
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
    (response) => response,
    (error) => {
        logError(error, "API Request Error");
        if (error.response?.status === 401) {
            localStorage.removeItem("token"); // Remove token if unauthorized
            window.location.href = "/login"; // Redirect to login
        }
        return Promise.reject(error);
    }
);

export default api;
