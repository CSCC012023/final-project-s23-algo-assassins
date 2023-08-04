import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import AntDesign icon
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window'); // Get screen dimensions

const FriendScreen = ({navigation}) => {
  const [friends, setFriends] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

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

  useEffect(() => {
    // Fetch friends of the currently logged-in user
    if (userEmail) {
      // Replace  with localhost
      fetch(`http://localhost:3000/api/users/friends?email=${userEmail}`)
        .then(response => response.json())
        .then(data => setFriends(data))
        .catch(error => console.error('Error fetching friends:', error));
    }
  }, [userEmail]);

  // Follow
  const handleFollow = friend => {
    // Replace with localhost
    fetch('http://localhost:3000/api/users/create/follow', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followed_email: friend, // friend's email to follow
        follower_email: userEmail, // currently logged-in user's email
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Followed', friend);
      })
      .catch(error => {
        console.error('Error following friend:', error);
      });
  };

  // Unfollow
  const handleUnfollow = friend => {
    // Replace with localhost
    fetch('http://localhost:3000/api/users/remove/follow', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followed_email: friend, // The friend's email to unfollow
        follower_email: userEmail,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Unfollowed', friend);
      })
      .catch(error => {
        console.error('Error unfollowing friend:', error);
      });
  };

  return (
    <SafeAreaView style={styles.bg_white}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="chevron-back" size={30} color="grey" />
        </TouchableOpacity>
        <Text style={styles.backButtonText}>Friends</Text>
        <Text style={styles.placeholder}>Lol</Text>
      </View>
      <View style={styles.friendsContainer}>
        {friends.length > 0 ? (
          friends.map((friend, index) => (
            <View key={index} style={styles.friendRow}>
              <Text style={styles.friendsText}>{friend}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.followButton}
                  onPress={() => handleFollow(friend)}>
                  <Text style={styles.buttonText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.unfollowButton}
                  onPress={() => handleUnfollow(friend)}>
                  <Text style={styles.buttonText}>Unfollow</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.friendsText}>No friends found.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FriendScreen;

const styles = StyleSheet.create({
  bg_white: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
  },
  friendsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 13,
  },
  friendsText: {
    fontSize: 18,
    color: 'black',
    marginVertical: 5,
    marginLeft: 10,
    opacity: 0.7,
  },
  friendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  followButton: {
    backgroundColor: '#3761F8',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    marginRight: 5,
    opacity: 0.8,
  },
  unfollowButton: {
    backgroundColor: '#F88044',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  placeholder: {
    opacity: 0.0,
  },
});
