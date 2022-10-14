import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SummarySection from './SummarySection';

function Summary({}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name="favorite" color="#4287f5" size={24} />
      </View>

      <View style={styles.section}>
        <SummarySection name="movie" head="영화" body={36} width="25%" />
        <SummarySection name="style" head="시리즈" body={24} width="25%" />
        <SummarySection name="mood" head="배우" body={12} width="25%" />
        <SummarySection name="videocam" head="감독" body={5} width="25%" />
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
    marginTop: -8,
  },
});

export default Summary;
