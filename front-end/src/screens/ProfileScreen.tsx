import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ProfileSetup} from '../screenComponents/ProfileHeader';
import {Image} from 'react-native-elements';

interface ProfileScreenProps {
  route: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({route}) => {
  const {name, accountName, biography, profileImage} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ProfileSetup
          name={name}
          accountName={accountName}
          profileImage={profileImage}
          workouts={70}
          followers={54}
          following={14}
          biography={biography}
        />
        {/* <ProfileButtons
          id={0}
          name=""
          accountName=""
          profileImage={require('../assets/images/levi_pfp.png')}
        /> */}
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
