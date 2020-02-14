import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AsyncStorage } from 'react-native';
import CategoryScreen from './src/screens/CategoryScreen';
import FScreen from './src/screens/FScreen'
import HomeScreen from './src/screens/HomeScreen'
import TypeScreen from './src/screens/TypeScreen';
import uuid from 'uuid/v4';

const AppNavigator = createStackNavigator({
	Home: { screen: HomeScreen },
	Category: CategoryScreen,
	Type: TypeScreen,
	FScreen: FScreen
}, {
	initialRouteName: "Home",
	defaultNavigationOptions: { headerShown: false }
});

(async () => {
	await AsyncStorage.setItem('deviceId', uuid());
})();

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