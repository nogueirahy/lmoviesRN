import React from 'react';

import { View } from 'react-native';
import { Chip } from 'react-native-paper';

import { GenresChipStyle } from './styles';

function GenresChip({ genres = [] }) {
  return (
    <View style={GenresChipStyle.container}>
      {genres.map((item) => (
        <Chip
          key={item.id}
          style={GenresChipStyle.chipContainer}
          textStyle={GenresChipStyle.text}>
          {item.name}
        </Chip>
      ))}
    </View>
  );
}

export default GenresChip;
