import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@react-native-material/core';
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation: {navigate}}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigate('Details')} />
      <Button title="Go to Login Screen" onPress={() => navigate('Login')} />
      <Button title="Go to Workout Screen" onPress={() => navigate('Workout')} />
      <Button
        title="Go to BottomSheet"
        onPress={() => navigate('BottomSheet')}
      />
    </View>
  );
};

export default HomeScreen;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
