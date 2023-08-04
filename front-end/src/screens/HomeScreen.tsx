import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';
import SearchBarHeader from '../components/searchBar/SearchBar';
import WelcomeCard from '../components/welcomeCard/WelcomeCard';
import SuggestFollowCard from '../components/suggestFollowCard/SuggestFollowCard';

interface HomeScreenProps {
  navigation: any;
  route: any;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData, setUserData] = useState(null);
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
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const updateSearch = async (searchText: React.SetStateAction<string>) => {
    setSearch(searchText);

    try {
      const response = await fetch(
        `http://localhost:3000/api/users/find?email=${searchText}`,
      );

      const data = await response.json();

      if (response.ok) {
        console.log('User found:', data);
        setShowDropdown(true);
        setUserData(data); // Save the user data
      } else {
        console.log('User not found');
        setShowDropdown(false);
      }
    } catch (error) {
      console.log('Error:', error);
      setShowDropdown(false);
    }
  };

  const navigateUserProfile = () => {
    const email: string = userData.email;
    console.log('Email:');
    console.log(email);
    navigation.navigate('UserProfile', {email: email}); // need to pass in userData.email
    setShowDropdown(false);
  };

  const renderDropdown = () => {
    if (!showDropdown || search === '') {
      return null;
    }
    if (userData) {
      const userDisplayName = userData.email;
      return (
        <View style={[styles.dropdown, styles.dropdownPosition]}>
          <Text style={styles.dropdownText}>User</Text>
          <View style={styles.userInfoContainer}>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={navigateUserProfile}>
              <Text style={styles.nameEmailText}>{userDisplayName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.background}>
      <SearchBarHeader value={search} onChange={updateSearch} />
      <WelcomeCard />
      <View style={styles.container}>
        <SuggestFollowCard name="John Doe" />
        <SuggestFollowCard name="Jane Doe" />
      </View>
      {renderDropdown()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  nameEmailText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray', // Set the text color to gray for the name and email ONLY
  },
  dropdown: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'lightgray', //colour of the background of dropdown
    borderRadius: 4,
  },
  dropdownPosition: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
  },
  dropdownText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dropdownButton: {
    padding: 8,
  },
  dropdownButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdownButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  unfollowButton: {
    backgroundColor: '#f88044',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followUnfollowContainer: {
    flexDirection: 'row',
  },
});

export default HomeScreen;
