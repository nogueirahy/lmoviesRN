import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  movieDetailRequest: null,
  movieDetailSuccess: ['data'],
  movieDetailFailure: null,
});

export const INITIAL_STATE = {
  data: {},
};

export const movieDetailRequest = state => ({
  ...state,
});

export const movieDetailSuccess = (state, { data }) => ({
  ...state,
  data,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MOVIE_DETAIL_REQUEST]: movieDetailRequest,
  [Types.MOVIE_DETAIL_SUCCESS]: movieDetailSuccess,
});
