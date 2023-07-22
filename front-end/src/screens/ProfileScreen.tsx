import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ProfileSetup, ProfileButtons} from '../screenComponents/ProfileHeader';
import {Image} from 'react-native-elements';

const ProfileScreen = ({navigation}) => {
  // Pass the navigation prop to access navigation functionalities
  const [name, setName] = useState('');

  const handleFriendsButtonPress = () => {
    // Navigate to the FriendScreen when the button is pressed
    navigation.navigate('Friend');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ProfileSetup
          name="Jerry Dang"
          accountName="j.d_splash"
          profileImage={require('../assets/images/levi_pfp.png')}
          workouts={70}
          followers={54}
          following={14}
          biography="Hello I am Jerry."
        />
        <ProfileButtons
          id={0}
          name=""
          accountName=""
          profileImage={require('../assets/images/levi_pfp.png')}
        />
      </View>
      <View style={styles.bioContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleFriendsButtonPress} // Call the handleFriendsButtonPress function when the button is pressed
        >
          <Text style={styles.buttonText}>View Friends</Text>
        </TouchableOpacity>
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
    paddingVertical: 12,
    paddingHorizontal: 24,
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

export default ProfileScreen;
