import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBarHeader from '../components/searchBar/SearchBar';
import WelcomeCard from '../components/welcomeCard/WelcomeCard';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search_: string) => {
    setSearch(search_);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <SearchBarHeader value={search} onChange={updateSearch} />
      <WelcomeCard />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
