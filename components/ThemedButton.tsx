import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ThemedView, ThemedViewProps } from "./ThemedView";
import { ThemedText } from "./ThemedText";
//import { ThemedView, ThemedText, ThemedViewProps, ThemedTextProps } from './ThemedComponents';

export interface ThemedButtonProps extends ThemedViewProps {
  title: string;
  onPress: () => void;
}

export function ThemedButton({ title, onPress, ...props }: ThemedButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <ThemedView {...props}>
        <ThemedText type="link" style={styles.buttonText}>
          {title}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
    padding: 10,
  },
});
