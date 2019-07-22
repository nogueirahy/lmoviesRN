import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Home, Details } from '../features/home/containers';

const RNApp = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { header: null },
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RNApp);
