import React from "react";
import { Card, Chip } from "react-native-paper";
import styles, { themeChip } from "./styles";

interface IProps {
  imageUrl: string;
  voteAverage: number;
  onPress: () => void;
}

const CardMovie = ({ imageUrl, voteAverage, onPress }: IProps) => (
  <Card style={styles.container} onPress={onPress}>
    <Card.Cover source={{ uri: imageUrl }} style={{width: 130}} />
    {voteAverage !== 0 && (
      <Chip style={styles.chip} theme={themeChip} icon="star" disabled>
        {voteAverage}
      </Chip>
    )}
  </Card>
);

export default CardMovie;
