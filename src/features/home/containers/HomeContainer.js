import React from "react";

import { StyleSheet, ScrollView } from "react-native";
import { Title } from "react-native-paper";

import { CardMovie } from "../../../components";
import { blueGreyDark } from "../../../config/colors";

function HomeContainer() {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Upcoming</Title>
      <CardMovie />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#FFFFFF"
  },
  title: {
    paddingLeft: 8,
    color: blueGreyDark,
    letterSpacing: 0.15,
    fontWeight: "500",
    paddingBottom: 16
  }
});

export default HomeContainer;
