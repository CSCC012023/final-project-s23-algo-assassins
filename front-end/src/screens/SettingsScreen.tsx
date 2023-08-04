import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const goBack = () => {
    navigation.goBack();
  };
  const [isToggled, setIsToggled] = useState(false);

  const logOut = () => {
    navigation.navigate('LandingScreen');
  };

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        isDarkTheme ? styles.darkBackground : styles.lightBackground,
      ]}>
      <View style={[styles.header]}>
        <TouchableOpacity onPress={() => goBack()}>
          <Feather name="chevron-left" style={styles.closeIcon} />
        </TouchableOpacity>
        <Text
          style={[
            styles.title,
            isDarkTheme ? styles.whiteText : styles.blackText,
          ]}>
          {' '}
          Settings{' '}
        </Text>
        <Text style={styles.placeholder}> Lol </Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.accountText}> Account </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
            <Feather name="user" style={styles.profileIcon} />
            <Text style={styles.settingsText}> Personal info </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
            <Feather name="shield" style={styles.profileIcon} />
            <Text style={styles.settingsText}> Password and security </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
            <Feather name="unlock" style={styles.profileIcon} />
            <Text style={styles.settingsText}> Privacy and permissions </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <Text style={styles.accountText}> Personalization </Text>
        <TouchableOpacity onPress={handleToggle} style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
            <Ionicons name="sunny-outline" style={styles.profileIcon} />
            <Text style={[styles.personalizeContainer, styles.settingsText]}>
              Light/Dark mode
            </Text>
            <Fontisto
              name={isToggled ? 'toggle-on' : 'toggle-off'}
              size={30}
              color={isToggled ? '#3761F8CC' : 'gray'}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <Text style={styles.accountText}> Info & Support </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
            <Feather name="info" style={styles.profileIcon} />
            <Text style={[styles.settingsText, styles.settingsText]}>
              {' '}
              About FitBook{' '}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
            <Ionicons name="add-outline" style={styles.addContainer} />
            <Text style={styles.footerText}> Add account </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={logOut}>
          <View style={styles.buttonContent}>
            <Ionicons name="log-out-outline" style={styles.logOutContainer} />
            <Text style={styles.footerText}> Log out </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
  },
  closeIcon: {
    fontSize: 32,
    opacity: 0.7,
  },
  placeholder: {
    opacity: 0.0,
  },
  bodyContainer: {
    // padding: 10,
  },
  accountText: {
    // flex: 1,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    opacity: 0.5,
    paddingLeft: 10,
    paddingTop: 10,
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    // justifyContent: 'center',
  },
  profileIcon: {
    fontSize: 34,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Inter-Regualr',
    fontWeight: 'bold',
  },
  personalizeContainer: {
    marginVertical: 10,
    padding: 10,
    color: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
  },
  toggleButton: {
    marginRight: 10,
  },
  separator: {
    width: 400,
    height: 15,
    backgroundColor: 'gray',
    opacity: 0.1,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    padding: 10,
  },
  addContainer: {
    fontSize: 30,
    color: 'green',
    opacity: 0.7,
  },
  logOutContainer: {
    fontSize: 30,
    color: 'red',
    opacity: 0.7,
  },
  darkBackground: {
    backgroundColor: 'black',
  },
  lightBackground: {
    backgroundColor: 'white',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
  settingsText: {
    fontFamily: 'Inter-Regular',
    marginHorizontal: 5,
  },
});

export default SettingsScreen;
