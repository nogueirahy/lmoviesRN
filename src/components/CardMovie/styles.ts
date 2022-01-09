import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginBottom: 8,
  },
  chip: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    right: "0%",
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  subtitle: {
    textAlign: "center",
  },
});

export const themeChip = {
  roundness: 4,
  colors: {
    disabled: "yellow",
  },
};
