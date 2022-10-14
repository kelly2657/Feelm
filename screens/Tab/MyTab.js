/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MyHeader from '../../components/Header/MyHeader';
import Profile from '../../components/Profile';
import Summary from '../../components/Summary';
import Watched from '../../components/Watched';

function MyTab() {
  return (
    <>
      <ScrollView style={styles.container}>
        <MyHeader />
        <Profile />
        <Summary />
        <Summary />
        <Watched />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
});
export default MyTab;
