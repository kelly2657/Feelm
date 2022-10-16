import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExploreTab from './Tab/ExploreTab';
import MovieTab from './Tab/MovieTab';
import SeriesTab from './Tab/SeriesTab';
import MyTab from './Tab/MyTab';

const Tab = createBottomTabNavigator();

function MainTab() {
  const screenOptions = {
    tabBarActiveTintColor: '#4287f5',
    tabBarInactiveTintColor: '#333',
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarStyle: {
      height: 40,
      borderTopWidth: 1,
    },
  };

  const headerOptions = iconName => ({
    headerShown: false,
    tabBarIcon: ({color, size}) => (
      <Icon name={iconName} color={color} size={size} />
    ),
  });

  return (
    <Tab.Navigator initialRouteName="탐색" screenOptions={screenOptions}>
      <Tab.Screen
        name="탐색"
        component={ExploreTab}
        options={headerOptions('explore')}
      />
      <Tab.Screen
        name="영화"
        component={MovieTab}
        options={headerOptions('movie')}
      />
      <Tab.Screen
        name="시리즈"
        component={SeriesTab}
        options={headerOptions('style')}
      />
      <Tab.Screen
        name="MY"
        component={MyTab} //
        options={headerOptions('person')}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
