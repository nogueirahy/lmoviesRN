import React from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../../components";
import { useNextPage } from "../../../hooks";
import { MovieActionCreators, MovieDetailActionCreators } from "../ducks";
import MovieList from "../presentation/MovieList";

const HomeContainer: React.FC = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const {
    upcomingData,
    upcomingTotalPages,
    popularData,
    popularTotalPages,
    topRatedData,
    topRatedTotalPages,
    tvPopularData,
    tvPopularTotalPages,
    tvTopRatedData,
    tvTopRatedTotalPages,
  } = useSelector((state) => state.movie);

  const upcomingNextPage = useNextPage({
    action: MovieActionCreators.upcomingRequest,
    totalPages: upcomingTotalPages,
  });

  const popularNextPage = useNextPage({
    action: MovieActionCreators.popularRequest,
    totalPages: popularTotalPages,
  });

  const topRatedNextPage = useNextPage({
    action: MovieActionCreators.topRatedRequest,
    totalPages: topRatedTotalPages,
  });

  const tvPopularNextPage = useNextPage({
    action: MovieActionCreators.tvPopularRequest,
    totalPages: tvPopularTotalPages,
  });

  const tvTopRatedNextPage = useNextPage({
    action: MovieActionCreators.tvTopRatedRequest,
    totalPages: tvTopRatedTotalPages,
  });

  const doNavigateToMovieDetails = (id: string) => {
    dispatch(MovieActionCreators.selectedMovie(id));
    dispatch(MovieDetailActionCreators.movieDetailRequest());
    navigate("Details");
  };

  const doNavigateToTvDetails = (id: string) => {
    dispatch(MovieActionCreators.selectedMovie(id));
    dispatch(MovieDetailActionCreators.tvDetailRequest());
    navigate("Details");
  };

  React.useEffect(() => {
    dispatch(MovieActionCreators.homeRequest({ page: 1 }));
  }, []);

  return (
    <Container>
      <ScrollView>
        <MovieList
          title="Upcoming Movies"
          data={upcomingData}
          nextPage={upcomingNextPage}
          onPress={doNavigateToMovieDetails}
        />
        <MovieList
          title="Popular Movie"
          data={popularData}
          nextPage={popularNextPage}
          onPress={doNavigateToMovieDetails}
        />
        <MovieList
          title="Top Rated Movie"
          data={topRatedData}
          nextPage={topRatedNextPage}
          onPress={doNavigateToMovieDetails}
        />
        <MovieList
          title="Popular Series"
          data={tvPopularData}
          nextPage={tvPopularNextPage}
          onPress={doNavigateToTvDetails}
        />

        <MovieList
          title="Top Rated Series"
          data={tvTopRatedData}
          nextPage={tvTopRatedNextPage}
          onPress={doNavigateToTvDetails}
        />
      </ScrollView>
    </Container>
  );
};

export default HomeContainer;
