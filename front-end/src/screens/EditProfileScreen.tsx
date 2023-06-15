import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
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

export default EditProfileScreen;
