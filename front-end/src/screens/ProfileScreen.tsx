import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ProfileSetup} from '../screenComponents/ProfileHeader';
import {Image} from 'react-native-elements';
import {getUser} from '../utils/user';
import {User} from '../types/user';

interface ProfileScreenProps {
  route: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const queryUser = async () => {
      const user_: User | undefined = await getUser();
      if (user_ !== undefined) {
        setUser(user_);
      }
    };

    queryUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ProfileSetup />
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
