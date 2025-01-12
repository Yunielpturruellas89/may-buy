import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/buton/Button";
import { useRouter } from "expo-router";

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ThemedText style={styles.title}>Política de Privacidad</ThemedText>

        <ThemedText style={styles.sectionTitle}>
          1. Recopilación de Información
        </ThemedText>
        <ThemedText style={styles.content}>
          Recopilamos información cuando usted se registra en nuestra
          aplicación, realiza una compra o introduce información en nuestro
          sitio. La información recopilada incluye su nombre, correo electrónico
          y datos de contacto.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          2. Uso de la Información
        </ThemedText>
        <ThemedText style={styles.content}>
          La información que recopilamos se utiliza para personalizar su
          experiencia y proporcionarle el mejor servicio posible. Sus datos
          están seguros y nunca serán vendidos a terceros.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          3. Protección de la Información
        </ThemedText>
        <ThemedText style={styles.content}>
          Implementamos una variedad de medidas de seguridad para mantener la
          seguridad de su información personal. Utilizamos encriptación avanzada
          para proteger información sensible transmitida en línea.
        </ThemedText>

        {/* Puedes agregar más secciones según necesites */}
      </ScrollView>

      <Button
        text="Aceptar y Volver"
        onPress={() => router.back()}
        styleButton={styles.button}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default PrivacyPolicy;
