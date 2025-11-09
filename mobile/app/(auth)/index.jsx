import { View, Text } from "react-native";
import styles from "../../assets/styles/login.styles";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoadig, setIsLoading] = useState(false);

  const handleLogin = () => {};
  return <View style={styles.container}></View>;
};

export default Login;
