import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBarHeader from '../components/searchBar/SearchBar';
import WelcomeCard from '../components/welcomeCard/WelcomeCard';

const fetchWorkouts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/users/get/follow', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    const res = await fetch(`http://localhost:3000/api/workouts/followingWorkouts?following=${data.join(',')}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      },
    });
    const workouts = await res.json();

    return Array.isArray(workouts) ? workouts : [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [workouts, setWorkouts] = useState([]);

  useEffect (() => {
    fetchWorkouts().then(workouts => {
      workouts.forEach(workout => {
        workout.exercises = workout.exercises.map(exercise => JSON.parse(exercise));
      })
      setWorkouts(workouts);
    })
  }, []);

  const updateSearch = (search_: string) => {
    setSearch(search_);
  };

  return (
    <SafeAreaView style={styles.background}>
      <SearchBarHeader value={search} onChange={updateSearch} />
      <ScrollView>
      {
        workouts.map((workout, index) => 
        <WelcomeCard key={index} workout={workout}/>)
      }
      </ScrollView>
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
