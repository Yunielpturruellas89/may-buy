import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const LoginPage = () => {
  const router = useRouter();
  const handlePress = () => {
    //router.replace("/home");
    router.replace("/(drawer)/(tabs)/(stack)/home");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Button title="Login" onPress={handlePress} />
      <Link href={"/register"} asChild>
        <Pressable>
          <Text>Create account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
