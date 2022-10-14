/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import HorizontalMovieList from '../../components/List/HorizontalMovieList';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TransparentHeader from '../../components/Header/TransparentHeader';

const MovieData = require('../../json/Movie.json').items;
const SeriesData = require('../../json/Series.json').items;

/**
 * 시리즈 정보
 * @할것 가독성 향상을 위해 StatusBar을 상황에 따라 light-content 또는 dark-content로 설정하는 기능을 추가해야 합니다.
 */
function SeriesInfo({route}) {
  const series = SeriesData.filter(item => item.id === route.params.propsId)[0];
  return (
    <>
      <TransparentHeader />
      <ScrollView style={styles.container}>
        <View
          style={{
            height: 240,
            backgroundColor: '#4287f5',
          }}
        />
        <View
          style={{
            borderRadius: 8,
            elevation: 5,
            height: 64,
            width: '70%',
            marginHorizontal: '15%',
            marginTop: -48,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            <Text>{series.name}</Text>
          </Text>
        </View>
        <View
          style={{
            marginTop: -12,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 32,
              height: 32,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 5,
              backgroundColor: 'white',
              borderRadius: 16,
              zIndex: 1,
            }}>
            <Icon name="favorite" color="red" size={16} />
          </View>
        </View>

        <View
          style={{
            paddingTop: 16,
            paddingHorizontal: 8,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              paddingHorizontal: 8,
            }}>
            <Text>{series.creator}에서 제공</Text>
            <Text>좋아요 {series.like}</Text>
            <Text>{series.refer.length}개 작품</Text>
            <Text>시리즈 설명(커스텀 시리즈의 경우)</Text>
            <View style={styles.horizontalSeparator} />
          </View>

          <HorizontalMovieList propsRefer={series.refer} />
          <HorizontalMovieList propsRefer={series.refer} />
          <HorizontalMovieList propsRefer={series.refer} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  repImageBefore: {
    backgroundColor: '#151515',
  },
  repImage: {
    width: '100%',
    height: 320,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 16,
    opacity: 0.5,
  },
  block: {
    width: '70%',
    height: 64,
    marginHorizontal: '15%',
    // marginTop: -32,
    marginBottom: 16,
    elevation: 5,
    // borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.5,
  },
  name: {
    width: '75%',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  likeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  verticalSeparator: {
    width: 1,
    height: 40,
    marginHorizontal: 8,
    backgroundColor: '#ccc',
  },
  horizontalSeparator: {
    width: '100%',
    height: 1,
    marginVertical: 8,
    backgroundColor: '#ccc',
  },
});

export default SeriesInfo;
