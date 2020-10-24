import {
  reducer as movieReducer,
  Creators as MovieActionCreators,
  Types as MovieTypes,
} from "./movie";

import {
  reducer as movieDetailReducer,
  Creators as MovieDetailActionCreators,
  Types as MovieDetailTypes,
} from "./detailMovie";

export {
  movieReducer,
  MovieActionCreators,
  MovieTypes,
  movieDetailReducer,
  MovieDetailActionCreators,
  MovieDetailTypes,
};
