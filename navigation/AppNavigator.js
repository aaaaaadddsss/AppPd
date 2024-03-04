import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import * as Font from "expo-font";
import Home from "../screens/Home";
import Battery from "../screens/Battery";

Font.loadAsync({
  asap: require("../assets/fonts/Asap-Regular.ttf"),
});

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            position: "absolute",
            borderRadius: 10,
            bottom: 25,
            backgroundColor: "#FFFFFF",
            marginHorizontal: 50,
          },
        ],
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#DDE1E1",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BatteryScreen"
        component={Battery}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/battery.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#DDE1E1",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
