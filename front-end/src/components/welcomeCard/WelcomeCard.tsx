import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Card, Image, Text} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WelcomeCard = () => (
  <Card>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 20,
      }}>
      <Text>
        Welcome to fitbook, {/* Text bold */}
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          firstName!
        </Text>
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
    <View
      style={{
        flexDirection: 'row',
        marginTop: 25,
        alignSelf: 'center',
        marginBottom: 20,
      }}>
      <Image
        source={require('../../assets/images/FitBook_logo2.png')}
        style={{width: 60, height: 75, marginRight: 15}}
      />
      <View>
        <View style={{marginBottom: 10}}>
          <Text h4 style={{fontWeight: 'bold'}}>
            Fitbook Team
          </Text>
        </View>
        <Button
          containerStyle={{height: 35}}
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
});
