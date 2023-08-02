import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({navigation: {navigate}}: Props) => {
  const name = 'Jerry Dang';
  const accountName = 'j.d_splash';
  const biography = 'Hello I am Jerry!';
  const profileImage = require('../assets/images/levi_pfp.png');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigate('Profile', {
            name,
            accountName,
            biography,
            profileImage,
          })
        }>
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
