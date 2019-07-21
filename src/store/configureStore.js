import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import sagas from './sagas';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const enhancers = [applyMiddleware(...middleware)];
const initialState = {};
const store = createStore(rootReducer, initialState, compose(...enhancers));

sagaMiddleware.run(sagas);

export { store };
