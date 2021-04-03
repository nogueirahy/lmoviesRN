import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  movieDetailRequest: null,
  movieDetailSuccess: ["data"],
  movieDetailFailure: null,
  tvDetailRequest: null,
  tvDetailSuccess: ["data"],
  tvDetailFailure: null,
});

export const INITIAL_STATE = {
  data: {},
  isFetching: false,
};

export const movieDetailRequest = (state) => ({
  ...state,
  isFetching: true,
});

export const movieDetailSuccess = (state, { data }) => ({
  ...state,
  data,
  isFetching: false,
});

export const tvDetailRequest = (state) => ({
  ...state,
  isFetching: true,
});

export const tvDetailSuccess = (state, { data }) => ({
  ...state,
  data,
  isFetching: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MOVIE_DETAIL_REQUEST]: movieDetailRequest,
  [Types.MOVIE_DETAIL_SUCCESS]: movieDetailSuccess,
  [Types.TV_DETAIL_REQUEST]: movieDetailRequest,
  [Types.TV_DETAIL_SUCCESS]: movieDetailSuccess,
});
