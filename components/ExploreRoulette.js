import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ExploreRouletteMachine from './ExploreRouletteMachine';

function ExploreRoulette() {
  return (
    <View style={styles.view}>
      <ExploreRouletteMachine />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 400,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default ExploreRoulette;
