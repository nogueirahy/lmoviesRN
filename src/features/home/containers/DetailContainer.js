import React, { useEffect } from 'react';

import {
  View, StyleSheet, ScrollView, FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Title, Paragraph } from 'react-native-paper';

import { momentHelper, themoviedbHelper } from '../../../lib';
import { CardMovie } from '../../../components';
import { GenreChip, DetailHeader } from '../presentation';
import { MovieActionCreators, MovieDetailActionCreators } from '../ducks';
import { movieDetailDataSelector } from '../selectors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#232931',
  },
  title: {
    paddingTop: 12,
    paddingLeft: 8,
    letterSpacing: 0.15,
    fontWeight: '500',
    paddingBottom: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#232931',
    alignItems: 'center',
    paddingTop: 4,
    paddingHorizontal: 16,
  },
  contentFlatlist: {
    justifyContent: 'space-evenly',
    paddingLeft: 12,
  },
});

function DetailContainer() {
  const dispatch = useDispatch();
  const data = useSelector(movieDetailDataSelector);
  const movie = themoviedbHelper.normalizeData(data);

  function onRequestDetail(id) {
    dispatch(MovieActionCreators.selectedMovie(id));
    dispatch(MovieDetailActionCreators.movieDetailRequest());
  }

  function renderItem(item) {
    const {
      id, voteAverage, title, releaseDate, posterUrl,
    } = themoviedbHelper.normalizeData(item);

    const releaseDateFormated = momentHelper.formatDate(releaseDate);
    return (
      <CardMovie
        title={title}
        imageUrl={posterUrl}
        voteAverage={voteAverage}
        releaseDate={releaseDateFormated}
        onPress={() => onRequestDetail(id)}
      />
    );
  }


  useEffect(() => {
    dispatch(MovieDetailActionCreators.movieDetailRequest());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <DetailHeader
        title={movie.title}
        voteAverage={movie.voteAverage}
        voteCount={movie.voteCount}
        backdropUrl={movie.backdropUrl}
      />
      <View style={styles.content}>
        <Title>PLOT</Title>
        <Paragraph>{movie.overview}</Paragraph>
        <GenreChip genres={movie.genres} />

        <Title style={styles.title}>Recommended Movies</Title>
        <FlatList
          contentContainerStyle={styles.contentFlatlist}
          data={movie.recommendations ?.results}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => renderItem(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          testID="flatlistDetail"
        />
      </View>
    </ScrollView>
  );
}

DetailContainer.navigationOptions = () => ({
  headerTransparent: true,
  headerTintColor: '#eeeeee',
});

export default DetailContainer;
