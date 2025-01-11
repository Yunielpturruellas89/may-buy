import { Pressable, StyleSheet, Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { validateEmail } from "@/utils/validation";
import TextInputController from "@/components/input/TextInputController";
import { globals } from "@/styles/global";
import { Mail, Password, PasswordClose } from "@/theme/icons";
import { IconSymbol } from "@/components/ui/IconSymbol";
import Layout from "@/utils/Layout";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedButton } from "@/components/ThemedButton";
import Button from "@/components/buton/Button";
import { TextInput } from "react-native-paper";
import { ThemedText } from "@/components/ThemedText";
const { width, height } = Layout.window;

const LoginPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const defaultValues = {
    email: "",
    password: "",
  };
  const {
    handleSubmit,
    control,
    setFocus,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    const loginData = { email: data.email, password: data.password };
    console.log(loginData);
  };
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

      <ThemedView style={styles.formContainer}>
        <TextInputController
          controller={{
            name: "email",
            rules: {
              required: {
                value: true,
                message: "Correo electrónico requerido",
              },
              validate: { validateEmail },
            },
            control: control as any,
          }}
          placeholder="Correo electr&oacute;nico"
          dense
          autoCapitalize={"none"}
          keyboardType="email-address"
          returnKeyType="next"
          right={<TextInput.Icon icon={"account"} />}
        />
        <TextInputController
          controller={{
            name: "password",
            control: control as any,
            rules: {
              required: {
                value: true,
                message: "Contraseña requerida",
              },
            },
          }}
          // style={globals.input}
          //contentStyle={[globals.contentStyleInput]}
          placeholder="Contrase&ntilde;a"
          dense
          secureTextEntry={showPassword ? false : true}
          returnKeyType="done"
          onSubmitEditing={() => handleSubmit(onSubmit)()}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <ThemedView style={{ alignSelf: "center" }}>
          {/* <ThemedButton title="ini" onPress={handlePress} /> */}
          <Button onPress={handleSubmit(onSubmit)} text="Iniciar" />
        </ThemedView>
      </ThemedView>
      <Link href={"/register"} asChild>
        <Pressable>
          <Text>Enter to app</Text>
        </Pressable>
      </Link>
    </ThemedView>
  );
};

/* <Button
            onPress={handlePress}
            style={{
              borderRadius: 100,
              justifyContent: "center",
              width: "100%",
              marginTop: 5,
              //marginTop: 20,
              alignSelf: "center",
            }}
            contentStyle={{
              //height: height * 0.065,
              // justifyContent: "center",
              // alignContent: "center",
              alignItems: "center",
            }}
            buttonColor={Colors.light.tint}
            rippleColor={Colors.light.icon}
          >
            Iniciar sesión
          </Button> */

export default LoginPage;

export const styles = StyleSheet.create({
  logo: {
    width: width - 150,
    height: width - 100,
    // marginTop: 350,
    alignSelf: "center",
    // backgroundColor: "pink",
  },

  formContainer: {
    //paddingVertical: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    //backgroundColor: "red",
    width: "90%",
  },

  titleText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 30,
    fontWeight: "bold",
  },
});
