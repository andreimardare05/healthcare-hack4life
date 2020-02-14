import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoryScreen from './src/screens/CategoryScreen';
import GlobalFont from 'react-native-global-font'
import StartScreen from './src/screens/StartScreen'
import HomeScreen from './src/screens/HomeScreen'
import TypeScreen from './src/screens/TypeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Category: CategoryScreen,
  Type: TypeScreen,
},{
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