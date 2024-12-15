import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useNavigation, useRouter } from "expo-router";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      router.dismiss(1);
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        //headerShown: false,
        contentStyle: {
          //backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) =>
          canGoBack ? (
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{ marginEnd: 10 }}
              onPress={() => {
                onHeaderLeftClick(canGoBack);
              }}
            />
          ) : (
            <MaterialIcons
              name="menu"
              size={24}
              color="black"
              style={{ marginEnd: 10 }}
              onPress={() => {
                onHeaderLeftClick(canGoBack!);
              }}
            />
          ),
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
    </Stack>
  );
};

export default StackLayout;

const styles = StyleSheet.create({});
