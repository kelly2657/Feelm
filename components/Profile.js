import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageWrapper}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://b31l.github.io/assets/img/profile.png'}}
        />
      </View>
      <View style={styles.profileImageEdit}>
        <Icon name="edit" color="#777" size={16} />
      </View>
      <View style={styles.profileNameWrapper}>
        <Text style={styles.profileName}>정말고마워요</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    marginTop: 80,
    backgroundColor: 'white',
  },
  profileImageWrapper: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 60,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  profileImageEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    marginTop: -12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#fafafa',
  },
  profileNameWrapper: {
    height: 48,
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
