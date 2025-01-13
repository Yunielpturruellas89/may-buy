import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/buton/Button";
import { useRouter } from "expo-router";

const TermsAndConditions = () => {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ThemedText style={styles.title}>Términos y Condiciones</ThemedText>

        <ThemedText style={styles.sectionTitle}>
          1. Aceptación de los términos
        </ThemedText>
        <ThemedText style={styles.content}>
          Al acceder y utilizar esta aplicación, usted acepta estar sujeto a
          estos términos y condiciones de uso. Si no está de acuerdo con alguno
          de estos términos, le rogamos que no utilice la aplicación.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>2. Uso del servicio</ThemedText>
        <ThemedText style={styles.content}>
          Nuestros servicios están destinados únicamente para uso personal y no
          comercial. Usted se compromete a utilizar el servicio de manera
          responsable y de acuerdo con todas las leyes aplicables.
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

export default TermsAndConditions;
