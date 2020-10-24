import { put, call, select, takeLatest } from "redux-saga/effects";

import { idSelector } from "./selectors";
import {
  MovieActionCreators,
  MovieTypes,
  MovieDetailActionCreators,
  MovieDetailTypes,
} from "./ducks";

import { api } from "../../api";

export function* handleUpcomingRequest({ page }) {
  const response = yield call(api.getUpcoming, page);
  if (response.ok) {
    const { results, total_pages: totalPages } = response.data;
    console.log(response.data);
    yield put(MovieActionCreators.upcomingSuccess(results, totalPages));
  } else {
    yield put(MovieActionCreators.failure());
  }
}

export function* handlePopularRequest({ page }) {
  const response = yield call(api.getPopular, page);
  if (response.ok) {
    const { results, total_pages: totalPages } = response.data;

    yield put(MovieActionCreators.popularSuccess(results, totalPages));
  } else {
    yield put(MovieActionCreators.failure());
  }
}

export function* handleTopRatedRequest({ page }) {
  const response = yield call(api.getTopRated, page);
  if (response.ok) {
    const { results, total_pages: totalPages } = response.data;

    yield put(MovieActionCreators.topRatedSuccess(results, totalPages));
  } else {
    yield put(MovieActionCreators.failure());
  }
}

export function* handleMovieDetailRequest() {
  const id = yield select(idSelector);
  const response = yield call(api.getDetailMovie, id);
  if (response.ok) {
    yield put(MovieDetailActionCreators.movieDetailSuccess(response.data));
  } else {
    yield put(MovieActionCreators.failure());
  }
}

export const homeSagas = [
  takeLatest(MovieTypes.UPCOMING_REQUEST, handleUpcomingRequest),
  takeLatest(MovieTypes.POPULAR_REQUEST, handlePopularRequest),
  takeLatest(MovieTypes.TOP_RATED_REQUEST, handleTopRatedRequest),

  takeLatest(MovieDetailTypes.MOVIE_DETAIL_REQUEST, handleMovieDetailRequest),
];
