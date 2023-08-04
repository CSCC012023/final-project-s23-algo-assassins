import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  useNavigation,
  NavigationProp,
  useIsFocused,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {RootStackParamList} from '../types/navigation';
import {User} from '../types/user';
import {getUser, getUserByEmail} from '../utils/user';

// interface UserProfileHeaderProps {
//   navigation: any;
//   route: any;
// }

export const UserProfileHeader = ({email}: {email: string}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const isFocused = useIsFocused();

  const [user, setUser]: any = useState({});
  //   const {emailNavigate} = route.params;

  const [name, setName] = useState<string>('Loading...');
  const [accountName, setAccountName] = useState<string>('Loading...');
  const [profileImage, setProfileImage] = useState<any>(
    require('../assets/images/levi_pfp.png'),
  );
  const [biography, setBiography] = useState<string>('Loading...');
  const [workouts, setWorkouts] = useState<number>(0);
  const [followers, setFollowers] = useState<number>(0);
  const [following, setFollowing] = useState<number>(0);

  const [isFollowed, setIsFollowed] = useState(false);

  const [userEmail, setUserEmail] = useState('');

  // Function to get the currently logged-in user's email
  const getCurrentUserEmail = async () => {
    // Replace with localhost
    fetch('http://localhost:3000/api/users/me')
      .then(response => response.json())
      .then(data => {
        if (data.email) {
          setUserEmail(data.email);
        }
      })
      .catch(error => console.error('Error fetching user:', error));
  };
  useEffect(() => {
    getCurrentUserEmail();
  }, []);

  const handleFollowToggle = () => {
    if (isFollowed) {
      // Show confirmation alert when unfollowing
      Alert.alert(
        'Unfollow User',
        'Are you sure you want to unfollow this user?',
        [
          {text: 'Cancel', style: 'cancel'},
          {
            text: 'Unfollow',
            style: 'destructive',
            onPress: () => {
              handleUnfollow(email);
              setIsFollowed(false);
              setFollowers(prevFollowers => prevFollowers - 1);
            },
          },
        ],
        {cancelable: true},
      );
    } else {
      handleFollow(email);
      setIsFollowed(true);
      setFollowers(prevFollowers => prevFollowers + 1);
    }
  };

  const handleFollow = (friend: any) => {
    // Replace localhost
    fetch('http://localhost:3000/api/users/create/follow', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followed_email: friend, // The friend's email to follow
        follower_email: userEmail, // The currently logged-in user's email
      }),
    })
      .then(response => response.json())
      .then(data => {
        // successful follow
        console.log('Followed', friend);
      })
      .catch(error => {
        // Handle error scenarios
        console.error('Error following friend:', error);
      });
  };

  const handleUnfollow = (friend: any) => {
    // Replace
    fetch('http://localhost:3000/api/users/remove/follow', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followed_email: friend, // The friend's email to unfollow
        follower_email: userEmail, // The currently logged-in user's email
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response for successful unfollow
        console.log('Unfollowed', friend);
      })
      .catch(error => {
        // Handle error scenarios
        console.error('Error unfollowing friend:', error);
      });
  };

  const queryUser = useCallback(async () => {
    console.log('fetching user');
    // console.log('HI');
    // console.log(email);
    const user_: User | undefined = await getUserByEmail(email);
    if (user_ !== undefined) {
      console.log('user found');
      setUser(user_);
      setName(user_.name);
      setAccountName(user_.username);
      setProfileImage(user_.img);
      setBiography(user_.biography ? user_.biography : '');
      // setWorkouts(user_.workouts ? user_.workouts : 0);
      setFollowers(user_.followers ? user_.followers.length : 0);
      setFollowing(user_.following ? user_.following.length : 0);
    }
  }, [email]);

  useEffect(() => {
    // Function to check if the current user is followed
    const checkFollowStatus = () => {
      const isUserFollowed = user.followers.includes(userEmail);
      setIsFollowed(isUserFollowed);
    };
    const callQueryUser = async () => {
      if (isFocused) {
        console.log(isFollowed);
        await queryUser().catch(error => {
          console.error('Error fetching user data:', error);
        });
        checkFollowStatus(); // Check follow status after fetching user data
      }
    };
    callQueryUser();
  }, [isFocused, queryUser, userEmail, user.followers, followers, isFollowed]);

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.accountInfo}>
          <TouchableOpacity onPress={goBack}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <Text style={styles.accountName}>{accountName}</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Feather name="bell" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToSettings()}>
            <Entypo name="dots-three-horizontal" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.profileImageContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.profileName}>{name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoCount}>{workouts}</Text>
            <Text>Workouts</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoCount}>{followers}</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoCount}>{following}</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{biography}</Text>
      </View>
      <View style={styles.editProfileContainer}>
        <TouchableOpacity onPress={handleFollowToggle}>
          <View
            style={[
              styles.editProfileButtonContainer,
              {backgroundColor: isFollowed ? '#D9D9D9' : '#3761F8'}, // Change background color based on state
              {},
            ]}>
            <Text
              style={[
                styles.editProfileButtonText,
                {color: isFollowed ? 'black' : 'white'}, // Change text color based on state
              ]}>
              {isFollowed ? 'Followed' : 'Follow'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.messageButtonContainer}>
            <Text style={styles.messageButtonText}>Message</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter-Light',
    // paddingLeft: 15,
  },
  chevronDownIcon: {
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 5,
    opacity: 0.5,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 25,
    padding: 10,
    // paddingRight: 15,
    color: '#FB8E40',
    opacity: 0.7,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    resizeMode: 'cover',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  profileName: {
    paddingVertical: 5,
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  infoItem: {
    alignItems: 'center',
    padding: 13,
  },
  infoCount: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Inter-Regular',
  },
  bioContainer: {
    alignItems: 'baseline',
  },
  bioText: {
    fontFamily: 'Inter-Regular',
    marginHorizontal: 5,
  },
  editProfileContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  editProfileButton: {
    width: '100%',
  },
  editProfileButtonContainer: {
    marginTop: 10,
    marginRight: 10,
    width: 130,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3761F8',
    // opacity: 0.5,
  },
  messageButtonContainer: {
    marginTop: 10,
    marginRight: 10,
    width: 130,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FB8E40',
    opacity: 0.7,
  },
  editProfileButtonText: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
    color: 'white',
    letterSpacing: 1,
    opacity: 0.8,
  },
  messageButtonText: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
    letterSpacing: 1,
    opacity: 0.5,
  },
  badgeContainer: {
    paddingLeft: 70,
    alignItems: 'center',
  },
  badgeSize: {
    width: 32,
    height: 32,
  },
  badgeText: {
    opacity: 0.6,
    fontFamily: 'Inter-Regular',
  },
  closeIcon: {
    fontSize: 28,
    opacity: 0.7,
    paddingRight: 14,
  },
});
