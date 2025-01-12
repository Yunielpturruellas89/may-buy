import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ViewProps } from "react-native";
import { globals } from "@/styles/global";
import { ThemedText } from "../ThemedText";
interface IButton {
  onPress: () => void;
  text: string;
  styleButton?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  disabled?: boolean;
  isFetching?: boolean;
  textTransform?: "uppercase" | "none" | "capitalize" | "lowercase" | undefined;
  lightColor?: string;
  darkColor?: string;
}
export type ThemedViewProps = ViewProps & {};
const Button: React.FC<IButton> = ({
  onPress,
  text,
  styleButton,
  styleText,
  disabled = false,
  isFetching = false,
  textTransform = "uppercase",
}) => {
  const backgroundColor = useThemeColor({}, "primary");
  const color = useThemeColor({}, "text");

  return (
    <TouchableOpacity
      disabled={disabled || isFetching}
      style={[globals.btn, { marginTop: 20, backgroundColor }, styleButton]}
      onPress={onPress}
    >
      {isFetching ? (
        <ActivityIndicator size={20} color={color} />
      ) : (
        <ThemedText
          style={[
            {
              marginHorizontal: 10,
              textTransform: textTransform,
            },
            styleText,
          ]}
        >
          {text}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
