import {Dictionary, Exercise} from './workout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeTabs: any;
  HomeScreen: undefined;
  Details: undefined;
  BottomSheet: undefined;
  SignUp: undefined;
  Login: undefined;
  Workout: NativeStackScreenProps;
  StartWorkout: {
    navData: Dictionary<Exercise>;
  };
  AddExercise: {
    navData: Dictionary<Exercise>;
  };
  Profile: undefined;
  UserProfile: undefined;
  EditProfileScreen: undefined;
  Settings: undefined;
  ResetLogin: undefined;
  NewPasswordScreen: {email: string; key: string};
  LandingScreen: any;
  CreateRoutine: {
    navData: Dictionary<Exercise>;
  };
  RoutineAddExercise: {
    navData: Dictionary<Exercise>;
  };
  SavedRoutines: undefined;
  SignUpIntro: undefined;
  Friend: undefined;
};

export interface DummyScreenParams {
  name: string;
  backgroundColor: string;
  nextScreen: string;
  paddingBottom?: number;
}

export type MainTabsParams = {
  Home: DummyScreenParams;
  Likes: DummyScreenParams;
  Search: DummyScreenParams;
  Profile: DummyScreenParams;
};
