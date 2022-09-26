import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function MyProfile() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        프로필: 내 정보랑 구독정보 이런거 볼수있음
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 240,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default MyProfile;
