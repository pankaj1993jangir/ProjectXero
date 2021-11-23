import { WebView } from "react-native-webview";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Constands from "expo-constants";

class XeroWebview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }
  render() {
    return (
      <WebView
        style={styles.container}
        source={{ uri: "https://xerofashions.com" }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constands.statusBarHeight,
  },
});

export default XeroWebview;
