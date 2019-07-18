import React from "react";
import { View, Text, StyleSheet } from "react-native";

function HomeContainer() {
  return (
    <View style={styles.container}>
      <Text>Home app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeContainer;
