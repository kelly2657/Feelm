import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoBack from '../../components/Header/GoBack';
import BeLike from '../../components/Header/BeLike';
import VerticalMovieList from '../../components/List/VerticalMovieList';

const SeriesData = require('../../json/Series.json').items;

/** 시리즈 정보 */
function SeriesInfo({route}) {
  const series = SeriesData.filter(item => item.id === route.params.propsId)[0];
  return (
    <>
      <ScreenHeader title={series.name} />
      <GoBack />
      <BeLike />
      <View style={styles.container}>
        <View style={styles.block}>
          <Text>{series.creator}에서 제공</Text>
          <Text>좋아요 {series.like}</Text>
          <Text>{series.refer.length}개 작품</Text>
          <Text>시리즈 설명 (커스텀 시리즈의 경우)</Text>
        </View>
        <View style={{...styles.block, flex: 1}}>
          <VerticalMovieList propsRefer={series.refer} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  block: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export default SeriesInfo;
