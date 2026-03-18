// src/api/api.js
import axios from "axios";
import ENV from "@/lib/environments";

const api = axios.create({
  baseURL: ENV.apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Inject token otomatis di setiap request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Handle response error global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/auth";
    }
    return Promise.reject(error);
  }
);

export default api;