import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Icon name="arrow-back-ios" size={30}></Icon>
      {/* <Icon.Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
      </Icon.Button> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
