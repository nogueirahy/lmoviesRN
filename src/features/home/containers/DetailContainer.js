import React, { useEffect } from 'react';
import { View, ScrollView, FlatList } from 'react-native';

import { Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { momentHelper, themoviedbHelper } from '../../../lib';
import { CardMovie } from '../../../components';
import { GenreChip, DetailHeader } from '../presentation';
import { MovieActionCreators, MovieDetailActionCreators } from '../ducks';
import { movieDetailDataSelector } from '../selectors';
import { HomeStyle } from './styles';


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
    <ScrollView>
      <DetailHeader
        title={movie.title}
        voteAverage={movie.voteAverage}
        voteCount={movie.voteCount}
        backdropUrl={movie.backdropUrl}
      />
      <View style={HomeStyle.contentDetailBody}>
        <Title>PLOT</Title>
        <Paragraph>{movie.overview}</Paragraph>
        <GenreChip genres={movie.genres} />

        <Title style={HomeStyle.title}>Recommended Movies</Title>
        <FlatList
          contentContainerStyle={HomeStyle.contentFlatlist}
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

export default DetailContainer;
