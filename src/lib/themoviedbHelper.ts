const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w200/";

function normalizeData(data) {
  const {
    id,
    name,
    title,
    overview,
    similar,
    videos,
    genres,
    vote_average: voteAverage,
    backdrop_path: backdropPath,
    poster_path: posterPath,
    release_date: releaseDate,
  } = data;

  const backdropUrl = `${BASE_URL_IMAGE}${backdropPath}`;
  const posterUrl = `${BASE_URL_IMAGE}${posterPath}`;

  return {
    id,
    name,
    title,
    overview,
    similar,
    videos,
    genres,
    voteAverage,
    backdropUrl,
    posterUrl,
    releaseDate,
  };
}

export default { BASE_URL_IMAGE, normalizeData };
