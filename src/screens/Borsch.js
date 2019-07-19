import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default class Borsch extends Component {
  render() {
    console.log('render borsch')
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'http://borsch-online.com/' }} style={{flex: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
