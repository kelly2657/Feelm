/* Packages */
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Screens */
import MainScreen from './screens/MainScreen';
import MyScreen from './screens/MyScreen';
import SearchScreen from './screens/SearchScreen';
import SettingScreen from './screens/SettingScreen';

/* Navigator */
const Stack = createNativeStackNavigator();

/* StatusBar */
StatusBar.setBackgroundColor('transparent');
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

function App() {
  const headerOptions = {
    headerShown: false,
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
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
          name="My"
          component={MyScreen} //
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
