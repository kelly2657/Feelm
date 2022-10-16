import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

function MyTabBacground({visibility}) {
  return (
    <View style={{...styles.container, opacity: visibility ? 1 : 0}}>
      <Image
        source={{
          uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23298a55526729.5988857400116.jpg',
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 240,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MyTabBacground;
