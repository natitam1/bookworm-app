import { Text, View } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is Nati</Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        }}
        style={{ width: 200, height: 200, borderRadius: 10 }}
        contentFit="cover"
        transition={500}
        cachePolicy="memory-disk"
      />
    </View>
  );
}
