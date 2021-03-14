import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styles from "./styles";

export default ({ children }: { children: React.ReactNode }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar animated={true} barStyle="light-content" />
    {children}
  </SafeAreaView>
);
