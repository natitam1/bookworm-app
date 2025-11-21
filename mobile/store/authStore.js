import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../constants/api";

export const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  isLoading: false,

  getAuthHeader: () => {
    const { token } = get();
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
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

      const tokenStr = String(data.token); // ensure it's a string
      await AsyncStorage.setItem("token", tokenStr);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));

      set({ token: tokenStr, user: data.user, isLoading: false });
      return { success: true };
    } catch (error) {
      set({ isLoading: false });
      return { success: false, error: error.message };
    }
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

      const tokenStr = String(data.token); // ensure no extra quotes
      await AsyncStorage.setItem("token", tokenStr);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));

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

      const token = tokenRaw ? String(tokenRaw) : null; // safe string conversion
      set({ token, user });
    } catch (error) {
      console.log("Auth check failed", error);
    }
  },

  logout: async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    set({ user: null, token: null });
  },
}));
