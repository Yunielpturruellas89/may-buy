import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router, Stack, useNavigation } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedButton } from "@/components/ThemedButton";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import Button from "@/components/buton/Button";
import { useThemeColor } from "@/hooks/useThemeColor";

const HomeScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  const color = useThemeColor({}, "text");
  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 5, marginEnd: 10 }}
            >
              <Ionicons name="menu" size={24} color={color} />
            </TouchableOpacity>
          ),
          title: "Inicio",
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={{ flex: 1 }}>
          <Button text="Products" onPress={() => router.push("/products")} />
          <ThemedButton
            title="Products"
            onPress={() => router.push("/products")}
          />
          <ThemedText>HomeScreen</ThemedText>
        </ThemedView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
