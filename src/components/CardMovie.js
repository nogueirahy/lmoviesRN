import React from "react";

import { Card, Text } from "react-native-paper";

function CardMovie() {
  return (
    <Card
      elevation={4}
      style={{
        minWidth: 135,
        maxWidth: 135,
        marginHorizontal: 10,
        marginBottom: 18
      }}
    >
      <Card.Content>
        <Text>Card Movie</Text>
      </Card.Content>
    </Card>
  );
}

export default CardMovie;
