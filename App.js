import React from 'react';
import { createAppContainer } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import uuid from 'react-native-uuid';

import StartScreen from './src/screens/StartScreen'
import HomeScreen from './src/screens/HomeScreen'
import FScreen from './src/screens/FScreen'

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		FScreen: FScreen,
		Start: StartScreen
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: { headerShown: false }
	}
);

(async () => {
	await AsyncStorage.setItem('deviceId', uuid.v4());
})();

const AppContainer = createAppContainer(navigator);

export default AppContainer;