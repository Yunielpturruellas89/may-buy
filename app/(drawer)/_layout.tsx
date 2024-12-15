import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView } from "react-native";
import CustomDrawer from "@/components/drawer/CustomDrawer";
export default function DrawerLayout() {
  const CustomDrawerComponent = (props: DrawerContentComponentProps) => {
    const router = useRouter();
    return (
      <SafeAreaView>
        <DrawerItem
          label={"Home"}
          onPress={() => {
            console.log("gooing to home");
            // router.replace("./(tabs)");
            router.push("/(drawer)/(tabs)");
            //navigation.navigate({"index"});
          }}
        />
        <DrawerItem
          label={"Settings"}
          onPress={() => {
            console.log("gooing to home");
            router.push("/(drawer)/settings");
            //navigation.navigate({"index"});
          }}
        />
        {/* <DrawerItem
          label={"scrren outside tabs 1"}
          onPress={() => router.push("/outside1")}
        /> */}
        {/*  <DrawerItem
          label={"scrren outside tabs 2"}
          onPress={() => router.push("/outside2")}
        /> */}
        {/* <DrawerItem
          label={"reel"}
          onPress={() => router.push("/(drawer)/(tabs)/reel")}
        /> */}
      </SafeAreaView>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawer}
        screenOptions={{
          //headerShown: false,
          overlayColor: "rgba(0,0,0,0.4)",
          drawerActiveTintColor: "indigo",
          headerShadowVisible: false,
          sceneStyle: {
            backgroundColor: "white",
          },
          //headerShown: true,
        }}
        // drawerContent={(props) => <CustomDrawerComponent {...props} />}
      >
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="settings/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            //headerShown: true,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
