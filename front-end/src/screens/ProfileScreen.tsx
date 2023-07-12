import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ProfileSetup, ProfileButtons} from '../screenComponents/ProfileSetup';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.content}>
      <ProfileSetup
        name="Jerry Dang"
        accountName="j.d_splash"
        profileImage={require('../assets/images/levi_pfp.png')}
        workouts={70}
        followers={24}
        following={14}
        biography={''}
      />
      <ProfileButtons
        id={0}
        name=""
        accountName=""
        profileImage={require('../assets/images/levi_pfp.png')}
      />
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
