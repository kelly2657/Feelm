import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

/* components */
import HorizontalMovieList from '../List/HorizontalMovieList';

/* json */
const SeriesData = require('../../json/Series.json').items;
const DirectorData = require('../../json/Director.json').items;

/** 감독 기반 시리즈 */
function DirectorSeries({propsId}) {
  const navigation = useNavigation();
  const director = DirectorData.filter(item => item.id === propsId)[0];
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.section}>
        <Text style={[styles.text, styles.large]}>{director.name}</Text>
        <Image style={styles.image} source={{uri: director.imageURL}} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginHorizontal: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#4287f5',
    elevation: 8,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default DirectorSeries;
