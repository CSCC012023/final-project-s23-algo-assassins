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

const ExerciseSets = (props: any) => {
  return (
    <View style={{width:'100%'}}>
      <View style={styles.statsRow}>
        <Text style={styles.stat}>
          {props.set["set"] + 1}   
        </Text>
        <Text style={styles.stat}>
          {props.set["lbs"]} lbs   
        </Text>
        <Text style={styles.stat}>
          {props.set["reps"]}   
        </Text>
      </View>
    </View>
  );
};

const ExerciseEntry = (props: any) => {
  return (
    <View style={styles.exerciseContainer}>
      <Text
        style={styles.exerciseName}>
        {props.exerciseName}
      </Text>
      <View style={styles.labelsRow}>
        <Text style={styles.label}>Set</Text>
        <Text style={styles.label}>Weight</Text>
        <Text style={styles.label}>Reps</Text>
      </View>
      {
        props.exerciseStats["sets"].map((set, index) => 
        <ExerciseSets
          key={index}
          set={set}/>)
      }
    </View>
  );
};

const PostCard = (props: any) => {

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
        Total Volume: {workout.totalVolume} lbs
      </Text>
    </View>
    <View style={styles.workoutStats}>
      <View style={{width:'100%'}}>
        {
          Object.entries(exercises).map(([key, value], index) => 
          <ExerciseEntry key={index} exerciseName={key} exerciseStats={value}/>)
        }
      </View>
    </View>
  </Card>
  );
};
    
  

export default PostCard;

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
  exerciseName: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 5,
    paddingTop: 10,
  },
  setContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginBottom: 10,
    paddingBottom: 10,
  },
  setText: {
    fontSize: 16,
  },
  setStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setStat: {
    flex: 1,
    textAlign: 'center',
  },
  statsGroup: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
  },
  stat: {
    fontSize: 14,
  },
  exerciseContainer: {
    width:'100%',
    padding: 2, 
  },
  profile: {width: 40, height: 40, marginRight: 5},
  username: {fontWeight: 'bold'},
  fitbookTeam: {marginBottom: 10},
  bold: {fontWeight: 'bold'},
  buttonContainer: {height: 35},
});
