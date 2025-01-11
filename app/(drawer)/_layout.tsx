import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@/components/drawer/CustomDrawer";
export default function DrawerLayout() {
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
