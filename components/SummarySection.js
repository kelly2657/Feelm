import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SummarySection({name, color = '#777', size = 20, head, body, width}) {
  return (
    <View style={{...styles.container, width}}>
      <View style={styles.summaryIcon}>
        <Icon name={name} color={color} size={size} />
      </View>
      <Text style={styles.summaryHead}>{head}</Text>
      <Text style={styles.summaryBody}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  summaryIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  summaryHead: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryBody: {
    fontSize: 12,
  },
});

export default SummarySection;
