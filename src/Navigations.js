import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./screens/Home";

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRoute: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#e6f0ff",
        elevation: 0
      },
      headerTintColor: "#333",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(HomeStackNavigator);
