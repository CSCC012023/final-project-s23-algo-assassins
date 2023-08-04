import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {UserProfileHeader} from '../screenComponents/UserProfileHeader';
import {useIsFocused} from '@react-navigation/native';
import {getUser, getUserByEmail} from '../utils/user';
import {User} from '../types/user';
import {useRoute, RouteProp, NavigationProp} from '@react-navigation/native';

// type RootStackParamList = {
//   UserProfile: {navigationEmail: string};
// };

// type UserProfileNavigationProp = NavigationProp<
//   RootStackParamList,
//   'UserProfile'
// >;
// type UserProfileRouteProp = RouteProp<RootStackParamList, 'UserProfile'>;

// interface UserProfileProps {
//   navigation: UserProfileNavigationProp;
//   route: UserProfileRouteProp;
// }

interface UserProfileProps {
  route: {params: {email: string}};
}

const UserProfileScreen: React.FC<UserProfileProps> = ({route}) => {
  // Pass the navigation prop to access navigation functionalities
  const [user, setUser] = useState({});
  const isFocused = useIsFocused();
  const email: string = route.params.email;

  const queryUser = useCallback(async () => {
    // console.log(emailNavigate);
    // console.log('HELLO');
    console.log('fetching user');
    const user_: User | undefined = await getUserByEmail(email);
    if (user_ !== undefined) {
      console.log('user found');
      setUser(user_);
    }
  }, [email]);

  useEffect(() => {
    if (isFocused) {
      console.log('called');
      queryUser().catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }, [isFocused, queryUser]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <UserProfileHeader email={email} />
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
