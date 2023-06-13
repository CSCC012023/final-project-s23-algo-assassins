// In App.js in a new project

import * as React from 'react';
// Screens
import Home from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import BottomSheetScreen from './src/screens/BottomSheetScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import StartWorkoutScreen from './src/screens/StartWorkoutScreen';
import AddExerciseScreen from './src/screens/AddExerciseScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Overview'}}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Workout"
            component={WorkoutScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="StartWorkout"
            component={StartWorkoutScreen}
            options={{headerShown: true, title: 'Workout'}}
          />
          <Stack.Screen
            name="AddExercise"
            component={AddExerciseScreen}
            options={{headerShown: true, title: 'Workout'}}
          />
          <Stack.Screen name="BottomSheet" component={BottomSheetScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
