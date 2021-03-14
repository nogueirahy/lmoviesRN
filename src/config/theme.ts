import { DarkTheme } from "react-native-paper";

export const color = {
  primary: "#dbedf3",
  accent: "#00818a",
  surface: "#404b69",
  text: "#ffffff",
  background: "#121212",
};

const theme = {
  ...DarkTheme,
  dark: true,
  roundness: 4,
  colors: { ...color },
};

export default theme;
