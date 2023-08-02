import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ProfileSetup} from '../screenComponents/ProfileHeader';
import {useIsFocused} from '@react-navigation/native';
import {getUser} from '../utils/user';
import {User} from '../types/user';

interface ProfileScreenProps {
  route: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const [user, setUser] = useState({});
  const isFocused = useIsFocused();

  const queryUser = async () => {
    console.log('fetching user');
    const user_: User | undefined = await getUser();
    if (user_ !== undefined) {
      console.log('user found');
      setUser(user_);
    }
  };

  useEffect(() => {
    if (isFocused) {
      console.log('called');
      queryUser().catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ProfileSetup />
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
