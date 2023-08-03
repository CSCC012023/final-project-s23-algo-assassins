import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Text, Button, Divider} from '@react-native-material/core';
import React, {useState} from 'react';
import {RootStackParamList} from '../types/navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isChecked, setIsChecked] = useState(true);
  const [weight, setWeight] = useState('');
  const [user_height, setHeight] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [status, setIntroStatus] = useState('');
  const [expanded, setExpanded] = useState('');

  // update Age
  const updateAge = async (age: number) => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/users/update/age',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            age: age,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        // Handler for successful response
        console.log('Age update success');
      } else {
        // Handler for failure
        const errorMessage = data.message;
        console.log('Age update failed: ', errorMessage);
        if (errorMessage.code === '11000') {
          console.log('Age update error: Email is already in use.');
        }
      }
    } catch (error) {
      console.log('Age update error' + error);
    }
  };

  // update Height
  const updateHeight = async (user_height: number) => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/users/update/height',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            height: user_height,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        // Handler for successful response
        console.log('Height update success');
      } else {
        // Handler for failure
        const errorMessage = data.message;
        console.log('Height update failed: ', errorMessage);
        if (errorMessage.code === '11000') {
          console.log('Height update error: Email is already in use.');
        }
      }
    } catch (error) {
      console.log('Height update error' + error);
    }
  };

  // update Weight
  const updateWeight = async (weight: number) => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/users/update/weight',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            weight: weight,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        // Handler for successful response
        console.log('Age update success');
      } else {
        // Handler for failure
        const errorMessage = data.message;
        console.log('Weight update failed: ', errorMessage);
        if (errorMessage.code === '11000') {
          console.log('Weight update error: Email is already in use.');
        }
      }
    } catch (error) {
      console.log('Weight update error' + error);
    }
  };

  const handleSignUpIntro = async () => {
    console.log('Signup Intro button pressed.');
    // update age, weight, height from user input

    // Check if user input is numerical
    if (
      isNaN(Number(age)) ||
      isNaN(Number(weight)) ||
      isNaN(Number(user_height))
    ) {
      console.log('Invalid input. Age, weight, and height must be numerical.');
      return;
    }
    navigation.navigate('HomeTabs');
    // Send HTTP requests and handle errors
    try {
      updateAge(age);
      updateWeight(weight);
      updateHeight(user_height);

      // All requests were successful, navigate to the next screen
      console.log('Signup success');
    } catch (error) {
      console.log('Signup error: ', error);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Signup failed',
        text2: 'Unknown error',
      });
    }
  };
  const toggleExpanded = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.bg_white}>
        <TouchableOpacity
          style={{marginTop: 0.05 * height, marginHorizontal: 0.05 * width}}
          onPress={() => navigation.navigate('Home')}>
          <AntDesign name="left" size={30} color="grey" />
        </TouchableOpacity>
        <View style={[styles.mg_v_8, styles.mg_h_16]}>
          <Text style={[styles.mg_t_8, styles.font_inter_input]}>Age</Text>
          <TextInput
            placeholder="Age"
            style={[styles.mg_v_8, styles.text_input]}
            color="rgba(251, 142, 64, 0.5)"
            variant="standard"
            onChangeText={text => setAge(text)}
          />
          <Text style={[styles.mg_t_8, styles.font_inter_input]}>
            Weight (lbs)
          </Text>
          <TextInput
            placeholder="Weight"
            style={[styles.mg_v_8, styles.text_input]}
            color="rgba(251, 142, 64, 0.5)"
            variant="standard"
            onChangeText={text => setWeight(text)}
          />

          <Text style={[styles.mg_t_8, styles.font_inter_input]}>
            Height (cm)
          </Text>
          <TextInput
            placeholder="Height"
            style={[styles.mg_v_8, styles.text_input]}
            color="rgba(251, 142, 64, 0.5)"
            variant="standard"
            onChangeText={text => setHeight(text)}
          />
          <Text
            style={[
              styles.mg_t_8,
              styles.font_inter_input,
              styles.smallerText,
            ]}>
            *These fields above are not required
          </Text>

          <Text style={[styles.mg_t_8, styles.font_inter_input]}>
            <TouchableOpacity onPress={toggleExpanded}>
              <Text style={styles.expandButton}>
                {expanded ? 'Hide' : 'Show'} About FitBook
              </Text>
            </TouchableOpacity>
          </Text>
          {expanded && (
            <Text style={[styles.mg_t_8, styles.font_inter_input]}>
              FitBook is a unique fitness social media platform that integrates
              fitness tracking with social connectivity. Our primary goal is to
              inspire and motivate individuals to adopt and maintain a regular
              physical activity routine, all within a vibrant and supportive
              community. With FitBook, you can effortlessly share your workouts,
              repost engaging fitness content, and keep track of your personal
              progress. We aim to create an environment that uplifts individuals
              on their fitness journey. Let's strive together towards a
              healthier and happier lifestyle!
            </Text>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginHorizontal: -20,
            }}></View>
          <TouchableOpacity
            style={[styles.button, styles.mg_t_8]}
            onPress={() => handleSignUpIntro()}
            disabled={!isChecked}>
            <View
              style={[
                styles.buttonContent,
                {
                  backgroundColor: isChecked
                    ? 'rgba(251, 142, 64, 0.5)'
                    : 'rgba(251, 142, 64, 0.1)',
                },
              ]}>
              <Text style={styles.buttonFont}>Welcome to FitBook</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: height * 0.3,
  },
  expandButton: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  smallerText: {
    fontSize: 10, // Adjust font size
  },
  mg_h_16: {
    marginHorizontal: width * 0.07,
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
    width: width * 0.86,
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
  button: {
    width: width * 0.86,
    height: height * 0.058,
  },
  buttonContent: {
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFont: {
    fontSize: Math.round(width * 0.04),
  },
});
