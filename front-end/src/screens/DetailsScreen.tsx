import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({navigation: {navigate}}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Workout')}>
        <Text>Go to Workout</Text>
      </TouchableOpacity>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
