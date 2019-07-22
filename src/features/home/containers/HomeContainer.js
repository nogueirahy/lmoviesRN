import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { Title } from 'react-native-paper';

import { MovieActionCreators } from '../ducks';
import { moviesDataSelector, moviesTotalPagesSelector } from '../selectors';
import { CardMovie } from '../../../components';
import { momentHelper, themoviedbHelper } from '../../../lib';
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

  function renderItem(item) {
    const {
      id, title, poster_path: postPath, vote_average: voteAverage, release_date: releaseDate,
    } = item;
    const imageUrl = `${themoviedbHelper.BASE_URL_IMAGE}${postPath}`;
    const releaseDateFormated = momentHelper.formatDate(releaseDate);
    return (
      <CardMovie
        title={title}
        imageUrl={imageUrl}
        voteAverage={voteAverage}
        releaseDate={releaseDateFormated}
        onPress={() => doNavigateToDetails(id)}
      />
    );
  }

  return (
    <ScrollView style={HomeStyle.container}>
      <Title style={HomeStyle.title}>Upcoming Movies</Title>
      <FlatList
        contentContainerStyle={HomeStyle.contentFlatlist}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => renderItem(item)}
        onEndReachedThreshold={0.1}
        onEndReached={nextPage}
        horizontal
        showsHorizontalScrollIndicator={false}
        testID="flatlist"
      />
    </ScrollView>
  );
}

export default HomeContainer;
