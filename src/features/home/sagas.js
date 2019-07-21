import { put, call, takeLatest } from "redux-saga/effects";

import { MovieActionCreators, MovieTypes } from "./ducks";

import { api } from "../../api";

export function* handleMovieRequest({ page }) {
  const response = yield call(api.getUpcoming, page);
  if (response.ok) {
    const { results, total_pages: totalPages } = response.data;

    yield put(MovieActionCreators.movieSuccess(results, totalPages));
  } else {
    yield put(MovieActionCreators.movieFailure());
  }
}

export const homeSagas = [
  takeLatest(MovieTypes.MOVIE_REQUEST, handleMovieRequest)
];
