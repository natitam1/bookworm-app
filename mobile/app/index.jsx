import { Link } from "expo-router";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { Pressable, Text } from "react-native";

export default function HomeScreen() {
  const { user, token, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <Link href="/(auth)" asChild>
      <Pressable style={{ padding: 10, backgroundColor: "blue" }}>
        <Text>{token}</Text>
        <Text>{user?.username}</Text>
        <Text style={{ color: "white" }}>Go to Profile</Text>
      </Pressable>
    </Link>
  );
}
