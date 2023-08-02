import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Button, Card, Image, Text} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

const fetchUser = async (email) => {
  try {
    const response = await fetch (`http://localhost:3000/api/users/find?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await response.json();
    return res;
  } catch (error: any) {
    console.error ("Error: ", error);
  }
};

function secondsToHms(duration) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  const hoursFormat = hours < 10 ? `0${hours}` : hours;
  const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

  return `${hoursFormat}:${minutesFormat}:${secondsFormat}`;
}

const ExerciseEntry = (props: any) => {
  return (
    <View>
      <Text
        style={styles.username}>
        hi
      </Text>

    </View>
  );
};

const ExerciseSets = (props: any) => {

  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  return (
    <View>
      <View style={[{height: 52}]}>
      </View>
    </View>
  );
};

const WelcomeCard = (props: any) => {

  const [user, setUser] = useState();
  const [workout, setWorkout] = useState(props.workout);
  const [exercises, setExercises] = useState(props.workout.exercises[0]);

  useEffect(() => {
    fetchUser(props.workout.email)
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error("failed to fetch user");
      });
  }, [props.workout.email]);

  return (
    <Card>
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <Image
          source={require('../../assets/images/FitBook_logo2.png')}
          style={styles.profile}
          resizeMode='contain'
        />
        <Text
          style={styles.username}>
          {user != undefined ? user.name: "Loading..."}
        </Text>
      </View>
    </TouchableOpacity>
    <View style={styles.workoutStats}>
      <Text>
        Duration: {secondsToHms(workout.duration)}
      </Text>
      <Text>
        Total Volume: {workout.totalVolume}
      </Text>
    </View>
    <View style={styles.workoutStats}>
      <View>
        {
          Object.entries(exercises).map(([key, value], index) => 
          <ExerciseEntry key={index} exerciseName={key}/>)
        }
      </View>
    </View>
  </Card>
  );
};
    
  

export default WelcomeCard;

const styles = StyleSheet.create({
  closeIcon: {
    fontSize: 35,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  workoutStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 20,
  },

  followContainer: {
    flexDirection: 'row',
    marginTop: 25,
    alignSelf: 'center',
    marginBottom: 20,
  },
  profile: {width: 40, height: 40, marginRight: 5},
  username: {fontWeight: 'bold'},
  fitbookTeam: {marginBottom: 10},
  bold: {fontWeight: 'bold'},
  buttonContainer: {height: 35},
});
