import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  selectedMovie: ["id"],

  homeRequest: ["page"],

  upcomingRequest: ["page"],
  upcomingSuccess: ["upcomingData", "upcomingTotalPages"],

  popularRequest: ["page"],
  popularSuccess: ["popularData", "popularTotalPages"],

  topRatedRequest: ["page"],
  topRatedSuccess: ["topRatedData", "topRatedTotalPages"],

  tvPopularRequest: ["page"],
  tvPopularSuccess: ["tvPopularData", "tvPopularTotalPages"],

  failure: null,
});

export const INITIAL_STATE = {
  upcomingData: [],
  popularData: [],
  topRatedData: [],
  tvPopularData: [],
  selectedMovie: null,
};

export const selectedMovie = (state, { id }) => ({
  ...state,
  id,
});

export const homeRequest = (state) => ({
  ...state,
});

// Upcoming reducer
export const upcomingRequest = (state, { page }) => ({
  ...state,
  page,
});

export const upcomingSuccess = (
  state,
  { upcomingData, upcomingTotalPages }
) => ({
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

export const topRatedSuccess = (
  state,
  { topRatedData, topRatedTotalPages }
) => ({
  ...state,
  topRatedData: [...state.topRatedData, ...topRatedData],
  topRatedTotalPages,
});

// TvPopular reducer
export const tvPopularRequest = (state, { page }) => ({
  ...state,
  page,
});

export const tvPopularSuccess = (
  state,
  { tvPopularData, tvPopularTotalPages }
) => ({
  ...state,
  tvPopularData: [...state.tvPopularData, ...tvPopularData],
  tvPopularTotalPages,
});

// generic failure reducer
export const failure = (state) => ({
  ...state,
  isFetching: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SELECTED_MOVIE]: selectedMovie,
  [Types.HOME_REQUEST]: homeRequest,

  [Types.UPCOMING_REQUEST]: upcomingRequest,
  [Types.UPCOMING_SUCCESS]: upcomingSuccess,

  [Types.POPULAR_REQUEST]: popularRequest,
  [Types.POPULAR_SUCCESS]: popularSuccess,

  [Types.TOP_RATED_REQUEST]: topRatedRequest,
  [Types.TOP_RATED_SUCCESS]: topRatedSuccess,

  [Types.TV_POPULAR_REQUEST]: tvPopularRequest,
  [Types.TV_POPULAR_SUCCESS]: tvPopularSuccess,

  [Types.FAILURE]: failure,
});
