import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MySection({name, head, body, width, size = 20, color = '#777'}) {
  return (
    <View style={{...styles.container, width}}>
      {/* <View style={styles.sectionIcon}>
        <Icon name={name} color={color} size={size} />
      </View> */}
      <Text style={styles.sectionBody}>{body}</Text>
      <Text style={styles.sectionHead}>{head}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  sectionIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  sectionHead: {
    fontSize: 12,
  },
  sectionBody: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MySection;
