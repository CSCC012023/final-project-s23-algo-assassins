import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Card, Image, Text} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WelcomeCard = () => (
  <Card>
    <View style={styles.cardContainer}>
      <Text>
        Welcome to fitbook, {/* Text bold */}
        <Text style={styles.bold
        }>firstName!</Text>
      </Text>
      <TouchableOpacity
        onPress={() => {
          //
        }}>
        <Ionicons name="close-outline" style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
    <Text>
      Feel free to follow the fitbook team below for exciting updates and more!
    </Text>
    <View style={styles.followContainer}>
      <Image
        source={require('../../assets/images/FitBook_logo2.png')}
        style={styles.logo}
      />
      <View>
        <View style={styles.fitbookTeam}>
          <Text h4 style={styles.bold}>
            Fitbook Team
          </Text>
        </View>
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
    </View>
  </Card>
);

export default WelcomeCard;

const styles = StyleSheet.create({
  closeIcon: {
    fontSize: 35,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 20,
  },

  followContainer: {
    flexDirection: 'row',
    marginTop: 25,
    alignSelf: 'center',
    marginBottom: 20,
  },
  logo: {width: 60, height: 75, marginRight: 15},
  fitbookTeam: {marginBottom: 10},
  bold: {fontWeight: 'bold'},
  buttonContainer: {height: 35},
});
