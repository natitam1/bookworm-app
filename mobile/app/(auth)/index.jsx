import { View, Text } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoadig, setIsLoading] = useState(false);
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
