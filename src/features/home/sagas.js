import {
  put, call, select, takeLatest,
} from 'redux-saga/effects';

import { idSelector } from './selectors';
import {
  MovieActionCreators, MovieTypes, MovieDetailActionCreators, MovieDetailTypes,
} from './ducks';

import { api } from '../../api';

export function* handleMovieRequest({ page }) {
  const response = yield call(api.getUpcoming, page);
  if (response.ok) {
    const { results, total_pages: totalPages } = response.data;

    yield put(MovieActionCreators.movieSuccess(results, totalPages));
  } else {
    yield put(MovieActionCreators.movieFailure());
  }
}

export function* handleMovieDetailRequest() {
  const id = yield select(idSelector);
  const response = yield call(api.getDetailMovie, id);
  if (response.ok) {
    yield put(MovieDetailActionCreators.movieDetailSuccess(response.data));
  } else {
    yield put(MovieDetailActionCreators.movieDetailFailure());
  }
}

export const homeSagas = [
  takeLatest(MovieTypes.MOVIE_REQUEST, handleMovieRequest),
  takeLatest(MovieDetailTypes.MOVIE_DETAIL_REQUEST, handleMovieDetailRequest),
];
