import React, { useRef } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Title, Paragraph } from "react-native-paper";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { themoviedbHelper } from "../../../lib";
import { Container } from "../../../components";
import MovieList from "../presentation/MovieList";
import { GenreChip, DetailHeader } from "../presentation";
import { HomeStyle } from "./styles";

const DetailContainer: React.FC = () => {
  const navigate = useNavigation();
  const route = useRoute();
  const scrollRef = useRef(null);
  const { data } = useSelector((state) => state.movieDetail);
  const movie = themoviedbHelper.normalizeData(data);

  const requestDetail = route.params?.requestDetail;

  const onRequestDetail = (id: string) => {
    scrollRef.current?.scrollTo({ y: 0 });
    requestDetail(id);
  };

  return (
    <Container>
      <TouchableOpacity
        hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
        onPress={() => navigate.goBack()}
        style={{
          margin: 6,
          width: "12%",
          height: "5.5%",
        }}
      >
        <Icon name="chevron-back" size={32} color="#fff" />
      </TouchableOpacity>

      <ScrollView ref={scrollRef}>
        <DetailHeader
          title={movie.title || movie.name}
          voteAverage={movie.voteAverage}
          videos={movie.videos}
          backdropUrl={movie.backdropUrl}
        />
        <View style={HomeStyle.contentDetailBody}>
          <Title>PLOT</Title>
          <Paragraph>{movie.overview}</Paragraph>
          <GenreChip genres={movie.genres} />
        </View>
        {Boolean(movie.similar?.results.length) && (
          <MovieList
            title="Similar Movies"
            data={movie.similar?.results}
            onPress={onRequestDetail}
          />
        )}
      </ScrollView>
    </Container>
  );
};

export default DetailContainer;
