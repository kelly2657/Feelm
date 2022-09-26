import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function MyCategories() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        이거는 내가 생성한 목록들 볼수있음 각각은 공유설정도되고 대충
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default MyCategories;
