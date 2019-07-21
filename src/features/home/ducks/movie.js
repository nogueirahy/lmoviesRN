import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  movieRequest: ['page'],
  movieSuccess: ['data', 'totalPages'],
  movieFailure: null,
});

export const INITIAL_STATE = {
  data: [],
  isFetching: false,
};

export const movieRequest = (state, { page }) => ({
  ...state,
  page,
  isFetching: true,
});

export const movieSuccess = (state, { data, totalPages }) => ({
  ...state,
  data: [...state.data, ...data],
  totalPages,
  isFetching: false,
});

export const movieFailure = state => ({
  ...state,
  isFetching: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MOVIE_REQUEST]: movieRequest,
  [Types.MOVIE_SUCCESS]: movieSuccess,
  [Types.MOVIE_FAILURE]: movieFailure,
});
