import { StyleSheet } from "react-native";

import { color } from "../../../../config/theme";

export default StyleSheet.create({
  title: {
    marginLeft: 16,
    marginBottom: 12,
    padding: 16,
    fontWeight: 'bold',
 },
  contentFlatlist: {
    justifyContent: "space-evenly",
    paddingLeft: 16,
    paddingBottom: 6,
  },
  contentDetailBody: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: "center",
    paddingTop: 4,
    paddingHorizontal: 16,
  },
});
