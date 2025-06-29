import {Dimensions} from 'react-native';

export const COLORS = {
  red: '#E61C53',
  green: '#4CAF50',
  blue: '#2196F3',
  white: '#ffffff',
  black: '#000000',
  successColor: '#b6f0bb',

  submitColor: '#0073e6',
  inValidSubmitColor: '#99ccff',
  errorLight95: '#fce9ee',
  errorLight90: '#f9d2dd',
  errorLight85: '#f5bccb',
  errorLight80: '#e96387',
  errorColor: '#f19db3',
  waitingLight100: '#fdfcf2',
  waitingLight95: '#fefbe6',
  waitingLight90: '#fdf7ce',
  waitingLight85: '#fcf3b5',
  waitingLight65: '#f8e254',
  waitingLight55: '#f6da23',

  primaryLight95: '#f0f0f5',
  primaryLight90: '#e0e0eb',
  primaryLight85: '#d1d1e0',
  primaryLight80: '#c2c2d6',
  primaryLight75: '#b3b3cc',
  primaryLight70: '#a3a3c2',
  primary: '#666699',
  primaryDark45: '#5c5c8a',
  primaryDark40: '#52527a',
  primaryDark35: '#47476b',
  primaryDark30: '#3d3d5c',
  primaryDark25: '#33334d',
};

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');

//   rm -rf node_modules android/.cxx android/.gradle android/app/.cxx android/app/build ios/build ios/Pods ios/Podfile.lock
// CMAKe error: rm -rf android/app/.cxx android/build android/app/build
