import React from "react";
import { Card, Chip } from "react-native-paper";
import styles, { themeChip } from "./styles";

interface IProps {
  imageUrl: string;
  voteAverage: string;
  onPress: () => void;
}

const CardMovie: React.FC<IProps> = ({ imageUrl, voteAverage, onPress }) => (
  <Card elevation={4} style={styles.container} onPress={onPress}>
    <Card.Cover source={{ uri: imageUrl }} style={{ height: 190 }} />
    <Chip style={styles.chip} theme={themeChip} icon="star" disabled>
      {voteAverage}
    </Chip>
  </Card>
);

export default CardMovie;
