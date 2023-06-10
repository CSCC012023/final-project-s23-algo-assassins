import {StyleSheet, View} from 'react-native';
import {TextInput, Text, Button, Divider} from '@react-native-material/core';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import { CheckBox } from 'react-native-elements';

const SignUpScreen = () => {
  return (
    <View style={styles.bg_white}>
      <View style={[styles.mg_h_16, styles.mg_v_8]}>
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>
          Username
        </Text>
        <TextInput
          placeholder="Username"
          style={[styles.mg_v_8]}
          color="rgba(0, 0, 0, 0.3)"
          variant="standard"
        />
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>Password</Text>
        <TextInput placeholder="Password" style={styles.mg_v_8} variant="standard" />
        <Text style={[styles.mg_t_8, styles.font_inter_input]}>Email</Text>
        <TextInput placeholder="Must be at least 6 characters" style={styles.mg_v_8} variant="standard" />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox style={[{marginLeft: 0, paddingLeft: 0}]}/>
          <Text style={{ marginLeft: 0, fontSize: 12, color: 'gray' }}>
            I agree to the terms and conditions of use.
          </Text>
        </View>
        <Button
          title="Sign up"
          style={styles.mg_v_8}
          variant="contained"
          color="rgba(251, 142, 64, 0.5)"
          
        />

      </View>
    </View>
  );
};

export default SignUpScreen;

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
