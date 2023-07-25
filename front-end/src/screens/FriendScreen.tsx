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

const {width, height} = Dimensions.get('window'); // Get screen dimensions

const FriendScreen = ({navigation}) => {
  const [friends, setFriends] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  // Function to get the currently logged-in user's email
  const getCurrentUserEmail = async () => {
    // Replace "http://10.0.0.106:3000" with localhost
    fetch('http://10.0.0.106:3000/api/users/me')
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
      // Replace "http://10.0.0.106:3000" with localhost
      fetch(`http://10.0.0.106:3000/api/users/friends?email=${userEmail}`)
        .then(response => response.json())
        .then(data => setFriends(data))
        .catch(error => console.error('Error fetching friends:', error));
    }
  }, [userEmail]);

  // print out the friends
  useEffect(() => {
    console.log(friends);
  }, [friends]);

  return (
    <SafeAreaView style={styles.bg_white}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={{marginTop: 0.05 * height}}
            onPress={() => navigation.navigate('Home')}>
            <AntDesign name="left" size={30} color="grey" />
          </TouchableOpacity>
          <Text style={styles.backButtonText}>Friends</Text>
        </View>
      </View>
      <View style={styles.friendsContainer}>
        {friends.length > 0 ? (
          friends.map((friend, index) => (
            <Text key={index} style={styles.friendsText}>
              {friend}
            </Text>
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
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 22,
    color: 'grey',
    marginLeft: 10,
    marginTop: 30,
  },
  friendsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendsText: {
    fontSize: 18,
    color: 'black',
    marginVertical: 5, // Add some vertical margin between each friend
  },
});
