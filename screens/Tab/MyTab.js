/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MyHeader from '../../components/Header/MyHeader';
import MyTabBacground from '../../components/My/MyTabBackground';
import Profile from '../../components/My/Profile';

import MenuSummary from '../../components/My/MenuSummary';
import MenuLike from '../../components/My/MenuLike';

import TutorialInterest from '../../components/My/TutorialInterest';
import MenuWatched from '../../components/My/MenuWatched';
import Menu from '../../components/My/Menu';

function MyTab() {
  const navigation = useNavigation();
  const name = '정말고마워요';
  const [isTop, setIsTop] = useState(true);
  const onScroll = e => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    contentOffset.y < 80 ? setIsTop(true) : setIsTop(false);
  };
  return (
    <>
      <MyHeader visibility={isTop ? false : true} name={name} />
      <ScrollView style={styles.container} onScroll={onScroll}>
        <MyTabBacground visibility={isTop ? true : false} />

        <Profile visibility={isTop ? true : false} name={name} />
        <TutorialInterest message="Feelm이 처음이라면 관심사를 설정해 보세요." />
        {/* <Menu />
        <Menu /> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
export default MyTab;
