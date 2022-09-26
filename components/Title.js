import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function Title() {
  return (
    <View style={styles.titleSection}>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.titleFont}>Feelm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: 'white',
  },
  titleFont: {
    color: 'red',
    fontSize: 24,
    fontWeight: '900',
    fontFamily: 'NotoSansKR=Black',
  },
});

export default Title;
