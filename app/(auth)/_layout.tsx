import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  console.log("-=-===");

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
      <Stack.Screen name="forgot" />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Iniciar sesión",
        }}
        name="login"
      />
    </Stack>
  );
};

export default AuthLayout;
