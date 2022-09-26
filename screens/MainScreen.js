import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* Screens */
import HomeScreen from './HomeScreen';
import RouletteScreen from './RouletteScreen';
import MyScreen from './MyScreen';
import HeaderRight from '../components/HeaderRight';

const Tab = createBottomTabNavigator();

function MainScreen() {
  const tabBarOptions = {
    tabBarActiveTintColor: '#4287f5',
    tabBarInactiveTintColor: '#333',
    tabBarLabelPosition: 'beside-icon',
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarStyle: {
      height: 48,
      borderTopWidth: 0,
      backgroundColor: '#fafafa',
    },
  };

  const headerOptions = {
    headerTitle: 'FEELM',
    headerTitleStyle: {
      color: '#4287f5',
      fontSize: 24,
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 64,
      borderBottomWidth: 1,
    },
    headerRight: () => <HeaderRight />,
  };

  const screenOptions = (title, iconName) => ({
    ...headerOptions,
    title,
    tabBarIcon: ({color, size}) => (
      <Icon name={iconName} color={color} size={size} />
    ),
    // headerShown: false,
  });

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions('영화', 'movie')}
      />
      <Tab.Screen
        name="Roulette"
        component={RouletteScreen}
        options={screenOptions('시리즈', 'style')}
      />
      {/* <Tab.Screen
        name="Tag"
        component={TagScreen}
        options={screenOptions('태그', 'tag')}
      /> */}
      {/* <Tab.Screen
        name="Mypage"
        component={MyScreen}
        options={screenOptions('MY', 'folder')}
      /> */}
    </Tab.Navigator>
  );
}

export default MainScreen;
