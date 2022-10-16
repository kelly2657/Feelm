import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ScreenHeader({visibility = true, title}) {
  if (visibility) {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 64,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 36,
    paddingHorizontal: 24,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
});

export default ScreenHeader;
