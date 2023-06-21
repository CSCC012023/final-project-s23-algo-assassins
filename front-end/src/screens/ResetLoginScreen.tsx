import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
//import {StyleSheet, View} from 'react-native';
import {TextInput, Text, Button, Divider} from '@react-native-material/core';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
//import React, { useState } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

type RootStackParamList = {
    Login: undefined;
  ResetLogin: undefined;
  Home: undefined; // change to other screen to navigate to
};
type ResetLoginScreenProps = NativeStackScreenProps<RootStackParamList, 'ResetLogin'>;

const ResetLoginScreen: React.FC<ResetLoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // will display the email status
  const [emailStatus, setEmailStatus] = React.useState('');

  // when Login button is pressed
  const handleResend = async () => {
    
  };

  return (
    <View style={styles.bg_white}>
        <TouchableOpacity
        style={{marginTop: 0.05 * height, marginHorizontal: 0.05 * width}}
        onPress={() => navigation.navigate('Home')}>
        <AntDesign name="left" size={30} color="grey" />
      </TouchableOpacity>
      <View style={[styles.mg_h_16, styles.mg_v_8]}>
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>Resetting your password</Text>
        <TextInput
          label="Email"
          style={[styles.mg_v_8]}
          color="rgba(0, 0, 0, 0.3)"
          variant="standard"
          value={email} // Bind the value to the 'email' state
          onChangeText={text => setEmail(text)}
        />
    
        <Button
          title="Send Password Reset"
          style={styles.mg_v_8}
          variant="contained"
          color="#FFA500" // Set the color to orange (#FFA500)
          onPress={handleResend} // Connect handleResend function to the onPress event
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        </View>

        <Text style={styles.loginStatus}>{emailStatus}</Text>
      </View>
    </View>
  );
};

export default ResetLoginScreen;

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
  },
});