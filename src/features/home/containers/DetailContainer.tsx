import React, { useEffect } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Title, Paragraph } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { themoviedbHelper } from "../../../lib";
import { Container } from "../../../components";
import MovieList from "./MovieListContainer";
import { GenreChip, DetailHeader } from "../presentation";
import { MovieActionCreators, MovieDetailActionCreators } from "../ducks";
import { HomeStyle } from "./styles";

const DetailContainer: React.FC = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.movieDetail);
  const movie = themoviedbHelper.normalizeData(data);

  function onRequestDetail(id) {
    dispatch(MovieActionCreators.selectedMovie(id));
    dispatch(MovieDetailActionCreators.movieDetailRequest());
  }

  useEffect(() => {
    dispatch(MovieDetailActionCreators.movieDetailRequest());
  }, []);

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
        <Icon name="chevron-back" size={34} color="#fff" />
      </TouchableOpacity>

      <ScrollView>
        <DetailHeader
          title={movie.title}
          voteAverage={movie.voteAverage}
          voteCount={movie.voteCount}
          backdropUrl={movie.backdropUrl}
        />
        <View style={HomeStyle.contentDetailBody}>
          <Title>PLOT</Title>
          <Paragraph>{movie.overview}</Paragraph>
          <GenreChip genres={movie.genres} />
        </View>
        {Boolean(movie.recommendations?.results.length) && (
          <MovieList
            title="Recommended Movies"
            data={movie.recommendations?.results}
            onPress={onRequestDetail}
            isFetching={isFetching}
          />
        )}
      </ScrollView>
    </Container>
  );
};

export default DetailContainer;
