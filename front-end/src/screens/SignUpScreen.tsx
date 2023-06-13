import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import {TextInput, Text, Button, Divider} from '@react-native-material/core';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { CheckBox } from 'react-native-elements';
import AntDesign from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get('window');

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {

  const [isChecked, setIsChecked] = React.useState(false);
  const [userName, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  // Signup status

  const [signUpStatus, setSignUpStatus] = React.useState('');

  const handleCheck = () => {
    setIsChecked(!isChecked);  
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://10.0.0.106:3000/api/users/signup?', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userName,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handler for successful response
        console.log("Success");
        setSignUpStatus("Signup success");
        navigation.navigate("Profile");
      } else {
        // Handler for signup failure
        console.log("Endpoint rejected");
        const errorMessage = data.message || 'SignUp Failed';
        setSignUpStatus(errorMessage);
      }
    }
    catch (error) {
      if (error instanceof Error) {
        setSignUpStatus("Signup Error: " + error.message);
      } else {
        setSignUpStatus("Signup Error");
      }
      console.log("Error");
    }
  }

  return (
    <View style={styles.bg_white}>
      <TouchableOpacity 
        style={{marginTop: 0.05 * height, marginHorizontal: 0.05 * width}}
        onPress={() => navigation.navigate('Home')}
      >
        <AntDesign name="left" size={30} color="grey" />
      </TouchableOpacity>
      <View style={[styles.mg_v_8, styles.mg_h_16]}>
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>
          Username
        </Text>
        <TextInput
          placeholder="Username"
          style={[styles.mg_v_8, styles.text_input]}
          color="rgba(251, 174, 64, 0.5)"
          variant="standard"
        />
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>Password</Text>
        <TextInput 
          secureTextEntry={true}
          placeholder="Password" 
          style={[styles.mg_v_8, styles.text_input]} 
          color="rgba(251, 174, 64, 0.5)" 
          variant="standard"
        />
        
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>Email</Text>
        <TextInput 
          placeholder="Must be at least 6 characters" 
          style={[styles.mg_v_8, styles.text_input]} 
          color="rgba(251, 174, 64, 0.5)" 
          variant="standard" 
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: -20}}>
          <CheckBox 
            style={[{marginLeft: 0, paddingLeft: 0}]}
            checked={isChecked}
            onPress={handleCheck}
            checkedColor='rgba(251, 174, 64, 1)'
          />
          <Text style={{ marginLeft: -6, fontSize: 12, color: 'gray' }}>
            I agree to the terms and conditions of use.
          </Text>
        </View>

        <TouchableOpacity style={[styles.button, styles.mg_t_8]} onPress={() => handleSignUp} disabled={!isChecked}>
          <View style={[styles.buttonContent, { backgroundColor: 'rgba(251, 174, 64, 0.5)' }]}>
            <Text style={styles.buttonFont}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mg_h_16: {
    marginHorizontal: width * 0.07,
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
    width: width * 0.86
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
  button: {
    width: width * 0.86,
    height: height * 0.058,
  },
  buttonContent: {
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFont: {
    fontSize: Math.round(width * 0.04)
  },
});
