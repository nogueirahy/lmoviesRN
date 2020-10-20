import React from 'react';

import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import { store } from './src/store/configureStore';
import AppNavigator from './src/navigation';
import theme from './src/config/theme';

const App = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  </Provider>
);

export default App;
