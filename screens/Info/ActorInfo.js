/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import HorizontalMovieList from '../../components/Series/HorizontalMovieList';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TransparentHeader from '../../components/Header/TransparentHeader';

const MovieData = require('../../json/Movie.json').items;
const ActorData = require('../../json/Actor.json').items;

/**
 * 시리즈 정보
 * @할것 가독성 향상을 위해 StatusBar을 상황에 따라 light-content 또는 dark-content로 설정하는 기능을 추가해야 합니다.
 */
function ActorInfo({route}) {
  const actor = ActorData.filter(item => item.id === route.params.propsId)[0];
  return (
    <>
      <TransparentHeader backgroundColor="orange" />
      <ScrollView style={styles.container}>
        <View
          style={{
            height: 240,
            backgroundColor: 'orange',
          }}
        />
        <View
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 80,
              elevation: 5,
              width: 128,
              height: 128,
              marginTop: -96,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 80,
                // elevation: 5,
              }}
              source={{uri: actor.imageURL}}
            />
          </View>
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
            marginTop: 16,
            paddingHorizontal: 8,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              paddingHorizontal: 8,
            }}>
            <Text>{actor.refer.length}개 작품</Text>
            <Text>배우 어쩌구 저쩌구</Text>
            <View style={styles.horizontalSeparator} />
          </View>

          <HorizontalMovieList propsRefer={actor.refer} />
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
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ActorInfo;
