import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ({ navigation }) => {
    return (
        <View>
            <ImageDetail 
                title="Hello" 
                imageSource={require('../../assets/beach.jpg')} 
                score={12}
            />
            <ImageDetail 
                title="Hello" 
                imageSource={require('../../assets/forest.jpg')} 
                score={12}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;