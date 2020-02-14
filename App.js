import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GlobalFont from 'react-native-global-font'
import StartScreen from './src/screens/StartScreen'
import HomeScreen from './src/screens/HomeScreen';
import SpeechTestScreen from './src/screens/SpeechTestScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: StartScreen 
  }
  ,
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerShown: false
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppContainer;