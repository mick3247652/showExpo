import React from "react";
import MapScreen from "./screens/Map";
import HomeScreen from "./screens/Home";
import CompassScreen from './screens/Compass'
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainStack = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
          headerTitle: 'Show Expo',
        },
    },
    Map: {
        screen: MapScreen,
        navigationOptions: {
          headerTitle: 'Map',
        },
    },
    Compass: {
      screen: CompassScreen,
      navigationOptions: {
        headerTitle: 'Compass'
      }
    }
  },
  {
    initialRouteName: "Compass",
    navigationOptions: {
      headerTintColor: "#a41034",
      headerStyle: {
        backgroundColor: "#fff",
      },
    },
  }
);

const App = createAppContainer(MainStack);

export default () => <App />;
