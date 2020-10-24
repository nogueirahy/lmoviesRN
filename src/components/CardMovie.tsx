import React from "react";
import { View } from "react-native";
import { Card, Chip, Text } from "react-native-paper";

import { CardMovieStyle } from "./styles";
import { themeChip } from "./styles/CardMovieStyle";

interface IProps {
  title: string;
  imageUrl: string;
  voteAverage: string;
  releaseDate: string;
  onPress: () => void;
}

const CardMovie: React.FC<IProps> = ({
  title,
  imageUrl,
  voteAverage,
  releaseDate,
  onPress,
}) => (
  <Card elevation={4} style={CardMovieStyle.container} onPress={onPress}>
    <Card.Cover source={{ uri: imageUrl }} />
    <Chip style={CardMovieStyle.chip} theme={themeChip} icon="star" disabled>
      {voteAverage}
    </Chip>
    <Card.Content>
      <View>
        <Text
          style={CardMovieStyle.title}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <Text
          style={CardMovieStyle.subtitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {releaseDate}
        </Text>
      </View>
    </Card.Content>
  </Card>
);

export default CardMovie;
