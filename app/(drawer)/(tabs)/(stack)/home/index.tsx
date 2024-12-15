import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedButton } from "@/components/ThemedButton";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <Button title="Products" onPress={() => router.push("/products")} />
        <ThemedButton
          title="Products"
          onPress={() => router.push("/products")}
        />
        <ThemedText>HomeScreen</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
