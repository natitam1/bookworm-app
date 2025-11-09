import { View, Text } from "react-native";
import styles from "../../assets/styles/login.styles";
import React, { useState } from "react";
import Image from "expo-image";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoadig, setIsLoading] = useState(false);

  const handleLogin = () => {};
  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.topIllustration}>
        <Image
          source={require("../../assets/images/i.png")}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Login;
