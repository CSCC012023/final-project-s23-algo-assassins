import React from 'react';
import {StyleSheet, Text} from 'react-native';

/**
 * The primary styling for a header
 *
 * @prop text: the text that is being displayed
 * @prop size: the font size of the text
 *
 */

export const PrimaryHeader: React.VFC<{
  text: string;
  size: number;
  isDarkMode?: boolean;
}> = ({text, size, isDarkMode = false}) => {
  return (
    <Text
      style={[
        generalStyles({size}).primaryHeader,
        generalColors(isDarkMode).black,
      ]}>
      {text}
    </Text>
  );
};

export const SecondaryHeader: React.VFC<{
  text: string;
  size: number;
  style?: any;
  isDarkMode?: boolean;
}> = ({text, size, style, isDarkMode}) => {
  return (
    <Text
      style={[
        generalStyles({size, isDarkMode}).secondaryHeader,
        style ? style : null,
      ]}>
      {text}
    </Text>
  );
};

export const generalColors = (isDarkMode: boolean) =>
  StyleSheet.create({
    background: {
      backgroundColor: isDarkMode ? 'rgb(32,32,36)' : 'white',
    },
    grey1: {
      color: isDarkMode ? 'rgba(255,255,255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
    },
    grey2: {
      color: isDarkMode ? 'rgba(255,255,255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    },
    grey3: {
      color: isDarkMode ? '#424242' : '#E1E9EE',
    },
    grey4: {
      color: isDarkMode ? '#5F5F5F' : '#F2F8FC',
    },
    black: {
      color: isDarkMode ? 'white' : 'black',
    },
    backgroundGrey: {
      backgroundColor: isDarkMode
        ? 'rgba(255,255,255, 0.05)'
        : 'rgb(244,244,244)',
    },
    tintBlack: {
      tintColor: isDarkMode ? 'white' : 'black',
    },
    borderBlack: {
      borderColor: isDarkMode ? 'white' : 'black',
    },
    backgroundGrey2: {
      backgroundColor: isDarkMode
        ? 'rgba(255,255,255, 0.05)'
        : 'rgb(244,244,244)',
    },
    purple: {
      color: isDarkMode ? '#592BDA' : '#592BDA',
    },
  });

export const colorConstants = {
  purple: '#592BDA',
  purpleLight: '#d7cef166',
};

export const generalStyles = ({size, isDarkMode}: any) =>
  StyleSheet.create({
    primaryHeader: {
      textColor: isDarkMode ? 'white' : 'black',
      fontSize: size,
    },
    secondaryHeader: {
      fontSize: size,
    },
    shadow: {
      shadowColor: 'black',
      // iOS
      shadowOffset: {height: 4, width: 0},
      shadowOpacity: 0.018, //changes darkness of shadow
      shadowRadius: 1,
      zIndex: 3,
      // Android
      elevation: 7,
    },
    genericBackground: {
      backgroundColor: 'white',
    },
  });

/**
 * @style shadowStyle
 * @param color - color of the shadow
 * ex. use "rgba(0,0,0,1) for black color and adjust the
 * 1 to change opacity"
 * @returns shadow style
 */
export const shadowStyle = (color: string) =>
  StyleSheet.create({
    shadow: {
      shadowColor: color,
      // iOS
      shadowOffset: {height: 4, width: 0},
      shadowOpacity: 0.01, //changes darkness of shadow
      shadowRadius: 2,
      zIndex: 3,
      // Android
      elevation: 7,
    },
  });
