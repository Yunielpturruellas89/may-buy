import { Platform, StyleSheet } from "react-native";
//import { fontSize, fontsFamily, margins, palette } from "../colors";
//import Layout from "../../utils/Layout";

//const { width, height } = Layout.window;

// export const rippleConfig = {
//   // color: "rgba(0, 0, 0, .)",
//   color: "rgba(27, 27, 31, .05)",
//   // radius: 20,
//   foreground: true,
// };

export const globals = StyleSheet.create({
  /* asdasdasd */

  input: {
    marginBottom: 0,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
    //borderWidth: 1,
    paddingHorizontal: 6,
  },
  contentStyleInput: {
    //fontSize: Platform.OS === "android" ? 14 : fontSize.medium,
    //fontFamily: fontsFamily.main.medium,
    //top: Platform.OS === "android" ? 1 : undefined,
    //top: Platform.OS === "android" ? 1.5 : undefined,
  },

  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    fontWeight: 900,
    paddingVertical: 12,
    minWidth: 150,
  },
});
