import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";
import { Link, useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/buton/Button";
import { ThemedText } from "@/components/ThemedText";
import Layout from "@/utils/Layout";
import { Colors } from "@/constants/Colors";
const { width, height } = Layout.window;

const WelcomePage = () => {
  const router = useRouter();

  const handlePress = () => {
    //router.replace("/home");
    console.log("first");
    //router.replace("/(drawer)/(tabs)/(stack)/home");
  };
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText style={styles.titleText}>
        ¡Entérate de todos los productos que pueden estar en tu casa ya!
      </ThemedText>

      <Button
        text="Continuar con Google"
        onPress={() => console.log("Google login")}
        styleButton={{
          backgroundColor: "white",
          borderWidth: 1,
          marginBottom: 20,
          width: "90%",
        }}
        styleText={{
          color: "black",
        }}
      />

      <ThemedView style={styles.dividerContainer}>
        <View style={styles.divider} />
        <ThemedText style={styles.dividerText}>o</ThemedText>
        <View style={styles.divider} />
      </ThemedView>

      <Button
        text="Crear cuenta"
        onPress={() => router.push("/register")}
        styleButton={{
          marginBottom: 20,
          width: "90%",
        }}
        styleText={{ color: "white", fontWeight: "500" }}
      />

      <ThemedView style={styles.termsContainer}>
        <ThemedText style={styles.termsText}>
          Al registrarte, aceptas nuestros{" "}
          <Text style={styles.linkText} onPress={() => router.push("/terms")}>
            Términos y Condiciones
          </Text>{" "}
          y{" "}
          <Text style={styles.linkText} onPress={() => router.push("/privacy")}>
            Política de Privacidad
          </Text>
        </ThemedText>
      </ThemedView>
      <ThemedView style={{ flexDirection: "row", marginTop: 30 }}>
        <ThemedText style={{ marginEnd: 5 }}>Tienes cuenta?</ThemedText>
        <ThemedText
          onPress={() => router.push("/(auth)/login")}
          style={{
            marginEnd: 5,
            color: Colors.light.primary,
          }}
        >
          Iniciar sesión
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default WelcomePage;

export const styles = StyleSheet.create({
  logo: {
    width: width - 150,
    height: width - 100,
    alignSelf: "center",
  },

  formContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
  },

  titleText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 30,
    fontWeight: "bold",
  },

  termsContainer: {
    //position: "absolute",
    // bottom: 20,
    paddingHorizontal: 30,
  },
  termsText: {
    fontSize: 12,
    textAlign: "center",
  },
  linkText: {
    color: Colors.light.primary,

    textDecorationLine: "underline",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 0,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#666",
  },
});
