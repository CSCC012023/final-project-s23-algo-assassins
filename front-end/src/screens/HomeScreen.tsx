import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SearchBarHeader from '../components/searchBar/SearchBar';
import WelcomeCard from '../components/welcomeCard/WelcomeCard';
import SuggestFollowCard from '../components/suggestFollowCard/SuggestFollowCard';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData, setUserData] = useState(null); // Store the user data

  const navigation = useNavigation();

  const updateSearch = async (searchText: string) => {
    setSearch(searchText);

    try {
      const emailResponse = await fetch(
        `http://100.101.194.202:3000/api/users/find?email=${searchText}`,
      );
      const emailData = await emailResponse.json();

      const nameResponse = await fetch(
        `http://100.101.194.202:3000/api/users/search/${searchText}`,
      );
      const nameData = await nameResponse.json();

      if (emailResponse.ok && emailData) {
        console.log('User found by email:', emailData);
        setShowDropdown(true);
        setUserData(emailData); // Save the user data
      } else if (nameResponse.ok && nameData) {
        console.log('User found by name:', nameData);
        setShowDropdown(true);
        setUserData(nameData); // Save the user data
      } else {
        console.log('User not found');
        setShowDropdown(false);
      }
    } catch (error) {
      console.log('Error:', error);
      setShowDropdown(false);
    }
  };

  const handleUserButtonClick = () => {
    navigation.navigate('Profile');
  };

  // everything drop down menu
  const renderDropdown = () => {
    if (!showDropdown || search === '') {
      return null;
    }

    let userButton = null;
    if (userData) {
      const userDisplayName = `${userData.name} (${userData.email})`;
      userButton = (
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={handleUserButtonClick}>
          <Text style={styles.dropdownButtonText}>{userDisplayName}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={[styles.dropdown, styles.dropdownPosition]}>
        <Text style={styles.dropdownText}>Users</Text>
        {userButton}
        {/* Add additional dropdown menu components here */}
      </View>
    );
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
  dropdown: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'lightgray',
    borderRadius: 4,
  },
  dropdownPosition: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownButton: {
    padding: 8,
  },
  dropdownButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
