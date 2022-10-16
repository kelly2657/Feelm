import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Nav() {
  return (
    <View style={styles.container}>
      <Text style={{...styles.nav, fontSize: 32}}>모두</Text>
      <Text style={styles.nav}>시리즈</Text>
      <Text style={styles.nav}>감독</Text>
      <Text style={styles.nav}>배우</Text>
      <Text style={styles.nav}>OTT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 64,
    marginHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
  },
  nav: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
});

export default Nav;
