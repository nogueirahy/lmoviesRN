import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  selectedMovie: ['id'],

  upcomingRequest: ['page'],
  upcomingSuccess: ['upcomingData', 'upcomingTotalPages'],

  popularRequest: ['page'],
  popularSuccess: ['popularData', 'popularTotalPages'],

  topRatedRequest: ['page'],
  topRatedSuccess: ['topRatedData', 'topRatedTotalPages'],

  failure: null,
});

export const INITIAL_STATE = {
  upcomingData: [],
  popularData: [],
  topRatedData: [],
  selectedMovie: null,
  isFetching: true,
};

export const selectedMovie = (state, { id }) => ({
  ...state,
  id,
});

// Upcoming reducer
export const upcomingRequest = (state, { page }) => ({
  ...state,
  page,
  isFetching: true,
});

export const upcomingSuccess = (state, { upcomingData, upcomingTotalPages }) => ({
  ...state,
  upcomingData: [...state.upcomingData, ...upcomingData],
  upcomingTotalPages,
  isFetching: false,
});

// Popular reducer
export const popularRequest = (state, { page }) => ({
  ...state,
  page,
  isFetching: true,
});

export const popularSuccess = (state, { popularData, popularTotalPages }) => ({
  ...state,
  popularData: [...state.popularData, ...popularData],
  popularTotalPages,
  isFetching: false,

});

// TopRated reducer
export const topRatedRequest = (state, { page }) => ({
  ...state,
  page,
  isFetching: true,
});

export const topRatedSuccess = (state, { topRatedData, topRatedTotalPages }) => ({
  ...state,
  topRatedData: [...state.topRatedData, ...topRatedData],
  topRatedTotalPages,
  isFetching: false,
});

// generic failure reducer
export const failure = state => ({
  ...state,
  isFetching: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SELECTED_MOVIE]: selectedMovie,

  [Types.UPCOMING_REQUEST]: upcomingRequest,
  [Types.UPCOMING_SUCCESS]: upcomingSuccess,

  [Types.POPULAR_REQUEST]: popularRequest,
  [Types.POPULAR_SUCCESS]: popularSuccess,

  [Types.TOP_RATED_REQUEST]: topRatedRequest,
  [Types.TOP_RATED_SUCCESS]: topRatedSuccess,

  [Types.FAILURE]: failure,
});
