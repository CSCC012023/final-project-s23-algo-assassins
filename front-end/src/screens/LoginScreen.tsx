import {StyleSheet, View} from 'react-native';
import {TextInput, Text, Button, Divider} from '@react-native-material/core';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  return (
    <View style={styles.bg_white}>
      <View style={[styles.mg_h_16, styles.mg_v_8]}>
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>
          Username or Email
        </Text>
        <TextInput
          label="Username or Email"
          style={[styles.mg_v_8]}
          color="rgba(0, 0, 0, 0.3)"
          variant="standard"
        />
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>Password</Text>
        <TextInput label="Password" style={styles.mg_v_8} variant="standard" />
        <Text style={[styles.mg_v_8, styles.font_inter_forgot]}>
          Forgot password?
        </Text>
        <Button
          title="Login"
          style={styles.mg_v_8}
          variant="contained"
          color="primary"
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
});
