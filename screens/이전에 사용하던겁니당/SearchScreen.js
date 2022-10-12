import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SearchScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.font}>셋팅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffcc33',
  },
  font: {
    color: 'black',
    fontWeight: '900',
  },
});

export default SearchScreen;

// 첨에 화면에는 뭐 실시간검색어라던가 대충 이런거보여주고
// 하나라도 검색하면 관련된 항목들이 텍스트 / 포스터로 쭈르르르륵 뜨게 만들수있을듯
// 크롤링?한 추가결과는 재깍재깍 실시간반영하기는 힘들고 검색버튼누르기 -> 추가검색 해야만 뜨게?
