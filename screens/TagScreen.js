import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import TagNav from '../components/TagNav';

function TagScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <TagNav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'grey',
  },
  font: {
    color: 'black',
    fontWeight: '900',
  },
});

export default TagScreen;

// 중점: 탐색이랑 안겹쳐야댐. 여차하면 여기에 커뮤니티 넣어도 나쁘진 않을거같음. 근데 커뮤니티가 막 직접적인거아니여도
// 다른사람들 평가뜨기 커스텀태그뜨기 재생목록뜨기 같은거? 이거좀어려운 사안인거같음
// 근데 밑에 메뉴 3개는 흉함(허전함) 4개가 밸런스딱맞는데 넣을게없ㄴ
