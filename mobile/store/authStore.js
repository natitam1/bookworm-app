import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../constants/api";

export const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  isLoading: false,

  // helper to produce Authorization header
  getAuthHeader: () => {
    const { token } = get();
    if (!token) return {};
    return { Authorization: `Bearer ${token.trim().replace(/^"|"$/g, "")}` };
  },

  register: async (username, email, password) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed");

      let tokenStr = String(data.token).trim().replace(/^"|"$/g, "");
      await AsyncStorage.setItem("token", tokenStr);
      set({ token: tokenStr, user: data.user, isLoading: false });

      set({ token: tokenStr, user: data.user, isLoading: false });
      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      return { success: false, error: error.message };
    }
  },

  checkAuth: async () => {
    try {
      const tokenRaw = await AsyncStorage.getItem("token");
      const userJson = await AsyncStorage.getItem("user");
      const user = userJson ? JSON.parse(userJson) : null;

      let token = tokenRaw ? tokenRaw.trim() : null;
      token = token?.replace(/^"|"$/g, "");
      if (token && token.startsWith("Bearer ")) token = token.slice(7);
      token = token?.replace(/^"|"$/g, ""); // remove extra quotes

      set({ token, user });
    } catch (error) {
      console.log("Auth check failed", error);
    }
  },

  logout: async () => {
    await AsyncStorage.clear(); // remove everything
    set({ user: null, token: null });
  },

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      let tokenStr = String(data.token).trim().replace(/^"|"$/g, "");
      await AsyncStorage.setItem("token", tokenStr);
      set({ token: tokenStr, user: data.user, isLoading: false });

      set({ token: tokenStr, user: data.user, isLoading: false });
      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      return { success: false, error: error.message };
    }
  },
}));
