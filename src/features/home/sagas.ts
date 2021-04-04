import { put, call, select, takeLatest, fork, all } from "redux-saga/effects";
import { idSelector } from "./selectors";
import {
  MovieActionCreators as MovieAction,
  MovieTypes,
  MovieDetailActionCreators,
  MovieDetailTypes,
} from "./ducks";

import { api } from "../../api";
import { IParams, TResponse } from "./interfaces";

export function* handleHomeRequest({ page }: IParams) {
  try {
    yield all([
      fork(handleUpcomingRequest, page),
      fork(handlePopularRequest, page),
      fork(handleTopRatedRequest, page),
      fork(handleTvPopularRequest, page),
      fork(handleTvTopRatedRequest, page),
    ]);
  } catch (err) {
    yield put(MovieAction.failure());
  }
}

export function* handleUpcomingRequest({ page }: IParams) {
  try {
    const { data }: TResponse = yield call(api.getUpcoming, page);
    const { results, total_pages: totalPages } = data!;
    const newResults = results.filter(
      (data) =>
        new Date(data.release_date) > new Date() &&
        Boolean(data.poster_path) &&
        Boolean(data.backdrop_path)
    );
    yield put(MovieAction.upcomingSuccess(newResults, totalPages));
  } catch {
    yield put(MovieAction.failure());
  }
}

export function* handlePopularRequest({ page }: IParams) {
  try {
    const { data }: TResponse = yield call(api.getPopular, page);
    const { results, total_pages: totalPages } = data!;
    yield put(MovieAction.popularSuccess(results, totalPages));
  } catch {
    yield put(MovieAction.failure());
  }
}

export function* handleTopRatedRequest({ page }: IParams) {
  try {
    const { data }: TResponse = yield call(api.getTopRated, page);
    const { results, total_pages: totalPages } = data!;
    yield put(MovieAction.topRatedSuccess(results, totalPages));
  } catch {
    yield put(MovieAction.failure());
  }
}

export function* handleMovieDetailRequest() {
  try {
    const id: number = yield select(idSelector);
    const { data }: TResponse = yield call(api.getDetailMovie, id);
    yield put(MovieDetailActionCreators.movieDetailSuccess(data));
  } catch {
    yield put(MovieAction.failure());
  }
}

export function* handleTvPopularRequest({ page }: IParams) {
  try {
    const { data }: TResponse = yield call(api.getTvPopular, page);
    const { results, total_pages: totalPages } = data!;
    yield put(MovieAction.tvPopularSuccess(results, totalPages));
  } catch {
    yield put(MovieAction.failure());
  }
}

export function* handleTvTopRatedRequest({ page }: IParams) {
  try {
    const { data }: TResponse = yield call(api.getTvTopRated, page);
    const { results, total_pages: totalPages } = data!;
    yield put(MovieAction.tvTopRatedSuccess(results, totalPages));
  } catch {
    yield put(MovieAction.failure());
  }
}

export function* handleTvDetailsRequest() {
  try {
    const id: number = yield select(idSelector);
    const { data }: TResponse = yield call(api.getTvDetails, id);
    yield put(MovieDetailActionCreators.tvDetailSuccess(data));
  } catch {
    yield put(MovieAction.failure());
  }
}

export const homeSagas = [
  takeLatest(MovieTypes.HOME_REQUEST, handleHomeRequest),

  takeLatest(MovieTypes.UPCOMING_REQUEST, handleUpcomingRequest),
  takeLatest(MovieTypes.POPULAR_REQUEST, handlePopularRequest),
  takeLatest(MovieTypes.TOP_RATED_REQUEST, handleTopRatedRequest),
  takeLatest(MovieTypes.TV_POPULAR_REQUEST, handleTvPopularRequest),
  takeLatest(MovieTypes.TV_TOP_RATED_REQUEST, handleTvTopRatedRequest),

  takeLatest(MovieDetailTypes.TV_DETAIL_REQUEST, handleTvDetailsRequest),
  takeLatest(MovieDetailTypes.MOVIE_DETAIL_REQUEST, handleMovieDetailRequest),
];
