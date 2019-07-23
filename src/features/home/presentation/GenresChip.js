import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Chip } from 'react-native-paper';

import { GenresChipStyle } from './styles';

const propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  genres: [],
};

function GenresChip({ genres }) {
  return (
    <View style={GenresChipStyle.container}>
      {genres.map(item => (
        <Chip
          key={item.id}
          style={GenresChipStyle.chipContainer}
          textStyle={GenresChipStyle.text}
        >
          {item.name}
        </Chip>
      ))
      }
    </View>
  );
}

GenresChip.propTypes = propTypes;
GenresChip.defaultProps = defaultProps;


export default GenresChip;
