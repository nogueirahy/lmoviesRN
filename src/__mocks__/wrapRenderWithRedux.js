import React from "react";

import { render, act } from "react-native-testing-library";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

export default function(Component, state = {}) {
  const mockStore = configureMockStore();
  const store = mockStore(state);
  return {
    ...render(
      <Provider store={store}>
        <Component />}
      </Provider>
    ),
    store,
    act
  };
}
