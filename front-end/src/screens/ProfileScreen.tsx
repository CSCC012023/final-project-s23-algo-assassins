import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProfileSetup, ProfileButtons} from '../screenComponents/ProfileSetup';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        <ProfileSetup
          name="Jerry Dang"
          accountName="j.d_splash"
          profileImage={require('../assets/images/levi_pfp.png')}
          workouts={70}
          followers={54}
          following={14}
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
    paddingRight: 20,
  },
  bioContainer: {
    paddingLeft: 20,
  },
});

export default ProfileScreen;
