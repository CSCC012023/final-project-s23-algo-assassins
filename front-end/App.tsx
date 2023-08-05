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
import ResetLoginScreen from './src/screens/ResetLoginScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import StartWorkoutScreen from './src/screens/StartWorkoutScreen';
import AddExerciseScreen from './src/screens/AddExerciseScreen';
import SignUpIntroScreen from './src/screens/SignUpIntroScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfile from './src/screens/EditProfileScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Toast from 'react-native-toast-message';
import LandingScreen from './src/screens/LandingScreen';
import HomeTabs from './src/screens/HomeTabs';
import SettingsScreen from './src/screens/SettingsScreen';
import CreateRoutineScreen from './src/screens/CreateRoutineScreen';
import RoutineAddExerciseScreen from './src/screens/RoutineAddExerciseScreen';
import SavedRoutinesScreen from './src/screens/SavedRoutinesScreen';
import FriendScreen from './src/screens/FriendScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';

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
          <Stack.Screen name="ResetLogin" component={ResetLoginScreen} />
          <Stack.Screen name="Workout" component={WorkoutScreen} />
          <Stack.Screen name="StartWorkout" component={StartWorkoutScreen} />
          <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
          <Stack.Screen name="BottomSheet" component={BottomSheetScreen} />
          <Stack.Screen name="SignUpIntro" component={SignUpIntroScreen} />
          <Stack.Screen name="Friend" component={FriendScreen} />
          <Stack.Screen name="CreateRoutine" component={CreateRoutineScreen} />
          <Stack.Screen
            name="RoutineAddExercise"
            component={RoutineAddExerciseScreen}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="NewPasswordScreen"
            component={NewPasswordScreen}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </GestureHandlerRootView>
  );
}

export default App;
