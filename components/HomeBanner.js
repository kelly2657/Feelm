import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function HomeBanner() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>홈 배너</Text>
      <Text style={styles.text}>
        영화관련뉴스라던가 뭐 앱자체의 이벤트라던가 이런거?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 240,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default HomeBanner;
