import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function HomeCarousel() {
  const movieData = require('../movieData.json').items;

  const renderItem = ({item}) => (
    <View style={styles.movieBox}>
      <View style={styles.movieUl}>
        <Image style={styles.movieLi} source={{uri: item.posterImageURL}} />
      </View>
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieYear}>({item.year})</Text>
        <Text style={styles.movieTitle}>{item.id}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>상영작</Text> */}
      <FlatList
        data={movieData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={true}
        // onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
        // snapToOffsets={snapToOffsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    height: 500,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  movieBox: {
    width: windowWidth - 32,
    height: 300,

    flexDirection: 'row',
    backgroundColor: '#151515',
  },

  movieUl: {
    width: 200,
  },
  movieLi: {
    width: '100%',
    height: '100%',
  },
  movieInfo: {
    padding: 16,
  },
  movieTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  movieYear: {
    color: '#999',
  },
});

export default HomeCarousel;
