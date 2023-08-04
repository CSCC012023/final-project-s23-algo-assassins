import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {UserProfileHeader} from '../screenComponents/UserProfileHeader';
import {useIsFocused} from '@react-navigation/native';
import {getUser, getUserByEmail} from '../utils/user';
import {User} from '../types/user';
import {useRoute, RouteProp, NavigationProp} from '@react-navigation/native';
import WelcomeCard from '../components/welcomeCard/WelcomeCard';
import PostCard from '../components/postCard/PostCard';

type RootStackParamList = {
  UserProfile: {navigationEmail: string};
};

type UserProfileNavigationProp = NavigationProp<
  RootStackParamList,
  'UserProfile'
>;
type UserProfileRouteProp = RouteProp<RootStackParamList, 'UserProfile'>;

interface UserProfileProps {
  navigation: UserProfileNavigationProp;
  route: UserProfileRouteProp;
}

interface UserProfileProps {
  route: {params: {email: string}};
}

const UserProfileScreen: React.FC<UserProfileProps> = ({route}) => {
  // Pass the navigation prop to access navigation functionalities
  const [user, setUser] = useState({});
  const isFocused = useIsFocused();
  const email: string = route.params.email;
  const [isLoading, setIsLoading] = useState(false);
  const [isUserDataFetched, setIsUserDataFetched] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  const queryUser = useCallback(async () => {
    const user_: User | undefined = await getUserByEmail(email);
    if (user_ !== undefined) {
      console.log('user found');
      setUser(user_);
      setIsUserDataFetched(true);
    }
  }, [email]);

  const fetchWorkouts = async () => {
    try {
      setIsLoading(true);
      const data = [email];
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
    if (!isUserDataFetched) {
      console.log('called');
      queryUser().catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
    fetchWorkouts().then(workouts => {
      workouts.forEach(workout => {
        workout.exercises = workout.exercises.map(exercise =>
          JSON.parse(exercise),
        );
      });
      setWorkouts(workouts);
    });
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <UserProfileHeader email={email} />
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

export default UserProfileScreen;
