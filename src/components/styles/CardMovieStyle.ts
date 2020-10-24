import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    minWidth: 135,
    maxWidth: 135,
    marginHorizontal: 10,
    marginBottom: 18,
  },
  chip: {
    position: "absolute",
    bottom: "21%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 14,
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
