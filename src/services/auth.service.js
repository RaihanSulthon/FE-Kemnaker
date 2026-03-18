// src/services/auth.service.js
import api from "@/api/api";

const authService = {
  async signup(userData) {
    try {
      const response = await api.post("/auth/register", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Terjadi kesalahan saat register" };
    }
  },

  async login(credentials) {
    try {
      const response = await api.post("/auth/login", credentials);
      const { data } = response.data;
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      return data;
    } catch (error) {
      throw error.response?.data || { message: "Terjadi kesalahan saat login" };
    }
  },

  async getMe() {
    try {
      const response = await api.get("/auth/me");
      return response.data.data;
    } catch (error) {
      throw error.response?.data || { message: "Gagal mengambil data user" };
    }
  },

  async logout() {
    try {
      await api.post("/auth/logout");
    } catch (_) {
      // silent
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  },

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated() {
    return !!localStorage.getItem("token");
  },

  isMentor() {
    const user = this.getCurrentUser();
    return user?.role === "mentor" || user?.role === "admin";
  },
};

export default authService;