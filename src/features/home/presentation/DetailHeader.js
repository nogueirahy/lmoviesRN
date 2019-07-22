import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Subheading } from 'react-native-paper';


const propTypes = {
  title: PropTypes.string,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
  backdropUrl: PropTypes.string,
};

const defaultProps = {
  title: '',
  voteAverage: 0,
  voteCount: 0,
  backdropUrl: null,
};

function DetailHeader({
  title, voteAverage, voteCount, backdropUrl,
}) {
  return (
    <LinearGradient
      start={[0, 1]}
      end={[0, 0]}
      colors={['#4ecca3', '#232931', '#000000']}
      style={{ flex: 0.8 }}
    >
      <ImageBackground source={{ uri: backdropUrl }} style={{ width: '100%', height: 250, opacity: 0.3 }} />
      <View style={{ position: 'absolute', bottom: '5%', paddingHorizontal: 20 }}>
        <Title style={{ fontSize: 28, fontWeight: 'bold', color: '#eeeeee' }}>{title}</Title>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="star" size={18} color="yellow" />
          <Subheading style={{ color: '#e0f2f1', fontWeight: 'bold', paddingHorizontal: 2 }}>{`${voteAverage}/10  AVG.`}</Subheading>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

          <MaterialCommunityIcons name="vote-outline" size={18} color="#e0f2f1" />
          <Subheading style={{ color: '#e0f2f1', fontWeight: 'bold', paddingHorizontal: 2 }}>{`${voteCount} Votes`}</Subheading>
        </View>
      </View>
    </LinearGradient>
  );
}

DetailHeader.propTypes = propTypes;
DetailHeader.defaultProps = defaultProps;
export default DetailHeader;
