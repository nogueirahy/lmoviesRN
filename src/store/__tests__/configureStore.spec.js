import { createStore, compose, applyMiddleware } from 'redux';

require('../configureStore');

let createSagaMiddleware;

jest.mock('redux', () => ({
  createStore: jest.fn(),
  compose: jest.fn(),
  applyMiddleware: jest.fn(),
}));

jest.mock(
  'redux-saga',
  () => (createSagaMiddleware = jest.fn().mockReturnValue({ run: jest.fn() })),
);

jest.mock('../reducers', () => ({
  persistedReducer: jest.fn(),
}));

describe('configureStore', () => {
  it('deve confiturar a store', () => {
    expect(createSagaMiddleware).toBeCalled();
    expect(applyMiddleware).toBeCalled();
    expect(createStore).toBeCalled();
    expect(compose).toBeCalled();
  });
});
