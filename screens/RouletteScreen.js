import React from 'react';
import {StyleSheet, View} from 'react-native';
import ExploreRoulette from '../components/ExploreRoulette';

function RouletteScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <ExploreRoulette />
      {/* <Text style={styles.font}>룰렛이래요 에베베</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    backgroundColor: 'cyan',
  },
  font: {
    color: 'black',
    fontWeight: '900',
  },
});

export default RouletteScreen;

// 이름 룰렛스크린 -> ExploreScreen이 좋을듯 탐색기능으로 간다면
// 탐색기능이랑 태그기능이랑 겹치는게 좀 있을수있음 이점주의
// 룰렛은 굳이 강조안해도됨 위쪽이나 옆에 조그맣게 넣어도되고 여기페이지에는 넷플릭스처럼 주제별로 쭈르륵뜨게?
// 유튜브나 이런것처럼 컴포넌트 종류를 다양화하면조을듯

// 그리고 그머냐 뭐 위에 x눌러서 끌수는있는데 처음오는사람 도와주는 튜토리얼같이
// 관심사찾기어려우세요?그럼도와드림 하고 관심사설정하는거괜찮을듯
// 관심있으면구독
