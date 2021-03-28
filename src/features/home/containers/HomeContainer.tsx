import React from "react";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../../components";
import { useNextPage } from "../../../hooks";
import { MovieActionCreators } from "../ducks";
import MovieList from "./MovieListContainer";
import { HomeStyle } from "./styles";

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

  const doNavigateToDetails = (id: string) => {
    dispatch(MovieActionCreators.selectedMovie(id));
    navigate("Details");
  };

  React.useEffect(() => {
    dispatch(MovieActionCreators.homeRequest({ page: 1 }));
  }, []);

  return (
    <Container>
      <ScrollView style={HomeStyle.container}>
        <MovieList
          title="Upcoming Movies"
          data={upcomingData}
          nextPage={upcomingNextPage}
          onPress={doNavigateToDetails}
        />
        <MovieList
          title="Popular Movie"
          data={popularData}
          nextPage={popularNextPage}
          onPress={doNavigateToDetails}
        />
        <MovieList
          title="Top Rated Movie"
          data={topRatedData}
          nextPage={topRatedNextPage}
          onPress={doNavigateToDetails}
        />
        <MovieList
          title="Popular Series"
          data={tvPopularData}
          nextPage={tvPopularNextPage}
          onPress={() => undefined /* TODO create series details */}
        />
      </ScrollView>
    </Container>
  );
};

export default HomeContainer;
