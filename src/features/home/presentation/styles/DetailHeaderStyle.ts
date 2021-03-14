import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 0.8,
  },
  imageBackground: {
    width: "100%",
    height: 250,
    opacity: 0.3,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subTitleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  subTitleText: {
    fontWeight: "bold",
    paddingHorizontal: 2,
  },
});
