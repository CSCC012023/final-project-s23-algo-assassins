import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  useNavigation,
  NavigationProp,
  useIsFocused,
} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';
import {User} from '../types/user';
import {getUser} from '../utils/user';

export const ProfileSetup = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const isFocused = useIsFocused();

  const [user, setUser] = useState({});

  const [name, setName] = useState<string>('Loading...');
  const [accountName, setAccountName] = useState<string>('Loading...');
  const [profileImage, setProfileImage] = useState<any>(
    require('../assets/images/levi_pfp.png'),
  );
  const [biography, setBiography] = useState<string>('Loading...');
  const [workouts, setWorkouts] = useState<number>(0);
  const [followers, setFollowers] = useState<number>(0);
  const [following, setFollowing] = useState<number>(0);

  const queryUser = async () => {
    console.log('fetching user');
    const user_: User | undefined = await getUser();
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
  };

  useEffect(() => {
    if (isFocused) {
      console.log('called');
      queryUser().catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }, [isFocused]);

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>{accountName}</Text>
          <TouchableOpacity>
            <Feather name="chevron-down" style={styles.chevronDownIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerIcons}>
          <Feather name="bell" style={styles.headerIcon} />
          <TouchableOpacity onPress={() => goToSettings()}>
            <Feather name="settings" style={styles.headerIcon} />
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditProfile', {
              name: name,
              accountName: accountName,
              biography: biography,
              profileImage: profileImage,
            })
          }
          style={styles.editProfileButton}>
          <View style={styles.editProfileButtonContainer}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Badge</Text>
          <Image
            style={styles.badgeSize}
            source={require('../assets/images/immortal.png')}
          />
        </View>
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
    width: '100%',
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FB8E40',
  },
  editProfileButtonText: {
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
});
