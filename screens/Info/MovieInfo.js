import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MovieData = require('../../json/Movie.json').items;

function MovieInfo({route}) {
  const series = MovieData.filter(item => item.id === route.params.propsId)[0];
  return (
    <View>
      <Text>{series.name}</Text>
      <Text>{series.like}</Text>
      <Text>{series.refer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieInfo;
