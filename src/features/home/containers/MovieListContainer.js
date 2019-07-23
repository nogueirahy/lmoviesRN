import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { Title } from 'react-native-paper';

import { momentHelper, themoviedbHelper } from '../../../lib';
import { CardMovie, CardMoviePlaceholder } from '../../../components';
import { HomeStyle } from './styles';


const propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  nextPage: PropTypes.func,
  onPress: PropTypes.func,
  isFetching: PropTypes.bool,
};

const defaultProps = {
  data: [],
  isFetching: false,
  nextPage: () => { },
  onPress: () => { },
};

function MovieListContainer({
  title, data, nextPage, onPress, isFetching,
}) {
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

  function renderFooter() {
    if (!isFetching) return null;
    return <CardMoviePlaceholder numItems={20} />;
  }

  return (
    <>
      <Title style={HomeStyle.title}>{title}</Title>

      <FlatList
        contentContainerStyle={HomeStyle.contentFlatlist}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={nextPage}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
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
