import {StyleSheet, View} from 'react-native';
import {TextInput, Text, Button, Divider} from '@react-native-material/core';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
//import React, { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // will display the login status
  const [loginStatus, setLoginStatus] = React.useState('');

  // when Login button is pressed
const handleLogin = async () => {
  try {
    const response = await fetch('http://10.0.0.106:3000/api/example/login?', {
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
    if (data.success) {
      // Successful login, proceed to the next screen
      setLoginStatus('Login Success');
    } else {
      // Login failed, display an error message
      setLoginStatus('Login Failed');
    }
  } catch (error) {
    // Handle any error that occurred during the request
    setLoginStatus('Login Error' + error);
  }
};

  return (
    <View style={styles.bg_white}>
      <View style={[styles.mg_h_16, styles.mg_v_8]}>
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>
          Username
        </Text>
        <TextInput
          label="Email"
          style={[styles.mg_v_8]}
          color="rgba(0, 0, 0, 0.3)"
          variant="standard"
          value={email} // Bind the value to the 'email' state
          onChangeText={text => setEmail(text)}
        />
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>Password</Text>
        <TextInput label="Password" 
        style={styles.mg_v_8} 
        variant="standard" 
        value={password} // Bind the value to the 'password' state
        onChangeText={text => setPassword(text)}/>
        <Text style={[styles.mg_v_8, styles.font_inter_forgot]}>
          Forgot password?
        </Text>
        <Button
         title="Login!"
          style={styles.mg_v_8}
          variant="contained"
         color="primary"
            onPress={handleLogin} // Connect handleLogin function to the onPress event

        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
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
    </View>
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
  }
});
