import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { useNextPage } from '../../../hooks';
import MovieList from './MovieListContainer';
import { MovieActionCreators } from '../ducks';
import { navigateToDetails } from '../../../navigation/NavigationHelpers';
import { HomeStyle } from './styles';

function HomeContainer() {
  const dispatch = useDispatch();
  const {
    upcomingData, upcomingTotalPages,
    popularData, popularTotalPages,
    topRatedData, topRatedTotalPages,
    isFetching,
  } = useSelector(state => state.movie);
  const upcomingNextPage = useNextPage(MovieActionCreators.upcomingRequest, upcomingTotalPages);
  const popularNextPage = useNextPage(MovieActionCreators.popularRequest, popularTotalPages);
  const topRatedNextPage = useNextPage(MovieActionCreators.topRatedRequest, topRatedTotalPages);

  useEffect(() => {
    upcomingNextPage();
    popularNextPage();
    topRatedNextPage();
  }, []);

  function doNavigateToDetails(id) {
    dispatch(MovieActionCreators.selectedMovie(id));
    navigateToDetails();
  }

  return (
    <ScrollView style={HomeStyle.container}>
      <MovieList isFetching={isFetching} title="Upcoming Movies" data={upcomingData} nextPage={upcomingNextPage} onPress={doNavigateToDetails} />
      <MovieList isFetching={isFetching} title="Popular" data={popularData} nextPage={popularNextPage} onPress={doNavigateToDetails} />
      <MovieList isFetching={isFetching} title="Top Rated" data={topRatedData} nextPage={topRatedNextPage} onPress={doNavigateToDetails} />
    </ScrollView>
  );
}

export default HomeContainer;
