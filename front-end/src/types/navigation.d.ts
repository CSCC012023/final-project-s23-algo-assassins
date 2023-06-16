import {Dictionary, Exercise} from './workout';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  BottomSheet: undefined;
  SignUp: undefined;
  Login: undefined;
  Workout: undefined;
  StartWorkout: {
    navData: Dictionary<Exercise>;
  };
  AddExercise: {
    navData: Dictionary<Exercise>;
  };
  Profile: undefined;
  EditProfile: undefined;
};
