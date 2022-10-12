import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SearchScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.font}>셋팅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffcc33',
  },
  font: {
    color: 'black',
    fontWeight: '900',
  },
});

export default SearchScreen;
