import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import SelectButton from '../components/SelectButton';

const firtsTitle="hei"
const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<SelectButton text='Fast screen' onPress={() => navigation.navigate('FScreen')} />
			<SelectButton text='Face screen' onPress={() => navigation.navigate('Category',{pas:"Pasul 1: ",title:'Recunoașterea asimetriei faciale', image:require('../../assets/facial.png')})}  />
			<SelectButton text='Arm screen' onPress={() => navigation.navigate('Category',{pas:"Pasul 2: ",title:'Slabiciunea membrelor', image:require('../../assets/arm.png')})}  />
			<SelectButton text='Speech screen' onPress={() => navigation.navigate('Category',{pas:"Pasul 3: ",title:'Evaluarea vorbirii', image:require('../../assets/speach.png')})}  />
			<SelectButton text='Speech screen' onPress={() => navigation.navigate('Components')} />
			<SelectButton text='Test screen' onPress={() => navigation.navigate('Components')} />
			<SelectButton text='Start Screen' onPress={() => navigation.navigate('StartScreen')} />
			<SelectButton text='Type Screen' onPress={() => navigation.navigate('Type')} />
		
		</View>
	);
};

const styles = StyleSheet.create({});

export default HomeScreen;