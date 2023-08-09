import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import LinearGradient from 'react-native-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'LandingScreen'>;

const {width, height} = Dimensions.get('window');

const LandingScreen = ({navigation: {navigate}}: Props) => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#f5dada', '#f88044']}
      style={styles.gradient}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/FitBook_logo2.png')}
          style={styles.logo}
        />

        <TouchableOpacity
          style={[styles.button, {top: height * 0.225}]}
          onPress={() => navigate('Details')}>
          <View
            style={[
              styles.buttonContent,
              {backgroundColor: 'white', flexDirection: 'row'},
            ]}>
            <Text style={styles.buttonFont}>Sign up with Google</Text>
            <Image
              source={require('../assets/images/google_logo.png')}
              style={styles.googleLogo}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {top: height * 0.245}]}
          onPress={() => navigate('SignUp')}>
          <View style={[styles.buttonContent, {backgroundColor: '#3761F8'}]}>
            <Text style={styles.buttonFont}>Sign up with Email</Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.logInFont, {top: height * 0.29}]}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={{top: height * 0.3}}
          onPress={() => navigate('Login')}>
          <Text style={[styles.logInFont, {fontWeight: 'bold'}]}>Log In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LandingScreen;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4 * (228 / 188),
    position: 'absolute',
    top: height * 0.18,
  },
  button: {
    width: width * 0.8,
    height: height * 0.05,
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
  googleLogo: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
    marginLeft: width * 0.01,
  },
  logInFont: {
    fontSize: Math.round(width * 0.036),
  },
});
