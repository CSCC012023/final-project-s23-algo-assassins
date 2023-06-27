import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SearchBarHeader from '../components/searchBar/SearchBar';
import WelcomeCard from '../components/welcomeCard/WelcomeCard';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search_: string) => {
    setSearch(search_);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <SearchBarHeader value={search} onChange={updateSearch} />
      <WelcomeCard />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
