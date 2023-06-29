import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SearchBarHeader from '../components/searchBar/SearchBar';
import WelcomeCard from '../components/welcomeCard/WelcomeCard';
import SuggestFollowCard from '../components/suggestFollowCard/SuggestFollowCard';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search_: string) => {
    setSearch(search_);
  };

  return (
    <SafeAreaView style={styles.background}>
      <SearchBarHeader value={search} onChange={updateSearch} />
      <WelcomeCard />
      <View style={styles.container}>
        <SuggestFollowCard name="John Doe" />
        <SuggestFollowCard name="Jane Doe" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
});
