import { ThemedView } from "@/components/ThemedView";
import { Text } from "react-native-paper";

const ForgotPassword = () => {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Recuperar contraseña</Text>
    </ThemedView>
  );
};

export default ForgotPassword;
