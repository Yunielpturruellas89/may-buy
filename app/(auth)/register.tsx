import Button from "@/components/buton/Button";
import TextInputController from "@/components/input/TextInputController";
import { ThemedView } from "@/components/ThemedView";
import Layout from "@/utils/Layout";
import { validateEmail } from "@/utils/validation";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const { width } = Layout.window;

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting },
  } = useForm({
    defaultValues,
  });

  const password = watch("password");

  const onSubmit = async (data: any) => {
    const registerData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(registerData);
    // Aquí implementarías la lógica de registro
    router.replace("/(drawer)/(tabs)/(stack)/home");
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
            name: "name",
            rules: {
              required: {
                value: true,
                message: "Nombre requerido",
              },
            },
            control: control as any,
          }}
          placeholder="Nombre completo"
          dense
          autoCapitalize="words"
          returnKeyType="next"
          right={<TextInput.Icon icon={"account"} />}
        />

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
          placeholder="Correo electrónico"
          dense
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          right={<TextInput.Icon icon={"email"} />}
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
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            },
          }}
          placeholder="Contraseña"
          dense
          secureTextEntry={!showPassword}
          returnKeyType="next"
          right={
            <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <TextInputController
          controller={{
            name: "confirmPassword",
            control: control as any,
            rules: {
              required: {
                value: true,
                message: "Confirmar contraseña requerida",
              },
              validate: (value) =>
                value === password || "Las contraseñas no coinciden",
            },
          }}
          placeholder="Confirmar contraseña"
          dense
          secureTextEntry={!showPassword}
          returnKeyType="done"
          onSubmitEditing={() => handleSubmit(onSubmit)()}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <ThemedView style={{ alignSelf: "center", marginTop: 20 }}>
          <Button
            //router.replace("/(drawer)/(tabs)/(stack)/home");
            //onPress={handleSubmit(onSubmit)}
            onPress={() => router.replace("/home")}
            //onPress={() => router.replace("/(drawer)/(tabs)/(stack)/home")}
            text="Registrarse"
            isFetching={isSubmitting}
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
  },
});
