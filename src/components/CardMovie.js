import React from "react";
import { View } from "react-native";

import { Card, Chip, Text, Title } from "react-native-paper";

import { blueGreyDark } from "../config/colors";

const themeChip = {
  roundness: 4,
  colors: {
    disabled: "yellow"
  }
};

function CardMovie({ title, imageUrl, voteAverage, releaseDate }) {
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
      <Card.Cover
        source={{
          uri: imageUrl
        }}
      />
      <Chip
        disabled
        theme={themeChip}
        style={{
          position: "absolute",
          bottom: "21%",
          backgroundColor: blueGreyDark
        }}
        icon="star"
      >
        {voteAverage}
      </Chip>
      <Card.Content>
        <View>
          <Text
            style={{ fontWeight: "bold", textAlign: "center", marginTop: 14 }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <Text
            style={{ textAlign: "center" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {releaseDate}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}

export default CardMovie;

/*
 <AirbnbRating
            showRating
            count={5}
            reviews={["Terrible", "Bad", "OK", "Good", "Amazing"]}
            defaultRating={voteAverage/2}
            size={20}
          />
          */
