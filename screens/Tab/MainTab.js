import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* Tab */
import MovieTab from './MovieTab';
import SeriesTab from './SeriesTab';
import MyTab from './MyTab';

/* components */
import HeaderRight from '../../components/HeaderRight';

const Tab = createBottomTabNavigator();

function MainTab() {
  const screenOptions = {
    tabBarActiveTintColor: '#4287f5',
    tabBarInactiveTintColor: '#333',
    // tabBarLabelStyle: 'beside-icon',
    tabBarLabelStyle: {
      fontSize: 12,
    },
    // tabBarShowLabel: false,
    tabBarStyle: {
      height: 40,
      borderTopWidth: 1,
      // backgroundColor: '#fafafa',
    },
  };

  const headerOptions = (headerTitle, iconName, isMain) => ({
    headerTitle,
    headerTitleStyle: {
      color: isMain ? 'white' : '#4287f5',
      fontSize: 24,
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: '#fafafa',
      borderBottomWidth: 1,
    },
    headerTransparent: isMain ? true : false,
    headerRight: () => (
      <HeaderRight propsColor={isMain ? 'white' : '#4287f5'} />
    ),
    tabBarIcon: ({color, size}) => (
      <Icon name={iconName} color={color} size={size} />
    ),
    // headerShown: false,
  });

  return (
    <Tab.Navigator initialRouteName="시리즈" screenOptions={screenOptions}>
      <Tab.Screen
        name="영화"
        component={MovieTab}
        options={headerOptions('MOVIE', 'movie', true)}
      />
      <Tab.Screen
        name="시리즈"
        component={SeriesTab}
        options={headerOptions('SERIES', 'style')}
      />
      <Tab.Screen
        name="MY"
        component={MyTab} //
        options={headerOptions('MY', 'person')}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
