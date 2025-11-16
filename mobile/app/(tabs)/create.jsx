import { View, Text } from "react-native";
import React, { useState } from "react";

const create = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [rating, setRating] = useState(3);
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <Text>create</Text>
    </View>
  );
};

export default create;
