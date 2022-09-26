import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import MyProfile from '../components/MyProfile';
import MyCategories from '../components/MyCategories';

function MyScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <MyProfile />
      <MyCategories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  font: {
    color: 'black',
    fontWeight: '900',
  },
});

export default MyScreen;
