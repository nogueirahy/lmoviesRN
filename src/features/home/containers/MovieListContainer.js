import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';

import { Title } from 'react-native-paper';

import { momentHelper, themoviedbHelper } from '../../../lib';
import { CardMovie } from '../../../components';
import { HomeStyle } from './styles';

const propTypes = {
};

const defaultProps = {
};

function MovieListContainer({ title, data, onPress }) {
  function renderItem(item) {
    const {
      id, voteAverage, title: movieTitle, releaseDate, posterUrl,
    } = themoviedbHelper.normalizeData(item);

    const releaseDateFormated = momentHelper.formatDate(releaseDate);
    return (
      <CardMovie
        title={movieTitle}
        imageUrl={posterUrl}
        voteAverage={voteAverage}
        releaseDate={releaseDateFormated}
        onPress={() => onPress(id)}
      />
    );
  }


  return (
    <>
      <Title style={HomeStyle.title}>{title}</Title>
      <FlatList
        contentContainerStyle={HomeStyle.contentFlatlist}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => renderItem(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
        testID="movieList"
      />
    </>
  );
}

MovieListContainer.propTypes = propTypes;
MovieListContainer.defaultProps = defaultProps;

export default MovieListContainer;
