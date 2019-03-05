import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Hero } from "@modular-app/components";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Hero buttonText="Press me" headingText="Read me" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
