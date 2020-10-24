import React, { useEffect } from "react";
import { ScrollView, SafeAreaView } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { useNextPage } from "../../../hooks";
import MovieList from "./MovieListContainer";
import { MovieActionCreators } from "../ducks";
import { navigateToDetails } from "../../../navigation/NavigationHelpers";
import { HomeStyle } from "./styles";

const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const {
    upcomingData,
    upcomingTotalPages,
    popularData,
    popularTotalPages,
    topRatedData,
    topRatedTotalPages,
    isFetching,
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

  useEffect(() => {
    upcomingNextPage();
    popularNextPage();
    topRatedNextPage();
  }, []);

  const doNavigateToDetails = (id: string) => {
    dispatch(MovieActionCreators.selectedMovie(id));
    navigateToDetails();
  };

  return (
    <SafeAreaView>
      <ScrollView style={HomeStyle.container}>
        <MovieList
          isFetching={isFetching}
          title="Upcoming Movies"
          data={upcomingData}
          nextPage={upcomingNextPage}
          onPress={doNavigateToDetails}
        />
        <MovieList
          isFetching={isFetching}
          title="Popular"
          data={popularData}
          nextPage={popularNextPage}
          onPress={doNavigateToDetails}
        />
        <MovieList
          isFetching={isFetching}
          title="Top Rated"
          data={topRatedData}
          nextPage={topRatedNextPage}
          onPress={doNavigateToDetails}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeContainer;
