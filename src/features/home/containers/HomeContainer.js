import React, { useState, useEffect, useCallback } from "react";

import { StyleSheet, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Title } from "react-native-paper";

import { MovieActionCreators } from "../ducks";
import { CardMovie } from "../../../components";
import { momentHelper } from "../../../lib";
import { blueGreyDark } from "../../../config/colors";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

function HomeContainer() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const { data, totalPages } = useSelector(state => state.movie);
  const isEndPage = page === totalPages;

  useEffect(() => {
    nextPage();
  }, []);

  useEffect(() => {
    if (isEndPage) {
      setCanLoadMore(false);
    }
  }, [page, canLoadMore]);

  const nextPage = useCallback(() => {
    if (canLoadMore) {
      dispatch(MovieActionCreators.movieRequest(page));
      setPage(page + 1);
    }
  }, [page]);

  function _renderItem({ item }) {
    const { title, poster_path, vote_average, release_date } = item;
    const imageUrl = `${IMAGE_URL}${poster_path}`;
    const releaseDate = momentHelper.formatDate(release_date);
    return (
      <CardMovie
        title={title}
        imageUrl={imageUrl}
        voteAverage={vote_average}
        releaseDate={releaseDate}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Upcoming Movies</Title>
      <FlatList
        contentContainerStyle={styles.content}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={_renderItem}
        onEndReachedThreshold={0.1}
        onEndReached={nextPage}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        testID="flatlist"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#FFFFFF"
  },
  title: {
    paddingLeft: 8,
    color: blueGreyDark,
    letterSpacing: 0.15,
    fontWeight: "500",
    paddingBottom: 16
  },
  content: {
    justifyContent: "space-evenly",
    paddingLeft: 12
  }
});

export default HomeContainer;
