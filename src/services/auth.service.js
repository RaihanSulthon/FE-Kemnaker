import axiosInstance from "./axios";

export const authService = {
  // Register/Signup
  async signup(userData) {
    try {
      const response = await axiosInstance.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data || { message: "Terjadi kesalahan saat signup" }
      );
    }
  },

  // Login
  async login(credentials) {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Terjadi kesalahan saat login" };
    }
  },

  // Logout
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  // Get current user dari localStorage
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  },

  // Check if user is authenticated
  isAuthenticated() {
    return !!localStorage.getItem("token");
  },

  // Check if user is mentor/admin
  isMentor() {
    const user = this.getCurrentUser();
    return user?.role === "mentor" || user?.role === "admin";
  },
};

export default authService;
