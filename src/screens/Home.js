import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default class Home extends Component {
  _navigateToMap = () => {
    this.props.navigation.navigate("Map");
  };

  _navigateToCompass = () => {
    this.props.navigation.navigate("Compass");
  };

  _navigateToBorsch = () => {
    this.props.navigation.navigate("Borsch");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          containerStyle={styles.button}
          title="Map"
          type="outline"
          onPress={() => this._navigateToMap()}
        />
        <Button
          containerStyle={styles.button}
          title="Compass"
          type="outline"
          onPress={() => this._navigateToCompass()}
        />
        <Button
          containerStyle={styles.button}
          title="Borsch"
          type="outline"
          onPress={() => this._navigateToBorsch()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5B4E3",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 5,
    width: "90%",
  },
});
