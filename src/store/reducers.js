import { combineReducers } from 'redux';

import { movieReducer, movieDetailReducer } from '../features/home/ducks';

const rootReducer = combineReducers({
  movie: movieReducer,
  movieDetail: movieDetailReducer,
});

export { rootReducer };
