import React from "react";
import { FlatList, View } from "react-native";
import { Subheading } from "react-native-paper";
import { themoviedbHelper } from "../../../lib";
import { CardMovie } from "../../../components";
import { HomeStyle } from "../containers/styles";

interface IProps {
  title: string;
  data: Array<any>; // TODO add type
  nextPage: () => void;
  onPress: (id: string) => void;
}

const MovieList: React.FC<IProps> = ({
  title,
  data = [],
  nextPage,
  onPress,
}) => {
  const renderItem = (item) => {
    const { id, voteAverage, posterUrl } = themoviedbHelper.normalizeData(item);

    return (
      <CardMovie
        imageUrl={posterUrl}
        voteAverage={voteAverage}
        onPress={() => onPress(id)}
      />
    );
  };

  return (
    <>
      <Subheading style={HomeStyle.title}>{title}</Subheading>
      <FlatList
        contentContainerStyle={HomeStyle.contentFlatlist}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={nextPage}
        onEndReachedThreshold={0.2}
        horizontal
        showsHorizontalScrollIndicator={false}
        testID="movieList"
      />
    </>
  );
};

export default MovieList;
