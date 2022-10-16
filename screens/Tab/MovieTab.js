import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import ScreenHeader from '../../components/Header/ScreenHeader';

function MovieTab() {
  return (
    <>
      <ScreenHeader title="영화" />
      <ScrollView style={styles.container}>
        <Text>ㅎㅇ</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
});

export default MovieTab;
