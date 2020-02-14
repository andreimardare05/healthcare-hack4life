import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraComp = ({ text, toDo }) => {
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
            const deviceId = await AsyncStorage.getItem('deviceId');

			if (camera !== null) {
				const photo = await camera.takePictureAsync({
					base64: true
				});

                const res = await toDo(photo.base64, deviceId);
                console.log(res, deviceId);
			}
		} catch (err) {	
			console.log(err.message);
		}
	}, 2000);

	if (hasPermission === null) {
		return <View />;
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
        // <View>
        //     <Camera 
        //         style={styles.camera}
        //         type={type} 
        //         ratio='16:9'
        //         ref={ref => setCamera(ref)}
        //     >
        //     </Camera>
        //     <Text>
        //         {text}
        //     </Text>
        // </View>
        <View style={{ flex: 1 }}>
            <Camera 
                style={{ flex: 1 }} 
                type={type}
                ratio='16:9'
                ref={ref => setCamera(ref)}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}
                >
                <TouchableOpacity
                    style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
                </View>
            </Camera>
          </View>
	);
}

const styles = StyleSheet.create({
    camera: {
        flex: 1
    }
});

export default CameraComp;