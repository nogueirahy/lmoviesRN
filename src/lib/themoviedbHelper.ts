const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w500/";

function normalizeData(data) {
  const {
    id,
    title,
    overview,
    recommendations,
    genres,
    vote_average: voteAverage,
    vote_count: voteCount,
    backdrop_path: backdropPath,
    poster_path: posterPath,
    release_date: releaseDate,
  } = data;

  const backdropUrl = `${BASE_URL_IMAGE}${backdropPath}`;
  const posterUrl = `${BASE_URL_IMAGE}${posterPath}`;

  return {
    id,
    title,
    overview,
    recommendations,
    genres,
    voteAverage,
    voteCount,
    backdropUrl,
    posterUrl,
    releaseDate,
  };
}

export default { BASE_URL_IMAGE, normalizeData };
