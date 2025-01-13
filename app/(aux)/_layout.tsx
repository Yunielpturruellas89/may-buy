import { Stack } from "expo-router";
import React from "react";

const AuxLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="privacy"
        options={{
          title: "Política de Privacidad",
        }}
      />
      <Stack.Screen
        name="terms"
        options={{
          title: "Términos y Condiciones",
        }}
      />
    </Stack>
  );
};

export default AuxLayout;
