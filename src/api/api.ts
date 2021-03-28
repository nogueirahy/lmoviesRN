import { create } from "apisauce";

const api_key = "06154e2a19c809055f4277417e0e0ba1";
const api = create({
  baseURL: "https://api.themoviedb.org",
});

/* Movies */
const getUpcoming = (page: number) =>
  api.get("/3/movie/upcoming", {
    api_key,
    language: "en-US",
    page,
  });

const getPopular = (page: number) =>
  api.get("/3/movie/popular", {
    api_key,
    language: "en-US",
    page,
  });

const getTopRated = (page: number) =>
  api.get("/3/movie/top_rated", {
    api_key,
    language: "en-US",
    page,
  });

const getDetailMovie = (id: number) =>
  api.get(`/3/movie/${id}`, {
    api_key,
    language: "en-US",
    append_to_response: "recommendations",
  });

/* Series */
const getTvPopular = (page: number) =>
  api.get(`3/tv/popular`, {
    api_key,
    language: "en-US",
    page,
  });

export default {
  getUpcoming,
  getPopular,
  getTopRated,
  getDetailMovie,
  getTvPopular,
};
