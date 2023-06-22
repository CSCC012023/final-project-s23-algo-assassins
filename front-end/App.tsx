// In App.js in a new project

import * as React from 'react';
// Screens
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import BottomSheetScreen from './src/screens/BottomSheetScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabsParams, RootStackParamList} from './src/types/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfile from './src/screenComponents/EditProfile';
import Toast from 'react-native-toast-message';
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabBarItemConfig,
} from '@gorhom/animated-tabbar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingScreen from './src/screens/LandingScreen';
import HomeSVG from './src/assets/svg/HomeSVG';
import ProfileSVG from './src/assets/svg/ProfileSVG';

const tabs: TabsConfig<BubbleTabBarItemConfig, MainTabsParams> = {
  Home: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HomeSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Profile: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: ProfileSVG,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

const Tab = createBottomTabNavigator<MainTabsParams>();

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props): any => <AnimatedTabBar tabs={tabs} {...props} />}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="BottomSheet" component={BottomSheetScreen} />
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
