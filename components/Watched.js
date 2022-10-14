import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HorizontalMovieList from './List/HorizontalMovieList';

function Watched({}) {
  const reference = [1, 2, 3, 4, 5, 6]; // 테스트 인자 데이터
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name="visibility" color="#4287f5" size={24} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{reference.length}개 작품</Text>
      </View>

      <View style={styles.section}>
        <HorizontalMovieList
          propsRefer={reference}
          width={80}
          height={120}
          margin={[0, 8, 0, 8]}
          padding={[4, 0]}
          borderRadius={8}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 192,
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
  title: {
    justifyContent: 'center',
    height: 32,
  },
  titleText: {
    // marginTop: 8,
    fontSize: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 144,
    marginTop: -8,
  },
});

export default Watched;
