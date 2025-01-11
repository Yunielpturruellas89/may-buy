import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { HelperText, TextInputProps, TextInput } from "react-native-paper";
import { useThemeColor } from "@/hooks/useThemeColor";
import { globals } from "@/styles/global";
//import { border, fontsFamily, palette } from "../../../theme/colors";

type ControlProps = Omit<ControllerProps, "render">;

interface TextInputControllerProps extends TextInputProps {
  controller: ControlProps;
}

export default function TextInputController(props: TextInputControllerProps) {
  const {
    controller: { name, control, defaultValue, rules },
    ...rest
  } = props;
  const color = useThemeColor({}, "icon");
  const primary = useThemeColor({}, "primary");
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { error, invalid, isDirty, isTouched },
        }) => {
          return (
            <>
              <TextInput
                ref={ref}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                dense
                outlineStyle={{
                  borderRadius: 50,
                  //backgroundColor: palette.white,
                }}
                placeholderTextColor={color}
                mode="outlined"
                outlineColor={color}
                activeOutlineColor={primary}
                contentStyle={
                  {
                    //fontWeight: "600",
                    //fontSize: 15,
                  }
                }
                autoCapitalize="none"
                style={[globals.input, {}]}
                {...rest}
              />
              <HelperText
                type="error"
                visible={Boolean(error)}
                style={{
                  color: "red",
                  height: error ? "auto" : 10,
                  marginBottom: 5,
                  textAlign: "left",
                  alignSelf: "flex-start",
                  //fontFamily: fontsFamily.main.bold,
                  // backgroundColor: "pink",
                }}
              >
                {error?.message}
              </HelperText>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: { minHeight: 100, width: "100%" },
});
