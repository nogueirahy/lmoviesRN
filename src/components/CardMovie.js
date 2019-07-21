import React from "react";

import { View, StyleSheet } from "react-native";
import { Card, Chip, Text } from "react-native-paper";

import { blueGreyDark } from "../config/colors";

function CardMovie({ title, imageUrl, voteAverage, releaseDate }) {
  return (
    <Card elevation={4} style={styles.container}>
      <Card.Cover source={{ uri: imageUrl }} />
      <Chip style={styles.chip} theme={themeChip} icon="star" disabled>
        {voteAverage}
      </Chip>
      <Card.Content>
        <View>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
            {releaseDate}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}

const themeChip = {
  roundness: 4,
  colors: {
    disabled: "yellow"
  }
};

const styles = StyleSheet.create({
  container: {
    minWidth: 135,
    maxWidth: 135,
    marginHorizontal: 10,
    marginBottom: 18
  },
  chip: {
    position: "absolute",
    bottom: "21%",
    backgroundColor: blueGreyDark
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 14
  },
  subtitle: {
    textAlign: "center"
  }
});

export default CardMovie;
