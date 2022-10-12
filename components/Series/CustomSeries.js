import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

/* components */
import HorizontalMovieList from './HorizontalMovieList';

/* json */
const SeriesData = require('../../json/Series.json').items;

/**
 * 특정 사용자가 제공하는 커스텀 시리즈
 * @param {number} propsId 시리즈 ID
 */
function CustomSeries({propsId}) {
  const navigation = useNavigation();
  const series = SeriesData.filter(item => item.id === propsId)[0];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('SeriesInfo', {propsId: propsId})}>
      <View style={styles.left}>
        <View style={styles.title}>
          <Text style={[styles.text, styles.large]}>{series.name}</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.row, styles.info]}>
            <Icon name="favorite" color="red" size={16} />
            <Text style={styles.text}>{series.like}</Text>
          </View>
          <Text style={styles.text}>영화 {series.refer.length}개</Text>
        </View>
        <Text style={[styles.text, styles.small]}>Feelm에서 제공</Text>
      </View>

      <View style={styles.right}>
        <HorizontalMovieList propsRefer={series.refer} limit={2} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 240,
    marginHorizontal: 8,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fafafa',
    elevation: 8,
  },
  left: {
    width: 160,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
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

export default CustomSeries;
