import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ProfileSetup} from '../screenComponents/ProfileHeader';
import {useIsFocused} from '@react-navigation/native';
import {getUser} from '../utils/user';
import {User} from '../types/user';
import ProgressChart from '../components/progressChart/ProgressChart';
import PostCard from '../components/postCard/PostCard';

interface ProfileScreenProps {
  navigation: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  // Pass the navigation prop to access navigation functionalities
  const [user, setUser] = useState({});
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const queryUser = async () => {
    console.log('fetching user');
    const user_: User | undefined = await getUser();
    if (user_ !== undefined) {
      console.log('user found');
      setUser(user_);
    }
  };

  const fetchWorkouts = async () => {
    try {
      setIsLoading(true);

      const data = [];

      // Fetch the current user email
      const userEmailResponse = await fetch(
        'http://localhost:3000/api/users/me',
      );
      const userEmailData = await userEmailResponse.json();
      setUserEmail(userEmailData.email);
      data.push(userEmailData.email);

      const res = await fetch(
        `http://localhost:3000/api/workouts/followingWorkouts?following=${data.join(
          ',',
        )}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const workouts = await res.json();
      setIsLoading(false);

      return Array.isArray(workouts) ? workouts : [];
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  useEffect(() => {
    if (isFocused) {
      console.log('called');
      queryUser().catch(error => {
        console.error('Error fetching user data:', error);
      });

      fetchWorkouts().then(workouts => {
        workouts.forEach(workout => {
          workout.exercises = workout.exercises.map(exercise =>
            JSON.parse(exercise),
          );
        });
        setWorkouts(workouts);
      });
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.content}>
        <ProfileSetup />
      </View>
      <View style={styles.bioContainer}>
        <Text style={[{marginTop: 12}]}>Progress Data</Text>
        <ProgressChart></ProgressChart>
      </View>
      
        {
          workouts.map((workout, index) => 
          <PostCard key={index} workout={workout}/>)
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  bioContainer: {
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    width: '35%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
