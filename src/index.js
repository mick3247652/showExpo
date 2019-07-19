import React from "react";
import MapScreen from "./screens/Map";
import HomeScreen from "./screens/Home";
import CompassScreen from './screens/Compass'
import BorschScreen from './screens/Borsch'

import { createStackNavigator, createAppContainer } from "react-navigation";

const MainStack = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
          header: () => null,
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
    },
    Borsch: {
      screen: BorschScreen,
      navigationOptions: {
        headerTitle: 'Borsch'
      }
    }
  },
  {
    initialRouteName: "Home",
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
