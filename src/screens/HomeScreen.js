import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import SelectButton from '../components/SelectButton';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<SelectButton text='Fast screen' onPress={() => navigation.navigate('FScreen')} />
			<SelectButton text='Arm screen' onPress={() => navigation.navigate('Components')} />
			<SelectButton text='Speech screen' onPress={() => navigation.navigate('Components')} />
			<SelectButton text='Test screen' onPress={() => navigation.navigate('Components')} />
			<SelectButton text='Start Screen' onPress={() => navigation.navigate('StartScreen')} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default HomeScreen;