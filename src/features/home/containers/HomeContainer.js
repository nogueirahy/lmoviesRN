import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import MovieList from './MovieListContainer';
import { MovieActionCreators } from '../ducks';
import { moviesDataSelector, moviesTotalPagesSelector } from '../selectors';
import { navigateToDetails } from '../../../navigation/NavigationHelpers';
import { HomeStyle } from './styles';

function HomeContainer() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const data = useSelector(moviesDataSelector);
  const totalPages = useSelector(moviesTotalPagesSelector);

  const isEndPage = page === totalPages;

  const nextPage = useCallback(() => {
    if (canLoadMore) {
      dispatch(MovieActionCreators.movieRequest(page));
      setPage(page + 1);
    }
  }, [page]);

  useEffect(() => {
    nextPage();
  }, []);

  useEffect(() => {
    if (isEndPage) {
      setCanLoadMore(false);
    }
  }, [page, canLoadMore]);

  function doNavigateToDetails(id) {
    dispatch(MovieActionCreators.selectedMovie(id));
    navigateToDetails();
  }

  return (
    <ScrollView style={HomeStyle.container}>
      <MovieList title="Upcoming Movies" data={data} onPress={doNavigateToDetails} />
    </ScrollView>
  );
}

export default HomeContainer;
