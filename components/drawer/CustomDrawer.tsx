import { View, Text, Switch } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { useThemeStore } from "@/store/useThemeStore";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <DrawerContentScrollView {...props}>
      <ThemedView
        style={{
          width: "100%",
          height: 180,
          borderRadius: 25,
          padding: 15,
          marginBottom: 15,
        }}
      >
        <ThemedText>CustomDrawer</ThemedText>
      </ThemedView>

      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
          marginBottom: 15,
        }}
      >
        <ThemedText>Tema Oscuro</ThemedText>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={theme === "dark" ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleTheme}
          value={theme === "dark"}
        />
      </ThemedView>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
