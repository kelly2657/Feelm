import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

function SettingOption({toggleText}) {
  const [state, setState] = useState(false);
  const containerStyle = {
    width: 64,
    height: 24,
    borderRadius: 25,
    padding: 5,
  };
  const circleStyle = {
    width: 20,
    height: 20,
    borderRadius: 20,
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.toggleText]}>{toggleText}</Text>
      <SwitchToggle
        switchOn={state}
        onPress={() => {
          console.log(`${state} => ${!state}`);
          setState(!state);
        }}
        containerStyle={containerStyle}
        circleStyle={circleStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SettingOption;
