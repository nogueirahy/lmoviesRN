import React from "react";

import { Provider as PaperProvider } from "react-native-paper";

import AppNavigator from "./src/navigation";
import theme from "./src/config/theme";

const App = () => (
  <PaperProvider theme={theme}>
    <AppNavigator />
  </PaperProvider>
);

export default App;
