import React from 'react';
import CameraComp from '../components/Camera';
import { uploadImage, compareFaces } from '../utils/aws';

const FScreen = ({ navigation }) => {
	return (
		<CameraComp text="textul meu" toDo={compareFaces} />
	);
}

export default FScreen;