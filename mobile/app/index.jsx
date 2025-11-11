import { Link } from "expo-router";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { Pressable, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const { user, token, checkAuth, logout } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <Link href="/(auth)" asChild>
      <Pressable style={{ padding: 10, backgroundColor: "blue" }}>
        <Text>{token}</Text>
        <Text>{user?.username}</Text>
        <TouchableOpacity style={{ backgroundColor: "#000" }} onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>Go to Profile</Text>
      </Pressable>
    </Link>
  );
}
