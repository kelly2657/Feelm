import React, {useCallback} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import SettingOption from '../components/SettingOption';

const optionData = [
  {
    toggleText: '동영상 자동 재생',
    // toggleSubTitle: '5G/LTE 등의 환경에서는 데이터 요금이 발생할 수 있습니다.',
    toggleFunc: () => console.log('변경1'),
  },
  {
    toggleText: '청소년 보호',
    // toggleSubTitle: '청소년 보호합니다 앙기모띠',
    toggleFunc: () => console.log('변경2'),
  },
  {
    toggleText: '다크 모드',
    // toggleSubTitle: '편안한 환경에서 시청',
    toggleFunc: () => console.log('변경3'),
  },
];

// 0. UI 그냥 핸드폰설정처럼 해도 직관적인거같음 토글바는 굳이? 다크모드같이 직관적인데에만 써도될듯
// 1. 시작화면 어디서시작할지 설정하는거랑 순서변경도 가능할덧?
// 2. 그머냐 제작자credit이랑 캐시삭제는 맨밑으로 이동, 저거사진도 대충 앱사진놓고 제작자랑 버전넣는거로 옮겨놓기
// 3. 알림설정(구독한 항목에 대한 알?림)
// 4. 위에 헤더크기좀 줄이기

const ITEM_HEIGHT = 64;

function SettingScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={optionData}
        getItemLayout={useCallback(
          (_, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          }),
          [],
        )}
        renderItem={({item}) => (
          <SettingOption
            toggleText={item.toggleText}
            onValueChange={item.onValueChange}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingTitleText: {
    fontSize: 16,
  },
  flatList: {
    width: '100%',
    backgroundColor: 'white',
    flexGrow: 0,
  },
  screen: {
    paddingHorizontal: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: '#151515',
  },
});

export default SettingScreen;
