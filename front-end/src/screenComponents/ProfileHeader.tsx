import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {ImageSourcePropType} from 'react-native';
import {RootStackParamList} from '../types/navigation';

interface ProfileSetupProps {
  name: string;
  accountName?: string;
  profileImage: ImageSourcePropType;
  workouts: number;
  followers: number;
  following: number;
  biography: string;
}

export const ProfileSetup: React.FC<ProfileSetupProps> = ({
  name,
  accountName,
  profileImage,
  workouts,
  followers,
  following,
  biography,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const goToSettings = () => {
    navigation.navigate('Settings');
  };
  return (
    <View>
      {accountName ? (
        <View style={styles.header}>
          <View style={styles.accountInfo}>
            <Text style={styles.accountName}>{accountName}</Text>
            <Feather name="chevron-down" style={styles.chevronDownIcon} />
          </View>
          <View style={styles.headerIcons}>
            <Feather name="bell" style={styles.headerIcon} />
            <TouchableOpacity onPress={() => goToSettings()}>
              <Feather name="settings" style={styles.headerIcon} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
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
    </View>
  );
};

interface ProfileButtonsProps {
  id: number;
  name: string;
  accountName: string;
  profileImage: ImageSourcePropType;
}

export const ProfileButtons: React.FC<ProfileButtonsProps> = ({
  id,
  name,
  accountName,
  profileImage,
}) => {
  const navigation = useNavigation();
  // const [follow, setFollow] = useState<boolean>(false);

  return (
    <View style={styles.editProfileContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.push('EditProfile', {
            name: name,
            accountName: accountName,
            profileImage: profileImage,
          })
        }
        style={styles.editProfileButton}>
        <View style={styles.editProfileButtonContainer}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
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
    paddingLeft: 15,
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
    paddingRight: 15,
    color: '#FB8E40',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
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
    padding: 10,
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
    width: '28%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
    backgroundColor: 'rgba(251, 142, 64, 0.15)',
  },
  editProfileButtonText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    letterSpacing: 1,
    opacity: 0.8,
  },
  badgeContainer: {
    paddingLeft: 10,
  },
  //   profileButtonsContainer: {
  //     width: '100%',
  //     flexDirection: 'row',
  //     justifyContent: 'space-evenly',
  //     alignItems: 'center',
  //   },
  //   followButton: {
  //     width: '42%',
  //   },
  //   followButtonContainer: {
  //     width: '100%',
  //     height: 35,
  //     borderRadius: 5,
  //     borderWidth: 1,
  //     borderColor: '#DEDEDE',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   followingButtonContainer: {
  //     backgroundColor: '#3493D9',
  //   },
  //   followButtonText: {
  //     color: 'black',
  //   },
  //   followingButtonText: {
  //     color: 'white',
  //   },
  //   messageButton: {
  //     width: '42%',
  //     height: 35,
  //     borderWidth: 1,
  //     borderColor: '#DEDEDE',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 5,
  //   },
  //   chevronButton: {
  //     width: '10%',
  //     height: 35,
  //     borderWidth: 1,
  //     borderColor: '#DEDEDE',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 5,
  //   },
  //   chevronIcon: {
  //     fontSize: 20,
  //     color: 'black',
  //   },
});
