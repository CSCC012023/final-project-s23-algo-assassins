import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import WorkoutScreen from './WorkoutScreen';
import {getUser} from '../utils/user';
import {User} from '../types/user';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const queryUser = async () => {
      const user_: User | undefined = await getUser();
      if (user_ !== undefined) {
        setUser(user_);
      }
    };

    queryUser();
  }, []);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="running" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
