import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ProfileSetup, ProfileButtons} from '../screenComponents/ProfileHeader';

const ProfileScreen = () => {
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
          biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  content: {
    width: '100%',
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
  },
  bioContainer: {
    paddingLeft: 20,
  },
});

export default ProfileScreen;
