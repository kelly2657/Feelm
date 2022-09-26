import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ExploreRouletteMachine() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>룰렛 머신</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: 320,
    height: 320,
    backgroundColor: '#33ccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default ExploreRouletteMachine;
