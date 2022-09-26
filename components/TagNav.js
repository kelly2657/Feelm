import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

function TagNav() {
  return (
    <View style={styles.view}>
      <Pressable style={styles.pressable}>
        <Text style={styles.pressableText}>스릴러</Text>
      </Pressable>
      <Pressable style={styles.pressable}>
        <Text style={styles.pressableText}>2021 국내개봉</Text>
      </Pressable>
      <Pressable style={styles.pressable}>
        <Text style={styles.pressableText}>넷플릭스</Text>
      </Pressable>
      <Pressable style={[styles.pressable, styles.custom]}>
        <Text style={styles.pressableText}>킬링타임</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 80,
    backgroundColor: '#151515',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  pressable: {
    marginRight: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    fontSize: 24,
    backgroundColor: 'white',
  },
  custom: {
    backgroundColor: '#ffcc33',
  },
  pressableText: {
    color: 'black',
  },
});

export default TagNav;
