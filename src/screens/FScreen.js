import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const FScreen = () => {
	const [hasPermission, setHasPermission] = useState(null);
	const [camera, setCamera] = useState(null);
	const type = Camera.Constants.Type.front;

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	setTimeout(async () => {	
		try {
			if (camera !== null) {
				const photo = await camera.takePictureAsync({
					base64: true
				});

				console.log(photo);
			}
		} catch (err) {	
			console.log(err.message);
		}
	}, 5000);

	if (hasPermission === null) {
		return <View />;
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<Camera 
			style={styles.camera}
			type={type} 
			ratio='16:9'
			ref={ref => setCamera(ref)}
		>
		</Camera>
	);
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    }
});

export default FScreen;