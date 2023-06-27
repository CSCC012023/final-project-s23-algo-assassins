import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, Card, Text} from '@rneui/themed';

const WelcomeCard = () => {
  return (
    <Card>
      <Text>
        Welcome to fitbook,{' '} {/* Text bold */}
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          firstName!
        </Text>
      </Text>
      <Text h4>be-nev-o=lent</Text>
      <Text>adjective</Text>
      <Text>
        well meaning and kindly.
        {'"a benevolent smile"'}
      </Text>
      <Button size="sm" type="clear">
        Learn More
      </Button>
    </Card>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({});
