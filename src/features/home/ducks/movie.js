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
};

export const selectedMovie = (state, { id }) => ({
  ...state,
  id,
});

// Upcoming reducer
export const upcomingRequest = (state, { page }) => ({
  ...state,
  page,
});

export const upcomingSuccess = (state, { upcomingData, upcomingTotalPages }) => ({
  ...state,
  upcomingData: [...state.upcomingData, ...upcomingData],
  upcomingTotalPages,
});

// Popular reducer
export const popularRequest = (state, { page }) => ({
  ...state,
  page,
});

export const popularSuccess = (state, { popularData, popularTotalPages }) => ({
  ...state,
  popularData: [...state.popularData, ...popularData],
  popularTotalPages,
});

// TopRated reducer
export const topRatedRequest = (state, { page }) => ({
  ...state,
  page,
});

export const topRatedSuccess = (state, { topRatedData, topRatedTotalPages }) => ({
  ...state,
  topRatedData: [...state.topRatedData, ...topRatedData],
  topRatedTotalPages,
});

// generic failure reducer
export const failure = state => ({
  ...state,
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
