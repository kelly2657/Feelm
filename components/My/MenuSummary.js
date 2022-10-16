import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MySection from './MySection';

function MenuSummary({}) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <MySection name="done" head="인증됨" width="33%" />
        <MySection name="notifications" head="알림" width="34%" />
        <MySection name="settings" head="설정" width="33%" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 96,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -16,
    marginHorizontal: '40%',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

export default MenuSummary;
