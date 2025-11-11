import { useRoutePath } from "@react-navigation/native";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function HomeScreen() {
  const { user, token } = useRoutePath();
  return (
    <Link href="/(auth)" asChild>
      <Pressable style={{ padding: 10, backgroundColor: "blue" }}>
        <Text style={{ color: "white" }}>Go to Profile</Text>
      </Pressable>
    </Link>
  );
}
