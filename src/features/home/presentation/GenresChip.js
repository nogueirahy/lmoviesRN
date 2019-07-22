import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

const propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  genres: [],
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  chipContainer: {
    margin: 4,
  },
  text: {
    fontStyle: 'italic',
  },
});

function GenresChip({ genres }) {
  return (
    <View style={styles.container}>
      {genres.map(item => (
        <Chip key={item.id} style={styles.chipContainer} textStyle={styles.text}>{item.name}</Chip>
      ))
      }
    </View>
  );
}

GenresChip.propTypes = propTypes;
GenresChip.defaultProps = defaultProps;


export default GenresChip;
