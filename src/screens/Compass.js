import React, { Component } from "react";
import { View, Image, ImageBackground, StyleSheet, Text } from "react-native";
import { Magnetometer } from "expo-sensors";

export default class Compass extends Component {
  state = {
    MagnetometerData: {},
    magnetometer: "0",
  };

  _initMagnetometr = async () => {
    Magnetometer.addListener(result => {
      this.setState({
        MagnetometerData: result,
        magnetometer: this._angle(result),
      });
    });
  };

  _angle = magnetometer => {
    if (magnetometer) {
      let { x, y, z } = magnetometer;

      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    angle = angle - 90;
    return angle <0 ? 360 + angle : angle;
  };

  _slow = () => {
    Magnetometer.setUpdateInterval(1000);
  };

  _fast = () => {
    Magnetometer.setUpdateInterval(16);
  };

  _unsubscribe = () => {
    Magnetometer.removeAllListeners();
  };

  componentWillMount() {
    this._initMagnetometr();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    let { x, y, z } = this.state.MagnetometerData;

    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.inner}
          source={require("../images/compass_outer.png")}
        >
          <Image
            style={[
              styles.outer,
              {
                transform: [{ rotate: 360 - this.state.magnetometer + "deg" }],
              },
            ]}
            source={require("../images/compass_inner.png")}
          />
        </ImageBackground>
      </View>
    );
  }
}

const round = n => {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: 300,
    height: 300,
  },
  outer: {
    width: 300,
    height: 300,
  },
  text: {
    marginTop: 10,
    fontSize: 30,
  },
});
