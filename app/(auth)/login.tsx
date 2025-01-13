import Button from "@/components/buton/Button";
import TextInputController from "@/components/input/TextInputController";
import { ThemedView } from "@/components/ThemedView";
import Layout from "@/utils/Layout";
import { validateEmail } from "@/utils/validation";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";

const { width, height } = Layout.window;
const WelcomePage = () => {
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
    router.replace("/(drawer)/(tabs)/(stack)/home");
    console.log(loginData);
  };

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
          <Text>Register</Text>
        </Pressable>
      </Link>
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
});
