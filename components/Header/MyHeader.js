import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MyHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.wrapper}>
        <Icon
          name="notifications"
          size={24}
          color="#151515"
          onPress={() => navigation.navigate('Alert')}
        />
      </View>
      <View style={styles.wrapper}>
        <Icon
          name="settings"
          size={24}
          color="#151515"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 48,
    marginTop: 48,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  wrapper: {
    width: 32,
    height: 32,
    marginLeft: 8,
    borderRadius: 16,
    // backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyHeader;
