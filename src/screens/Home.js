import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default class Home extends Component {
  _navigateToMap = () => {
    this.props.navigation.navigate("Map");
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
