import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {UserProfileSetup} from '../screenComponents/UserProfileHeader';
import {useIsFocused} from '@react-navigation/native';
import {getUser} from '../utils/user';
import {User} from '../types/user';

interface ProfileScreenProps {
  navigation: any;
}

const UserProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  // Pass the navigation prop to access navigation functionalities
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
        <UserProfileSetup />
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
  button: {
    backgroundColor: '#007AFF',
    width: '35%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default UserProfileScreen;
