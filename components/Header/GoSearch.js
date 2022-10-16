import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function GoAlertButton({}) {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Icon
        name="notifications"
        size={24}
        color="#151515"
        onPress={() => navigation.navigate('Alert')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 48,

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  wrapper: {
    position: 'absolute',
    top: 80,
    right: 32,
    zIndex: 1,
    width: 32,
    height: 32,
    // marginTop: 48,
    // marginLeft: 8,
    borderRadius: 16,
    // backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoAlertButton;
