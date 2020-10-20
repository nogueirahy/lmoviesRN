import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Subheading } from 'react-native-paper';
import { DetailHeaderStyle } from './styles';


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
      style={DetailHeaderStyle.container}
      start={[0, 1]}
      end={[0, 0]}
      colors={['#4ecca3', '#232931', '#000000']}
    >
      <ImageBackground source={{ uri: backdropUrl }} style={DetailHeaderStyle.imageBackground} />
      <View style={DetailHeaderStyle.contentContainer}>
        <Title style={DetailHeaderStyle.title}>{title}</Title>
        <View style={DetailHeaderStyle.subTitleContainer}>
          <MaterialCommunityIcons name="star" size={18} color="yellow" />
          <Subheading style={DetailHeaderStyle.subTitleText}>{`${voteAverage}/10  AVG.`}</Subheading>
        </View>
        <View style={DetailHeaderStyle.subTitleContainer}>
          <MaterialCommunityIcons name="vote-outline" size={18} color="#e0f2f1" />
          <Subheading style={DetailHeaderStyle.subTitleText}>{`${voteCount} Votes`}</Subheading>
        </View>
      </View>
    </LinearGradient>
  );
}

DetailHeader.propTypes = propTypes;
DetailHeader.defaultProps = defaultProps;
export default DetailHeader;
