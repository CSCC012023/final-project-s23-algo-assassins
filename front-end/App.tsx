// In App.js in a new project

import * as React from 'react';
// Screens
import DetailsScreen from './src/screens/DetailsScreen';
import BottomSheetScreen from './src/screens/BottomSheetScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import StartWorkoutScreen from './src/screens/StartWorkoutScreen';
import AddExerciseScreen from './src/screens/AddExerciseScreen';
import SignUpIntroScreen from './src/screens/SignUpIntroScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfile from './src/screenComponents/EditProfile';
import Toast from 'react-native-toast-message';
import LandingScreen from './src/screens/LandingScreen';
import HomeTabs from './src/screens/HomeTabs';


const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Workout" component={WorkoutScreen} />
          <Stack.Screen name="StartWorkout" component={StartWorkoutScreen} />
          <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
          <Stack.Screen name="BottomSheet" component={BottomSheetScreen} />
          <Stack.Screen name="SignUpIntro" component={SignUpIntroScreen} />
           <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </GestureHandlerRootView>
  );
}

export default App;