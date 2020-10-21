import React from 'react';
import { View, ImageBackground } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Title, Subheading } from 'react-native-paper';
import { DetailHeaderStyle } from './styles';

function DetailHeader({
  title = '',
  voteAverage = 0,
  voteCount = 0,
  backdropUrl = null,
}) {
  return (
    <>
      <ImageBackground
        source={{ uri: backdropUrl }}
        style={DetailHeaderStyle.imageBackground}
      />
      <View style={DetailHeaderStyle.contentContainer}>
        <Title style={DetailHeaderStyle.title}>{title}</Title>
        <View style={DetailHeaderStyle.subTitleContainer}>
          <MaterialCommunityIcons name="star" size={18} color="yellow" />
          <Subheading
            style={
              DetailHeaderStyle.subTitleText
            }>{`${voteAverage}/10  AVG.`}</Subheading>
        </View>
        <View style={DetailHeaderStyle.subTitleContainer}>
          <MaterialCommunityIcons
            name="vote-outline"
            size={18}
            color="#e0f2f1"
          />
          <Subheading
            style={
              DetailHeaderStyle.subTitleText
            }>{`${voteCount} Votes`}</Subheading>
        </View>
      </View>
    </>
  );
}

export default DetailHeader;
