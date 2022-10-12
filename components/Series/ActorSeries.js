import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

/* components */
import HorizontalMovieList from './HorizontalMovieList';

/* json */
const SeriesData = require('../../json/Series.json').items;
const ActorData = require('../../json/Actor.json').items;

/** 배우 기반 시리즈 */
function ActorSeries({propsId}) {
  const navigation = useNavigation();
  const actor = ActorData.filter(item => item.id === propsId)[0];
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ActorInfo', {propsId: propsId})}>
      <View style={styles.section}>
        <Text style={[styles.text, styles.large]}>{actor.name}</Text>
        <Image style={styles.image} source={{uri: actor.imageURL}} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    marginHorizontal: 8,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fafafa',
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

export default ActorSeries;
