import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import HomeBanner from '../../components/HomeBanner';
import HomeCarousel from '../../components/HomeCarousel';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HomeBanner />
      <HomeCarousel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default HomeScreen;
