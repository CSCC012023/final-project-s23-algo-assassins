import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ProfileSetup, ProfileButtons} from '../screenComponents/ProfileHeader';
import { Image } from 'react-native-elements';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ProfileSetup
          name="Jerry Dang"
          accountName="j.d_splash"
          profileImage={require('../assets/images/levi_pfp.png')}
          workouts={70}
          followers={54}
          following={14}
          biography="Hello I am Jerry."
        />
        <ProfileButtons
          id={0}
          name=""
          accountName=""
          profileImage={require('../assets/images/levi_pfp.png')}
        />
      </View>
      <View style={styles.bioContainer}>
        <Text>Progress Data</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  bioContainer: {
    paddingLeft: 20,
  },
});

export default ProfileScreen;
