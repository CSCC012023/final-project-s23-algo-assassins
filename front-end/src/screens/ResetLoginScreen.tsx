import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { TextInput, Text, Button, Divider } from '@react-native-material/core';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('window');
type ResetLoginScreenProps = NativeStackScreenProps<RootStackParamList, 'ResetLogin'>;

const ResetLoginScreen: React.FC<ResetLoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  // will display the email status
  const [emailStatus, setEmailStatus] = React.useState('');

  const generateKey = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars.charAt(randomIndex);
    }

    return result;
  };

  const isEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // when reset button is pressed
  const handleReset = async () => {
    const isValid = isEmail(email);

    if (isValid) {
      const key = generateKey(10);
      try {
        const response = await fetch('http://localhost:3000/api/users/send/verification', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, key }),
        });
        if (response.ok) {
          Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Verification code has been sent to your email.'
          });
          navigation.navigate('NewPasswordScreen', { email: email, key: key });
        } else if (response.status == 404) {
          Toast.show({
            type: 'error',
            position: 'bottom',
            text1: 'Email is not registered'
          });
        } else {
          Toast.show({
            type: 'error',
            position: 'bottom',
            text1: 'Failed to send verification email'
          });
        }
      } catch (error) {
        console.error(error);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'An error has occured. Please try again.'
        });
      }
    }
    else {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Invalid Email Format',
        text2: 'Please enter a valid email format'
      });
    }
  };

  return (
    <View style={styles.bg_white}>
      <TouchableOpacity
        style={{ marginTop: 0.05 * height, marginHorizontal: 0.05 * width }}
        onPress={() => navigation.navigate('Login')}>
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
          autoCapitalize="none"
        />
        <Button
          title="Send Password Reset"
          style={styles.mg_v_8}
          variant="contained"
          color="#FFA500" // Set the color to orange (#FFA500)
          onPress={handleReset} // Connect handleResend function to the onPress event
        />
        <Text style={styles.loginStatus}>{emailStatus}</Text>
      </View >
    </View >
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