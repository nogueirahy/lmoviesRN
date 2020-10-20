import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Card, Chip, Text } from 'react-native-paper';
import { CardMovieStyle } from './styles';
import { themeChip } from './styles/CardMovieStyle';

const propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

function CardMovie({
  title, imageUrl, voteAverage, releaseDate, onPress,
}) {
  return (
    <Card elevation={4} style={CardMovieStyle.container} onPress={onPress}>
      <Card.Cover source={{ uri: imageUrl }} />
      <Chip style={CardMovieStyle.chip} theme={themeChip} icon="star" disabled>
        {voteAverage}
      </Chip>
      <Card.Content>
        <View>
          <Text style={CardMovieStyle.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={CardMovieStyle.subtitle} numberOfLines={1} ellipsizeMode="tail">
            {releaseDate}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}

CardMovie.propTypes = propTypes;
export default CardMovie;
