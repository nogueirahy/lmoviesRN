import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { Placeholder, PlaceholderMedia, Progressive } from "rn-placeholder";
import styles from "./styles";

export default () => (
  <View style={{ flexDirection: "row" }}>
    <Card elevation={4} style={[styles.container, { height: 190 }]}>
      <Placeholder Animation={Progressive}>
        <PlaceholderMedia style={{ width: 125, height: 190 }} />
      </Placeholder>
    </Card>
  </View>
);
