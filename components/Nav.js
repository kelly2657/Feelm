import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Nav({navigation}) {
  return (
    <View style={styles.view}>
      <View style={styles.navLeft}>
        <Text style={styles.navTitle}>gd</Text>
      </View>

      <View style={styles.navRight}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate('Search')}>
          <Icon name="search" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate('Search')}>
          <Icon name="settings" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 64,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  navLeft: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  navTitle: {
    color: '#4287f5',
    fontSize: 24,
    fontWeight: 'bold',
  },

  navRight: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
  },
  touchableOpacity: {
    width: 40,
    height: 40,
    backgroundColor: 'pink',
  },
  icon: {
    color: '#4287f5',
    fontSize: 24,
    padding: 8,
  },
});

export default Nav;
