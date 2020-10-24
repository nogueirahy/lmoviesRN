import { createStackNavigator, createAppContainer } from "react-navigation";

import { Home, Details } from "../features/home/containers";
import { color } from "../config/theme";

const RNApp = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { header: null },
    },
    Details: {
      screen: Details,
      navigationOptions: () => ({
        headerTransparent: true,
        headerTintColor: color.text,
      }),
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(RNApp);
