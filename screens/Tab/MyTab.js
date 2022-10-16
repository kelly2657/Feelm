import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import MyHeader from '../../components/Header/MyHeader';
import MyTabBacground from '../../components/My/MyTabBackground';
import Profile from '../../components/My/Profile';
import TutorialInterest from '../../components/My/TutorialInterest';
import Menu from '../../components/My/Menu';
import MenuSummary from '../../components/My/MenuSummary';
import MenuLike from '../../components/My/MenuLike';
import MenuWatched from '../../components/My/MenuWatched';

function MyTab() {
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
      <MyHeader visibility={isTop ? false : true} title={name} />
      <ScrollView style={styles.container} onScroll={onScroll}>
        <MyTabBacground visibility={isTop ? true : false} />
        <Profile visibility={isTop ? true : false} name={name} />
        <TutorialInterest message="Feelm이 처음이라면 관심사를 설정해 보세요." />
        <View style={{height: 320}} />
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
