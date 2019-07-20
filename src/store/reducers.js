import { combineReducers } from "redux";

import { movieReducer } from "../features/home/ducks";

const rootReducer = combineReducers({
  movie: movieReducer
});

export { rootReducer };
