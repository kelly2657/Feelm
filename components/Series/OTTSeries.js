import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
/* components */
import HorizontalMovieList from '../List/HorizontalMovieList';

/* json */
const images = {
  NETFLIX: require('../../assets/img/NETFLIX.png'),
  WATCHA: require('../../assets/img/WATCHA.png'),
};

/** OTT 기반 시리즈 */
function OTTSeries({propsOTTName}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.text}>오직</Text>
        {propsOTTName === 'NETFILX' ? (
          <Image
            style={styles.image}
            source={require('../../assets/img/NETFLIX.png')}
            resizeMode="stretch"
          />
        ) : (
          <Image
            style={styles.image}
            source={require('../../assets/img/WATCHA.png')}
            resizeMode="stretch"
          />
        )}
        <Text style={styles.text}>에서만</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#151515',
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  image: {
    width: 80,
    height: 24,
    margin: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
  },
});

export default OTTSeries;
