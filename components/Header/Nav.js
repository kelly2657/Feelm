import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Nav() {
  return (
    <View style={styles.container}>
      <Text style={styles.nav}>시리즈</Text>
      <Text style={styles.nav}>감독</Text>
      <Text style={styles.nav}>배우</Text>
      <Text style={styles.nav}>OTT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: 32,
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nav: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
});

export default Nav;
