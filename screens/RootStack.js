import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Tab */
import MainTab from './Tab/MainTab';

/* Info */
import ActorInfo from './Info/ActorInfo';
import DirectorInfo from './Info/DirectorInfo';
import MovieInfo from './Info/MovieInfo';
import SeriesInfo from './Info/SeriesInfo';

/* Screen */
import AlertScreen from './AlertScreen';
import LoadingScreen from './LoadingScreen';
import SearchScreen from './SearchScreen';
import SettingScreen from './SettingScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  /* 헤더 옵션*/
  const headerOptions = {
    headerTitleStyle: {
      color: '#4287f5',
      fontSize: 24,
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 64,
      borderBottomWidth: 1,
      backGroundColor: 'black',
    },
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Alert"
        component={AlertScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={headerOptions}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={headerOptions}
      />

      <Stack.Screen
        name="ActorInfo"
        component={ActorInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DirectorInfo"
        component={DirectorInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieInfo"
        component={MovieInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SeriesInfo"
        component={SeriesInfo}
        options={{headerShown: false}} // 이렇게하면 아무 버튼도 없음. 위처럼 하면 버튼 생기니까 타이틀 없애던가 해야댐
      />
    </Stack.Navigator>
  );
}

export default RootStack;
