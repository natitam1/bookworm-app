import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function HomeScreen() {
  return (
    <Link href="/(auth)" asChild>
      <Pressable style={{ padding: 10, backgroundColor: "blue" }}>
        <Text style={{ color: "white" }}>Go to Profile</Text>
      </Pressable>
    </Link>
  );
}
