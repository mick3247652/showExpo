import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default class Map extends Component {
  state = {
    locationPermission: false,
    isLocationUnavailable: false,
    location: null,
    address: null,
  };

  _getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({ locationPermission: false });
      return;
    }
    this.setState({ locationPermission: true });
    try {
      const location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: false,
      });
      this.setState({ location });
      console.log(location);
      const adr_obj = await Location.reverseGeocodeAsync(location.coords);
      const adr = adr_obj[0];
      const address = `${adr.city}, ${adr.street} ${adr.name}`;
      console.log(address);
      this.setState({ address });
    } catch (err) {
      console.log(err);
      this.setState({ isLocationUnavailable: true });
    }
  };

  componentWillMount() {
    console.log("component will mount");
    this._getLocation();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.location && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.0922 * 0.1,
              longitudeDelta: 0.0421 * 0.1,
            }}
          >
            <Marker coordinate={this.state.location.coords} title="I am here" />
          </MapView>
        )}
        {!this.state.locationPermission && (
          <Text style={{ color: "red" }}> Location permission NOT granted</Text>
        )}
        {this.state.isLocationUnavailable && (
          <View>
            <Text style={{ color: "red" }}>Location unavailable</Text>
            <Button title="Reload" onPress={() => this._getLocation()} />
          </View>
        )}
        {this.state.address && <Text>{this.state.address}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    backgroundColor: "blue",
  },
});
