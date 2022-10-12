import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function HeaderRight({propsColor}) {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate('Search')}>
        <Icon
          name="search" //
          style={{...styles.icon, color: propsColor}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate('Alert')}>
        <Icon
          name="notifications"
          style={{...styles.icon, color: propsColor}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate('Setting')}>
        <Icon
          name="settings" //
          style={{...styles.icon, color: propsColor}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  touchableOpacity: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  icon: {
    // color: '#4287f5',
    fontSize: 24,
  },
});

export default HeaderRight;
