import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput, Text, Button, Divider} from '@react-native-material/core';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
//import React, { useState } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';

const {width} = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // will display the login status
  const [loginStatus, setLoginStatus] = React.useState('');

  // when Login button is pressed
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/login?', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      // Check the response from the backend
      if (response.ok) {
        // Successful login, proceed to the next screen
        //setLoginStatus('Login Success');
        // Navigate to HomeScreen

        navigation.navigate('HomeTabs');
      } else {
        // Login failed, display an error message
        const errorMessage = data.message || 'Login Failed';
        //setLoginStatus(errorMessage);

        // Display the error message as a toast message
        Toast.show({
          type: 'error',
          text1: 'Login Error',
          text2: errorMessage,
          position: 'bottom',
          // visibilityTime: 4000, // Adjust the duration as needed
          autoHide: true,
        });
      }
    } catch (error) {
      // Handle any error that occurred during the request

      if (error instanceof Error) {
        setLoginStatus('Login Error: ' + error.message);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Login failed',
          text2: error.message,
        });
      } else {
        setLoginStatus('Login Error');
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Login failed',
          text2: 'Unknown error',
        });
      }
    }
  };

  const handleForgotPass = async () => {
    // navigate to ResetLoginScreen
    navigation.navigate('ResetLogin');
  };

  return (
    <SafeAreaView style={styles.bg_white}>
      <TouchableOpacity
        style={{marginHorizontal: 0.05 * width}}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={30} color="grey" />
      </TouchableOpacity>
      <View style={[styles.mg_h_16, styles.mg_v_8]}>
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>Email</Text>
        <TextInput
          style={[styles.mg_b_8]}
          color="rgba(251, 142, 64, 0.5)"
          placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
          variant="standard"
          value={email} // Bind the value to the 'email' state
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        />
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>Password</Text>
        <TextInput
          style={[styles.mg_b_8]}
          color="rgba(251, 142, 64, 0.5)"
          placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
          variant="standard"
          value={password} // Bind the value to the 'password' state
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableWithoutFeedback onPress={handleForgotPass}>
          <Text style={[styles.mg_v_8, styles.font_inter_forgot]}>
            Forgot password?
          </Text>
        </TouchableWithoutFeedback>
        <View style={styles.mg_v_8}></View>
        <Button
          title="Login!"
          style={[styles.mg_v_8]}
          variant="contained"
          color="rgba(251, 142, 64, 0.5)"
          onPress={() => {
            handleLogin();
          }} // Connect handleLogin function to the onPress event
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Divider style={{flex: 1}} />
          <Text style={(styles.mg_v_8, styles.mg_h_16)}>or</Text>
          <Divider style={{flex: 1}} />
        </View>
        <GoogleSigninButton
          style={{width: '100%', height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            console.log('pressed');
          }}
        />
        <Text style={styles.loginStatus}>{loginStatus}</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mg_h_16: {
    marginHorizontal: 16,
  },
  mg_v_8: {
    marginVertical: 8,
  },
  mg_t_8: {
    marginTop: 8,
  },
  mg_b_8: {
    marginBottom: 8,
  },
  buttonContent: {
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFont: {
    fontSize: Math.round(width * 0.04),
  },
  bg_white: {
    backgroundColor: 'white',
    flex: 1,
  },
  text_input: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
  font_inter_input: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 22,
  },
  font_inter_forgot: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 18,
    color: '#FB8E40',
  },
  loginStatus: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  touchOpacStyle: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 0,
  },
});
