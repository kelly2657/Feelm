import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

/* components */
import HorizontalMovieList from './HorizontalMovieList';

/* json */
const SeriesData = require('../../json/Series.json').items;

/** 상영작 */
function NowInTheatersSeries() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity style={styles.left}>
          <Text>상영작</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    backgroundColor: '#333',
    // zIndex: 1,
  },
  moreVert: {
    alignItems: 'flex-end',
    height: 32,
    justifyContent: 'center',
  },
  section: {
    flex: 1,
    // marginTop: -32,
    flexDirection: 'row',
  },
  left: {
    width: 160,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },

  title: {
    paddingBottom: 8,
  },
  row: {
    flexDirection: 'row',
  },

  info: {
    paddingRight: 8,
    alignItems: 'center',
  },
  large: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 12,
    color: '#777',
  },
  text: {
    color: 'black',
  },
});

export default NowInTheatersSeries;
