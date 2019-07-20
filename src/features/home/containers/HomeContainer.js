import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { StyleSheet, ScrollView } from "react-native";
import { Title, Text } from "react-native-paper";

import { MovieActionCreators } from "../ducks";
import { CardMovie } from "../../../components";
import { blueGreyDark } from "../../../config/colors";

function HomeContainer({ movieRequest, data, totalPages }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    movieRequest(page);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Upcoming</Title>
      <CardMovie />
      <Text>Total de Paginas {totalPages}</Text>
      <Text>Pagina Atual {page}</Text>

      {data.map(elem => (
        <Title key={elem.title}>{elem.title}</Title>
      ))}
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
  }
});

const mapStateToProps = state => ({
  data: state.movie.data,
  totalPages: state.movie.totalPages,
  isFetching: state.movie.isFetching
});

const mapDispatchToProps = { ...MovieActionCreators };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
