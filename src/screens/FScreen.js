import React from 'react';
import CameraComp from '../components/Camera';
import { uploadImage } from '../utils/aws';

const FScreen = ({ navigation }) => {
	return (
		<CameraComp text="textul meu" onDone={() => navigation.navigate('Home')} />
	);
}

export default FScreen;