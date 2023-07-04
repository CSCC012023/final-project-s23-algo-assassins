import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Card, Image, Text} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SuggestFollowCard = ({name}: {name: string}) => {
  return (
    <Card containerStyle={styles.width40}>
      {/* Position top right */}
      <View style={styles.topRight}>
        <TouchableOpacity
          onPress={() => {
            //
          }}>
          <Ionicons name="close-outline" style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/FitBook_logo2.png')}
          style={styles.logo}
        />
        <Text h4 style={styles.bold}>
          {name}
        </Text>
        <Button
          containerStyle={styles.buttonContainer}
          titleProps={{
            style: {
              fontSize: 15,
              color: 'white',
            },
          }}
          radius={'sm'}>
          Follow
        </Button>
      </View>
    </Card>
  );
};

export default SuggestFollowCard;

const styles = StyleSheet.create({
  closeIcon: {
    fontSize: 35,
  },
  logo: {width: 60, height: 75},
  bold: {fontWeight: 'bold'},
  buttonContainer: {height: 35, width: 130, marginTop: 15},
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  width40: {
    width: '40%',
  },
});
