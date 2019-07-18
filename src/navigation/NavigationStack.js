import { createStackNavigator, createAppContainer } from "react-navigation";

import { Home } from "../features/home/containers";

const RNApp = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RNApp);
