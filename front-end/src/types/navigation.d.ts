export type RootStackParamList = {
  HomeTabs: any;
  HomeScreen: undefined;
  Details: undefined;
  BottomSheet: undefined;
  SignUp: undefined;
  Login: undefined;
  Profile: undefined;
  EditProfile: undefined;
  LandingScreen: any;
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
